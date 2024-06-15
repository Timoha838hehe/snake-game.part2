class Snake {
  constructor() {
    this.segments = [
      [1, 6],
      [1, 7],
      [1, 8],
      [1, 9],
      [2, 9]
    ];
    this.direction = 'right'; // можливі значення: 'up', 'down', 'left', 'right'
  }
}

class GameStats {
  constructor() {
    this.snakeLength = 5;
    this.freeCells = 95; // 100 - initial snake length
    this.difficultyLevel = 'Easy'; // можна змінювати рівень складності
  }
}

function initGame() {
  const gameBoard = document.getElementById('game-board');

  // Створити 10x10 сітку
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    gameBoard.appendChild(cell);
  }

  // Створити екземпляри класів
  const snake = new Snake();
  const gameStats = new GameStats();

  // Оновити інформацію про гру на сторінці
  document.getElementById('snake-length').innerText = `Snake Length: ${gameStats.snakeLength}`;
  document.getElementById('free-cells').innerText = `Free Cells: ${gameStats.freeCells}`;
  document.getElementById('difficulty-level').innerText = `Difficulty Level: ${gameStats.difficultyLevel}`;

  // Відобразити змійку на полі
  const cells = document.querySelectorAll('.cell');
  snake.segments.forEach(([row, col]) => {
    const index = row * 10 + col;
    cells[index].classList.add('snake');
  });
}

// Ініціалізувати гру при завантаженні сторінки
window.onload = initGame;
