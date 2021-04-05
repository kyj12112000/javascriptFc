class Food{
    constructor(name){
        this.name = name;
        this.brands = [];
    }
    //class 내 함수는 메서드
    addBrand(brand){
        this.brands.push(brand);//param 받은것을 푸쉬
    }

    print(){
        console.log(`${this.name}을 파는 음식점들`);
        console.log(this.brands.join(', '));
    }
}

const pizza = new Food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노피자');

const chicken = new Food('치킨');
chicken.addBrand('네네치킨');
chicken.addBrand('자담치킨');

pizza.print();
chicken.print();