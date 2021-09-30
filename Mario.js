class Mario {
    constructor({x,y}, size){
        this.x = x
        this.y = y
        this.size = size
        this.images = []
        this.imagesCounter = 0
    }
    move(){
        this.x += this.direction * this.speed
    }
    
    render(){
        this.images(this.images[this.imageCounter], this.x, this.y, this.size)
    }
}