class Roof{
  constructor(x,y,width,height){
  var options = {
      isStatic : true,
      restitution: 0.4,
      friction : 0.6,
      density : 1.1
  }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width
    this.height = height

   World.add(world,this.body);
 }
 display(){
  var pos =this.body.position;
  rectMode(CENTER);
  fill("brown");
  rect(pos.x, pos.y, this.width, this.height);
}
}