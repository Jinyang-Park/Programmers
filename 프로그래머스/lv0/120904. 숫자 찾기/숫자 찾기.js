function solution(num, k) {
    var answer = -1;
    let numArr = num.toString().split("");
    console.log(numArr)

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