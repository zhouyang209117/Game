import './requestNextAnimationFrame.js'
import {Line} from './line.js'
import {Point} from './point.js'


var canvas1 = document.getElementById('canvas1')
var context1 = canvas1.getContext('2d')

var canvas2 = document.getElementById('canvas2')
var context2 = canvas2.getContext('2d')


const N = 100
const step = 2 * Math.PI / 720
const w = context1.canvas.width
const h = context1.canvas.height
const K = 4

var current = 0
var last_p = new Point(2 * N + w / 2, h / 2)


function draw1(angle) {
  let x_math = (Math.cos(angle) + Math.cos(K * angle)) * N
  let y_math = (Math.sin(angle) + Math.sin(K * angle)) * N
  let x_canvas = x_math + w / 2
  let y_canvas = -y_math + h / 2
  let current_p = new Point(x_canvas, y_canvas)
  let line = new Line(current_p, last_p)
  line.draw(context1)
  last_p = current_p
}
function draw2(angle) {
  context2.clearRect(0,0, w, h)
  let x1_math = Math.cos(angle) * N
  let y1_math = Math.sin(angle) * N
  let x1_canvas = x1_math + w / 2
  let y1_canvas = -y1_math + h / 2
  let currentLine = new Line(new Point(w / 2, h / 2), new Point(x1_canvas, y1_canvas))
  currentLine.draw(context2)
  let x2_math = (Math.cos(angle) + Math.cos(K * angle)) * N
  let y2_math = (Math.sin(angle) + Math.sin(K * angle)) * N
  let x2_canvas = x2_math + w / 2
  let y2_canvas = -y2_math + h / 2
  let currentLine1 = new Line(new Point(x1_canvas, y1_canvas), new Point(x2_canvas, y2_canvas))
  currentLine1.draw(context2)
}

function animate() {
  draw1(current)
  draw2(current)
  current += step
  requestNextAnimationFrame(animate)
}

requestNextAnimationFrame(animate)
