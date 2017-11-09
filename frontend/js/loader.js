let loadContent = () => {
    let header = new Promise((resolve, ) => { $('.header-container').load('/partial/header.html', () => resolve()); });
    let footer = new Promise((resolve, ) => { $('.footer-container').load('/partial/footer.html', () => resolve()); });
    let modals = new Promise((resolve, ) => { $('.modals').load('/partial/modals.html', () => resolve()); });

    return new Promise((resolve) => {
        Promise.all([header, footer, modals]).then(
            () => { resolve();}
        )
    });
};

module.exports = {
    loadContent: loadContent
};

