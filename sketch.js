const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;


var engine;
var world;
var ground;
var canvasMouse;
var canvas ;
var mConstraint;
var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var sling1,sling2,sling3,sling4,sling5;
function preload(){
   

}
function setup(){
    canvas  = createCanvas(windowWidth/2,windowHeight/1.5);
    engine = Engine.create();
    world = engine.world;
    //create a mouse with html canvas element
    canvasMouse = Mouse.create(canvas.elt);
    //setting the pixel ratio of the canvas to adjust to high def screens
    canvasMouse.pixelRatio = pixelDensity();
    let options = {
        mouse: canvasMouse
    };
    mConstraint = MouseConstraint.create(engine,options);
    World.add(world,mConstraint);
    //making the prndulums and their slings
    pendulum1 = new Pendulum(100,100,"red");
    sling1 = new Sling(pendulum1.body,{x: 100 , y: 100});
    pendulum2 = new Pendulum(160,100,"green");
    sling2 = new Sling(pendulum2.body,{x:160,y:100});
    pendulum3 = new Pendulum(220,100,"yellow");
    sling3 = new Sling(pendulum3.body,{x:220,y:100});
    pendulum4 = new Pendulum(280,100,"pink");
    sling4 = new Sling(pendulum4.body,{x:280,y:100});
    pendulum5 = new Pendulum(340,100,"orange");
    sling5 = new Sling(pendulum5.body,{x:340,y:100});


   
    
}
function draw(){
    background(100);
    Engine.update(engine);
   pendulum1.display();
   sling1.display();
   pendulum2.display();
   sling2.display();
   pendulum3.display();
   sling3.display();
   pendulum4.display();
   sling4.display();
   pendulum5.display();
   sling5.display();    
   
}

/*function mouseDragged(){
    Body.setPosition(pendulum1,{x:mouseX,y:mouseY});
}*/

