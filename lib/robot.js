class Robot {
	//your solution here

	constructor(){
		this.coordinates = [0,0];
		this.bearing = "north";
	}

	setCoordinates(x, y) {
		this.coordinates = [x, y];
	}

	setBearing(bearing) {
		switch (bearing.toLowerCase()) {
			case "north":
			case "south":
			case "east":
			case "west":
				this.bearing = bearing.toLowerCase();
				break;
			default:
				throw new Error("Invalid Robot Bearing")
				break;
		}
	}

	place(args) {
		this.setCoordinates(args.x, args.y)
		this.setBearing(args.direction)
	}

	turnRight() {
		switch (this.bearing) {
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
				this.setBearing("north")
				break;
			default:
				break;
		}
	}

	turnLeft() {
		switch (this.bearing) {
			case "north":
				this.setBearing("west");
				break;
			case "west":
				this.setBearing("south");				
				break;
			case "south":
				this.setBearing("east");
				break;
			case "east":
				this.setBearing("north")
				break;
			default:
				break;
		}
	}

	advance(){
		switch (this.bearing) {
			case "north":
				this.setCoordinates(this.coordinates[0], this.coordinates[1] + 1);
				break;
			case "west":
				this.setCoordinates(this.coordinates[0] - 1, this.coordinates[1]);
				break;
			case "south":
				this.setCoordinates(this.coordinates[0], this.coordinates[1] - 1);
				break;
			case "east":
				this.setCoordinates(this.coordinates[0] + 1, this.coordinates[1]);
				break;
			default:
				break;
		}
	}

	translateInstructions(instructions) {
		for (let index = 0; index < instructions.length; index++) {
		
			switch (instructions[index]) {
				case 'A':
					this.advance()
					break;
				case 'R':
					this.turnRight();
					break;
				case 'L':
					this.turnLeft()
					break;
				default:
					break;
			}
		}		
	}
}
