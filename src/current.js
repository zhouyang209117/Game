import {UP} from './const.js'
import {RIGHT} from './const.js'
import {DOWN} from './const.js'
import {LEFT} from './const.js'
import {Coord} from './coord.js'

export class Current {
  constructor(pos, direction) {
    this.coord = pos
    this.direction = direction
  }

  key() {
    return this.coord.x + "_" + this.coord.y
  }

  blackChange() {
    let direction = undefined
    let current = undefined
    if (this.direction == UP) {
      direction = RIGHT
      current = new Current(new Coord(this.coord.x + 1, this.coord.y), direction)
    } else if (this.direction == RIGHT) {
      direction = DOWN
      current = new Current(new Coord(this.coord.x, this.coord.y + 1), direction)
    } else if (this.direction == DOWN) {
      direction = LEFT
      current = new Current(new Coord(this.coord.x - 1, this.coord.y), direction)
    } else {
      direction = UP
      current = new Current(new Coord(this.coord.x, this.coord.y - 1), direction)
    }
    return current
  }

  whiteChange() {
    let direction = undefined
    let current = undefined
    if (this.direction == UP) {
      direction = LEFT
      current = new Current(new Coord(this.coord.x - 1, this.coord.y), direction)
    } else if (this.direction == RIGHT) {
      direction = UP
      current = new Current(new Coord(this.coord.x, this.coord.y - 1), direction)
    } else if (this.direction == DOWN) {
      direction = RIGHT
      current = new Current(new Coord(this.coord.x + 1, this.coord.y), direction)
    } else {
      direction = DOWN
      current = new Current(new Coord(this.coord.x, this.coord.y + 1), direction)
    }
    return current
  }
}