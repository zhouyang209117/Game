export class Grid {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  toString() {
    return this.x + "_" + this.y
  }
}