
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(400,250)
    bob2 = new Bob(425,250)
	bob3 =new Bob(450,250)
	bob4 =new Bob(475,250)
	bob5 =new Bob(500,250)
    roof1=new Roof(500,100,100,20)

	var options={
		bodyA : bob1.body,
		bodyB : rope.body,
		stiffnesss : 0.04,
		length : 10
	}
	var rope1 = Constraint.create(options)
	World.add(world.rope1)
	strokeWeight(3);
	line(roof.body.x,roof.body.y,rope.body.x,rope.body.y)
	rope1 = new Rope(bobObject1.body,roof1.body,-bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  background(255);
  Engine.update()
 bob1.displayBob()
 bob2.displayBob()
 bob3.displayBob()
 bob4.displayBob()
 bob5.displayBob()
 roof1.display()
  rope1.display()
  
 
}



