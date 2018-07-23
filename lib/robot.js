const bearings = ["north", "east", "south", "west"]

class Robot {
	//your solution here
	constructor() {
		this.coordinates = [0,0];
		this.bearing = "north";
	}

	setCoordinates(x, y) {
		this.coordinates = [x, y]
	}

	setBearing(bearing) {
		if (bearings.includes(bearing)) {
			this.bearing = bearing;
		} else {
			throw "Invalid Robot Bearing"
		}
	}

	place(newPlace) {
		this.coordinates = [newPlace.x, newPlace.y]
		this.bearing = newPlace.direction
	}
	
	turnRight() {
		let oldIndex = bearings.indexOf(this.bearing);
		this.bearing = bearings[(oldIndex+1)%4]
	}

	turnLeft() {
		let oldIndex = bearings.indexOf(this.bearing);
		this.bearing = bearings[(oldIndex+3)%4]
	}

	advance() {
		let x = this.coordinates[0]
		let y = this.coordinates[1]
		switch(this.bearing) {
			case "north":
				this.coordinates = [x, ++y]
				break;
			case "south":
				this.coordinates = [x, --y]
				break;
			case "east":
				this.coordinates = [++x, y]
				break;
			case "west":
				this.coordinates = [--x, y]
				break;
		}
	}

	translateInstructions(instructionString) {
		const translator = {L: this.turnLeft, R: this.turnRight, A: this.advance}
		for (let letter of instructionString) {
			translator[letter].call(this)
		}
	}
}
