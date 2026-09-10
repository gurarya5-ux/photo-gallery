document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');

    function createGalleryItem(photo) {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';

        const img = document.createElement('img');
        img.src = photo.url;
        img.alt = photo.title;
        img.loading = 'lazy';

        const overlay = document.createElement('div');
        overlay.className = 'overlay';

        const title = document.createElement('h3');
        title.textContent = photo.title;

        const description = document.createElement('p');
        description.textContent = photo.description;

        overlay.appendChild(title);
        overlay.appendChild(description);

        galleryItem.appendChild(img);
        galleryItem.appendChild(overlay);

        return galleryItem;
    }

    function renderGallery() {
        gallery.innerHTML = '';

        photos.forEach(photo => {
            const galleryItem = createGalleryItem(photo);
            gallery.appendChild(galleryItem);
        });
    }

    renderGallery();
});
