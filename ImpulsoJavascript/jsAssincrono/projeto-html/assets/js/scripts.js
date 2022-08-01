const BTN_CAT = document.getElementById("change-cat")
const IMG_CAT = document.getElementById("cat")

const BASE_URL = 'https://thatcopy.pw/catAPI/rest/';
const getCats = async () => {
	try {
		const data = await fetch(BASE_URL, { mode: 'no-cors'});
		const json = await data.json();

		return json.webpurl;
	} catch (e){
		console.log(e.message);
	}
};

const loadImg = async () => {
	IMG_CAT.src = await getCats();
}

BTN_CAT.addEventListener('click', loadImg);

loadImg()