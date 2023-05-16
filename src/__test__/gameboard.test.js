import { gameBoard } from "../js/gameboard";
import { ShipFactory } from "../js/ship";

test("Size of gameboard", () => {
  expect(gameBoard.board).toEqual(Array(10).fill(Array(10).fill(0)));
});

describe("Placing Ships on board", () => {
  const ship = ShipFactory({ length: 3 });

  test("Place ship of size three on board", () => {
    expect(gameBoard.placeShip([0][0], ship)).toBe(true);
  });
});
