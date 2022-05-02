import Ship from '../src/ship';

test('ship sinks when all its positions are hit', () => {
  const ship = Ship([2, 5], 3, true);
  ship.hit([2, 5]);
  ship.hit([2, 6]);
  ship.hit([2, 7]);
  expect(ship.isSunk()).toBeTruthy();
});

test("ships don't just die instantly", () => {
  const ship = Ship([1, 1], 5, false);
  expect(ship.isSunk()).toBeFalsy();
});

test('horizontal ships work', () => {
  const ship = Ship([2, 5], 3, false);
  ship.hit([2, 5]);
  ship.hit([2, 6]);
  ship.hit([2, 7]);
  expect(ship.isSunk()).toBeFalsy();
});

test("ships don't sink until all positions are hit", () => {
  const ship = Ship([4, 2], 2, false);
  expect(ship.isSunk()).toBeFalsy();
  ship.hit([4, 2]);
  expect(ship.isSunk()).toBeFalsy();
  ship.hit([5, 2]);
  expect(ship.isSunk()).toBeTruthy();
});
