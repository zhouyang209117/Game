export class Line {
    constructor(p1, p2) {
        this.p1 = p1
        this.p2 = p2
    }

    draw(context) {
        context.beginPath()
        context.moveTo(this.p1.x, this.p1.y)
        context.lineTo(this.p2.x, this.p2.y)
        context.stroke()
    }
}
