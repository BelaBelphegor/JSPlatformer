var plateform_game = function() {
	this.c = new Coquette(this, "plateform-js-canvas", 500, 500, "#000");
	this.c.gravity = 0.2;
	this.c.friction = 0.8;
	this.c.entities.create(player, { center: {x:32, y:494}, color:"#f07"});
};

var player = function(game, settings) {
	this.c = game.c;
	for (var i in settings)
		this[i] = settings[i];
	this.size = {x:32, y:32};
	this.speed = 3;
	this.velocity_x = 0;
	this.velocity_y = 0;
	this.jumping = false;
	this.draw = function(ctx)
	{
		ctx.fillStyle = settings.color;
		ctx.fillRect(this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);
	};
	this.update = function()
	{
		if (this.c.inputter.isDown(this.c.inputter.LEFT_ARROW))
		{
			if (this.velocity_x > -this.speed)
				this.velocity_x--;
		}
		if (this.c.inputter.isDown(this.c.inputter.RIGHT_ARROW))
		{
			if (this.velocity_x < this.speed)
				this.velocity_x++;
		}
		if (this.c.inputter.isDown(this.c.inputter.UP_ARROW))
		{
			if (!this.jumping)
			{
				this.jumping = true;
				this.velocity_y = -this.speed * 2;
			}
		}
		this.velocity_x *= this.c.friction;
		this.velocity_y += this.c.gravity;

		this.center.y += this.velocity_y;
		this.center.x += this.velocity_x;
		if (this.center.x >= 500 - this.size.x / 2)
			this.center.x = 500 - this.size.x / 2;
		if (this.center.x <= 0 + this.size.x / 2)
			this.center.x = 0 + this.size.x / 2;
		if (this.center.y >= 500  - this.size.y / 2)
		{
			this.center.y = 500 - this.size.y / 2;
			this.jumping = false;
		}
		console.log(this.center.y);
		console.log(this.jumping);
	};
};

window.addEventListener('load', function() {
	new plateform_game();
});
