import './index.css';

const list = document.querySelectorAll('.each-score');

list.forEach((el, i) => {
  if (i % 2 === 0) {
    el.style.backgroundColor = 'white';
  } else el.style.backgroundColor = 'lightgrey';
});
