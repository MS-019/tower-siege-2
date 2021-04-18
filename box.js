class Box {
  constructor(x, y, width, height) {
    var options = {
     // isStatic:true,
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.x=x;
    this.y=y;
    this.visibility = 255;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed <7.5){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke(0);
  fill("red");
    rect(0, 0, this.width, this.height);
    pop();}
    else{
world.remove(world,this.body);
push();
this.visibility = this.visibility - 5;
pop();
    }
  }
}
