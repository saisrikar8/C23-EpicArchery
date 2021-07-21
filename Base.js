class Base{
  constructor(x,y, width, height, comp){
    var options = {
      isStatic: true
    };
    this.body = Bodies.rectangle(x,y,width, height, options);
    this.width = width;
    this.height = height;
    if (comp){
      this.image = loadImage("./assets/base2.png");
    }
    else{
      this.image = loadImage("./assets/base1.png");
    }

    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}