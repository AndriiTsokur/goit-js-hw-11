const galleryList = document.querySelector('.gallery');

export default function renderGalleryMarkup({ data: { hits: pictures } }) {
	galleryList.innerHTML = pictures.reduce(
		(markupBundle, picture) => markupBundle + createCard(picture),
		''
	);
}

function createCard({
	webformatURL: preview,
	largeImageURL: original,
	tags: description,
	likes,
	views,
	comments,
	downloads,
}) {
	return `
		<div class="photo-card">
			<a class="gallery__link" href="${original}">
				<img
					class="gallery__image"
					src="${preview}"
					alt="${description}"
					loading="lazy" />
			</a>
			<div class="info">
				<p class="info-item">
					<b>Likes:</b>
					<br>${new Intl.NumberFormat('de-DE').format(likes)}
				</p>
				<p class="info-item">
					<b>Views:</b>
					<br>${new Intl.NumberFormat('de-DE').format(views)}
				</p>
				<p class="info-item">
					<b>Comments:</b>
					<br>${new Intl.NumberFormat('de-DE').format(comments)}
				</p>
				<p class="info-item">
					<b>Downloads:</b>
					<br>${new Intl.NumberFormat('de-DE').format(downloads)}
				</p>
			</div>
		</div>
	`;
}
