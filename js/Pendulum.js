class Pendulum{
    constructor(x,y,colour){
        var opts = {
            restitution : 1,
            friction: 0,
            frictionAir: 0.0,
            slop: 1,
            intertia: Infinity
        };
        this.body = Bodies.rectangle(x,y,40,40,opts);
        this.x = x ;
        this.y =  y ;
        this.colour = colour;
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.colour)  ;
        ellipse(0,0,60,60);
        pop();
    }
}