/* 
반복문을 활용해서 객체 사용하는 법 

1. 배열은 순서를 가지고 있다.
2. 객체는 순서가 존재하지 않기때문에 저장된 데이터인 key : value가 순서에따라서 나오지 않는다.
*/

// 01. 객체를 불러오는 방법
let grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
for(let key in grades){
    console.log(key);
}

// 02. 값을 불러오는 방법
for(let key in grades){
    console.log(grades[key]);
}
