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

    const width = sceneRef.current.clientWidth;
    const height = sceneRef.current.clientHeight;

    renderRef.current = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: width,
        height: height,
        wireframes: false,
        background: '#f0f0f0'
      }
    });

    const ground = Bodies.rectangle(width / 2, height, width, 60, { isStatic: true });
    World.add(world, ground);

    const bar1 = Bodies.rectangle(400, 200, 100, 30, { restitution: 0.5 });
    const bar2 = Bodies.rectangle(450, 50, 150, 30, { restitution: 0.5 });
    const bar3 = Bodies.rectangle(300, 100, 200, 30, { restitution: 0.5 });
    
    World.add(world, [bar1, bar2, bar3]);

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

    Engine.run(engine);
    Render.run(renderRef.current);

    // Resize observer to handle window resize
    const resizeObserver = new ResizeObserver(() => {
      const width = sceneRef.current.clientWidth;
      const height = sceneRef.current.clientHeight;
      renderRef.current.bounds.max.x = width;
      renderRef.current.bounds.max.y = height;
      renderRef.current.options.width = width;
      renderRef.current.options.height = height;
      renderRef.current.canvas.width = width;
      renderRef.current.canvas.height = height;

      // Update ground position and size
      Matter.Body.setPosition(ground, { x: width / 2, y: height });
      Matter.Body.setVertices(ground, Matter.Vertices.fromPath(`L 0 0 L ${width} 0 L ${width} 60 L 0 60`));
    });

    resizeObserver.observe(sceneRef.current);

    return () => {
      resizeObserver.disconnect();
      World.clear(world);
      Engine.clear(engine);
      Render.stop(renderRef.current);
      renderRef.current.canvas.remove();
      renderRef.current.textures = {};
    };
  }, []);

  return (
    <div className="h-screen">
      <div ref={sceneRef} className="w-full h-full"></div>
    </div>
  );
};

export default PhysicsBars;
