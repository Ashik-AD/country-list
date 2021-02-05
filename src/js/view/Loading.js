export default function Loading(isLaoding) {
    const container = document.querySelector('body');
    const markUp = `
    <div class="loader th-element dr">
        <div class="inner">
            <div class="flex">
                <span class="ld-text">Please wait</span>
                <span class="dots flex">
                    <b></b>
                    <b></b>
                    <b></b>
                </span>
            </div>
        </div>
    </div>
    `
    if (isLaoding) {
        container.insertAdjacentHTML('beforeend', markUp);
    }
    else {
        container.removeChild(container.lastElementChild);
    }
}