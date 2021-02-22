const card = document.querySelectorAll('.card');

card.forEach((element) => {
    const isHaveThumbnail = element.children.item('card-image').children.item('.card-image-thumbnail');
    if (!isHaveThumbnail) {
        element.classList.add('not-image');
    }
});