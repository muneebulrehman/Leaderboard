import './index.css';
import { setScore, getScore } from './modules/api';
import renderList from './modules/render';

const list = document.querySelectorAll('.each-score');
const nameEl = document.getElementById('name');
const scoreEl = document.getElementById('score');
const submit = document.querySelector('.submit');
const refresh = document.querySelector('.refresh');

submit.addEventListener('click', async () => {
	const name = nameEl.value.trim();
	const score = +scoreEl.value.trim();
	if (name && score) {
		await setScore({ user: name, score: score });
		nameEl.value = '';
		scoreEl.value = '';
	}
});

const getList = async () => {
	const data = await getScore();
	renderList(data);
};

refresh.addEventListener('click', () => {
	getList();
});
getList();
