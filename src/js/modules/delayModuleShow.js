export default class ShowModule{
    constructor({moduleSelector, delayMS}) {
        this.module = document.querySelector(moduleSelector);
        this.delayMS = delayMS;
    }

    delayModule() {
        this.module.style.display = 'none'

        setTimeout(()=>{
            this.module.classList.add('animated', 'fadeIn');
            this.module.style.display = 'block';
        }, this.delayMS);
    }
}