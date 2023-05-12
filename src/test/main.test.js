import ShipFactory from "../js/main";

const ship = ShipFactory();

test("Create new ship with length of 3", () => {
  expect(ship.getLength()).toBe(3);
});
