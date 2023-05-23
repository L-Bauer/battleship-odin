import { ShipFactory } from "../js/ship";

describe("Interactions of the ships", () => {
  let ship;
  beforeEach(() => {
    ship = ShipFactory({ length: 3 });
  });

  test("Create new ship with length of 3", () => {
    expect(ship.getLength()).toBe(3);
  });

  test("Ships health should go down when hit", () => {
    expect(ship.hit()).toBe(1);
  });

  test("Ship is sunk after 3 hits", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
