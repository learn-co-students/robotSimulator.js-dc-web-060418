class Robot {
  constructor() {
    (this.coordinates = [0, 0]),
    (this.bearing = "north");
  }

  setCoordinates(x, y) {
    (this.coordinates[0] = x),
    (this.coordinates[1] = y);
  }

  setBearing(direction) {
    if (["north", "south", "east", "west"].includes(direction)) {
      this.bearing = direction;
    } else {
      throw new Error("Invalid Robot Bearing");
    }
  }

  place(placement) {
    this.setBearing(placement.direction);
    this.setCoordinates(placement.x, placement.y);
  }

  turnRight() {
    switch (this.bearing) {
      case "north":
        this.setBearing("east");
        break;
      case "south":
        this.setBearing("west");
        break;
      case "east":
        this.setBearing("south");
        break;
      case "west":
        this.setBearing("north");
        break;
    }
  }

  turnLeft() {
    switch (this.bearing) {
      case "north":
        this.setBearing("west");
        break;
      case "south":
        this.setBearing("east");
        break;
      case "east":
        this.setBearing("north");
        break;
      case "west":
        this.setBearing("south");
        break;
    }
  }

  advance() {
    switch (this.bearing) {
      case "north":
        this.coordinates = [this.coordinates[0], this.coordinates[1] + 1];
        break;
      case "south":
        this.coordinates = [this.coordinates[0], this.coordinates[1] - 1];
        break;
      case "east":
        this.coordinates = [this.coordinates[0] + 1, this.coordinates[1]];
        break;
      case "west":
        this.coordinates = [this.coordinates[0] - 1, this.coordinates[1]];
        break;
    }
  }

  translateInstructions(instruction) {
    let instructions = instruction.split("")
    instructions.forEach(instruction => {
      switch (instruction) {
        case "L":
          return this.turnLeft()
          break;
        case "R":
          return this.turnRight()
          break;
        case "A":
          return this.advance()
          break;
      }
    })




  }

}
