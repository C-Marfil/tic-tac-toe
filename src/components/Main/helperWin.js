/* eslint-disable no-console */
const checkWin = (updatedBoard) => {
  // horizonal win
  if (
    (updatedBoard.column1[0] === "🟡" &&
      updatedBoard.column2[0] === "🟡" &&
      updatedBoard.column3[0] === "🟡" &&
      updatedBoard.column4[0] === "🟡") ||
    (updatedBoard.column1[0] === "🔴" &&
      updatedBoard.column2[0] === "🔴" &&
      updatedBoard.column3[0] === "🔴" &&
      updatedBoard.column4[0] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column1[1] === "🟡" &&
      updatedBoard.column2[1] === "🟡" &&
      updatedBoard.column3[1] === "🟡" &&
      updatedBoard.column4[1] === "🟡") ||
    (updatedBoard.column1[1] === "🔴" &&
      updatedBoard.column2[1] === "🔴" &&
      updatedBoard.column3[1] === "🔴" &&
      updatedBoard.column4[1] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column1[2] === "🟡" &&
      updatedBoard.column2[2] === "🟡" &&
      updatedBoard.column3[2] === "🟡" &&
      updatedBoard.column4[2] === "🟡") ||
    (updatedBoard.column1[2] === "🔴" &&
      updatedBoard.column2[2] === "🔴" &&
      updatedBoard.column3[2] === "🔴" &&
      updatedBoard.column4[2] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column1[3] === "🟡" &&
      updatedBoard.column2[3] === "🟡" &&
      updatedBoard.column3[3] === "🟡" &&
      updatedBoard.column4[3] === "🟡") ||
    (updatedBoard.column1[3] === "🔴" &&
      updatedBoard.column2[3] === "🔴" &&
      updatedBoard.column3[3] === "🔴" &&
      updatedBoard.column4[3] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column1[4] === "🟡" &&
      updatedBoard.column2[4] === "🟡" &&
      updatedBoard.column3[4] === "🟡" &&
      updatedBoard.column4[4] === "🟡") ||
    (updatedBoard.column1[4] === "🔴" &&
      updatedBoard.column2[4] === "🔴" &&
      updatedBoard.column3[4] === "🔴" &&
      updatedBoard.column4[4] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column1[5] === "🟡" &&
      updatedBoard.column2[5] === "🟡" &&
      updatedBoard.column3[5] === "🟡" &&
      updatedBoard.column4[5] === "🟡") ||
    (updatedBoard.column1[5] === "🔴" &&
      updatedBoard.column2[5] === "🔴" &&
      updatedBoard.column3[5] === "🔴" &&
      updatedBoard.column4[5] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  // Horizontal + 1
  if (
    (updatedBoard.column2[0] === "🟡" &&
      updatedBoard.column3[0] === "🟡" &&
      updatedBoard.column4[0] === "🟡" &&
      updatedBoard.column5[0] === "🟡") ||
    (updatedBoard.column2[0] === "🔴" &&
      updatedBoard.column3[0] === "🔴" &&
      updatedBoard.column4[0] === "🔴" &&
      updatedBoard.column5[0] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column2[1] === "🟡" &&
      updatedBoard.column3[1] === "🟡" &&
      updatedBoard.column4[1] === "🟡" &&
      updatedBoard.column5[1] === "🟡") ||
    (updatedBoard.column2[1] === "🔴" &&
      updatedBoard.column3[1] === "🔴" &&
      updatedBoard.column4[1] === "🔴" &&
      updatedBoard.column5[1] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column2[2] === "🟡" &&
      updatedBoard.column3[2] === "🟡" &&
      updatedBoard.column4[2] === "🟡" &&
      updatedBoard.column5[2] === "🟡") ||
    (updatedBoard.column2[2] === "🔴" &&
      updatedBoard.column3[2] === "🔴" &&
      updatedBoard.column4[2] === "🔴" &&
      updatedBoard.column5[2] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column2[3] === "🟡" &&
      updatedBoard.column3[3] === "🟡" &&
      updatedBoard.column4[3] === "🟡" &&
      updatedBoard.column5[3] === "🟡") ||
    (updatedBoard.column2[3] === "🔴" &&
      updatedBoard.column3[3] === "🔴" &&
      updatedBoard.column4[3] === "🔴" &&
      updatedBoard.column5[3] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column2[4] === "🟡" &&
      updatedBoard.column3[4] === "🟡" &&
      updatedBoard.column4[4] === "🟡" &&
      updatedBoard.column5[4] === "🟡") ||
    (updatedBoard.column2[4] === "🔴" &&
      updatedBoard.column3[4] === "🔴" &&
      updatedBoard.column4[4] === "🔴" &&
      updatedBoard.column5[4] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column2[5] === "🟡" &&
      updatedBoard.column3[5] === "🟡" &&
      updatedBoard.column4[5] === "🟡" &&
      updatedBoard.column5[5] === "🟡") ||
    (updatedBoard.column2[5] === "🔴" &&
      updatedBoard.column3[5] === "🔴" &&
      updatedBoard.column4[5] === "🔴" &&
      updatedBoard.column5[5] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  // Horizontal + 2
  if (
    (updatedBoard.column3[0] === "🟡" &&
      updatedBoard.column4[0] === "🟡" &&
      updatedBoard.column5[0] === "🟡" &&
      updatedBoard.column6[0] === "🟡") ||
    (updatedBoard.column3[0] === "🔴" &&
      updatedBoard.column4[0] === "🔴" &&
      updatedBoard.column5[0] === "🔴" &&
      updatedBoard.column6[0] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column3[1] === "🟡" &&
      updatedBoard.column4[1] === "🟡" &&
      updatedBoard.column5[1] === "🟡" &&
      updatedBoard.column6[1] === "🟡") ||
    (updatedBoard.column3[1] === "🔴" &&
      updatedBoard.column4[1] === "🔴" &&
      updatedBoard.column5[1] === "🔴" &&
      updatedBoard.column6[1] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column3[2] === "🟡" &&
      updatedBoard.column4[2] === "🟡" &&
      updatedBoard.column5[2] === "🟡" &&
      updatedBoard.column6[2] === "🟡") ||
    (updatedBoard.column3[2] === "🔴" &&
      updatedBoard.column4[2] === "🔴" &&
      updatedBoard.column5[2] === "🔴" &&
      updatedBoard.column6[2] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column3[3] === "🟡" &&
      updatedBoard.column4[3] === "🟡" &&
      updatedBoard.column5[3] === "🟡" &&
      updatedBoard.column6[3] === "🟡") ||
    (updatedBoard.column3[3] === "🔴" &&
      updatedBoard.column4[3] === "🔴" &&
      updatedBoard.column5[3] === "🔴" &&
      updatedBoard.column6[3] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column3[4] === "🟡" &&
      updatedBoard.column4[4] === "🟡" &&
      updatedBoard.column5[4] === "🟡" &&
      updatedBoard.column6[4] === "🟡") ||
    (updatedBoard.column3[4] === "🔴" &&
      updatedBoard.column4[4] === "🔴" &&
      updatedBoard.column5[4] === "🔴" &&
      updatedBoard.column6[4] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column3[5] === "🟡" &&
      updatedBoard.column4[5] === "🟡" &&
      updatedBoard.column5[5] === "🟡" &&
      updatedBoard.column6[5] === "🟡") ||
    (updatedBoard.column3[5] === "🔴" &&
      updatedBoard.column4[5] === "🔴" &&
      updatedBoard.column5[5] === "🔴" &&
      updatedBoard.column6[5] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  // Horizontal + 3
  if (
    (updatedBoard.column4[0] === "🟡" &&
      updatedBoard.column5[0] === "🟡" &&
      updatedBoard.column6[0] === "🟡" &&
      updatedBoard.column7[0] === "🟡") ||
    (updatedBoard.column4[0] === "🔴" &&
      updatedBoard.column5[0] === "🔴" &&
      updatedBoard.column6[0] === "🔴" &&
      updatedBoard.column7[0] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column4[1] === "🟡" &&
      updatedBoard.column5[1] === "🟡" &&
      updatedBoard.column6[1] === "🟡" &&
      updatedBoard.column7[1] === "🟡") ||
    (updatedBoard.column4[1] === "🔴" &&
      updatedBoard.column5[1] === "🔴" &&
      updatedBoard.column6[1] === "🔴" &&
      updatedBoard.column7[1] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column4[2] === "🟡" &&
      updatedBoard.column5[2] === "🟡" &&
      updatedBoard.column6[2] === "🟡" &&
      updatedBoard.column7[2] === "🟡") ||
    (updatedBoard.column4[2] === "🔴" &&
      updatedBoard.column5[2] === "🔴" &&
      updatedBoard.column6[2] === "🔴" &&
      updatedBoard.column7[2] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column4[3] === "🟡" &&
      updatedBoard.column5[3] === "🟡" &&
      updatedBoard.column6[3] === "🟡" &&
      updatedBoard.column7[3] === "🟡") ||
    (updatedBoard.column4[3] === "🔴" &&
      updatedBoard.column5[3] === "🔴" &&
      updatedBoard.column6[3] === "🔴" &&
      updatedBoard.column7[3] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column4[4] === "🟡" &&
      updatedBoard.column5[4] === "🟡" &&
      updatedBoard.column6[4] === "🟡" &&
      updatedBoard.column7[4] === "🟡") ||
    (updatedBoard.column4[4] === "🔴" &&
      updatedBoard.column5[4] === "🔴" &&
      updatedBoard.column6[4] === "🔴" &&
      updatedBoard.column7[4] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column4[5] === "🟡" &&
      updatedBoard.column5[5] === "🟡" &&
      updatedBoard.column6[5] === "🟡" &&
      updatedBoard.column7[5] === "🟡") ||
    (updatedBoard.column4[5] === "🔴" &&
      updatedBoard.column5[5] === "🔴" &&
      updatedBoard.column6[5] === "🔴" &&
      updatedBoard.column7[5] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  // vertical win
  if (
    (updatedBoard.column1[0] === "🟡" &&
      updatedBoard.column1[1] === "🟡" &&
      updatedBoard.column1[2] === "🟡" &&
      updatedBoard.column1[3] === "🟡") ||
    (updatedBoard.column1[0] === "🔴" &&
      updatedBoard.column1[1] === "🔴" &&
      updatedBoard.column1[2] === "🔴" &&
      updatedBoard.column1[3] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column2[0] === "🟡" &&
      updatedBoard.column2[1] === "🟡" &&
      updatedBoard.column2[2] === "🟡" &&
      updatedBoard.column2[3] === "🟡") ||
    (updatedBoard.column2[0] === "🔴" &&
      updatedBoard.column2[1] === "🔴" &&
      updatedBoard.column2[2] === "🔴" &&
      updatedBoard.column2[3] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column3[0] === "🟡" &&
      updatedBoard.column3[1] === "🟡" &&
      updatedBoard.column3[2] === "🟡" &&
      updatedBoard.column3[3] === "🟡") ||
    (updatedBoard.column3[0] === "🔴" &&
      updatedBoard.column3[1] === "🔴" &&
      updatedBoard.column3[2] === "🔴" &&
      updatedBoard.column3[3] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column4[0] === "🟡" &&
      updatedBoard.column4[1] === "🟡" &&
      updatedBoard.column4[2] === "🟡" &&
      updatedBoard.column4[3] === "🟡") ||
    (updatedBoard.column4[0] === "🔴" &&
      updatedBoard.column4[1] === "🔴" &&
      updatedBoard.column4[2] === "🔴" &&
      updatedBoard.column4[3] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column5[0] === "🟡" &&
      updatedBoard.column5[1] === "🟡" &&
      updatedBoard.column5[2] === "🟡" &&
      updatedBoard.column5[3] === "🟡") ||
    (updatedBoard.column5[0] === "🔴" &&
      updatedBoard.column5[1] === "🔴" &&
      updatedBoard.column5[2] === "🔴" &&
      updatedBoard.column5[3] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column6[0] === "🟡" &&
      updatedBoard.column6[1] === "🟡" &&
      updatedBoard.column6[2] === "🟡" &&
      updatedBoard.column6[3] === "🟡") ||
    (updatedBoard.column6[0] === "🔴" &&
      updatedBoard.column6[1] === "🔴" &&
      updatedBoard.column6[2] === "🔴" &&
      updatedBoard.column6[3] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column7[0] === "🟡" &&
      updatedBoard.column7[1] === "🟡" &&
      updatedBoard.column7[2] === "🟡" &&
      updatedBoard.column7[3] === "🟡") ||
    (updatedBoard.column7[0] === "🔴" &&
      updatedBoard.column7[1] === "🔴" &&
      updatedBoard.column7[2] === "🔴" &&
      updatedBoard.column7[3] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  // Vertical + 1
  if (
    (updatedBoard.column1[1] === "🟡" &&
      updatedBoard.column1[2] === "🟡" &&
      updatedBoard.column1[3] === "🟡" &&
      updatedBoard.column1[4] === "🟡") ||
    (updatedBoard.column1[1] === "🔴" &&
      updatedBoard.column1[2] === "🔴" &&
      updatedBoard.column1[3] === "🔴" &&
      updatedBoard.column1[4] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column2[1] === "🟡" &&
      updatedBoard.column2[2] === "🟡" &&
      updatedBoard.column2[3] === "🟡" &&
      updatedBoard.column2[4] === "🟡") ||
    (updatedBoard.column2[1] === "🔴" &&
      updatedBoard.column2[2] === "🔴" &&
      updatedBoard.column2[3] === "🔴" &&
      updatedBoard.column2[4] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column3[1] === "🟡" &&
      updatedBoard.column3[2] === "🟡" &&
      updatedBoard.column3[3] === "🟡" &&
      updatedBoard.column3[4] === "🟡") ||
    (updatedBoard.column3[1] === "🔴" &&
      updatedBoard.column3[2] === "🔴" &&
      updatedBoard.column3[3] === "🔴" &&
      updatedBoard.column3[4] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column4[1] === "🟡" &&
      updatedBoard.column4[2] === "🟡" &&
      updatedBoard.column4[3] === "🟡" &&
      updatedBoard.column4[4] === "🟡") ||
    (updatedBoard.column4[1] === "🔴" &&
      updatedBoard.column4[2] === "🔴" &&
      updatedBoard.column4[3] === "🔴" &&
      updatedBoard.column4[4] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column5[1] === "🟡" &&
      updatedBoard.column5[2] === "🟡" &&
      updatedBoard.column5[3] === "🟡" &&
      updatedBoard.column5[4] === "🟡") ||
    (updatedBoard.column5[1] === "🔴" &&
      updatedBoard.column5[2] === "🔴" &&
      updatedBoard.column5[3] === "🔴" &&
      updatedBoard.column5[4] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column6[1] === "🟡" &&
      updatedBoard.column6[2] === "🟡" &&
      updatedBoard.column6[3] === "🟡" &&
      updatedBoard.column6[4] === "🟡") ||
    (updatedBoard.column6[1] === "🔴" &&
      updatedBoard.column6[2] === "🔴" &&
      updatedBoard.column6[3] === "🔴" &&
      updatedBoard.column6[4] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column7[1] === "🟡" &&
      updatedBoard.column7[2] === "🟡" &&
      updatedBoard.column7[3] === "🟡" &&
      updatedBoard.column7[4] === "🟡") ||
    (updatedBoard.column7[1] === "🔴" &&
      updatedBoard.column7[2] === "🔴" &&
      updatedBoard.column7[3] === "🔴" &&
      updatedBoard.column7[4] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  // Vertical + 2
  if (
    (updatedBoard.column1[2] === "🟡" &&
      updatedBoard.column1[3] === "🟡" &&
      updatedBoard.column1[4] === "🟡" &&
      updatedBoard.column1[5] === "🟡") ||
    (updatedBoard.column1[2] === "🔴" &&
      updatedBoard.column1[3] === "🔴" &&
      updatedBoard.column1[4] === "🔴" &&
      updatedBoard.column1[5] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column2[2] === "🟡" &&
      updatedBoard.column2[3] === "🟡" &&
      updatedBoard.column2[4] === "🟡" &&
      updatedBoard.column2[5] === "🟡") ||
    (updatedBoard.column2[2] === "🔴" &&
      updatedBoard.column2[3] === "🔴" &&
      updatedBoard.column2[4] === "🔴" &&
      updatedBoard.column2[5] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column3[2] === "🟡" &&
      updatedBoard.column3[3] === "🟡" &&
      updatedBoard.column3[4] === "🟡" &&
      updatedBoard.column3[5] === "🟡") ||
    (updatedBoard.column3[2] === "🔴" &&
      updatedBoard.column3[3] === "🔴" &&
      updatedBoard.column3[4] === "🔴" &&
      updatedBoard.column3[5] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column4[2] === "🟡" &&
      updatedBoard.column4[3] === "🟡" &&
      updatedBoard.column4[4] === "🟡" &&
      updatedBoard.column4[5] === "🟡") ||
    (updatedBoard.column4[2] === "🔴" &&
      updatedBoard.column4[3] === "🔴" &&
      updatedBoard.column4[4] === "🔴" &&
      updatedBoard.column4[5] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column5[2] === "🟡" &&
      updatedBoard.column5[3] === "🟡" &&
      updatedBoard.column5[4] === "🟡" &&
      updatedBoard.column5[5] === "🟡") ||
    (updatedBoard.column5[2] === "🔴" &&
      updatedBoard.column5[3] === "🔴" &&
      updatedBoard.column5[4] === "🔴" &&
      updatedBoard.column5[5] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column6[2] === "🟡" &&
      updatedBoard.column6[3] === "🟡" &&
      updatedBoard.column6[4] === "🟡" &&
      updatedBoard.column6[5] === "🟡") ||
    (updatedBoard.column6[2] === "🔴" &&
      updatedBoard.column6[3] === "🔴" &&
      updatedBoard.column6[4] === "🔴" &&
      updatedBoard.column6[5] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column7[2] === "🟡" &&
      updatedBoard.column7[3] === "🟡" &&
      updatedBoard.column7[4] === "🟡" &&
      updatedBoard.column7[5] === "🟡") ||
    (updatedBoard.column7[2] === "🔴" &&
      updatedBoard.column7[3] === "🔴" &&
      updatedBoard.column7[4] === "🔴" &&
      updatedBoard.column7[5] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  // diagonal R-L
  if (
    (updatedBoard.column1[2] === "🟡" &&
      updatedBoard.column2[3] === "🟡" &&
      updatedBoard.column3[4] === "🟡" &&
      updatedBoard.column4[5] === "🟡") ||
    (updatedBoard.column1[2] === "🔴" &&
      updatedBoard.column2[3] === "🔴" &&
      updatedBoard.column3[4] === "🔴" &&
      updatedBoard.column4[5] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column2[2] === "🟡" &&
      updatedBoard.column3[3] === "🟡" &&
      updatedBoard.column4[4] === "🟡" &&
      updatedBoard.column5[5] === "🟡") ||
    (updatedBoard.column2[2] === "🔴" &&
      updatedBoard.column3[3] === "🔴" &&
      updatedBoard.column4[4] === "🔴" &&
      updatedBoard.column5[5] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column3[2] === "🟡" &&
      updatedBoard.column4[3] === "🟡" &&
      updatedBoard.column5[4] === "🟡" &&
      updatedBoard.column6[5] === "🟡") ||
    (updatedBoard.column3[2] === "🔴" &&
      updatedBoard.column4[3] === "🔴" &&
      updatedBoard.column5[4] === "🔴" &&
      updatedBoard.column6[5] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column4[1] === "🟡" &&
      updatedBoard.column5[2] === "🟡" &&
      updatedBoard.column6[3] === "🟡" &&
      updatedBoard.column7[4] === "🟡") ||
    (updatedBoard.column4[1] === "🔴" &&
      updatedBoard.column5[2] === "🔴" &&
      updatedBoard.column6[3] === "🔴" &&
      updatedBoard.column7[4] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column4[2] === "🟡" &&
      updatedBoard.column5[3] === "🟡" &&
      updatedBoard.column6[4] === "🟡" &&
      updatedBoard.column7[5] === "🟡") ||
    (updatedBoard.column4[2] === "🔴" &&
      updatedBoard.column5[3] === "🔴" &&
      updatedBoard.column6[4] === "🔴" &&
      updatedBoard.column7[5] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column4[0] === "🟡" &&
      updatedBoard.column5[1] === "🟡" &&
      updatedBoard.column6[2] === "🟡" &&
      updatedBoard.column7[3] === "🟡") ||
    (updatedBoard.column4[2] === "🔴" &&
      updatedBoard.column5[1] === "🔴" &&
      updatedBoard.column6[2] === "🔴" &&
      updatedBoard.column7[3] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }

  // diagonal R-L + 1
  if (
    (updatedBoard.column1[1] === "🟡" &&
      updatedBoard.column2[2] === "🟡" &&
      updatedBoard.column3[3] === "🟡" &&
      updatedBoard.column4[4] === "🟡") ||
    (updatedBoard.column1[1] === "🔴" &&
      updatedBoard.column2[2] === "🔴" &&
      updatedBoard.column3[3] === "🔴" &&
      updatedBoard.column4[4] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column2[1] === "🟡" &&
      updatedBoard.column3[2] === "🟡" &&
      updatedBoard.column4[3] === "🟡" &&
      updatedBoard.column5[4] === "🟡") ||
    (updatedBoard.column2[1] === "🔴" &&
      updatedBoard.column3[2] === "🔴" &&
      updatedBoard.column4[3] === "🔴" &&
      updatedBoard.column5[4] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column3[2] === "🟡" &&
      updatedBoard.column4[3] === "🟡" &&
      updatedBoard.column5[4] === "🟡" &&
      updatedBoard.column6[5] === "🟡") ||
    (updatedBoard.column3[2] === "🔴" &&
      updatedBoard.column4[3] === "🔴" &&
      updatedBoard.column5[4] === "🔴" &&
      updatedBoard.column6[5] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column3[0] === "🟡" &&
      updatedBoard.column4[1] === "🟡" &&
      updatedBoard.column5[2] === "🟡" &&
      updatedBoard.column6[3] === "🟡") ||
    (updatedBoard.column3[0] === "🔴" &&
      updatedBoard.column4[1] === "🔴" &&
      updatedBoard.column5[2] === "🔴" &&
      updatedBoard.column6[3] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  // diagonal R-L + 2
  if (
    (updatedBoard.column1[0] === "🟡" &&
      updatedBoard.column2[1] === "🟡" &&
      updatedBoard.column3[2] === "🟡" &&
      updatedBoard.column4[3] === "🟡") ||
    (updatedBoard.column1[0] === "🔴" &&
      updatedBoard.column2[1] === "🔴" &&
      updatedBoard.column3[2] === "🔴" &&
      updatedBoard.column4[3] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column2[0] === "🟡" &&
      updatedBoard.column3[1] === "🟡" &&
      updatedBoard.column4[2] === "🟡" &&
      updatedBoard.column5[3] === "🟡") ||
    (updatedBoard.column2[0] === "🔴" &&
      updatedBoard.column3[1] === "🔴" &&
      updatedBoard.column4[2] === "🔴" &&
      updatedBoard.column5[3] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  // Diagonal L-R
  if (
    (updatedBoard.column1[3] === "🟡" &&
      updatedBoard.column2[2] === "🟡" &&
      updatedBoard.column3[1] === "🟡" &&
      updatedBoard.column4[0] === "🟡") ||
    (updatedBoard.column1[3] === "🔴" &&
      updatedBoard.column2[2] === "🔴" &&
      updatedBoard.column3[1] === "🔴" &&
      updatedBoard.column4[0] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column1[4] === "🟡" &&
      updatedBoard.column2[3] === "🟡" &&
      updatedBoard.column3[2] === "🟡" &&
      updatedBoard.column4[1] === "🟡") ||
    (updatedBoard.column1[4] === "🔴" &&
      updatedBoard.column2[3] === "🔴" &&
      updatedBoard.column3[2] === "🔴" &&
      updatedBoard.column4[1] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column1[5] === "🟡" &&
      updatedBoard.column2[4] === "🟡" &&
      updatedBoard.column3[3] === "🟡" &&
      updatedBoard.column4[2] === "🟡") ||
    (updatedBoard.column1[5] === "🔴" &&
      updatedBoard.column2[4] === "🔴" &&
      updatedBoard.column3[3] === "🔴" &&
      updatedBoard.column4[2] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column2[5] === "🟡" &&
      updatedBoard.column3[4] === "🟡" &&
      updatedBoard.column4[3] === "🟡" &&
      updatedBoard.column5[2] === "🟡") ||
    (updatedBoard.column2[5] === "🔴" &&
      updatedBoard.column3[4] === "🔴" &&
      updatedBoard.column4[3] === "🔴" &&
      updatedBoard.column5[2] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column3[5] === "🟡" &&
      updatedBoard.column4[4] === "🟡" &&
      updatedBoard.column5[3] === "🟡" &&
      updatedBoard.column6[2] === "🟡") ||
    (updatedBoard.column3[5] === "🔴" &&
      updatedBoard.column4[4] === "🔴" &&
      updatedBoard.column5[3] === "🔴" &&
      updatedBoard.column6[2] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column4[5] === "🟡" &&
      updatedBoard.column5[4] === "🟡" &&
      updatedBoard.column6[3] === "🟡" &&
      updatedBoard.column7[2] === "🟡") ||
    (updatedBoard.column4[5] === "🔴" &&
      updatedBoard.column5[4] === "🔴" &&
      updatedBoard.column6[3] === "🔴" &&
      updatedBoard.column7[2] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  // diagonal L-R +1
  if (
    (updatedBoard.column2[4] === "🟡" &&
      updatedBoard.column3[3] === "🟡" &&
      updatedBoard.column4[2] === "🟡" &&
      updatedBoard.column5[1] === "🟡") ||
    (updatedBoard.column2[4] === "🔴" &&
      updatedBoard.column3[3] === "🔴" &&
      updatedBoard.column4[2] === "🔴" &&
      updatedBoard.column5[1] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column2[3] === "🟡" &&
      updatedBoard.column3[2] === "🟡" &&
      updatedBoard.column4[1] === "🟡" &&
      updatedBoard.column5[0] === "🟡") ||
    (updatedBoard.column2[3] === "🔴" &&
      updatedBoard.column3[2] === "🔴" &&
      updatedBoard.column4[1] === "🔴" &&
      updatedBoard.column5[0] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column4[4] === "🟡" &&
      updatedBoard.column5[3] === "🟡" &&
      updatedBoard.column6[2] === "🟡" &&
      updatedBoard.column7[1] === "🟡") ||
    (updatedBoard.column4[4] === "🔴" &&
      updatedBoard.column5[3] === "🔴" &&
      updatedBoard.column6[2] === "🔴" &&
      updatedBoard.column7[1] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  // Diagonal L-R + 2
  if (
    (updatedBoard.column3[3] === "🟡" &&
      updatedBoard.column4[2] === "🟡" &&
      updatedBoard.column5[1] === "🟡" &&
      updatedBoard.column6[0] === "🟡") ||
    (updatedBoard.column3[3] === "🔴" &&
      updatedBoard.column4[2] === "🔴" &&
      updatedBoard.column5[1] === "🔴" &&
      updatedBoard.column6[0] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
  if (
    (updatedBoard.column4[3] === "🟡" &&
      updatedBoard.column5[2] === "🟡" &&
      updatedBoard.column6[1] === "🟡" &&
      updatedBoard.column7[0] === "🟡") ||
    (updatedBoard.column4[3] === "🔴" &&
      updatedBoard.column5[2] === "🔴" &&
      updatedBoard.column6[1] === "🔴" &&
      updatedBoard.column7[0] === "🔴")
  ) {
    console.log("You're a winner!!");
  } else {
    console.log("next turn");
  }
};

export default checkWin;
