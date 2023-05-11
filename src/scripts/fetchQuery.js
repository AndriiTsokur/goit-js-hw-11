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
};

export default async function fetchQuery(query) {
	apiOptions.q = query;

	try {
		const result = await axios.get(API_URL, {
			params: apiOptions,
		});
		checkResult(result);
	} catch (error) {
		showMessage(error);
	}
}

function checkResult(result) {
	if (result.data.hits.length === 0) showMessage('noMatches');
	else showMessage('success', result.data.totalHits);

	renderGalleryMarkup(result);
	launchSimpleLightbox();
}
