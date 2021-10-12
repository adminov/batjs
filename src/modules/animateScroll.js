const animateScroll = () => {
    const liClick = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        if (targetId === '#close') return;
        window.scrollTo({
            top: document.querySelector(targetId).offsetTop,
            behavior: 'smooth',
        });
    };
    const menuA = document.querySelectorAll('menu a'),
        mainA = document.querySelector('main a');

    mainA.addEventListener('click', liClick);
    menuA.forEach((elem) => {
        elem.addEventListener('click', liClick);
    });

};

export default animateScroll;