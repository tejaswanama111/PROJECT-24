class PaperObject {  
        constructor(x,y){
           var options = {

            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
           }
           
           this.body = Matter.Bodies.circle(x,y,55,options);
           this.radius = 55;
           World.add(world, this.body);
        }
        
        display(){
           var pos = this.body.position;
           var angle = this.body.angle;
           push();
           translate(pos.x, pos.y);
           rotate(angle);
           fill("pink");
           ellipse(0,0,this.radius);
           pop();
        }
}