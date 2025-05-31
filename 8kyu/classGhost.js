class Ghost{
  constructor(color){
    this.color = Ghost.getRandomColor();
  }
  static getRandomColor(){
    const colors = ["white", "yellow", "purple", "red"];
    return colors[Math.floor(Math.random() * colors.length )]
  }
}
// return a random color when instantiated