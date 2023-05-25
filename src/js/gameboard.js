import { tr } from "date-fns/locale";

const gameBoard = (() => {
  const board = Array(100).fill("w");
  const endOfBoard = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];
  /*
  Row Starting numbers
  0, 10, 20, 30, 40, 50, 60, 70, 80, 90
  */
  function validPlacement(position, length) {
    const invalidBoardPosition = endOfBoard.map((value) => value - length);
    for (let i = 0; i < 10; i++) {
      if (position < endOfBoard[i] && position > invalidBoardPosition[i]) {
        return false;
      }
    }
    return true;
  }

  const placeShip = (startPosition, shipLength) => {
    if (validPlacement(startPosition, shipLength)) {
      let position = Number(startPosition);
      board[startPosition] = "S";
      for (let i = 0; i < shipLength; i++) {
        board[position] = "S";
        position += 1;
      }
      return true;
    }
    return false;
  };

  return { board, placeShip };
})();

export { gameBoard };
