import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const PhysicsBars = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const Engine = Matter.Engine,
          Render = Matter.Render,
          World = Matter.World,
          Bodies = Matter.Bodies,
          Mouse = Matter.Mouse,
          MouseConstraint = Matter.MouseConstraint;

    const engine = Engine.create();
    const world = engine.world;

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: 800,
        height: 600,
        wireframes: false,
        background: '#FEFDFD'
      }
    });

    // Create static boundaries with transparent borders
    const boundaries = [
      Bodies.rectangle(400, -30, 810, 60, { isStatic: true, render: { visible: false } }),   // top
      Bodies.rectangle(400, 630, 810, 60, { isStatic: true, render: { visible: false } }), // bottom
      Bodies.rectangle(830, 300, 60, 600, { isStatic: true, render: { visible: false } }), // right
      Bodies.rectangle(-30, 300, 60, 600, { isStatic: true, render: { visible: false } })    // left
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
      // Calculate the width based on text length
      const width = text.length * 8 ; // Adjust multiplier and additional width as needed
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

    const mouse = Mouse.create(render.canvas);
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

    render.mouse = mouse;

    Engine.run(engine);
    Render.run(render);

    // Custom rendering to draw text on the boxes
    Matter.Events.on(render, 'afterRender', function() {
      const context = render.context;
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

    return () => {
      World.clear(world);
      Engine.clear(engine);
      Render.stop(render);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div ref={sceneRef} className="w-full h-full"></div>
    </div>
  );
};

export default PhysicsBars;
