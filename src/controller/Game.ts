import Food from './Food'
import Snake from './Snake'
import ScorePanel from './ScorePanel';
class Game {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  constructor(snakeElement: HTMLElement, foodElement: HTMLElement, scorePanelElement: HTMLElement, levelElement: HTMLElement ) {
    this.snake = new Snake(snakeElement);
    this.food = new Food(foodElement);
    this.scorePanel = new ScorePanel(levelElement,scorePanelElement);
  }

  init() {
  }
}


export default Game;