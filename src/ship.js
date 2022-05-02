class Ship {
  constructor(shipPos, length, vertical) {
    this.segments = [];

    function Segment(pos) {
      [this.x, this.y] = pos;
      this.hit = false;
    }

    // makes the ship's segments
    for (let i = 0; i < length; i += 1) {
      const seg = new Segment(shipPos);

      if (vertical) {
        seg.y += i;
      } else {
        seg.x += i;
      }

      this.segments.push(seg);
    }
  }

  hit(pos) {
    this.segments.forEach((segment, index) => {
      if (segment.x === pos[0] && segment.y === pos[1]) {
        this.segments[index].hit = true;
      }
    });
  }

  isSunk() {
    return !this.segments.map((segment) => segment.hit).includes(false);
  }
}

export default Ship;
