function solution(s) {
    // split('') 하면 공백이 출력이된다 아래처럼 띄어야된다
    let trimStr = s.split(" ");
    let answer = 0;
    
for(let i = 0; i < trimStr.length; i++){
 if(trimStr[i] == 'Z'){
      answer -= parseInt(trimStr[i-1]);
     // answer = answer - parseInt(trimStr[i-1])
     // answer = 0 - 2 = -2
 }else {
     answer += parseInt(trimStr[i]);
     // answer = answer + parseInt(trimStr[i])
     // 1 = 0 + 1
     // 3 = 1 + 2
     // 1 = 3 + -2
     // 4 = 1 + 3
     console.log(answer)
     
 }
}
    return answer;
}

