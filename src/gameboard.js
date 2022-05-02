import Ship from './ship';

function Gameboard() {
  const ships = [];

  const hits = [];
  const misses = [];

  function receiveAttack(coords) {
    ships.forEach((ship) => ship.hit(coords));
  }

  function allShipsAreSunk() {
    let result = true;

    ships.forEach((ship) => {
      if (!ship.isSunk()) result = false;
    });

    return result;
  }

  return {
    receiveAttack, hits, misses, ships,
  };
}

export default Gameboard;
