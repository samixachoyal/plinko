class Division {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var posdiv =this.body.position;
      rectMode(CENTER);
      fill("Red");
      rect(posdiv.x, posdiv.y, this.width, this.height);
    }
  };