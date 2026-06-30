//initial prerequisite to start the game
let currentCombination = []
let started = false
let level = 0
let highScore = 0

const validColors = ['red', 'green', 'yellow', 'blue']

const h3 = document.querySelector('h3')
const high = document.querySelector('h2 > span')
high.textContent = `${highScore}`
const colorElements = document.querySelectorAll('#colors-container > div')

//event listenere keypress to detect of game started
document.addEventListener('keypress', function(e) {
    //Prevention: stop engaging keypress when game started 
    //only allows to interrupt keys when game is over or ready to start
    if(started) return
    
    started = true
    levelUp()
})

//beautiful object to store the target color element which is gonna blink using its method
//blink when level up or click on valid color element
const flash = {
    //store an target element to blink
    color: null,
    
    //function to blink this target color element
    blink: function() {
        this.color.classList.add('flash')

        setTimeout( () => {
            this.color.classList.remove('flash')
        }, 100)
    }
}


//Level up 
function levelUp() {
    h3.textContent = `Level: ${++level}`

    //generate random number from 1 to 4
    let random = Math.floor(Math.random() * 4)

    //searches an right color element to blink according to random number and to put that color onto 
    // currentCombination array to store the current combination that  user should follow in order 
    //to level their up
    let randColor = validColors[random]
    currentCombination.push(randColor)

    const colorBlock = document.querySelector(`#${randColor}`)
    flash.color = colorBlock
    flash.blink()
}


let i = 0 //tracks index according to user combination to compare with currentCombination for validation

document.addEventListener('click', function(e) {
    //Prevention:prevents to click when game is over or new start, only allows to enter an keyboard key to start the 
    // fresh game or a new game
    if(!started) return

    //Prevention:when we started a game and we accidently click anywhere other than target game colors 
    //do not end the game
    if(!validColors.includes(e.target.id)) return 

    flash.color = e.target
    flash.blink()

    //checks each of the user combination with current combination for validation 
    
    if(e.target.id !== currentCombination[i]) {  //user failed
        let currentScore = currentCombination.length - 1
        if(currentScore > highScore) {
            highScore = currentScore
            high.textContent = `${highScore}`
        }

        h3.innerHTML = `OOPS you lost<br>Your Score: ${currentScore}<br>Enter any key to start the Game again`

        started = false
        currentCombination = []
        level = 0
        i = 0

        gameOver()
    } else { //user on right track
        i++
        if(i === currentCombination.length) { //user won, Level Up
            i = 0
            
            setTimeout(levelUp, 1000)
        }
    }
})

//shows shaking effect when user lost
function gameOver() {
    document.body.classList.add('gameOver-shake')

    setTimeout(() => {
        document.body.classList.remove('gameOver-shake')
    }, 500)
}
