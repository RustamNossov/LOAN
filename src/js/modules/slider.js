
export default class Slider {
    constructor({sliderWrapper, prevSlideBtn, nextSlideBtn, firstSlide}) {
        this.sliderWrapper = document.querySelector(sliderWrapper);
        this.prevSlideBtn = document.querySelectorAll(prevSlideBtn);
        this.nextSlideBtn = document.querySelectorAll(nextSlideBtn);
        this.slides = this.sliderWrapper.children;
        this.currentSlideNumber = firstSlide-1 || 0;
        this.homeBtns = document.querySelectorAll('.sidecontrol');
    }

    
    render(exeptSlideNumber) {
        this.slides.forEach((element, i) => {
            if (i != exeptSlideNumber) {
                element.style.display = 'none';
                element.classList.add('animated', 'fadeOut');
                element.classList.remove('fadeIn');

            } else {
                element.style.display = 'block';
                element.classList.remove('fadeOut');
                element.classList.add('animated', 'fadeIn');
            }
        });
    }

    increaseSlideNumber() {
        this.currentSlideNumber += 1;
        if (this.currentSlideNumber >= this.slides.length) {
            this.currentSlideNumber = 0;
        }
    }

    decreaseSlideNumber() {
        this.currentSlideNumber -= 1;
        if (this.currentSlideNumber < 0) {
            this.currentSlideNumber = this.slides.length-1;
        }
    }

    launch() {
        this.showNextSlide();
        this.showPrevSlide();
        this.homeBtnClick();
    }

    showNextSlide() {
        this.render(this.currentSlideNumber);
        if (this.nextSlideBtn) {
            this.nextSlideBtn.forEach(btn => {
                btn.addEventListener( 'click', (e)=>{
                    e.preventDefault();
                    this.increaseSlideNumber();
                    this.render(this.currentSlideNumber);
                })
            })
        }
    }

    showPrevSlide() {
        if (this.prevSlideBtn) {
            this.prevSlideBtn.forEach(btn => {
                btn.addEventListener( 'click', ()=>{
                    this.decreaseSlideNumber();
                    this.render(this.currentSlideNumber);
                })
            })
        }
    }

    homeBtnClick() {
        this.homeBtns.forEach(btn => {
            btn.firstElementChild.addEventListener( 'click', (e) => {
                e.preventDefault();
                this.currentSlideNumber = 0;
                this.render(this.currentSlideNumber);
            })
        })
    }
}