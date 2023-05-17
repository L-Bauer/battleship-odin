const gameBoard = (() => {
  const board = Array(10).fill(Array(10).fill(0));

  const placeShip = (position, ship) => {
    board[position] = "S";
    console.log(board);
  };

  return { board, placeShip };
})();

export { gameBoard };
