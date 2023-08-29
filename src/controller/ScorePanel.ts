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
    this.scoreElement = scoreElement
  }


  addScore(): void {
    this.score ++;
    this.scoreElement.innerText = '分数：'+this.score.toString()+'分';
    if(this.score % this.levelStep === 0){
      this.levelUp();
    }
  }

  levelUp() : void {
    if(this.level < this.maxLevel){
      this.levelElement.innerText = "等级："+this.level.toString()+' 级'
    }
  }
}

export default ScorePanel;