import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export const createGallery = images => {
    const ul = document.querySelector('.gallery');
    const markup = images.map(image => `
        <li>
            <a href="${image.largeImageURL}">
                <img src="${image.webformatURL}" alt="${image.tags}" />
            </a>
            <p>Likes: ${image.likes}</p>
            <p>Views: ${image.views}</p>
            <p>Comments: ${image.comments}</p>
            <p>Downloads: ${image.downloads}</p>
        </li>
    `).join("");

    ul.insertAdjacentHTML("beforeend", markup);
    const lightbox = new SimpleLightbox('.gallery a');
    lightbox.refresh();
};

export const clearGallery = () => {
    const ul = document.querySelector('.gallery');
    ul.innerHTML = "";
}

export const showLoader = () => {
    const loader = document.querySelector('.loader');
    loader.classList.remove('hidden');
};

export const hideLoader = () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('hidden');
};