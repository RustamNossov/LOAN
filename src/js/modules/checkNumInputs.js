const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach( item => {
        item.addEventListener('input', () => {
            let mask = item.value.replace(/[^0-9]/g, ''),
                rowLength = mask.length;

            if (rowLength <=1) {
                mask = '+' + mask;
            }
            if (rowLength >1 && rowLength <=4)  {
                mask = '+1'  + ' (' + mask.substring(1);
            }
            if (rowLength > 4 && rowLength <=11)  {
                mask = '+' + mask[0] + ' (' + mask.substring(1, 4) + ') ' + mask.substring(4);
            }
            if (rowLength > 11) {
                mask = '+' + mask[0] + ' (' + mask.substring(1, 4) + ') ' + mask.substring(4, 11);
            }
           
            
            
            item.value = mask;
            
        });
    });

};

export default checkNumInputs;