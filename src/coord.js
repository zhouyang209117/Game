export class Coord {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  key() {
    return this.x + "_" + this.y
  }
}