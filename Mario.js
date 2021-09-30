class Mario {
    constructor(marioImg, {x,y}, size){
        this.x = x
        this.y = y
        this.size = size
        this.images = loadMarioImages(marioImg)
        this.imagesCounter = 0
    }
    move(){
        this.x += this.direction * this.speed
    }
    
    render(){
        console.log(this.images[this.imagesCounter])
        image(this.images[this.imagesCounter], this.x, this.y, this.size, this.size)
    }
}