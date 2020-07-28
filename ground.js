class Ground{
constructor(x,y,width,height){
var options2 = {isStatic:true}
this.body = Bodies.rectangle(x,y,width,height,options2)
World.add(world,this.body)
this.w = width
this.h = height
}

display(){
var pos2 = this.body.position
rectMode(CENTER)
rect(pos2.x,pos2.y,this.w,this.h)


}




}