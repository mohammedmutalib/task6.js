function groupSeats(seatingArrangement, n) {
    function isWindowAvailable(row) {
      let consecutiveEmptySeats = 0;
      for (let seat of row) {
        if (seat === 0) {
          consecutiveEmptySeats++;
          if (consecutiveEmptySeats >= n) {
            return true;
          }
        } else {
          consecutiveEmptySeats = 0;
        }
      }
      return false;
    }
  
    let count = 0;
    for (let row of seatingArrangement) {
      if (isWindowAvailable(row)) {
        count++;
      }
    }
    return count;
  }
  
  console.log(groupSeats([
    [1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 0, 0, 1],
    [1, 1, 1, 0, 1, 0, 1],
    [0, 1, 1, 1, 1, 0, 0]
  ], 2)); 
  
  console.log(groupSeats([
    [1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 0, 0],
  ], 4)); 
  