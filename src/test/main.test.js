import { ShipFactory } from "../js/ship";

const ship = ShipFactory(3);

test("Create new ship with length of 3", () => {
  expect(ship.getLength()).toBe(3);
});
