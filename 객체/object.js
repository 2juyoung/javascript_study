/* 
객체 
1. 배열의 인덱스의 식별자를 문자로 나타내는 것.
2. 연관배열(associative array), 맵(map), 딕셔너리(Dictionary) 데이터타입이 객체에 해당된다.
3. {} 중괄호를 사용한다.
*/

/* 객체의 생성 */

// 01
let object_1 = {'a':10, 'b':15, 'c':20};
console.log(object_1);

// 02
let object_2 = {};
object_2['a'] = 10;
object_2['b'] = 15;
object_2['c'] = 20;

// 03
let object_3 = new Object();
object_3['a'] = 10;
object_3['b'] = 15;
object_3['c'] = 20;

// 04
let object_4 = {'a':10, 'b':15, 'c':20};
console.log(object_4['c']);
console.log(object_4.a);


