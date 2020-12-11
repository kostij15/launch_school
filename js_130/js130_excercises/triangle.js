"use strict";

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  _triangleCheck() {
    let twoSidesGreaterThanOne = (this.side1 + this.side2 >= this.side3) && (this.side1 + this.side3 >= this.side2) && (this.side2 + this.side3 >= this.side1);
    let allGreaterThanZero = (this.side1 > 0) && (this.side2 > 0) && (this.side3 > 0);
    return twoSidesGreaterThanOne && allGreaterThanZero;
  }

  _equilateralCheck() {
    return (this.side1 === this.side2) && (this.side1 === this.side3);
  }

  _isocolesCheck() {
    let sideOneAndsideTwo = this.side1 === this.side2;
    let sideOneAndsideThree = this.side1 === this.side3;
    let sideTwoAndsideThree = this.side2 === this.side3;

    return sideOneAndsideThree || sideOneAndsideTwo || sideTwoAndsideThree;
  }

  _scaleneCheck() {
    return (this.side1 !== this.side2) && (this.side1 !== this.side3) && (this.side2 !== this.side3);
  }

  kind() {
    if (!this._triangleCheck()) {
      throw new TypeError("Not a triangle");
    }

    if (this._equilateralCheck()) {
      return "equilateral";
    } else if (this._isocolesCheck()) {
      return "isosceles";
    } else {
      return 'scalene';
    }
  }
}

module.exports = Triangle;