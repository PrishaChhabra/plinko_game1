class Plinkos{
    constructor(x, y, r) {
      var options = {
          restitution:0.3,
          friction:0,
          density:1.2,
          isStatic:true
          

      }
      this.x=x;
     this.y=y;
      this.r=r;
      this.body = Bodies.circle(this.x, this.y,this.r/2, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      push();
      
      //translate(pos.x, pos.y);
     
      ellipseMode(CENTER);
       
      
      fill("white")
      ellipse(pos.x,pos.y,this.r,this.r)
      pop();
   
    }
  };