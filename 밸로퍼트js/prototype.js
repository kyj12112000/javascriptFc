//객체 생성 함수는 대문자로 시작!
function Animal(type, name, sounds){
    this.type = type;
    this.name = name;
    this.sounds = sounds;
}

//prototype
//객체 생성자 함수아래 .prototype.[원하는키] = 코드입력하여 설정
Animal.prototype.say = function(){
    console.log(this.sounds);
}

//어떤 값을 재사용 하고 싶다
Animal.prototype.sharedValue = 1;
//dog와 cat 안에 shaerValue 가 잇음
dog.sharedValue
cat.sharedValue

//new 객체 생성자
const dog = new Animal('개', '멍멍이','멍멍');
const cat = new Animal('고양이', '야옹이','야옹');

dog.say();
cat.say();

console.log(dog);
