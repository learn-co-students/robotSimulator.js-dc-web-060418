class Robot {
	//your solution here
	constructor(){
		this.coordinates = [0,0]
		this.bearing = "north"
	}

	setCoordinates(coordinate1, coordinate2) {
		this.coordinates = [coordinate1, coordinate2]
	}

	setBearing(newBearing) {
		if (newBearing === "north" || newBearing === "south" || newBearing === "east" || newBearing === "west") {
			this.bearing = newBearing
		} else {
			throw new Error("Invalid Robot Bearing")
		}
	}

	place(placement) {
		this.setCoordinates(placement.x, placement.y)
		this.setBearing(placement.direction)
	}

	turnRight() {
		switch (this.bearing) {
			case "north":
				this.bearing = "east"
				break;
			case "east":
				this.bearing = "south"
				break;
			case "south":
				this.bearing = "west"
				break;
			case "west":
				this.bearing = "north"
				break;
		}
	}

	turnLeft() {
		switch (this.bearing) {
			case "north":
				this.bearing = "west"
				break;
			case "east":
				this.bearing = "north"
				break;
			case "south":
				this.bearing = "east"
				break;
			case "west":
				this.bearing = "south"
				break;
		}
	}

	advance() {
		switch (this.bearing) {
			case "north":
				this.coordinates[1] += 1
				break;
			case "east":
				this.coordinates[0] += 1
				break;
			case "south":
				this.coordinates[1] -= 1
				break;
			case "west":
				this.coordinates[0] -= 1
				break;
		}
	}

	translateInstructions(instructions) {
		let instructionsArr = instructions.split("");
		instructionsArr.forEach(instruction => {
			if(instruction === "L") {
				this.turnLeft()
			} else if(instruction === "R"){
				this.turnRight()
			} else {
				this.advance()
			}
		})
	}
}
