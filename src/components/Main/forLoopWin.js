const winning = (board) => {
  const arrayBoard = Object.entries(board);

  for (let col = 0; col <= 6; col += 1) {
    for (let index = 0; index <= 1; index += 1) {
      if (index === 1) {
        for (let cell = 0; cell <= 5; cell += 1) {
          if (
            arrayBoard[col][index][cell] !== "" &&
            arrayBoard[col][index][cell] === arrayBoard[col][index][cell + 1] &&
            arrayBoard[col][index][cell + 1] ===
              arrayBoard[col][index][cell + 2] &&
            arrayBoard[col][index][cell + 2] ===
              arrayBoard[col][index][cell + 3]
          ) {
            return true;
          }
        }
      }
    }
  }
  for (let col = 0; col <= 6; col += 1) {
    for (let index = 0; index <= 1; index += 1) {
      if (index === 1) {
        for (let cell = 0; cell <= 5; cell += 1) {
          if (
            arrayBoard[col][index][cell] !== "" &&
            arrayBoard[col][index][cell] === arrayBoard[col + 1][index][cell] &&
            arrayBoard[col + 1][index][cell] ===
              arrayBoard[col + 2][index][cell] &&
            arrayBoard[col + 2][index][cell] ===
              arrayBoard[col + 3][index][cell]
          ) {
            return true;
          }
        }
      }
    }
  }
  for (let col = 0; col <= 6; col += 1) {
    for (let index = 0; index <= 1; index += 1) {
      if (index === 1) {
        for (let cell = 0; cell <= 5; cell += 1) {
          if (
            arrayBoard[col][index][cell] !== "" &&
            arrayBoard[col][index][cell] ===
              arrayBoard[col + 1][index][cell + 1] &&
            arrayBoard[col + 1][index][cell + 1] ===
              arrayBoard[col + 2][index][cell + 2] &&
            arrayBoard[col + 2][index][cell + 2] ===
              arrayBoard[col + 3][index][cell + 3]
          ) {
            return true;
          }
        }
      }
    }
  }
  for (let col = 0; col <= 6; col += 1) {
    for (let index = 0; index <= 1; index += 1) {
      if (index === 1) {
        for (let cell = 0; cell <= 5; cell += 1) {
          if (
            arrayBoard[col][index][cell] !== "" &&
            arrayBoard[col][index][cell] ===
              arrayBoard[col + 1][index][cell - 1] &&
            arrayBoard[col + 1][index][cell - 1] ===
              arrayBoard[col + 2][index][cell - 2] &&
            arrayBoard[col + 2][index][cell - 2] ===
              arrayBoard[col + 3][index][cell - 3]
          ) {
            return true;
          }
        }
      }
    }
  }
  return false;
};

export default winning;
