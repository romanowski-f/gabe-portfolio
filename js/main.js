var layer = $('#moveable');

layer.wmiddle = layer.width() / 2;
layer.hmiddle = layer.height() / 2;

var mouse = {
	x: undefined,
	y: undefined
}

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

// window.addEventListener('mousemove', function(event) {
// 	mouse.x = event.x;
// 	mouse.y = event.y;

// 	layer.css('left', mouse.x - layer.wmiddle);
// 	layer.css('top', mouse.y - layer.hmiddle);
// })

