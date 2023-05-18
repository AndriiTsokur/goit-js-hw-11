import fetchQuery from './fetchQuery';
import showMessage from './showMessage';

const galleryList = document.querySelector('.gallery');
const loadMoreBtnRef = document.querySelector('.load-more');

export default function handleSubmit(e) {
	prepareStage(e);
	checkQuery(e);
}

function prepareStage(e) {
	e.preventDefault();
	galleryList.innerHTML = '';
	loadMoreBtnRef.classList.add('hidden');
}

function checkQuery(e) {
	const searchQuery = e.currentTarget.elements.searchQuery.value.trim();

	if (searchQuery) fetchQuery(searchQuery, true);
	else showMessage('inputBlank');
}
