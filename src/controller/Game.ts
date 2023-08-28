import Food from './Food'
import Snake from './Snake'
import ScorePanel from './ScorePanel';
class Game {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  direction: string;
  isGameOver: boolean;

  XDirectionEvent: string[] = ["ArrowLeft","Left","ArrowRight",""]
  YDirectionEvent: string[] = ["ArrowDown","Down","ArrowUp","Up"]

  constructor(snakeElement: HTMLElement, foodElement: HTMLElement, scorePanelElement: HTMLElement, levelElement: HTMLElement ) {
    this.snake = new Snake(snakeElement);
    this.food = new Food(foodElement);
    this.scorePanel = new ScorePanel(levelElement,scorePanelElement);
    this.direction = 'right';
    this.isGameOver = false;
  }

  init() {
    document.addEventListener('keydown', this.keydownHanlder.bind(this));
    this.run();

  }
  changeDirection(direction: string){
    this.direction = direction;
    this.run()
  }

  keydownHanlder(event:KeyboardEvent) {
    console.log(event);
    if(this.direction === event.key) return;
    this.direction = event.key;
    // switch (event.key) {
      // case 'Up':
      //   case 'ArrowUp':
      //   case 'Down':
      //   case 'ArrowDown':
      //     if(this.YDirectionEvent.includes(this.direction)) return;
      //     this.direction = event.key;
      //     break;
      //   case 'Left':
      //   case 'ArrowLeft':
      //   case 'Right':
      //   case 'ArrowRight':
      //     if(this.XDirectionEvent.includes(this.direction)) return;
      //     this.direction = event.key;
      //     break;
    // }
  }

  run() {
    let X:number = this.snake.X;
    let Y:number = this.snake.Y;
    switch (this.direction) {
      case 'right':
        X += 20;
        break;
      case 'left':
        X -= 20;
        break;
      case 'up':
        Y -= 20;
        break;
      case 'down':
        Y += 20;
        break;
    }
    this.checkIsEatFood(X, Y);
    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (e) {
      this.isGameOver = true;
      alert(e.message+' Game Over')
    }

    if(!this.isGameOver){
      setTimeout(this.run.bind(this), 500);
    }
  }
  

  checkIsEatFood(X: number, Y: number) {
    if(X === this.food.x && Y === this.food.y) {
      this.food.createFood();
      this.snake.addBody()
      this.scorePanel.addScore();
    }
  }
}


export default Game;