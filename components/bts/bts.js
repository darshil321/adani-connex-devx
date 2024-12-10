document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    let expandedCard = null;

    cards.forEach(card => {
        card.addEventListener('click', function() {
            if (expandedCard && expandedCard !== this) {
                expandedCard.classList.remove('card-expanded');
            }
            
            if (this === expandedCard) {
                this.classList.remove('card-expanded');
                expandedCard = null;
            } else {
                this.classList.add('card-expanded');
                expandedCard = this;
            }
        });
    });
});