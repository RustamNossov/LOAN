import postData from '../services/services';
import checkNumInputs from './checkNumInputs';
import isKirilick from './isKirilick';

const forms = (formSelector) => {
    const allForms = document.querySelectorAll(formSelector),
            message = {
                loading: 'loading...', //'assets/img/form/spinner.svg',
                success: 'Спасибо! Скоро мы с вами свяжемся.',
                failure: 'Что-то пошло не так. Попробуйте позже.'
            };

    checkNumInputs('[name="phone"]');
    isKirilick('[name="name"]');
    isKirilick('[for="name"]');
    isKirilick('[name="email"]');

    allForms.forEach( form => {
        bindPostData(form);
    })

    function bindPostData(form) {
        form.addEventListener( 'submit', (e)=>{
            e.preventDefault();
            

                let statusMessage = document.createElement('div');
                statusMessage.classList.add('status');
                statusMessage.innerText = message.loading;
                statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
                padding-top: 10px;
                `;
                form.parentNode.appendChild(statusMessage);
                

                const formData = new FormData(form);
                
                postData('assets/server.php', formData)
                    .then( data => {
                        
                        if (data.status == 200) {
                            console.log(data.text());
                           // form.style.display = 'none';
                            statusMessage.innerText = message.success;
                        } else {
                            //form.style.display = 'none';
                            statusMessage.innerText = message.failure;
                        }
                    })
                    .catch(()=> {
                       // form.style.display = 'none';
                        statusMessage.innerText = message.failure;
                        form.reset();
                    })
                    .finally(() => {
                        setTimeout(()=>{
                            // document.querySelectorAll('.popup').forEach( p => {
                            //     p.style.display = 'none';
                            // });
                            //document.querySelector('body').style.overflow = 'scroll';
                            statusMessage.remove();
                            //form.style.display = 'block';

                        }, 3000);
                        form.reset();
                        

                   });

            

            
            
        })
    }




}

export default forms;