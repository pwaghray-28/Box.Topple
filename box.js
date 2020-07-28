class Box{
constructor(x,y,width,height){
var options = {restitution:0.5,friction:1.0,density:0.5}
this.body = Bodies.rectangle(x,y,width,height,options)
World.add(world,this.body)
this.w  =  width
this.h =  height
}
 display(){
   var angle = this.body.angle
   var pos = this.body.position
   push ()
   translate(pos.x,pos.y)
   rotate (angle)
   rectMode(CENTER)
   rect(0,0,this.w,this.h)
   pop ()
 } 
}
