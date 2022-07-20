class Cat {
    // constructor는 필수는 아니지만 속성 받으려면 필요!
    constructor( name ){
        this.name = name;
        // this는 클래스 자체를 의미
    }
    mew(){
        console.log(this.name + '야옹');
    }
}

// var cat1 = new Cat('나비');
// var cat2 = new Cat('냥이');
// console.log(cat1);  // Cat{}
// cat1.mew();
// cat2.mew();

class Car {
    constructor( color ) {
        this.color = color;
        this.iswheel = true;
        this.isDoor = true;
    }
    go(){
        console.log('전진');
    }
    back(){
        console.log('후진');
    }
    returnColor(){
        console.log(this.color);
    } 
}

module.exports = { Car }