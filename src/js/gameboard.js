const gameBoard = (() => {
  const board = Array(100).fill("w");

  const placeShip = (position, ship) => {
    let tempPosition = position;
    for (let i = 0; i < ship; i++) {
      board[i] = "S";
      tempPosition += 1;
    }
  };

  return { board, placeShip };
})();

export { gameBoard };
