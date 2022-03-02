const list = document.querySelector('.score-board');

const renderList = (data) => {
  list.innerHTML = '';

  if (data.length > 0) {
    const newData = data.sort((a, b) => a.score - b.score);
    newData.forEach((el, i) => {
      const addClass = i % 2 === 0 ? 'white' : 'grey';
      const html = `<li class="each-score ${addClass}"><span>${el.user}:</span><span>${el.score}</span></li>`;
      list.insertAdjacentHTML('beforeend', html);
    });
  }
};

export default renderList;
