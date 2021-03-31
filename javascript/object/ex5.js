// prototype 상속 prototype을 이용한객체 확장

function Person(){}

Person.prototype.hello = function(){
    console.log('hello');
}

function Korean(region){
    this.region = region;
    this.where = function(){
        console.log('where', this.region);
    }
}

Korean.prototype = Person.prototype;

const k = new Korean('Seoul'); //객체 생성하면 이 객체의 prototype이 person으로 나오기 때문에 hello도 출력 가능
//부모 객체를 자식 어딘가에 prototype을 할당
k.hello();
k.where();

console.log(k instanceof Korean);
console.log(k instanceof Person);
console.log(k instanceof Object);