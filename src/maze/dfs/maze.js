import {Result} from './result.js'
import {Grid} from '../grid.js'
import {Wall} from '../wall.js'

export class Maze {
  constructor(grid_num) {
    this.free = 0
    this.busy = 1
    this.grid_num = grid_num
    this.tag = new Array()
    for (let i = 0; i < grid_num; i++) {
      let tmp = new Array()
      for (let j = 0; j < grid_num; j++) {
        tmp.push(this.free)
      }
      this.tag.push(tmp)
    }
    this.H = 0
    this.V = 1
  }

  _get_wall_pos(old, current) {
    let wall = null
    if (old.x == current.x && old.y > current.y) {
      wall =  new Wall(old.x, old.y, this.H)
    } else if (old.x < current.x && old.y == current.y) {
      wall = new Wall(old.x + 1, old.y, this.V)
    } else if (old.x == current.x && old.y < current.y) {
      wall = new Wall(old.x, old.y + 1, this.H)
    } else {
      wall = new Wall(old.x, old.y, this.V)
    }
    return wall.x + "_" + wall.y + "_" + wall.d
  }

  _shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  _next(pos) {
    let result = new Array()
    if (pos.y - 1 >= 0) {
      result.push(new Grid(pos.x, pos.y - 1))
    }
    if (pos.x + 1 <= this.grid_num - 1) {
      result.push(new Grid(pos.x + 1, pos.y))
    }
    if (pos.y + 1 <= this.grid_num - 1) {
      result.push(new Grid(pos.x, pos.y + 1))
    }
    if (pos.x - 1 >= 0) {
      result.push(new Grid(pos.x - 1, pos.y))
    }
    this._shuffle(result)
    return result
  }

  _dfs(grid, wall_removed) {
    this.tag[grid.x][grid.y] = this.busy
    if (grid.x == this.grid_num - 1 && grid.y == this.grid_num - 1) {
      return new Result(grid, true)
    }
    let next_list = this._next(grid)
    for (let tmp_grid of next_list) {
      if (this.tag[tmp_grid.x][tmp_grid.y] == this.free) {
        wall_removed.push(this._get_wall_pos(grid, tmp_grid))
        let result = this._dfs(tmp_grid, wall_removed)
        if (result.finish) {
          return result
        }
      }
    }
    return new Result(null, false)
  }

  create() {
    let wall_removed = new Array()
    let s = this._dfs(new Grid(0, 0), wall_removed)
    return {state: s, wall_removed: wall_removed}
  }
}