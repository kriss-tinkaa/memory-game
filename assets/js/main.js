const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard;
let secondCard;

const state = {
    gameStarted: false,
    flippedCards: 0,
    totalFlips: 0,
    totalTime: 0,
    loop: null
}

const selectors = {
    boardContainer: document.querySelector('.memory-game'),
    board: document.querySelector('.memory-game'),
    moves: document.querySelector('.moves'),
    timer: document.querySelector('.timer'),
    start: document.querySelector('button'),
    //win: document.querySelector('.win')
}
function flipCard() {
    this.classList.add('flip');
  }
  
  cards.forEach(card => card.addEventListener('click', flipCard));



const attachEventListeners = () => {
    document.addEventListener('click', event => {
        const eventTarget = event.target
        const eventParent = eventTarget.parentElement
        startGame()

        // if (eventTarget.className.includes('card') && !eventParent.className.includes('flipped')) {
        //     flipCard(eventParent)
        // } else if (eventTarget.nodeName === 'BUTTON' && !eventTarget.className.includes('disabled')) {
        //     startGame()
        // }
    })
}

const startGame = () => {
    state.gameStarted = true
    console.log('2222')
    selectors.start.classList.add('disabled')


    state.loop = setInterval(() => {
        state.totalTime++

        selectors.moves.innerText = `${state.totalFlips} moves`
        selectors.timer.innerText = `time: ${state.totalTime} sec`
    }, 1000)
}

//generateGame()
attachEventListeners()

