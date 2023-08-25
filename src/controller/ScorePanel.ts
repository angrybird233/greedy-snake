class ScorePanel {
  score: number;
  level: number;
  levelStep: number;
  maxLevel: number;
  levelElement: HTMLElement;
  scoreElement: HTMLElement;
  constructor(levelElement: HTMLElement, scoreElement: HTMLElement) {
    this.score = 0;
    this.level = 1;
    this.levelStep = 20;
    this.maxLevel = 5;
    this.levelElement = levelElement
    this.levelElement = scoreElement
  }


  increaseScore(score: number): void {
    this.score += score;
    this.scoreElement.innerText = this.score.toString();
    if(this.score % this.levelStep === 0){
      this.levelUp();
    }
  }

  levelUp() : void {
    if(this.level < this.maxLevel){
      this.levelElement.innerText = this.level.toString()
    }
  }
}

export default ScorePanel;