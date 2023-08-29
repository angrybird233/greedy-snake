class Food {
  element: HTMLElement;
  constructor(element: HTMLElement) {
    this.element = element;
  }
  get X(){
    return this.element.offsetLeft;
  }
  get Y() {
    return this.element.offsetTop;
  }
  createFood(){
    const left = Math.floor(Math.random()*40)*10;
    const top = Math.floor(Math.random()*40)*10;
    this.element.style.left = left + 'px';
    this.element.style.top = top + 'px';
  }

}

export default Food