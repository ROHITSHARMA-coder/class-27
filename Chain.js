class Chain{
    constructor(bodyA,bodyB){
        var prop={
            bodyA:bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length:10
        }
    
        this.chain=Constraint.create(prop);
        World.add(world,this.chain);
    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        
    }
}


