class Robot {
	constructor(){
		this.coordinates = [0,0]
		this.cardinalDirections = ['north','east','south','west']
		this.bearing = this.cardinalDirections[0]
	}
	setCoordinates(x,y){
		this.coordinates = [x,y]
	}
	setBearing(direction){
		if (!this.cardinalDirections.includes(direction)) 
			throw "Invalid robot bearing"
		else{
			while (this.bearing!==direction) {
				this.turnRight()
			}
		}
			
	}
	place(placementObj){
		this.setCoordinates(placementObj.x,placementObj.y)
		this.setBearing(placementObj.direction)
	}
	turnRight(){
		this.cardinalDirections.push(this.cardinalDirections.shift())
		this.bearing = this.cardinalDirections[0]
	}
	turnLeft(){
		this.cardinalDirections.unshift(this.cardinalDirections.pop())
		this.bearing = this.cardinalDirections[0]
	}
	advance(){
		if (this.bearing === 'north')
			this.coordinates = [this.coordinates[0],this.coordinates[1]+1]
		else if  (this.bearing === 'east')
			this.coordinates = [this.coordinates[0]+1, this.coordinates[1]]
		else if (this.bearing === 'south')
			this.coordinates = [this.coordinates[0], this.coordinates[1]-1]
		else 
			this.coordinates = [this.coordinates[0]-1, this.coordinates[1]]
	}
	translateInstructions(instructionStr){
		[...instructionStr].forEach((instruction)=>{
			if (instruction === "L")
				this.turnLeft()
			else if (instruction === "R")
				this.turnRight()
			else 
				this.advance()
		})
	}
}
