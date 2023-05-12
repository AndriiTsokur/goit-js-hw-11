import showMessage from './showMessage';
import renderGalleryMarkup from './renderGalleryMarkup';
import axios from 'axios';
import launchSimpleLightbox from './launchSimpleLightbox';

const API_URL = 'https://pixabay.com/api/';
const apiOptions = {
	key: '36292494-f78d44a3f0f4a5930d1d79262',
	q: '',
	image_type: 'photo',
	orientation: 'horizontal',
	safesearch: true,
	per_page: 40,
	page: 1,
};

const loadMoreBtnRef = document.querySelector('.load-more');
let pictsCounter = null;

loadMoreBtnRef.addEventListener('click', loadMore);

function loadMore() {
	apiOptions.page++;
	pictsCounter += apiOptions.per_page;

	fetchQuery(apiOptions.q);
}

export default async function fetchQuery(query, startPage) {
	apiOptions.q = query;
	if (startPage) {
		apiOptions.page = 1;
		pictsCounter = apiOptions.per_page;
	}

	try {
		const result = await axios(API_URL, {
			params: apiOptions,
		});
		checkResult(result);
	} catch (error) {
		showMessage(error);
	}
}

function checkResult(result) {
	if (result.data.hits.length === 0) {
		showMessage('noMatches');
		return;
	}

	if (apiOptions.page === 1) {
		showMessage('success', result.data.totalHits);

		if (result.data.totalHits > apiOptions.per_page) {
			loadMoreBtnRef.classList.remove('hidden');
		}
	}

	if (apiOptions.page !== 1 && pictsCounter >= result.data.totalHits) {
		loadMoreBtnRef.classList.add('hidden');
		showMessage('limitReached');
	}

	renderGalleryMarkup(result);
	launchSimpleLightbox();

	if (apiOptions.page !== 1) smoothScroll();
}

function smoothScroll() {
	const { height: cardHeight } = document
		.querySelector('.gallery')
		.firstElementChild.getBoundingClientRect();

	window.scrollBy({
		top: cardHeight * 2,
		behavior: 'smooth',
	});
}
