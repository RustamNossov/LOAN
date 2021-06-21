export default class showMore{
    constructor (moduleSelector) {
        this.module = document.querySelectorAll('.module__info');
        //this.block = document.querySelectorAll('.module__info .msg');
    }

    show() {
        
        this.module.forEach(module => {
            
            module.querySelector('.plus__content').addEventListener('click', (e) => {
                if ( module.querySelector('path[d^="M5"]').style.display != 'none' ) {
                    module.querySelector('.msg').style.display = 'block';
                    module.querySelector('.msg').classList.add('animated', 'fadeIn');
                    module.querySelector('.msg').classList.remove('fadeOut');
                    module.querySelector('path[d^="M5"]').style.display = 'none';
                } else {
                    module.querySelector('.msg').classList.add('fadeOut');
                    module.querySelector('.msg').classList.remove('fadeIn');
                    module.querySelector('path[d^="M5"]').style.display = 'block';
                    setTimeout(()=>{
                        module.querySelector('.msg').style.display = 'none';
                    }, 500);
                }
            });
        })
    }
}