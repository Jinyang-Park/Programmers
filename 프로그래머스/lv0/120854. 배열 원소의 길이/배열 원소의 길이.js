function solution(strlist) {
    var answer = [];
    let words = [];
    
    for(let i = 0; i < strlist.length; i++){
        words = strlist[i];
        answer.push(strlist[i].length);
        }
    return answer;
}