export class Wall {
  constructor(x, y, d) {
    this.x = x
    this.y = y
    this.d = d  //方向左上角为墙的坐标
  }
  toString() {
    return this.x + "_" + this.y + "_" + this.d
  }
}