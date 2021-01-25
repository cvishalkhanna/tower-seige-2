const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function setup() {
	createCanvas(900, 900);


	engine = Engine.create();
    world = engine.world;
    ground=new Ground(450,870,900,20);
    stand=new Ground(500,800,300,20);
   box1=new Box(380,790,50,50);
   box2=new Box(430,790,50,50);
   box3=new Box(480,790,50,50);
   box4=new Box(530,790,50,50);
   box11=new Box(580,790,50,50);
   box12=new Box(630,790,50,50);
   box5=new Box(380,740,50,50);
   box6=new Box(430,740,50,50);
   box9=new Box(580,740,50,50);
   box10=new Box(630,740,50,50);
   box7=new Box(480,740,50,50);
   box8=new Box(530,740,50,50);

    polygon1=new Polygon(100,750);
    chain=new Chain(polygon1.body,{x:100,y:750});
}
function draw(){
    Engine.update(engine);
    background("green");
    ground.display();
    stand.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
    polygon1.display();
   chain.display(); 
}
function mouseReleased(){
chain.fly();
}
function mouseDragged(){
   Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
}