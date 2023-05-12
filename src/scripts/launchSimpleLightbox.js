import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export default function launchSimpleLightbox() {
	const lightbox = new SimpleLightbox('.gallery a', {
		overlayOpacity: 0.85,
	});

	lightbox.on('show.simplelightbox');
}
