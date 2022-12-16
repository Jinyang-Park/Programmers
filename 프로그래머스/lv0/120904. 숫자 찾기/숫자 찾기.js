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
