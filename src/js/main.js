import Slider from './modules/slider';
import ShowVideo from './modules/showVideo';
import SliderAtPage from './modules/sliderAtPage';
import Accordion from './modules/accordion';

window.addEventListener('DOMContentLoaded', () => {

    'use strict';


    const show = new ShowVideo();
    show.play();

    

//home Page
    if ( document.URL === "http://localhost:4000/" ) {
        const slider = new Slider({
            'sliderWrapper': '.page', 
            'prevSlideBtn': null, 
            'nextSlideBtn': '.sidecontrol .next', 
            'firstSlide' : 5
        })
        slider.launch();


        const sliderFirstPage = new SliderAtPage({
            'sliderContainerSelector': '.showup__content-slider', 
            'nextBtnSelector': '.showup__next', 
            'prevBtnSelector': '.showup__prev',
            'activeClass' : 'card-active',
            'cardSelector': '.card'
         });
        sliderFirstPage.initiation();


        const sliderThirdPage = new SliderAtPage({
            'sliderContainerSelector': '.modules__content-slider', 
            'nextBtnSelector': '.slick-next', 
            'prevBtnSelector': '.slick-prev',
            'activeClass' : 'card-active',
            'cardSelector': '.card'
         });
         sliderThirdPage.initiation();

         const sliderFifthPage = new SliderAtPage({
            'sliderContainerSelector': '.feed__slider', 
            'nextBtnSelector': '.feed__slider .slick-next', 
            'prevBtnSelector': '.feed__slider .slick-prev',
            'activeClass' : 'feed__item-active',
            'cardSelector': '.feed__item'
         });
         sliderFifthPage.initiation();



        const officeroldAccordion = new Accordion('.officerold', '.plus');
        const officernewAccordion = new Accordion('.officernew', '.plus');
        officeroldAccordion.showItem();
        officernewAccordion.showItem();

        
    }




// Modules page
    if ( document.URL === "http://localhost:4000/modules" ) {
        const sliderModule = new Slider({
            'sliderWrapper': '.moduleapp', 
            'prevSlideBtn': '.prev', 
            'nextSlideBtn': '.next',
            'firstSlide' : 2
        })
        sliderModule.launch();

    }


//----------------------
});