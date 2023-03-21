function solution(i, j, k) {
    let a = '';
    for(i; i<=j; i++){a+= i}
    // console.log(a)
    // a = '' + 1 = 1
    // a = '1'+ 2 = 12
    // a = '12' + 3 = 123
    // a = '123' + 4 = 1234
    // ... 12345678910111213
        // console.log(a.split(k))
    // [ '', '23456789', '0', '', '', '2', '3' ]-1
    return a.split(k).length-1;

}

// function solution(i, j, k) {
//     var answer = [];
//     for(let a = i;a<=j;a++){
//         answer.push(a)
//     }
//     return answer.join("").split("").filter(a=>a==k).length;
// }