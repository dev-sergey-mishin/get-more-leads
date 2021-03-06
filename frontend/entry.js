require('./less/import.less');

let loader = require('./js/loader.js');

$(document).ready(() => {
    loader.loadContent().then(
        () => {
            require('./js/slider.js');
            require('./js/form.js');
            require('./js/blog-form.js');
            require('./js/btn-container.js');
            require('./js/modal-form.js');
            require('./js/metrica.js');

            $('main').css('display', 'block');
            $('.loader-container').css('display', 'none');
        }
    );
});

window.onload = function () {
    let allImages = document.querySelectorAll('img');
    Array.from(allImages).map((image) => {
        if (image.dataset.src) {
            image.src = image.dataset.src;
        }
    });
};


