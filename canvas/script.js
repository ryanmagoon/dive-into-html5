/* making the cartesian grid */

var c_canvas = document.getElementById("c")
// all the drawing functions live in the context
var context = c_canvas.getContext("2d")

// mapping out the lines
for (var x = 0.5; x < 500; x += 10) {
    context.moveTo(x, 0)
    context.lineTo(x, 375)
}

for (var y = 0.5; y < 375; y += 10) {
    context.moveTo(0, y)
    context.lineTo(500, y)
}

// applying stroke to the the lines
// because this is a stroke and not a fill, we had to
// make the lines connect at half-coordinate increments so that the
// line would be 1 pixel wide and not get split over into 2 pixels
context.strokeStyle = "#eee"
context.stroke()

context.beginPath()
context.moveTo(0, 40)

// line break for the plane identifier
context.lineTo(240, 40)
context.moveTo(260, 40)
context.lineTo(500, 40)

// drawing the arrow
context.moveTo(495, 35)
context.lineTo(500, 40)
context.lineTo(495, 45)

context.moveTo(60, 0)
context.lineTo(60, 153)
context.moveTo(60, 173)
context.lineTo(60, 375)
context.moveTo(65, 370)
context.lineTo(60, 375)
context.lineTo(55, 370)

context.strokeStyle = "#000"
context.stroke()

context.font = "bold 12px sans-serif"
context.fillText("x", 248, 43)
context.fillText("y", 58, 165)

// from the top left of the text's bounding box
context.textBaseline = "top"
context.fillText("( 0 , 0 )", 8, 5)

// from the bottom right of the text's bounding box
context.textAlign = "right"
context.textBaseline = "bottom"
context.fillText("( 500 , 375 )", 492, 370)

// drawing the dots as rectangles because I don't know how to draw circles yet.
context.fillRect(0, 0, 3, 3)
context.fillRect(497, 372, 3, 3)

/* gradient demo */

var d_canvas = document.getElementById("d")
context = d_canvas.getContext("2d")

// create the gradient style
// the function paints along a line from (x0, y0) to (x1, y1)
var my_gradient = context.createLinearGradient(0, 0, 300, 0)
my_gradient.addColorStop(0, "black")
my_gradient.addColorStop(1, "white")

// defining the gradient doesn't draw anything on the canvas
// to do that, we assign the gradient to the style and draw 
// it like any other rectangle.
// fill in the rectangle with my gradient
context.fillStyle = my_gradient
context.fillRect(0, 0, 300, 225)

window.onload = function () {
    let canvas = document.getElementById("e")
    let context = canvas.getContext("2d")
    let family = document.getElementById("family")
    context.drawImage(family, -180, -65)
}