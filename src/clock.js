import './requestNextAnimationFrame.js'
import {Line} from './clock_line.js'
import {Circle} from './circle.js'

var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')

var r = context.canvas.width / 2
var c_x = context.canvas.width / 2
var c_y = context.canvas.height / 2
var r_num = r * 0.9
var hour_hand_r = r * 0.3
var minute_hand_r = r * 0.6
var second_hand_r = r * 0.9


var second_hand = new Line()
var minute_hand = new Line()
var hour_hand = new Line()
var c = new Circle()
var font_size = 40

function drawText(ctx, text, x, y) {
    ctx.font = font_size + "px Monospace"
    // ctx.font = font_size + "px"
    ctx.fillText(text, x, y);
}

function animate() {
    context.clearRect(0,0, context.canvas.width, context.canvas.height)
    let d = new Date()
    let current_second = d.getSeconds()
    let current_minute = d.getMinutes()
    let current_hour = d.getHours() % 12
    let angle_second = Math.PI / 30 * (-current_second + 15)
    let angle_minute = Math.PI / 30 * (-(current_minute + current_second / 60) + 15)
    let angle_hour = Math.PI  / 6 * (-(current_hour + current_minute / 60) + 3)
    let second_x = second_hand_r * Math.cos(angle_second)
    let second_y = second_hand_r * Math.sin(angle_second)
    let minute_x = minute_hand_r * Math.cos(angle_minute)
    let minute_y = minute_hand_r * Math.sin(angle_minute)
    let hour_x = hour_hand_r * Math.cos(angle_hour)
    let hour_y = hour_hand_r * Math.sin(angle_hour)
    second_hand.draw(context, c_x, c_y, c_x + second_x, c_y - second_y)
    minute_hand.draw(context, c_x, c_y, c_x + minute_x, c_y - minute_y)
    minute_hand.draw(context, c_x, c_y, c_x + hour_x, c_y - hour_y)
    c.draw(context, c_x, c_y, r)
    for (let i = 0; i < 12; i++) {
        let c_label = new Circle()
        let angle_label = Math.PI  / 6 * (-i + 3)
        let num_x = r * Math.cos(angle_label)
        let num_y = r * Math.sin(angle_label)
        c_label.draw(context, c_x + num_x, c_y - num_y, 4)
    }

    for (let i = 0; i < 12; i++) {
        let angle_num = Math.PI  / 6 * (-i + 3)
        let num_x = r_num * Math.cos(angle_num)
        let num_y = r_num * Math.sin(angle_num)
        let text = i == 0 ? "" + 12 : (i) + ""
        let text_x = text.length
        drawText(context, i == 0 ? "" + 12 : (i) + "", c_x + num_x - font_size * text_x / 2, c_y - num_y + font_size / 2)
    }
    // drawText(context, "中国", 0, 0 + font_size)
    requestNextAnimationFrame(animate)
}

requestNextAnimationFrame(animate)
