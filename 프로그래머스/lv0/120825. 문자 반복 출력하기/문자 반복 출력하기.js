function solution(my_string, n) {
    return Array.from(my_string).map(str => str.repeat(n)).join('');
}


