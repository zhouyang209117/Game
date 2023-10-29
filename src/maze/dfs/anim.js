import '../../requestNextAnimationFrame.js'
import {Maze} from './maze.js'

var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');
var point_x = 0
var t_start = new Date().getTime()
var N = 100
var maze = new Maze(N)
var result = maze.create()
var type = 1

function drawLine(x1, y1, x2, y2) {
    context.beginPath()
    context.moveTo(x1, y1)
    context.lineTo(x2, y2)
    context.stroke()
}

function get_key(i, j, d) {
    return i + "_" + j + "_" + d
}

function draw_init() {
    let size = context.canvas.width / maze.grid_num
    for (let i = 0; i < maze.grid_num; i++) {
        for (let j = 0; j < maze.grid_num; j++) {
            drawLine(i * size, j * size, (i + 1) * size, j * size)
            drawLine(i * size, j * size, i * size, (j + 1) * size)
        }
    }
}

function draw_maze() {
    let escape = new Date().getTime() - t_start
    let t = 5000
    let ratio = 1
    if (escape < t) {
        ratio = escape / t
    }
    let current_size = Math.floor(result.wall_removed.length * ratio)
    let new_array = result.wall_removed.slice(0, current_size)
    let removed_wall_set = new Set(new_array)
    let size = context.canvas.width / maze.grid_num
    for (let i = 0; i < maze.grid_num; i++) {
        for (let j = 0; j < maze.grid_num; j++) {
            if (!removed_wall_set.has(get_key(i, j, maze.H))) {
                drawLine(i * size, j * size, (i + 1) * size, j * size)
            }
            if (!removed_wall_set.has(get_key(i, j, maze.V))) {
                drawLine(i * size, j * size, i * size, (j + 1) * size)
            }
        }
    }

}


function animate() {
    context.clearRect(0,0, canvas.width,canvas.height)
    if (type == 1) {
        draw_init()
    } else {
        draw_maze()
    }
    requestNextAnimationFrame(animate)
}

var btn_start = document.getElementById('start')
var btn_init = document.getElementById('init')
btn_start.onclick = function(){
    maze = new Maze(N)
    result = maze.create()
    t_start = new Date().getTime()
    type = 2
    console.log("aaa")
}
btn_init.onclick = function(){
    type = 1
}

requestNextAnimationFrame(animate)