function solution(my_string) {
     const num = my_string.match(/[0-9]/g);
    return num.reduce((a,b) => parseInt(a) + parseInt(b));
}