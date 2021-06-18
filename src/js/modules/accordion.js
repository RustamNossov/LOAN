export default class Accordion {
    constructor (containerSelector, btnSelector) {
        this.container = document.querySelector(containerSelector);
        this.cards = this.container.querySelectorAll('.officer__card-item');
        this.cardsAmount = this.cards.length;
        this.showMoreBtn = this.container.querySelectorAll(btnSelector);
        this.switchOffTrigger = 1;

    }

    cardsHidde() {
        this.cards.forEach((card, i) => {
            if (i!=this.cardsAmount-1) {
                card.style.display='none';
            }
        });

    }   


    showItem() {
        this.cardsHidde();
        this.showMoreBtn.forEach(btn => {
            console.log(btn);
            btn.addEventListener('click', ()=>{
                let trigger;
                this.switchOffTrigger += 1;                
                this.cards.forEach((card, i) => {
                    if (window.getComputedStyle(card)['display'] != 'flex' && !trigger) {
                        card.classList.add('animated', 'fadeIn');
                        card.style.display = 'flex';
                        trigger = 1;
                    }
                })
                console.log(this.switchOffTrigger, this.cardsAmount);
                if (this.switchOffTrigger === this.cardsAmount) {
                    this.cards[this.switchOffTrigger-1].style.display = 'none';
                }
            })
        })

    }

}