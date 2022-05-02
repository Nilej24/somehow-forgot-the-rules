import Ship from './ship';

class Gameboard {
  constructor() {
    this.ships = [];
    this.hits = [];
    this.misses = [];
  }

  addShip(ship) {
    this.ships.push(ship);
  }

  receiveAttack(coords) {
    this.ships.forEach((ship) => ship.hit(coords));
  }

  allShipsAreSunk() {
    let result = true;

    this.ships.forEach((ship) => {
      if (!ship.isSunk()) result = false;
    });

    return result;
  }
}

export default Gameboard;
