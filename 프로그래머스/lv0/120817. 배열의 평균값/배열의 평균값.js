function solution(numbers) {
    const answer = numbers.reduce((num, cur) => num + cur,0) / numbers.length;
    return answer;
}