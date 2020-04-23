document.addEventListener('DOMContentLoaded', () => {
    // Card Options
    const grid = document.querySelector('.grid');
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

    // Create board
    function createBoard() {
        console.log('got here');
        for (let i=0; i<cardArray.length; i++){
            let card = document.createElement('img');
            card.setAttribute('src','img/grey.jpg');
            card.setAttribute('data-id', i);
            console.log(card);
            // card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    };

    createBoard();
});