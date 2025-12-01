import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const delayInput = document.querySelector('input[type="number"]');

form.addEventListener("submit", event => {
    event.preventDefault();

    const selected = document.querySelector('input[name="state"]:checked');

    if (!selected) {
        iziToast.error({
            message: "Please select promise state!"
        });
        return;
    }

    const delay = Number(delayInput.value);

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (selected.value === "fulfilled") {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });

    promise
        .then(() => {
            iziToast.show({
                message: `✅ Fulfilled promise in ${delay}ms`
            });
        })
        .catch(() => {
            iziToast.show({
                message: `❌ Rejected promise in ${delay}ms`
            });
        });

    form.reset();
});
