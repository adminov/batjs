const ourTeam = () => {
    const commandPhoto = document.querySelectorAll('.container')[7];
    const img = commandPhoto.querySelectorAll('img');

    const changingPhotos = (event) => {
        const target = event.target;
        if (target.classList.contains('command__photo')) {
            const lastSrc = target.src;

            target.src = target.dataset.img;
            target.dataset.img = lastSrc;
        }
    };

    img.forEach((item) => {
        item.addEventListener('mouseover', changingPhotos);
        item.addEventListener('mouseout', changingPhotos);
    })
};

export default ourTeam;