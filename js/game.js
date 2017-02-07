var GOLDEN_RATIO = 1.61803398875;

var plateform-js-game = function()
{
	this.c = new Coquette(this, "plateform-js-canvas", 500, 500 / GOLDEN_RATIO, "#000");

};

plateform-js-game.prototype = {
	update: function()
	{
		var view_size = this.c.renderer.getViewSize();
		var view_center = this.c.renderer.getViewCenter();
	}
}

window.addEventListener('load', function() {
	new Game();
});
