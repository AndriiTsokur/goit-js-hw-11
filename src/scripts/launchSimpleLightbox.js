import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

export default function launchSimpleLightbox() {
	if (lightbox) lightbox.destroy();

	lightbox = new SimpleLightbox('.gallery a', {
		overlayOpacity: 0.85,
	});

	lightbox.on('show.simplelightbox');
}
