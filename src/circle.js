
export class Circle {
    draw(context, cx, cy, r) {
        context.beginPath()
        context.arc(cx, cy, r, 2 * Math.PI, false)
        context.stroke()
    }
}
