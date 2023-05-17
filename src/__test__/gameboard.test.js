import { gameBoard } from "../js/gameboard";
import { ShipFactory } from "../js/ship";

test("Size of gameboard", () => {
  expect(gameBoard.board).toEqual(Array(10).fill(Array(10).fill(0)));
});

describe("Placing Ships on board", () => {
  const ship = ShipFactory({ length: 3 });

  test("Place a ship horizontal", () => {
    gameBoard.placeShip([0][0], ship);
    expect(gameBoard.board[0][0]).toBe("S");
    expect(gameBoard.board[1][0]).toBe("S");
    expect(gameBoard.board[0][1]).toBe("S");
  });
});
