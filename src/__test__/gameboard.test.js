import { gameBoard } from "../js/gameboard";
import { ShipFactory } from "../js/ship";

test("Size of gameboard", () => {
  expect(gameBoard.board).toEqual(Array(100).fill("w"));
});

describe("Placing Ships on board", () => {
  const ship = ShipFactory({ length: 3 });

  test("Place a ship horizontal at 0", () => {
    gameBoard.placeShip([0], ship.getLength());
    expect(gameBoard.board[0]).toBe("S");
    expect(gameBoard.board[1]).toBe("S");
    expect(gameBoard.board[2]).toBe("S");
  });

  test("Place a ship horizontal at 50", () => {
    gameBoard.placeShip([50], ship.getLength());
    expect(gameBoard.board[50]).toBe("S");
    expect(gameBoard.board[51]).toBe("S");
    expect(gameBoard.board[52]).toBe("S");
  });
});
