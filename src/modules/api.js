const key = 'JUyd7IruRAoCCkTWXR1P';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${key}/scores`;
const setScore = async score => {
	try {
		await fetch(url, {
			method: 'POST',
			body: JSON.stringify(score),
			headers: { 'Content-type': 'application/json; charset=UTF-8' },
		});
	} catch (err) {
		throw err;
	}
};
const getScore = async () => {
	try {
		const fetchData = await fetch(url);
		const { result } = await fetchData.json();
		return result;
	} catch (err) {
		throw err;
	}
};

export { setScore, getScore };
