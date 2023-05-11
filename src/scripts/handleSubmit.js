import fetchQuery from './fetchQuery';
import showMessage from './showMessage';

export default function handleSubmit(e) {
	e.preventDefault();
	checkQuery(e);
}

function checkQuery(e) {
	const searchQuery = e.currentTarget.elements.searchQuery.value.trim();
	e.currentTarget.elements.searchQuery.blur();

	if (searchQuery) fetchQuery(searchQuery);
	else showMessage('inputBlank');
}
