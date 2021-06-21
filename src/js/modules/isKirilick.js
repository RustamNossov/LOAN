const isKirilick = (selector) => {
    const textInputs = document.querySelectorAll(selector);

    textInputs.forEach( item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[а-яА-Я]/g, '');
        });
    });
}

export default isKirilick;