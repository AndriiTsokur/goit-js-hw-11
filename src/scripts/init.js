import handleSubmit from './handleSubmit';

const formRef = document.getElementById('search-form');

export default function init() {
	formRef.addEventListener('submit', handleSubmit);
}
