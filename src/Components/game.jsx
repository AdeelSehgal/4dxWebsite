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
        background: '#f0f0f0'
      }
    });

    const ground = Bodies.rectangle(400, 600, 810, 60, { isStatic: true });
    World.add(world, ground);

    const bar1 = Bodies.rectangle(400, 200, 100, 30, { restitution: 0.5 });
    const bar2 = Bodies.rectangle(450, 50, 150, 30, { restitution: 0.5 });
    const bar3 = Bodies.rectangle(300, 100, 200, 30, { restitution: 0.5 });
    
    World.add(world, [bar1, bar2, bar3]);

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

    return () => {
      World.clear(world);
      Engine.clear(engine);
      Render.stop(render);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <div className=" h-screen">
      <div ref={sceneRef} className="w-full h-full"></div>
    </div>
  );
};

export default PhysicsBars;
