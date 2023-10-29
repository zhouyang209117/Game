import {test, expect} from "vitest";
import {Calc} from '../src/calc'


// var assert = require('assert');
// describe('Array', function () {
//     describe('#indexOf()', function () {
//         it('should return -1 when the value is not present', function () {
//             assert.equal([1, 2, 3].indexOf(4), -1);
//         });
//     });
// });


test("first step", ()=> {
    let cale = new Calc()
    expect(cale.add(1, 3)).toBe(4)
})

test("first step1", ()=> {
    let cale = new Calc()
    expect(cale.add(2, 3)).toBe(5)
})
