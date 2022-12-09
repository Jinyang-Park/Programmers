function solution(array) {
    let answer =[];
    let index =[];
    let max_num = [];
    let max = Math.max(...array);
    
    for(let i=0; i < array.length; i++){
        if(max == array[i]){
           index += i;
           max_num += max;
        }
    }
     answer.push(Number(max_num),Number(index));
    return answer;
}