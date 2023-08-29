
class Snake {
  element: HTMLElement;
  head: HTMLElement;
  bodies: HTMLCollection;
  constructor(element: HTMLElement, ) {
    this.element = element;
    this.head = document.querySelector('#snake-head') as HTMLElement;
    this.bodies = document.querySelectorAll('#snake-body-item') as unknown as HTMLCollection;
  }

  get X() {
    return this.head.offsetLeft;
  }
  get Y(){
    return this.head.offsetTop;
  }

  set X(value) {
    if(!value) return;
    if(value <0 || value > 420){
      throw new Error('蛇撞墙了');
    }
    this.head.style.left = value + 'px';
    this.moveBody()

  }

  set Y(value) {
    if(!value) return;
    if(value <0 || value > 420){
      throw new Error('蛇撞墙了');
    }
    this.head.style.top = value + 'px';
    this.moveBody()
  }

  // 移动身体
  moveBody() {
   for (let index = 0; index < this.bodies.length; index++) {
    const X = (this.bodies[index - 1] as HTMLElement).offsetLeft;
    const Y = (this.bodies[index - 1] as HTMLElement).offsetTop;
    (this.bodies[index] as HTMLElement).style.left = X + 'px';
    (this.bodies[index] as HTMLElement).style.top = Y + 'px';
   }
  }

  addBody() {
    const div = document.createElement('div');
    div.className = 'snake-body-item';
    this.element.insertAdjacentElement('beforeend', div)
  }

  //检查头是否碰到身体
  checkHeadBodyCollision() {
    for (let index = 0; index < this.bodies.length; index++) {
      const bd = this.bodies[index] as HTMLElement;
      if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
        throw new Error('蛇撞到自己了')
      }
    }
  }
}

export default Snake;