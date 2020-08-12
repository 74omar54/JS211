'use strict'

const assert = require('assert');

let areaOfCircle = (radius) => {
    return radius * radius * Math.PI;

}
let areaOfRectangle = (height, width) => {
    return height * width;
}

describe("square test", function(){
    it ("should return 1 for a unit square", function (){
        assert.equal(areaOfRectangle(1,1), 1);
    });

    it('should handle recatanlges', function(){
        assert.equal;(areaOfRectangle(1, 2), 2);
    });

})
describe('circle test', function(){
    it ('should ')
})