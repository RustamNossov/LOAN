export default class ShowVideo {
    constructor () {
        this.playContainer = document.querySelectorAll('.play');
    }

    play() {
        this.playContainer.forEach(element => {
            element.querySelector('.play__circle').addEventListener( 'click', (e)=> {
                //console.log(e.parentNode);
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
                    frame.src=`https://www.youtube.com/embed/${element.getAttribute('data-url')}`;
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
                        console.log('sdfsdf')
                        if (e.target === document.querySelector('.play__wrapper')) {
                            document.querySelector('.play__wrapper').remove();
                        }
                })

            })
        })

    }

    



}