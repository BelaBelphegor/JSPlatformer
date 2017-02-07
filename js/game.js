var plateform_game = function() {
	this.c = new Coquette(this, "plateform-js-canvas", 500, 500, "#000");
	this.c.entities.create(player, { center: {x:32, y:484}, color:"#f07"});
};

var player = function(game, settings) {
	this.c = game.c;
	for (var i in settings)
		this[i] = settings[i];
	this.size = {x:32, y:32};
	this.speed = 3;
	this.velocity_x = 0;
	this.velocity_y = 0;
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
			this.center.x += this.velocity_x;
		}
		if (this.c.inputter.isDown(this.c.inputter.RIGHT_ARROW))
		{
			if (this.velocity_x < this.speed)
				this.velocity_x++;
			this.center.x += this.velocity_x;
		}
		if (this.center.x >= 500 - this.size.x / 2)
			this.center.x = 500 - this.size.x / 2;
		if (this.center.x <= 0 + this.size.x / 2)
			this.center.x = 0 + this.size.x / 2;
	};
};

window.addEventListener('load', function() {
	new plateform_game();
});
