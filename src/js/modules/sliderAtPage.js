export default class SliderAtPage {
    constructor({sliderContainerSelector, nextBtnSelector, prevBtnSelector, activeClass, cardSelector, autoChange}) {
        this.container = document.querySelector(sliderContainerSelector);
        this.slides = this.container.querySelectorAll(cardSelector);
        this.slidesAmount = this.slides.length;
        this.next = document.querySelector(nextBtnSelector);
        this.prev = document.querySelector(prevBtnSelector);
        this.currentSlide = 0;
        this.offset = 0;
        this.activeClass = activeClass;
        this.autoChange = autoChange;

    }

    initiation() {
        this.slides.forEach(slide => {
            slide.style.transition = 'none';
         })
        this.container.style.display = 'flex';
        this.container.style.overflow = 'hidden';
        this.slides.forEach( (slide, i) => {
            slide.style.flexShrink = 0;
            slide.style.order = i;
        })    

        this.clickNext();
        this.clickPrev();
        this.removeActivClass();
        this.addActivClass();

        if (this.autoChange === 'yes') {
            setInterval(()=>{
                this.next.click();
            }, 5000);
        };
    }

    moveSlideLeft(offset) {
        this.slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${offset}px)`;
        })
    }


    clickNext() {
        this.next.addEventListener( 'click', ()=>{
            this.removeActivClass();
            this.offset = -(+window.getComputedStyle(this.slides[this.currentSlide])['marginRight'].slice(0,-2) +
            +window.getComputedStyle( this.slides[this.currentSlide])['marginLeft'].slice(0,-2) +
            +window.getComputedStyle( this.slides[this.currentSlide])['width'].slice(0,-2)); 
            this.currentSlide += 1;

            this.currentSlide > this.slidesAmount-1 ? this.currentSlide = 0 : this.currentSlide;
            
            this.moveSlideLeft(this.offset)
            this.addActivClass()

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
        })
        
    }

    clickPrev() {
        this.prev.addEventListener( 'click', ()=>{
            this.removeActivClass();
            this.offset = (+window.getComputedStyle(this.slides[this.currentSlide])['marginRight'].slice(0,-2) +
            +window.getComputedStyle( this.slides[this.currentSlide])['marginLeft'].slice(0,-2) +
            +window.getComputedStyle( this.slides[this.currentSlide])['width'].slice(0,-2));
            this.currentSlide -= 1;

            this.currentSlide < 0 ? this.currentSlide = this.slidesAmount-1 : this.currentSlide;
           

            this.slides.forEach(slide => {
                slide.style.transition = 'none';
                if (window.getComputedStyle(slide)['order'] == this.slidesAmount-1) {
                    slide.style.order = -1;
                } 
            });
            
            this.moveSlideLeft(-this.offset);
            this.addActivClass();
            
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
            
                
            });

        
    }


    removeActivClass() {
        this.slides.forEach(slide => {
                slide.classList.remove(this.activeClass)
            })
    }

    addActivClass() {
        this.slides[this.currentSlide].classList.add(this.activeClass);
    }


}