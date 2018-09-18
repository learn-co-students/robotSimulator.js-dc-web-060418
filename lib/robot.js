class Robot {
	constructor() {
		this.coordinates = [0, 0];
		this.bearing = 'north';
	}

	setCoordinates(x, y) {
		this.coordinates[0] = x;
		this.coordinates[1] = y;
	}

	setBearing(bearing) {
		if (bearing === "north" || bearing === "south" || bearing === "east" || bearing === "west") {
			this.bearing = bearing;
		} else {
			throw "Invalid Robot Bearing";
		}
	}

	place(args) {
		this.setCoordinates(args.x, args.y);
		this.setBearing(args.direction);
	}

	turnRight() {
		switch(this.bearing) {
			case "north":
				this.setBearing("east");
				break;
			case "east":
				this.setBearing("south");
				break;
			case "south":
				this.setBearing("west");
				break;
			case "west":
				this.setBearing("north");
				break;
			default:
				throw "Invalid Robot Bearing";
				break;
		}
	}

	turnLeft() {
		switch(this.bearing) {
			case "north":
				this.setBearing("west");
				break;
			case "east":
				this.setBearing("north");
				break;
			case "south":
				this.setBearing("east");
				break;
			case "west":
				this.setBearing("south");
				break;
			default:
				throw "Invalid Robot Bearing";
				break;
		}
	}

	advance() {
		switch(this.bearing) {
			case "north":
				this.setCoordinates(
					this.coordinates[0],
					this.coordinates[1] + 1);
				break;
			case "east":
				this.setCoordinates(
					this.coordinates[0] + 1,
					this.coordinates[1]);
				break;
			case "south":
				this.setCoordinates(
					this.coordinates[0],
					this.coordinates[1] - 1);
				break;
			case "west":
				this.setCoordinates(
					this.coordinates[0] - 1,
					this.coordinates[1]);
				break;
			default:
				throw "Invalid Robot Bearing";
				break;
		}
	}

	translateInstructions(instructions) {
		for (const instruction of instructions) {
			switch (instruction) {
				case "L": this.turnLeft(); break;
				case "R": this.turnRight(); break;
				case "A": this.advance(); break;
				default: throw "Invalid Instruction";
			}
		}
	}
}
