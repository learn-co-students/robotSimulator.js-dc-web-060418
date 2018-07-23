class Robot {

	constructor() {
    this.coordinates = [0, 0]
    this.bearing = "north"
  }

  setCoordinates(x, y) {
    this.coordinates[0] = x
    this.coordinates[1] = y
  }

  setBearing(direction) {
    let validDirections = ["north", "south", "east", "west"]
    if (validDirections.includes(direction)) {
      this.bearing = direction
    } else {
      throw "Invalid Robot Bearing"
    }
  }

  place(obj) {
    this.setCoordinates(obj.x, obj.y)
    this.setBearing(obj.direction)
  }

  turnRight() {
    let directions = ["north", "east", "south", "west"]
    let currentIndex = directions.indexOf(this.bearing)
    if (currentIndex === 3) {
      this.bearing = directions[0]
    } else {
      this.bearing = directions[currentIndex + 1]
    }
  }

  turnLeft() {
    let directions = ["north", "east", "south", "west"]
    let currentIndex = directions.indexOf(this.bearing)
    if (currentIndex === 0) {
      this.bearing = directions[3]
    } else {
      this.bearing = directions[currentIndex - 1]
    }
  }

  advance() {
    if (this.bearing === "north") {
      this.coordinates[1] += 1
    } else if (this.bearing === "south") {
      this.coordinates[1] -= 1
    } else if (this.bearing === "east") {
      this.coordinates[0] += 1
    } else if (this.bearing === "west") {
      this.coordinates[0] -= 1
    }
  }

  translateInstructions(commandString) {
    let commandArray = commandString.split("")
    for (let command of commandArray) {
      if (command === "L") {
        this.turnLeft()
      } else if (command === "R") {
        this.turnRight()
      } else if (command === "A") {
        this.advance()
      }
    }
  }


}
