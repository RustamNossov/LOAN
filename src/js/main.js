import Slider from './modules/slider';
import ShowVideo from './modules/showVideo';
import SliderAtPage from './modules/sliderAtPage';
import Accordion from './modules/accordion';

window.addEventListener('DOMContentLoaded', () => {

    'use strict';


    const show = new ShowVideo();
    show.play();

    


    if ( document.URL === "http://localhost:4000/" ) {
        const slider = new Slider({
            'sliderWrapper': '.page', 
            'prevSlideBtn': null, 
            'nextSlideBtn': '.sidecontrol .next', 
            'firstSlide' : 2
        })
        slider.launch();


        const sliderFirstPage = new SliderAtPage({
            'sliderContainerSelector': '.showup__content-slider', 
            'nextBtnSelector': '.showup__next', 
            'prevBtnSelector': '.showup__prev'
         });
        sliderFirstPage.initiation();



        const officeroldAccordion = new Accordion('.officerold', '.plus');
        const officernewAccordion = new Accordion('.officernew', '.plus');
        officeroldAccordion.showItem();
        officernewAccordion.showItem();



       


        
    }





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