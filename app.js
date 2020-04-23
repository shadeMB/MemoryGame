document.addEventListener('DOMContentLoaded', () => {
    // Card Options
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    const cardArray = [
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

    cardArray.sort(() => 0.5 - Math.random());

    // Create board
    function createBoard() {
        for (let i=0; i<cardArray.length; i++){
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
            alert('You have found a match');
            cards[optionOneId].setAttribute('src', 'img/blank.jpg');
            cards[optionTwoId].setAttribute('src', 'img/blank.jpg');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'img/grey.jpg');
            cards[optionTwoId].setAttribute('src', 'img/grey.jpg');
            alert('Sorry, try again!');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = "Congratulations! You won!";
        }
    }

    // Flip a card
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
            console.log('check for match');
        }
    }

    createBoard();
});