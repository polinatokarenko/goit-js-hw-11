import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./pixabay-api.js";
import { createGallery } from "./render-functions.js";
import { clearGallery } from "./render-functions.js"

const form = document.querySelector('.form');
const input = document.querySelector('input');
const button = document.querySelector('button');

form.addEventListener("submit", event => {
    event.preventDefault();
    clearGallery();
    const query = input.value.trim();

    if (query === "") {
        return;
    }

    getImagesByQuery(query)
    .then(data => {
        if (!data.hits || data.hits.length === 0) {
            iziToast.show({
                message: 'Sorry, there are no images matching your search query. Please try again!'
            });
        } else {
            createGallery(data.hits);
        }
    })
    .catch(error => {
        console.error(error);
        iziToast.error({
            message: 'Something went wrong, please try again later!'
        });
    });

});