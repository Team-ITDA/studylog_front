const openButton = document.querySelector('.open-button');
const closeButton = document.querySelector('.close-button');
const reviewItems = document.querySelector('.review-items');
const createButton = document.querySelector('.create-button');

openButton.addEventListener('click', function (event) {
    closeButton.classList.remove('checked');
    reviewItems.classList.remove('close-checked');
    createButton.classList.remove('close-checked');
});

closeButton.addEventListener('click', function (event) {
    closeButton.classList.add('checked');
    reviewItems.classList.add('close-checked');
    createButton.classList.add('close-checked');
});