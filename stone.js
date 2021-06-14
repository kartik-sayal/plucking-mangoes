class stone{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.3
        }
		this.x=x;
		this.y=y;
        this.r=r;
        this.width = 50;
        this.height = 50;
        this.image = loadImage("stone.png");
		this.body=Bodies.circle(x, y, this.r, options);
		World.add(world, this.body);
	}

	display()
	{
		var stonepos=this.body.position;	
		push()
		translate(stonepos.x, stonepos.y);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*1, this.r*1)
		pop()
 }
}