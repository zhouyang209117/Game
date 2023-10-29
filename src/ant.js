import './requestNextAnimationFrame.js'
import {Coord} from './coord.js'
import {Current} from './current.js'
import {RIGHT, UP} from './const.js'


var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')
var SIZE = 5
var N = 5
var x_grid = Math.floor(context.canvas.width / SIZE)
var y_grid = Math.floor(context.canvas.height / SIZE)
var init_x_grid = Math.floor(x_grid / 2)
var init_y_grid = Math.floor(y_grid / 2)
var cnt = 0

var init_d = UP
var current = new Current(new Coord(init_x_grid, init_y_grid), init_d)
var blackGrid = new Set()

function draw_grid(grid_x, grid_y) {
  context.fillRect(grid_x * SIZE, grid_y * SIZE, SIZE, SIZE)
}

function animate() {
  context.clearRect(0,0, context.canvas.width, context.canvas.height)
  for (let i = 0; i < N; i++) {
    if (blackGrid.has(current.key())) {
      blackGrid.delete(current.key())
      current = current.blackChange()
    } else {
      blackGrid.add(current.key())
      current = current.whiteChange()
    }
    cnt += 1
  }
  blackGrid.forEach((s) => {
    let arr = s.split("_")
    draw_grid(parseInt(arr[0]), parseInt(arr[1]))
  })
  document.getElementById("step").innerHTML = cnt
  requestNextAnimationFrame(animate)
}

requestNextAnimationFrame(animate)