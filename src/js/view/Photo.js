import Loading from "./Loading";

class Photo {
    constructor(photos) {
        this.photos = photos
    }
    markUp(photo) {
        const { id, pageURL, largeImageURL, webformatURL } = photo;
        return `
        <div class="pic" data-id="${id}" style="background-image: url(${webformatURL})" onclick="handleOpenImage('${pageURL}','${largeImageURL}');false;">
            ${this.copyRight()}
        </div>
        `
    }
    copyRight() {
        return`<a href="https://pixabay.com/" target="__blank" class="copy flex">From <img src="https://pixabay.com/static/img/logo_square.png" alt="Pixabay"></a>`
    }
    renderPhoto() {
        const photoWrapper = document.querySelector('.photo');
        this.photos.forEach(el => {
            photoWrapper.insertAdjacentHTML('beforeend', this.markUp(el))
        })
    }

}

export default Photo;

window.handleOpenImage = (pgURL, imgURL) => {
    const modal = document.querySelector('.img-modal');
    const markUp = `
    <div class="inner-modal bxs" style="background-image: url(${imgURL})">
    <button class="btn-close" onclick="closeModal();false;"><ion-icon name="close"></ion-icon></button>
    <div name="meta">
    <a href="https://pixabay.com/" target="__blank" class="copy flex">This Photo From <img src="https://pixabay.com/static/img/logo_square.png" alt="Pixabay"></a>
    <a href="${pgURL}" class="down-link" target="__blank">
    <button class="btn-download bxs" title="Download"><ion-icon name="cloud-download-outline"></ion-icon></button>
    </a>
    </div>
    </div>
    `
    Loading(true);
    setTimeout(() => Loading(false), 2000);
    modal.innerHTML = markUp;
    modal.style.display = "block";
}

window.closeModal = () => {
    const modal = document.querySelector('.img-modal');
    modal.innerHTML = '';
    modal.style.display = "none"
}