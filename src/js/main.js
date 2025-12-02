import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./pixabay-api.js";

const form = document.querySelector('.form');
const input = document.querySelector('input');
const button = document.querySelector('button');

form.addEventListener("submit", event => {
    event.preventDefault();
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
                return data.hits;
            }
        });
});