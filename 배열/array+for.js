/* 배열과 반복문 */

// length
let a = ['a', 'b', 'c'];
console.log(a.length);

let b = ['a', 'b', 'c', 'd'];
console.log(b.length);


// length와 배열을 활용한 반복문 나타내기
function get_members() {
    return ['a', 'b', 'c', 'd'];
}
let members = get_members();

for (i = 0; i < members.length; i++) {
    console.log(members[i].toUpperCase());
}


// push : 배열의 끝에 추가하는 것
// let li = [ 'a','b','c','d','e' ];
// li.push('f');
// console.log(li);

// concat : 배열에 추가되어 출력되는 것
// let li = ['a','b','c','d','e'];
// li = li.concat(['f', 'g']);
// console.log(li);

// unshift : 배열의 앞에 추가되는 것
// let li = ['a','b','c','d','e'];
// li.unshift('z');
// console.log(li);

// splice
let li = ['a','b','c','d','e'];
li.splice('3', '0', 'B');
console.log(li);

// 배열의 첫번째 원소 제거
let array = ['a','b','c','d','e'];
array.shift();
console.log(array);

// 배열의 마지막 원소 제거
array.pop();
console.log(array);

// 배열의 정렬
let array2 = ['c', 'e', 'a', 'b', 'd'];
array2.sort();
console.log(array2);

// 배열을 역순으로 정렬
array2.reverse();
console.log(array2);




