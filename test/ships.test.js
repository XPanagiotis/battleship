import test from "node:test";
import { Ship } from "../src/ships";

test("ship should be able to be hit", () => {
  const ship = Ship(3);
  ship.hit();
  expect(ship.isSunk()).toBe(false);
});

test("ship should sink when all parts are hit", () => {
  const ship = Ship(2);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
