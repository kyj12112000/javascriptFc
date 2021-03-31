//get set

class A{
    _name = 'no name'; //내부적으로 사용할 경우 _바 사용

    get name(){ //public 접근 제어자
        return this._name + '@@@';
    }

    set name(value){ //public 접근제어자
        this._name = value + '!!';
    }
}

const a = new A();
console.log(a); //no name
a.name = 'mark';
console.log(a); //set 결과 = mark!!
console.log(a.name); //get 결과 = mark!!@@@
console.log(a._name);//일반 = mark!!

//readOnly set 작성안하고 get만 두게됨

class B{
    _name = 'no name';
    get name(){
        return this.name + '@@@';
    }
}

const b = new B();
console.log(b);
b.name = 'mark'; //set 없으니 readOnly 처럼 됨
console.log(b);