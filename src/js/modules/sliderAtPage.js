export default class SliderAtPage {
    constructor({sliderContainerSelector, nextBtnSelector, prevBtnSelector}) {
        this.container = document.querySelector(sliderContainerSelector);
        this.slides = this.container.querySelectorAll('a');
        this.slidesAmount = this.slides.length;
        this.next = document.querySelector(nextBtnSelector);
        this.prev = document.querySelector(prevBtnSelector);
        this.currentSlide = 0;
        this.offset = 0;

    }

    initiation() {
        this.slides.forEach(slide => {
            slide.style.transition = 'none';
         })
        this.container.style.display = 'flex';
        this.container.style.overflow = 'hidden';
        this.slides.forEach( (slide, i) => {
            console.log('shrink')
            slide.style.flexShrink = 0;
            slide.style.order = i;
        })    

        this.clickNext();
        this.clickPrev();
        this.switchOpacity()
    }

    moveSlideLeft(offset) {
        this.slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${offset}px)`;
        })
    }


    clickNext() {
        this.next.addEventListener( 'click', ()=>{
            this.currentSlide += 1;
            this.offset = -331;
                       
            this.currentSlide > this.slidesAmount-1 ? this.currentSlide = 0 : this.currentSlide;
            
            // console.log(this.currentSlide)
            this.moveSlideLeft(this.offset)
            

            let x = 0;
            

            setTimeout(() => {
                this.slides.forEach(slide => {
                    slide.style.transition = 'none';
                    if (window.getComputedStyle(slide)['order'] =='0') {
                     slide.style.order = this.slidesAmount - 1;
                    }
                 })
                 for (let i=this.currentSlide; i<=this.slidesAmount-1; i++) {
                     this.slides[i].style.order = x;
                     x++;
                 }
                 for (let i=0; i<this.currentSlid; i++) {
                     this.slides[i].style.order = x;
                     x++;
                 }
                 this.offset = 0;
                 this.moveSlideLeft(this.offset);
                
            }, 500);
            
            this.slides.forEach(slide => {
                slide.style.transition = '.5s all';
             })
            this.switchOpacity();
        })
        
    }

    clickPrev() {
        this.prev.addEventListener( 'click', ()=>{
            this.currentSlide -= 1;
            this.offset = 331;
                       
            this.currentSlide < 0 ? this.currentSlide = this.slidesAmount-1 : this.currentSlide;
            // console.log(this.currentSlide);
           

            this.slides.forEach(slide => {
                slide.style.transition = 'none';
                if (window.getComputedStyle(slide)['order'] == this.slidesAmount-1) {
                    slide.style.order = -1;
                } 
            });

            this.moveSlideLeft(-this.offset);

            
            let x = 0;
            for (let i=this.currentSlide; i<=this.slidesAmount-1; i++) {
                    this.slides[i].style.order = x;
                    x++;
                }
                for (let i=0; i<this.currentSlide; i++) {
                    this.slides[i].style.order = x;
                    x++;
                };
            
                setTimeout(()=>{
                    this.offset = 0;
                    this.slides.forEach(slide => {
                        slide.style.transition = '.5s all';
                    });

                    this.moveSlideLeft(this.offset);
                }, 100);
            
                this.switchOpacity();
            });

        
    }


    switchOpacity() {
        console.log(this.currentSlide);
        this.slides.forEach(slide => {
            slide.querySelector('.card__title').style.opacity = '0.4';
            slide.querySelector('.card__controls-count').style.opacity = '.4';
            slide.querySelector('.card__controls-arrow').style.opacity = '0';
        })
        this.slides[this.currentSlide].querySelector('.card__title').style.opacity = '1';
        this.slides[this.currentSlide].querySelector('.card__controls-count').style.opacity = '1';
        this.slides[this.currentSlide].querySelector('.card__controls-arrow').style.opacity = '1';


    }


}