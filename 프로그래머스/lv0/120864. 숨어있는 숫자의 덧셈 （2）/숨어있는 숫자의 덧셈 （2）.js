function solution(my_string) {
    // /\d+/g 숫자만 골라준다.
    let a = my_string.match(/[0-9]+/g);
    console.log(a)
   // [ '1', '2', '34' ] 
    return a ? a.reduce((b,c) => b+ Number(c),0) : 0
    // 문자열이므로 Number(c) 로하면 1 , 2 , 34 가 됨
    // 0 + 1 = 1
    // 1 + 2 = 3
    // 34 + 3 = 37
}