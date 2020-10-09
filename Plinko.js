class Plinko {
    constructor(x,y) {
      var options = {
          'isStatic':true,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.y = y;
      this.x = x;
      this.r = 10;

      this.body = Bodies.circle(this.x,this.y,this.r/2, options);
      
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
        fill("white");
        ellipse(pos.x, pos.y, this.r, this.r);
    }
  }