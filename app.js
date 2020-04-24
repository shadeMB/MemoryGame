document.addEventListener('DOMContentLoaded', () => {
    
    const grid = document.querySelector('.grid');
    const score = document.querySelector('#score');
    const message = document.querySelector('#message');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    score.textContent = "0";
    message.textContent = "Good luck!";

    // Card Options
    const cardsArray = [
        {
            'name': 'banana',
            'img': 'img/banana.jpg'
        },
        {
            'name': 'banana',
            'img': 'img/banana.jpg'
        },
        {
            'name': 'cherry',
            'img': 'img/cherry.jpg'
        },
        {
            'name': 'cherry',
            'img': 'img/cherry.jpg'
        },
        {
            'name': 'lemon',
            'img': 'img/lemon.jpg'
        },
        {
            'name': 'lemon',
            'img': 'img/lemon.jpg'
        },
        {
            'name': 'peach',
            'img': 'img/peach.jpg'
        },
        {
            'name': 'peach',
            'img': 'img/peach.jpg'
        },
        {
            'name': 'pineapple',
            'img': 'img/pineapple.jpg'
        },
        {
            'name': 'pineapple',
            'img': 'img/pineapple.jpg'
        },
        {
            'name': 'orange',
            'img': 'img/orange.jpg'
        },
        {
            'name': 'orange',
            'img': 'img/orange.jpg'
        }
    ];

    cardsArray.sort(() => 0.5 - Math.random());

    // Create board
    function createBoard() {
        for (let i=0; i<cardsArray.length; i++){
            let card = document.createElement('img');
            card.setAttribute('src','img/grey.jpg');
            card.setAttribute('data-id', i);
            console.log(card);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    };

    // Check for matches
    function checkForMatch() {
        let cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1] && optionOneId != optionTwoId) {
            message.textContent = "You found a match!";
            cards[optionOneId].setAttribute('src', 'img/checkmark.png');
            cards[optionTwoId].setAttribute('src', 'img/checkmark.png');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'img/grey.jpg');
            cards[optionTwoId].setAttribute('src', 'img/grey.jpg');
            message.textContent = "Sorry, try again!";
        }
        cardsChosen = [];
        cardsChosenId = [];
        score.textContent = cardsWon.length;
        if (cardsWon.length === cardsArray.length/2) {
            message.textContent = "Congratulations! You won!";
        }
    }

    // Flip a card
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardsArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardsArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();
});