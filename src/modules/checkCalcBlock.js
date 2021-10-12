const checkCalcBlock = () => {
    const calcBlock = document.querySelector('.calc-block');
    const input = calcBlock.querySelectorAll('input');

    input.forEach((item) => {
        item.addEventListener('blur', (event) => {
            if (event.target.type === 'text') {
                event.target.value = event.target.value.replace(/\D/g, '');
            }
        });
    });
};

export default checkCalcBlock;