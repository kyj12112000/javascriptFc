//prototype은 공유되는 함수나 값을 설정

function Animal(type, name, sounds){
    this.type = type;
    this.name = name;
    this.sounds = sounds;
}

Animal.prototype.say = function(){
    console.log(this.sounds);
}

function Dog(name, sound){
    Animal.call(this, '개', name, sound);
}
function Cat(name, sound){
    Animal.call(this, '고양이', name, sound);
}

Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');
dog.say()
cat.say()