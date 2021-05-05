class Snow {
    constructor(x, y,r) {

        var options ={
            restitution:0.5,
            frictionAir:0.1
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.image=loadImage('snow4.webp')
        World.add(world, this.body);

    }
    display() {

        var position = this.body.position;
        var angle = this.body.angle;

        push();
        translate(position.x, position.y);
        rotate(angle);
        noStroke();
        imageMode(RADIUS);
        image(this.image,0, 0, this.r,this.r);
        pop();
    }

};