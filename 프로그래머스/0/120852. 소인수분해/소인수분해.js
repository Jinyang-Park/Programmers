function solution(n) {
    var result = [];
    let divisor = 2; // 3
    
    while (n >= 2){ //12 >=2 , 6>=2 , 3>=2 , 3>=2, 0 >= 3 (fasle)
         if(n % divisor === 0) {// 12 % 2 = 6 , 6 % 2 = 3 , 3 % 2 -> 거짓 , 3%3 ===0
         result.push(divisor) // [2] [2,2,3]
        console.log(result)
         n = n / divisor; // 6 = 12 / 2 , 3 = 6 / 2  , 0 = 3 / 3 
    }
    else divisor++; // 3이 if문에서 걸리 떄문에 3이 된다
}
    return [...new Set(result)]
}