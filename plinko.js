class Plinko {
  constructor(x,y,r) {
    var options = {
      isStatic:true
    }
    this.x = x;
    this.y = y;
    this.r = 10;
    this.body = Bodies.circle(x,y,this.r,options);
    World.add(world, this.body);
  }
  display(){
    var posss =this.body.position;
    var angle = this.body.angle;

    push();
    translate(posss.x,posss.y);
    rotate(angle)
    noStroke();
    fill("white");
    ellipseMode(RADIUS)
    ellipse(0,0,this.r,this.r)
    pop();
  }
};
