const gameBoard = (() => {
  const board = Array(100).fill("w");
  /*
  Row Starting numbers
  0, 10, 20, 30, 40, 50, 60, 70, 80, 90
  */

  const placeShip = (startPosition, shipLength) => {
    let position = Number(startPosition);
    board[startPosition] = "S";
    for (let i = 0; i < shipLength; i++) {
      board[position] = "S";
      position += 1;
    }
  };

  return { board, placeShip };
})();

export { gameBoard };
