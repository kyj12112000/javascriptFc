//splice & slice
//slice = slice(추출시작,추출 갯수)
//음수를 지정한 경우 배열 끝에서부터의길이를 나타냄 slice(2,-1)하면 세번째 부터 끝에서 주번째 요소까지 추출
//배열의 길이와 같거나 큰수를 지정한 경우 배열의 끝까지 추출
//반환 값 : 추출한 요소를 포함하여 새로운! 배열반환


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
var arr1 = arr.slice(3, 5); // [4, 5] index 3번부터 4까지 추출 
var arr2 = arr.slice(undefined, 5); // [1, 2, 3, 4, 5] 0부터 4까지 추출
var arr3 = arr.slice(-3); // [8, 9, 10] 뒤에서 3개 추출
var arr4 = arr.slice(-3, 9); // [8, 9] 뒤에서부터 3번째 숫자인 8부터 시작해서 앞에서부터 9번째 숫자 10전까지 추출
var arr5 = arr.slice(10); // [] 배열길이가 10이므로 빈배열 리턴
var arr6 = arr.slice(4); // [5, 6, 7, 8, 9, 10] 4번부터 끝까지 추출
var arr7 = arr.slice(undefined); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 처음부터 끝까지 추출
var arr8 = arr.slice(5, -4); // [6] 5번인 6부터 끝에서 -4 번쨰인 7전까지 추출 
var arr9 = arr.slice(2, 15); // [3, 4, 5, 6, 7, 8, 9, 10] 2부터 끝까지 추출
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr1); // [4, 5]
console.log(arr2); // [1, 2, 3, 4, 5]
console.log(arr3); // [8, 9, 10]
console.log(arr4); // [8, 9]
console.log(arr5); // []
console.log(arr6); // [5, 6, 7, 8, 9, 10]
console.log(arr7); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr8); // [6]
console.log(arr9); // [3, 4, 5, 6, 7, 8, 9, 10]
/* 
splice(start[, deleteCount[, item1[, item2[, ...]]]])
start: 배열의 변경을 시작할 인덱스.
    음수를 지정한 경우: 배열의 끝에서부터 요소를 센다.
    배열의 길이보다 큰 수를 지정한 경우: 실제 시작 인덱스는 배열의 길이로 설정
    절대값이 배열의 길이보다 큰 경우: 0으로 세팅
deleteCount: 배열에서 제거할 요소의 수.
    생략 / 값이 array.length - start보다 큰 경우: start부터의 모든 요소를 제거.
    0 이하의 수를 지정: 어떤 요소도 제거되지 않는다.
item1, item2, ... : 배열에 추가할 요소.
    지정하지 않는 경우: splice()는 요소 제거만 수행한다.
반환값: 제거한 요소를 담은 배열.
    아무 값도 제거하지 않았으면 빈 배열을 반환한다
*/
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var arr1 = arr.splice(10, 2, 'a', 'b', 'c');
console.log(arr);   // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "a", "b", "c"]
console.log(arr1);  // [11, 12]
//splice() 함수를 사용하면 원본 배열인 arr이 변경된다.
//10번째 인덱스부터 2개의 요소를 삭제하고 'a', 'b', 'c'를 추가했으므로
//11과 12가 삭제되고 이 삭제된 요소들의 배열은 arr1 변수에 담긴다.
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var arr1 = arr.splice(-6, 4);
console.log(arr);   // [1, 2, 3, 4, 5, 6, 11, 12]
console.log(arr1);  // [7, 8, 9, 10]
// -6을 넣으면 뒤에서부터 6번째인 7부터 시작하여 4개의 요소를 삭제한다. 
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var arr1 = arr.splice(-13, 1);
console.log(arr);   // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(arr1);  // [1]
// -13의 절대값이 배열의 길이보다 큰 경우에는 0으로 세팅한다.
// 그러므로 0번째 요소부터 1개의 요소를 삭제하므로 숫자 1이 삭제된다.
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var arr1 = arr.splice(3);
console.log(arr);   // [1, 2, 3]
console.log(arr1);  // [4, 5, 6, 7, 8, 9, 10, 11, 12]
var arr2 = arr1.splice(6, 4);
 
console.log(arr1);  // [4, 5, 6, 7, 8, 9]
console.log(arr2);  // [10, 11, 12]
// deleteCount가 생략되거나 array.length - start의 값보다 큰 경우
// 지정한 start 인덱스부터 끝까지 모두 제거한다.
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var arr1 = arr.splice(5, 0, 'add');
console.log(arr);   // [1, 2, 3, 4, 5, "add", 6, 7, 8, 9, 10, 11, 12]
console.log(arr1);  // []
//deleteCount가 0이거나 0보다 작은 수이면 어떤 요소도 삭제되지 않는다.
//그러므로 arr1은 빈배열을 반환한다.









const numbers = [10,20,30,40];
const index = numbers.indexOf(30);
// numbers.splice(index, 1);
const spliced = numbers.splice(index,1); //삭제된 목록 보여줌
//30이 사라짐
//index부터 시작해서 뒤에 한개를 지우겠다
console.log(spliced);
console.log(numbers);


// const sliced = numbers.slice(0,2); //0부터 시작해서 2에서 끝낸다
// console.log