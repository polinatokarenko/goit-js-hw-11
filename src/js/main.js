import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./pixabay-api.js";
import { createGallery } from "./render-functions.js";
import { clearGallery } from "./render-functions.js";
import { showLoader } from "./render-functions.js";
import { hideLoader } from "./render-functions.js";

const form = document.querySelector('.form');
const input = document.querySelector('input');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    showLoader();

    const query = event.currentTarget.elements['search-text'].value.trim();

    try {
        const data = await getImagesByQuery(query);

        if (!data.hits || data.hits.length === 0) {
            iziToast.show({
                message: 'Sorry, there are no images matching your search query. Please try again!'
            });
            return;
        }

        createGallery(data.hits);

    } catch (error) {
        console.error(error);
        iziToast.error({
            message: 'Something went wrong, please try again later!'
        });
    } finally {
        hideLoader();
    }
});