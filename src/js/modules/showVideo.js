export default class ShowVideo {
    constructor () {
        this.playBtn = document.querySelectorAll('.play__circle');
    }
    
    play() {
        this.playBtn.forEach((element, i) => {
           if (!element.classList.contains('closed')) {

                element.addEventListener( 'click', (e)=> {
                   
                    this.createFrame(element);

                    if (i <= this.playBtn.length-2 && this.playBtn[i+1].classList.contains('closed')) {
                        console.log(this.playBtn[i+1]);

                        this.playBtn[i+1].closest('.module__video-item').style.opacity = 1;
                        this.playBtn[i+1].closest('.module__video-item').style.filter = 'none';
                        this.playBtn[i+1].innerHTML = ` <svg viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 8L0 16V0L14 8Z" fill="#6D53AF"/>
                                </svg>`
                        this.playBtn[i+1].addEventListener( 'click', (e)=> {
                            this.createFrame(this.playBtn[i+1]);
                        });
                        this.playBtn[i+1].classList.remove('closed');

                    }
                })
           }
        })

    }

    createFrame(element) {
            let playWrapper = document.createElement('div');
            playWrapper.classList.add('play__wrapper');
            playWrapper.style.cssText = `
            position: fixed; 
            left: 0;
            top:0;
            width: 100vw; 
            height: 100vh; 
            background-color: rgba(0, 0, 0, 0.703);
            z-index: 50;
            `;
        document.querySelector('body').appendChild(playWrapper);
        const left = +window.getComputedStyle(document.querySelector('.play__wrapper'))['width'].slice(0,-2) / 2 - 280,
            top = +window.getComputedStyle(document.querySelector('.play__wrapper'))['height'].slice(0,-2) / 2 - 156;
        let frame = document.createElement('iframe');
            frame.width = '560';
            frame.height = '315';
            frame.src=`https://www.youtube.com/embed/${element.parentNode.getAttribute('data-url')}`;
            frame.title = "YouTube video player";
            frame.frameborder="0";
            frame.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            frame.allowfullscreen;
            frame.style.cssText = `
            position: fixed;
            left: ${left}px;
            top: ${top}px;
            `;


            // //frame.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${element.getAttribute('data-url')}" 
            // title="YouTube video player" frameborder="0" 
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            // allowfullscreen></iframe>`
        
        playWrapper.appendChild(frame);

        document.querySelector('.play__wrapper').addEventListener('click', (e) => {
            if (e.target === document.querySelector('.play__wrapper')) {
                document.querySelector('.play__wrapper').remove();
            }
        })
    };

    



}