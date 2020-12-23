class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
       /* this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');*/
    }

    fly(){
        this.sling.bodyA = null;
       // console.log("working");
    }

    display(){
        //image(this.sling1,200,20);
        //image(this.sling2,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(84,39,15);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            //line(pointA.x-25,pointA.y,pointB.x-10,pointB.y);

            //image(this.sling3,pointA.x-30,pointA.y-10,15,30);
        }
    }
    
}