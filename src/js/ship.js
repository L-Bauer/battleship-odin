const ShipFactory = ({ length }) => {
  const getLength = () => length;
  // Initialize ships health based on the length
  const shipHealth = length;
  let totalHits = 0;

  const hit = () => {
    // Increase number if ship is hit
    totalHits += 1;
    return totalHits;
  };

  const isSunk = () => {
    if (totalHits === shipHealth) {
      return true;
    }
    return false;
  };

  return { getLength, hit, isSunk };
};

export { ShipFactory };
