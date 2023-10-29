
export class Circle {
    constructor(o, r) {
        this.o = o
        this.r = r
    }
    draw(context) {
        context.beginPath()
        context.arc(this.o.x, this.o.y, this.r, 2 * Math.PI, false)
        context.stroke()
    }
}
