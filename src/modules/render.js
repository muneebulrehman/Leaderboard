const list = document.querySelector('.score-board');

const renderList = data => {
	list.innerHTML = '';

	if (data.length > 0) {
		const newData = data.sort((a, b) => b.score - a.score);
		newData.forEach((el, i) => {
			const img = i === 0 ? '🥇' : i === 1 ? '🥈' : '🥉';
			const imgIcon = i < 3 ? img : '';
			const addClass = i % 2 === 0 ? 'white' : 'grey';
			const html = `<li class="each-score ${addClass}"> <span>${el.user}:</span><span>${el.score}</span> ${imgIcon}</li>`;
			list.insertAdjacentHTML('beforeend', html);
		});
	}
};

export default renderList;
