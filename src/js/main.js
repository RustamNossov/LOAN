import Slider from './modules/slider';
import ShowVideo from './modules/showVideo';
import SliderAtPage from './modules/sliderAtPage';
import Accordion from './modules/accordion';
import showMore from './modules/showMore';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {

    'use strict';


    const show = new ShowVideo();
    show.play();

    

//home Page
    if ( document.URL === "http://192.168.64.5/LOAN/" ) {
        const slider = new Slider({
            'sliderWrapper': '.page', 
            'prevSlideBtn': null, 
            'nextSlideBtn': '.sidecontrol .next', 
            'firstSlide' : 4,
            'page': 'home'
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
            'cardSelector': '.card',
            'autoChange': 'yes'
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


        forms('.join .form');
        forms('.schedule .form');

        
    }




// Modules page
    if ( document.URL === "http://localhost:4000/modules" ) {
        const sliderModule = new Slider({
            'sliderWrapper': '.moduleapp', 
            'prevSlideBtn': '.prev', 
            'nextSlideBtn': '.next',
            'firstSlide' : 1,
            'page': 'modules'
        })
        sliderModule.launch();

    }

    const showingUp = new showMore('.module__info-show .plus__content');
    showingUp.show();

//----------------------
});