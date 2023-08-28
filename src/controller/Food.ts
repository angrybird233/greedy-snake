class Food {
  x: number;
  y: number;
  element: HTMLElement;
  constructor(element: HTMLElement) {
    this.x = 0;
    this.y = 0;
    this.element = element;
  }

  createFood(){
    this.x = Math.floor(Math.random()*400);
    this.y = Math.floor(Math.random()*400);
    this.element.style.left = this.x + 'px';
    this.element.style.top = this.y + 'px';
  }

}

export default Food