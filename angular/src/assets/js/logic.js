export class Logic {
  constructor() {

  }

  start() {
    const field = fieldsSmall[Math.floor(Math.random() * fieldsSmall.length)];
    const game = document.createElement('div');
    game.innerHTML = field;
    console.log(game);
    document.querySelector('#maze_container').appendChild(game);
    const maze = new Mazing();
  }
}
