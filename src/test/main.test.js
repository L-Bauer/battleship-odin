import shipFactory from "../js/main";

test("Sum 1+1 = 2", () => {
  expect(shipFactory().x(2)).toBe(2);
});
