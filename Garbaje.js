class Garbage{
    constructor(x,y,width,height){
        var options={
            friction:0,
            restitution:0,
             density:0.3
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
        this.height=height;
        this.width=width;
        this.image=loadImage("dustbingreen.png")
        
    }
    display(){
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y)
        fill("white");
        imageMode(CENTER)
       image(this.image,0,0,this.width,this.height)
        pop()
    }
}