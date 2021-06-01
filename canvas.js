var depth = [];
var time = [];
var count = 0;

ws.onmessage = function(event)
{
    recv = JSON.parse(event.data);
    console.log(recv)
    drawCanvas(recv, time, depth);
}

function drawCanvas(recv, time, depth)
{
    let graph = document.getElementById("canvas");
    c = graph.getContext("2d");
    const size = 15;
	c.beginPath();
	c.lineWidth = 3;
	c.strokeStyle = "white";

	depth.push(recv.depth);
	time.push(recv.time);

	for (var column = 0; column < 40; column++)
		for (var row = 0; row < 20; row++) {
		{
			var x = column * size;
			var y = row * size;
			c.rect(x, y, size, size);
			c.fillStyle="black";
			c.fill();
			c.stroke();
			if (column > 25)
			{
				c.beginPath();
				c.fillStyle="brown";
				c.fillRect(x, y, size, size);
			}
			if (row < depth[count] && column > 25)
			{
				c.beginPath();
				c.fillStyle="#ADD8E6";
				c.fillRect(x,y, size, size);
			}
		}
	}
	count = count + 1;
	c.closePath();
}
