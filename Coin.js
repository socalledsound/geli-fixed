class Coin {
    constructor(objectsImg, {x,y}, size){
        this.x = x
        this.y = y
        this.size = size
        this.images =  loadCoinImages(objectsImg)
        this.imageCounter = 0
    }
    
    render(){
        image(this.images[this.imageCounter], this.x, this.y, this.size, this.size)
    }
}
