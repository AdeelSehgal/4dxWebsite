import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const PhysicsBars = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(Matter.Engine.create());
  const renderRef = useRef(null);

  useEffect(() => {
    const Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;

    const engine = engineRef.current;
    const world = engine.world;

    renderRef.current = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: 800,
        height: 420,
        wireframes: false,
        background: '#FEFDFD'
      }
    });

    // Create static boundaries with transparent borders
    const boundaries = [
      Bodies.rectangle(400, -30, 810, 60, { isStatic: true, render: { visible: false } }),   // top
      Bodies.rectangle(400, 450, 810, 60, { isStatic: true, render: { visible: false } }), // bottom
      Bodies.rectangle(830, 210, 60, 420, { isStatic: true, render: { visible: false } }), // right
      Bodies.rectangle(-30, 210, 60, 420, { isStatic: true, render: { visible: false } })    // left
    ];
    World.add(world, boundaries);

    // Create 6 boxes
    const boxes = [];
    const texts = [
      'No Scalable', 'Limited Availibility', 'Slow Delivery',
      'Poor System and Processes', 'Limited Skill Set', 'Require Micromanagment','Limited Resources'
    ];

    texts.forEach((text, index) => {
      // Calculate the width based on text length
      const width = text.length * 8; // Adjust multiplier and additional width as needed
      const box = Bodies.rectangle(100 + index * 70, 100 + index * 30, width, 40, {
        restitution: 0.5,
        chamfer: { radius: 20 }, // Making boxes rounded
        render: {
          fillStyle: ['#FF7700', '#c9ff00', '#45F919', '#144FF8', '#C9D3EE', '#AD1CFF'][index % 6]
        }
      });
      boxes.push(box);
    });

    World.add(world, boxes);

    const mouse = Mouse.create(renderRef.current.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

    World.add(world, mouseConstraint);

    renderRef.current.mouse = mouse;

    // Custom rendering to draw text on the boxes
    Matter.Events.on(renderRef.current, 'afterRender', function () {
      const context = renderRef.current.context;
      context.font = '14px Arial';
      context.fillStyle = '#000000';
      context.textAlign = 'center';

      boxes.forEach((box, index) => {
        const { x, y } = box.position;
        const angle = box.angle;

        context.save();
        context.translate(x, y);
        context.rotate(angle);
        context.fillText(texts[index], 0, 6); // Adjusted y position to better center the text
        context.restore();
      });
    });

    // Handle scrolling while interacting with Matter.js canvas
    const handleScroll = (event) => {
      if (event.target === renderRef.current.canvas) {
        window.scrollBy(0, event.deltaY);
      }
    };

    window.addEventListener('wheel', handleScroll);

    // Intersection Observer to start engine when canvas is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            Engine.run(engine);
            Render.run(renderRef.current);
          }
        });
      },
      {
        root: null,
        threshold: 0.1
      }
    );

    if (sceneRef.current) {
      observer.observe(sceneRef.current);
    }

    return () => {
      World.clear(world);
      Engine.clear(engine);
      Render.stop(renderRef.current);
      renderRef.current.canvas.remove();
      renderRef.current.textures = {};

      window.removeEventListener('wheel', handleScroll);

      if (sceneRef.current) {
        observer.unobserve(sceneRef.current);
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center ">
      <div ref={sceneRef} className="w-full h-[420px]"></div>
    </div>
  );
};

export default PhysicsBars;
