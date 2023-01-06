const grid = document.querySelector('.grid');

for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    document.querySelector('.grid').appendChild(div);
}

grid.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'DIV') {
    e.target.style.backgroundColor = 'black';
  }
});