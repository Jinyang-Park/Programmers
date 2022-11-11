function solution(strlist) {
    var answer = [];
    
    for(let i =0; i < strlist.length; i++){
        let str= 0;
        
        let words= strlist[i].split('');
        for(let j =0; j < words.length; j++){
            str++;
        }
        answer.push(str)
    }
    return answer;
}