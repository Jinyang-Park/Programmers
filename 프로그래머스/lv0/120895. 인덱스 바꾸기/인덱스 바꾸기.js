function solution(my_string, num1, num2) {
    // 구조분해할당을 알아야 풀기 편한 문제이다.
    let arr = [...my_string];
    [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
    return arr.join('');
}