class Squares {
  constructor(n) {
    let sumOfSquares = 0;
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      sumOfSquares = sumOfSquares + i * i;
      sum = sum + i;
    }

    this._sum = sum;
    this._sum_of_squares = sumOfSquares;
  }

  get mySum() {
    return this._sum;
  }

  get sumOfSquares() {
    return this._sum_of_squares;
  }

  get squareOfSum() {
    return this.mySum * this.mySum;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}

const squares = new Squares(5);
console.log(squares.difference);
