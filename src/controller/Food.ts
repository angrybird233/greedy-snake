class Food {
  private x: number;
  private y: number;
  constructor() {
    this.x = 0;
    this.y = 0;
  }

  generatePosition() {
    this.x = Math.floor(Math.random()*440);
    this.y = Math.floor(Math.random()*440);
    return {
      x: this.x,
      y: this.y
    }
  }

}

export default Food