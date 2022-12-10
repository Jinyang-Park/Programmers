function solution(numbers, direction) {
    if(direction == "right") {
        let poped = numbers.pop();
       numbers.unshift(poped);
        
    }else if(direction == "left"){
        let shifted = numbers.shift();
       numbers.push(shifted);
    }
    return numbers
}