class Coin {
    constructor({x,y}, size){
        this.x = x
        this.y = y
        this.size = size
        this.images = []
        this.imageCounter = 0
    }
    
    render(){
        image(this.images[this.imageCounter], this.x, this.y, this.size, this.size)
    }
}
