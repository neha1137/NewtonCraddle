class Ball{
    constructor(x,y){
        var options ={
            isStatic:false,
            restitution:1.0,
            friction:0,
            density:0.8,
        }
        this.body=Bodies.circle(x,y,20,options);
        World.add(world,this.body);

    }
    display(){
        push ()
        translate (this.body.position.x,this.body.position.y);
        rotate (this.body.angle);
        ellipse(0,0,20,20);
        pop ()

    }
}