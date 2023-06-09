import { Notify } from 'notiflix/build/notiflix-notify-aio';

const notifyOpts = {
	width: '60%',
	position: 'center-center',
	clickToClose: true,
	pauseOnHover: false,
	fontSize: '18px',
	cssAnimationStyle: 'zoom',
	showOnlyTheLastOne: true,
	fontFamily: 'Roboto Condensed',
	warning: {
		background: '#e69842',
	},
	failure: {
		background: '#d9242c',
	},
};

export default function showMessage(reason, totalHits) {
	switch (reason) {
		case 'success':
			Notify.success(`Hooray! We found ${totalHits} images!`, notifyOpts);
			break;

		case 'inputBlank':
			Notify.warning(
				'The search field cannot be empty - be more specific!',
				notifyOpts
			);
			break;

		case 'noMatches':
			Notify.warning(
				'Sorry, there are no images matching your search query. Please try again',
				notifyOpts
			);
			break;

		case 'limitReached':
			Notify.info(
				"We're sorry, but you've reached the end of search results",
				notifyOpts
			);
			break;

		default:
			Notify.failure('ERROR: No connection to the source host', notifyOpts);
	}
}
