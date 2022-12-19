function solution(num, k) {
    // let a = [...(''+num)];
    // let b = [...num.toString()];
    // 배열 ,오브젝트, 문자열 //숫자에서는 안됨
    // console.log(a)
    // console.log(b)
    // ()--> 소괄호 {}--> 중괄호 [] --> 대괄호
    var answer = -1;
    let numArr = num.toString().split("");

    for(let i =0; i < numArr.length; i++){
        if(numArr[i] == k){
            answer = i+1;
            break;
        }
    }
    return answer;
}



// function solution(num, k) {
//     var answer = 0;

//     var value = num.toString().split("")

//     for(let i = 0; i < value.length; i++) {
//         if(k == value[i]) {
//            return answer = i + 1;
//         } else {
//             answer = -1;
//         }
//     }

//     return answer;
// }