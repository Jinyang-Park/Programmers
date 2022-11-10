function solution(money) {
    var answer = [];
    
    let coffee = parseInt(money / 5500);
    let change = money % 5500;
    
    answer.push(coffee);
    answer.push(change);
    
    return answer;
}