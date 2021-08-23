class Base{
    constructor(x,y,width,height){
        var options ={
            setStatic : true
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.heigth = height;
        this.body = Bodies.rectangle(x,y,width,height, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        rectMode(CENTER);
        noStroke();
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}