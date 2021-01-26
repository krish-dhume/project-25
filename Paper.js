class Paper{
    constructor(x,y,width,height){
        var options={
            friction:0,
            restitution:0.2,
            density:0.2
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
        this.height=height;
        this.width=width;
        this.image=loadImage("paper.png");
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop()
    }
}