import Slider from './modules/slider';
import ShowVideo from './modules/showVideo';

window.addEventListener('DOMContentLoaded', () => {

    'use strict';


    const show = new ShowVideo();
    show.play();


    if ( document.URL === "http://localhost:4000/" ) {
        const slider = new Slider({
            'sliderWrapper': '.page', 
            'prevSlideBtn': null, 
            'nextSlideBtn': '.sidecontrol .next', 
            'firstSlide' : 6
        })
        slider.launch();


       


        
    }





    if ( document.URL === "http://localhost:4000/modules" ) {
        const sliderModule = new Slider({
            'sliderWrapper': '.moduleapp', 
            'prevSlideBtn': '.prev', 
            'nextSlideBtn': '.next',
            'firstSlide' : 1
        })
        sliderModule.launch();

    }


//----------------------
});