/* 배열 */
// 01
let array = [ 'a', 'b', 'c' ];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array);

// 02
function get_members() {
    return ['a', 'b', 'c'];
}

let members = get_members();

console.log(members[0]);
console.log(members[1]);
console.log(members[2]);


// 03
function get_members2() {
    return ['a', 'b', 'c'];
}

let members2 = get_members2();

// members.length는 배열에 담긴 값의 숫자를 알려준다. 
for(i = 0; i < members2.length; i++){
    // members[i].toUpperCase()는 members[i]에 담긴 문자를 대문자로 변환해준다.
    console.log(members2[i].toUpperCase());   
    // console.log('<br />');
}



