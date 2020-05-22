class Ground{
    constructor(){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(width/2,height-10,width,10,options);
        this.width = width;
        this.height = 10;
        World.add(world,this.body);
    }
    display(){
        fill("red");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}