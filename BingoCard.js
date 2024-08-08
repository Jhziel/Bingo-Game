class BingoCard {
  constructor() {
    this.matrix = []; // This will hold the Bingo card matrix
  }

  generateMatrix() {
    // Initialize an empty matrix
    this.matrix = [];

    // Generate numbers for each column (B: 1-15, I: 16-30, N: 31-45, G: 46-60, O: 61-75)
    /* const columns = ["B", "I", "N", "G", "O"]; */
    for (let i = 0; i < 5; i++) {
      let column = [];
      while (column.length < 5) {
        let number = this.generateRandomNumber(i);
        if (!column.includes(number)) {
          column.push(number);
        }
      }
      this.matrix.push(column);
    }

    // Mark the center cell as "FREE"
    this.matrix[2][2] = "FREE";
  }

  generateRandomNumber(columnIndex) {
    const start = columnIndex * 15 + 1;
    const end = start + 14;
    return Math.floor(Math.random() * (end - start + 1)) + start;
  }

  drawCard() {
    let html = '<table border="1">';
    for (let i = 0; i < 5; i++) {
      html += "<tr>";
      for (let j = 0; j < 5; j++) {
        html += `<td>${this.matrix[j][i]}</td>`;
      }
      html += "</tr>";
    }
    html += "</table>";
    return html;
  }
}
