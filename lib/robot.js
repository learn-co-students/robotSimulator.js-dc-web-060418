class Robot {
	constructor(){
		this.coordinates = [0,0];
		this.bearing = 'north';
	};

	setCoordinates(x,y){
		this.coordinates = [x,y];
	}

	setBearing(direction){
		const directions = ["north", "south", "east", "west"]
		if(directions.includes(direction)){
		this.bearing = direction;
		}else{
			throw "Invalid Robot Bearing"
		}
	}


	place(arg){
		this.setCoordinates(arg.x, arg.y);
		this.setBearing(arg.direction);
	}

	turnRight(){
		const directions = ["north", "east", "south", "west"];
		const currentIndex = directions.indexOf(this.bearing);
		if(currentIndex === 3){
			this.bearing = directions[0];
		}else{
			this.bearing = directions[currentIndex + 1];
		};
	}

	turnLeft(){
		const directions = ["north", "west", "south", "east" ];
		const currentIndex = directions.indexOf(this.bearing);
		if(currentIndex === 3){
			this.bearing = directions[0];
		}else{
			this.bearing = directions[currentIndex + 1];
		};
	}

	advance(){
		switch(this.bearing){
			case 'east':
			this.coordinates[0] += 1;
			break;
			case 'west':
			this.coordinates[0] -= 1;
			break;
			case 'north':
			this.coordinates[1] += 1;
			break;
			case 'south':
			this.coordinates[1] -= 1;
			break;
		}
	}

	translateInstructions(arg){
		const instructions = [];
		for (let i = 0; i<arg.length; i++){
		
			instructions.push(arg[i]);
		};
		for(const x of instructions){
			switch(x){
				case 'A':
				this.advance();
				break;
				case 'L':
				this.turnLeft();
				break;
				case 'R':
				this.turnRight();
				break;
			};
		};
	}


}
