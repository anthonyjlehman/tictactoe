//winning combo arrays.
//check winner
//player turns
//store values of the player
//change background
//double click alert
//reset game
//event listiners
//add images

const winningCombo = [
    '1,2,3',  '1,5,9', '1,4,7', 
    '2,5,8', '3,5,7', '3,6,9', 
    '4,5,6', '6,5,4', '7,5,3', 
    '7,8,9', '7,4,1', '8,5,2', 
    '9,8,7', '9,6,3', '9,5,1'
];

let turn = 'player1'

let player1Array = []
let player2Array = []

function backgroundChangeColor(square){
    if(turn === 'player1'){
    square.style.color = 'gold'
    square.textContent = 'x'
    }
    if (turn === 'player2'){
        square.style.color = 'purple'
        square.textContent = 'o'
        }
    
console.log(square)
console.log('we are now in the background change function')
}
function checkWinner(x){
    //console.log(x)
    let playerArray = x.sort().join()
    console.log(playerArray)
    if (winningCombo.includes(playerArray)){
        alert(`${turn} wins`)
        
    }
}
document.getElementById('Board')
.addEventListener('click', function(element){
    //console.log(e.target.textContent)
    if (turn === 'player1'){
        player1Array.push(element.target.textContent)
        //console.log(player1Array)
        //console.log('player1 has' + player1Array + 'points')
        backgroundChangeColor(element.target)
        checkWinner(player1Array)
        turn = 'player2'
    }
        
        
    else {
        player2Array.push(element.target.textContent)
        //console.log(player2Array)
        //console.log(`player2 has ${player2Array} points`)
        backgroundChangeColor(element.target)
        checkWinner(player2Array)
        turn = 'player1'
    }
    
})






