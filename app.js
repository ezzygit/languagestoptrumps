// STEP 1 // CREATE DECK OF CARDS USING CONTRUCTOR FUNCTION. // 

// The way to create an "object type", is to use an object constructor function.

// class Card() is an object constructor function.

class Card {
    constructor(language, speakers, age, official, words){
        this.language = language
        this.speakers = speakers
        this.age = age
        this.official = official
        this.words = words
    }
}

// The keyword THIS is the object that "owns" the code. It is not a variable.

// The value of this, when used in an object, is the object itself.

// In a constructor function this does not have a value. It is a substitute for the new object. 

// The value of this will become the new object when a new object is created.



// STEP 2 // CREATING THE DECK (OBJECTS) //

// DATA //

// Objects of the same type are created by calling the constructor function with the NEW keyword.

const c1 = new Card("English", 1.132, 1400, 67, 520000)
const c2 = new Card("Mandarin", 1.117, 6000, 4, 85568)
const c3 = new Card("Hindi", 615, 70, 1, 183175)
const c4 = new Card("Spanish", 534, 820, 20, 93000)
const c5 = new Card("French", 280, 720, 29, 135000)
const c6 = new Card("Arabic", 274, 1509, 26, 120000)
const c7 = new Card("Bengali", 265, 1300, 2, 150000)
const c8 = new Card("Russian", 258, 321, 2, 200000)
const c9 = new Card("Portuguese", 234, 671, 9, 250000)
const c10 = new Card("Indonesian", 199, 500, 1, 127036)
const c11 = new Card("Urdu", 170, 921, 2, 4, 264000)
const c12 = new Card("German", 132, 1256, 6, 330000)
const c13 = new Card("Japanese", 128, 1321, 2, 500000)
const c14 = new Card("Swahili", 98, 310, 5, 11.2, 5.1, 200000)
const c15 = new Card("Marathi", 95, 1300, 1, 500000)
const c16 = new Card("Telugu", 93, 1000, 1, 270000)
const c17 = new Card("Turkish", 80, 5500, 5, 114767)
const c18 = new Card("Cantonese", 85, 7000, 2, 100000)
const c19 = new Card("Latin", 0, 2700, 1, 39589)
const c20 = new Card("Danish", 6, 780, 1, 200000)
const c21 = new Card("Polish", 39, 1121, 1, 140000)
const c22 = new Card("Persian", 100, 2517, 3, 343466)
const c23 = new Card("Ukranian", 35, 329, 3, 253000)
const c24 = new Card("Italian", 63, 721, 4, 500000)
const c25 = new Card("Thai", 50, 820, 1, 2864)
const c26 = new Card("Fijian", 450,000, 8, 1, 10000)
const c27 = new Card("Swedish", 10, 796, 2, 600000)
const c28 = new Card("Korean", 75, 578, 2, 1100373)
const c29 = new Card("Scouse",500000, 100, 1, 100)
const c30 = new Card("Scottish",10000, 231, 1, 200)

let cards = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, 
c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30]

let cardsInDeck = 30

// STEP 3 // CREATE DOM INTERACTIONS SO WE CAN MANIPULATE HTML DOC //

// Manipulating/Changing the DOM means using this API (the DOM) to change the document 

// by adding removing or moving elements around.

// 3.1 // PLAYER vs COMPUTER 

// card stack //

// player stack //

const playerLanguage = document.getElementsByClassName('plang')
const playerSpeakers = document.getElementsByClassName('pspeak')
const playerAge = document.getElementsByClassName('page')
const playerOfficial = document.getElementsByClassName('pofficial')
const playerWords = document.getElementsByClassName('pwords')

// computer stack //

const computerLanguage = document.getElementsByClassName('comlang')
const computerSpeakers = document.getElementsByClassName('comspeak')
const computerAge = document.getElementsByClassName('comage')
const computerOfficial = document.getElementsByClassName('comofficial')
const computerWords = document.getElementsByClassName('comwords')

// 3.2 // OTHER DOM INTERACTIONS THAT WILL AFFECT GAME PLAY / NEED TO BE MANIPULATED// 

// page//buttonlink dom's //

const startButton = document.querySelector('startButton')
const nextRoundButton = document.getElementsByClassName('nextRound')
const homePage = document.getElementById('homePage') 
const assignPage = document.getElementById('assignPage')
const cardAssign = document.getElementsByClassName('cardAssign')
const playPage = document.getElementById('playPage') 


// navigation // 

const speakersAnc = document.getElementById('speakersAnc') 
const ageAnc = document.getElementById('ageAnc') 
const officialAnc = document.getElementById('officialAnc')
const wordsAnc = document.getElementById('wordsAnc')

const playerCurrentScore= document.getElementsByClassName('playerCurrentScore') 
const computerCurrentScore = document.getElementsByClassName('computerCurrentScore') 


// STEP 4 // CREATE FUNCTIONS FOR GAME LOGIC // 

// 4.1 // OBJECTS TO REFER TO IN FUNCTIONS //

let rounds = 5
let turn = ""
let playerCards = []
let computerCards = []
let getPlayerCard = []
let getComputerCard = []
let winnerMessage = []
let playerScore = 0;
let computerScore = 0;

// 4.2 // When player clicks start game link JS should...
// Assign 15 cards to player and 15 cards to computer.
// Display the first card in the players deck.

function shuffle(cards)
{
	// for loop???
	 
}

function assignCards (){} 
// 15 for player
// 15 for computer


function getPlayerCard() {
    
}

function getComputerCard() {
    
}

// display getplayercard in assign.html?


// 4.3 // Depending on what player chooses as their stat.
// Computer should compare that number to the same stat on the first card in their deck.

const computerTurn = () => {
}

const computerStat = () => {}
   // if else statement // 

const jsCompare = () => {}

// add event listeners to each attribute so js knows when each one has been clicked and can store this info.



// STEP 4 // PLAY // 

// 4.1 // Display both player and computer cards.
// Acknowledge who won the round. 
// Update score board.

// function logPlayerWinner
// function logComputerWinner


// STEP 5 // NEXT ROUND //
// 5.1 // Repeat process from assign step whilst still keeping track of score?
// 5.2 // After five rounds declare a winner. 


// GAME OVER //

const gameOver = () => {
    // if else statement with true or false at the end.
}
