const numCoins = 5
let coins
let mario
let objectsImg, marioImg

function preload(){
    objectsImg = loadImage('assets/items-objects.png')
    marioImg = loadImage('assets/mario-use.png')
}
function setup(){
    createCanvas(1000, 600)
    background(95, 138, 245)
    frameRate(15)

    mario = new Mario(marioImg, {x: 300, y: 280}, 100)
    console.log(mario)

    coins = Array.from({length: numCoins}, (el, i) => {
        return new Coin(objectsImg, {x: 80 * i, y:100}, 100)
    })
   
}
function draw(){
    background(95, 138, 245)
    fill(110, 59, 21)
    rect(0, 400, 1000, 200)
    coins.forEach(coin => {
        coin.render()
    })
    mario.render()
}