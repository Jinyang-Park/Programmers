function solution(n) {
    var answer = 0;
    let arr = String(n).split("");
    for(let i =0; i < arr.length; i++){
        answer += Number(arr[i])
    }
    return answer;
}