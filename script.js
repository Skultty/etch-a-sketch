const grid = document.querySelector('.grid');
const button = document.querySelector('.button');

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    let div = document.createElement('div');
    grid.appendChild(div);
  }
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

createGrid(16);

grid.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'DIV') {
    e.target.style.backgroundColor = 'black';
  }
});

button.addEventListener('click', () => {
  let size = prompt('Enter the number of squares per side for the new grid:');
  size = parseInt(size);
  while (size > 100) {
    size = prompt('The number of squares per side should be 100 or less. Enter a new value:');
    size = parseInt(size);
  }
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  createGrid(size);
});