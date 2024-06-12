function solution(n) {
    var result = [];
    let divisor = 2;
    
    while (n >= 2){ //12 >=2
         if(n % divisor === 0) {// 12 % 2 = 6 
             result.push(divisor)  // [2]
n = n / divisor; // 6 = 12 / 2         
    }
    else divisor++;
}
    return [...new Set(result)]
}