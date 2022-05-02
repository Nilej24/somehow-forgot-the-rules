function Ship(shipPos, length, vertical) {
  const segments = [];

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

    segments.push(seg);
  }

  function hit(pos) {
    segments.forEach((segment, index) => {
      if (segment.x === pos[0] && segment.y === pos[1]) {
        segments[index].hit = true;
      }
    });
  }

  function isSunk() {
    return !segments.map((segment) => segment.hit).includes(false);
  }

  return {
    hit, isSunk, shipPos,
  };
}

export default Ship;
