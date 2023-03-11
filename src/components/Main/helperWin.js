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
  // diagonal win
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
};

export default checkWin;
