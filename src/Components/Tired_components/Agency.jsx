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

    const resizeCanvas = () => {
      const width = sceneRef.current.clientWidth;
      const height = sceneRef.current.clientHeight;

      if (renderRef.current) {
        renderRef.current.bounds.max.x = width;
        renderRef.current.bounds.max.y = height;
        renderRef.current.options.width = width;
        renderRef.current.options.height = height;
        renderRef.current.canvas.width = width;
        renderRef.current.canvas.height = height;

        // Update boundaries
        Matter.Body.setPosition(boundaries[0], { x: width / 2, y: -30 }); // top
        Matter.Body.setPosition(boundaries[1], { x: width / 2, y: height + 30 }); // bottom
        Matter.Body.setPosition(boundaries[2], { x: width + 30, y: height / 2 }); // right
        Matter.Body.setPosition(boundaries[3], { x: -30, y: height / 2 }); // left

        Matter.Body.setVertices(boundaries[0], Matter.Vertices.fromPath(`L 0 0 L ${width} 0 L ${width} 60 L 0 60`)); // top
        Matter.Body.setVertices(boundaries[1], Matter.Vertices.fromPath(`L 0 0 L ${width} 0 L ${width} 60 L 0 60`)); // bottom
        Matter.Body.setVertices(boundaries[2], Matter.Vertices.fromPath(`L 0 0 L 60 0 L 60 ${height} L 0 ${height}`)); // right
        Matter.Body.setVertices(boundaries[3], Matter.Vertices.fromPath(`L 0 0 L 60 0 L 60 ${height} L 0 ${height}`)); // left
      }
    };

    renderRef.current = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: sceneRef.current.clientWidth,
        height: sceneRef.current.clientHeight,
        wireframes: false,
        background: '#FEFDFD'
      }
    });

    // Create static boundaries with transparent borders
    const boundaries = [
      Bodies.rectangle(sceneRef.current.clientWidth / 2, -30, sceneRef.current.clientWidth + 60, 60, { isStatic: true, render: { visible: false } }), // top
      Bodies.rectangle(sceneRef.current.clientWidth / 2, sceneRef.current.clientHeight + 30, sceneRef.current.clientWidth + 60, 60, { isStatic: true, render: { visible: false } }), // bottom
      Bodies.rectangle(sceneRef.current.clientWidth + 30, sceneRef.current.clientHeight / 2, 60, sceneRef.current.clientHeight + 60, { isStatic: true, render: { visible: false } }), // right
      Bodies.rectangle(-30, sceneRef.current.clientHeight / 2, 60, sceneRef.current.clientHeight + 60, { isStatic: true, render: { visible: false } }) // left
    ];
    World.add(world, boundaries);

    // Create 9 boxes
    const boxes = [];
    const texts = [
      'Lack of personality & attention', 'Slow decision-making', 'Inconsistent team members',
      'Strict contracts and scopes', 'Stiff workflow and processes', 'Lackluster delivery',
      'High overhead costs', 'Limited transparency', 'Cookie-cutter solutions'
    ];

    texts.forEach((text, index) => {
      const width = text.length * 8;
      const box = Bodies.rectangle(100 + index * 70, 100 + index * 30, width, 40, {
        restitution: 0.5,
        chamfer: { radius: 20 },
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
        context.fillText(texts[index], 0, 6);
        context.restore();
      });
    });

    const handleScroll = (event) => {
      if (event.target === renderRef.current.canvas) {
        window.scrollBy(0, event.deltaY);
      }
    };

    window.addEventListener('wheel', handleScroll);

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

    window.addEventListener('resize', resizeCanvas);

    return () => {
      World.clear(world);
      Engine.clear(engine);
      Render.stop(renderRef.current);
      renderRef.current.canvas.remove();
      renderRef.current.textures = {};

      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('resize', resizeCanvas);

      if (sceneRef.current) {
        observer.unobserve(sceneRef.current);
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-[420px]">
      <div ref={sceneRef} className="w-full h-full"></div>
    </div>
  );
};

export default PhysicsBars;
