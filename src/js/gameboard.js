const gameBoard = (() => {
  const board = Array(100).fill("w");

  const placeShip = (position, ship) => {
    board[position] = "S";
  };

  return { board, placeShip };
})();

export { gameBoard };
