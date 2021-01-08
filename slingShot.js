class SlingShot{
    constructor(bodyA,pointB){
     var options ={
         bodyA:bodyA,
         pointB:pointB,
         length:20,
         stiffness:0.4
     }
    this.cst = Constraint.create(options)
    World.add(world,this.cst)
    }
    fly(){
    this.cst.bodyA = null
 
    }
   displaycst(){
     if(this.cst.bodyA){
    var p1 = this.cst.bodyA.position
    var p2 = this.cst.pointB;
     line(p1.x,p1.y,p2.x,p2.y)
     }
   }
 }