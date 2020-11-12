class Paper
{
    constructor(x,y,r)
    {
        var options=
        {
            isStatic : false,
            restitution : 0.3,
            friction : 1.0,
            density : 1.5
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r);
        World.add(world,this.body);
    }
    display()
    {
        var ppos=this.body.position;
        push();
        translate(ppos.x,ppos.y);
        fill("red");
        ellipseMode(CENTER);
        rect(0,0,this.r,this.r);
        pop();
    }
}