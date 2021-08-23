const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground1, ground2;
var bridge;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

}

function draw() {
  background(51);
  Engine.update(engine);

  ground1 = new Base(25, 650, 350, 400);
  ground2 = new Base(1890, 650, 350, 400);
  bridge = new Bridge(25, {x : 25, y : 60});

  Matter.Composite.add(bridge.Body, jointPoint);
  jointLink = new Link(bridge, jointPoint);

  ground1.display();
  ground2.display();
  connect.show();

}
