let graph = document.getElementById("canvas");
c = graph.getContext("2d");
const size = 15;

function drawCanvas()
{
	c.beginPath();
	c.lineWidth = 3;
	c.strokeStyle = "white";

	for (var row2 = 0; row2 < 20; row2++) {
		for (var column2 = 0; column2 < 40; column2++) {
			var x2 = column2 * size;
			var y2 = row2 * size;
			c.rect(x2, y2, size, size);
			c.fillStyle="black";
			c.fill();
			c.stroke();
			if (column2 > 25)
			{
				c.beginPath();
				c.fillStyle="brown";
				c.fillRect(x2, y2, size, size);
			}
			if (row2 < 5 && column2 > 25)
			{
				c.beginPath();
				c.fillStyle="#ADD8E6";
				c.fillRect(x2,y2, size, size);
			}
		}
	}
	c.closePath();
}
drawCanvas();
