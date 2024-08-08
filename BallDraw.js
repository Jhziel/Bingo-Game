class BallDraw {
  constructor() {
    this.ballDrawns = []; // This will hold the drawn numbers
  }

  drawBall() {
    let number = this.generateUniqueRandomNumber();
    this.ballDrawns.push(number);
    return number;
  }

  generateUniqueRandomNumber() {
    let number;
    do {
      number = Math.floor(Math.random() * 75) + 1;
    } while (this.ballDrawns.includes(number));
    return number;
  }

  markCard(bingoCard) {
    const lastNumber = this.ballDrawns[this.ballDrawns.length - 1];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (bingoCard.matrix[j][i] === lastNumber.toString()) {
          // Change background color (assuming HTML output)
          bingoCard.matrix[j][
            i
          ] = `<div style="background-color: yellow">${lastNumber}</div>`;
          return true;
        }
      }
    }
    return false; // Number not found in the card
  }
}
