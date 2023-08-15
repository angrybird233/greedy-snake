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
  bodyPos: Point[];
  direction: string;
  constructor(bodyPos: Point[], direction: string) {
    this.bodyPos = bodyPos
    this.direction = direction;
  }
  
  // move snake
  move() {
    
  }

  grow() {

  }

  checkIsOverSide() {}

}