function solution(message) {
    var answer = 0;
    let str = message.split("")
    for(let i=0; i < message.length; i++){
        answer = str.length* 2
    }
    return answer;
}