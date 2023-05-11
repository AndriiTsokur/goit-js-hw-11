import handleSubmit from './handleSubmit';

const formRef = document.getElementById('search-form');
const inputRef = formRef.querySelector('[name="searchQuery"]');

export default function init() {
	formRef.addEventListener('submit', handleSubmit);

	inputRef.addEventListener('focus', e => {
		e.target.value = '';
	});
}
