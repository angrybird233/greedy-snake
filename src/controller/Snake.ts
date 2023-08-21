interface Point {
  x: number;
  y: number;
}

enum Direction {
  "UP",
  "RIGHT",
  "DOWN",
  "LEFT"
}

class Snake {
  headPos: Point;
  bodyPos: Point[];
  direction: string;
  constructor() {
    this.headPos = {x: 0, y: 0}
    this.bodyPos = []
    this.direction = 'Right' 
  }
  // move snake
  move() {
    const prevHeadPos = {...this.headPos}
    const cellSize = 20;
    if(this.direction === 'Right'){
      this.headPos.x += cellSize;
    }
    if(this.direction === 'Left'){
      this.headPos.x -= cellSize;
    }
    if(this.direction === 'Up'){
      this.headPos.y -= cellSize;
    }
    if(this.direction === 'Down'){
      this.headPos.y += cellSize;
    }
    // add new head to body
    this.bodyPos.push(prevHeadPos)
    this.bodyPos.shift()
  }

  checkIsOverSide() {}

}

export default Snake;