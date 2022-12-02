
// function solution(price) {
//     // 화살표 함수로 사용하면 안된다! 
//     //  >= 0 이렇게 써야된다!
    
//     var answer = 0;
//     if(price >= 500000){
//          answer = price - (price * 0.2);
//     }else if(price >= 300000 && price < 500000){
//           answer = price - (price * 0.1);
//     }else if(price >= 100000 && price < 300000){
//        answer = price - (price * 0.05);
//     }else{
//         answer;
//     }
//     return Math.floor(answer);
// }

function solution(price) {
    // 화살표 함수로 사용하면 안된다! 
    //  >= 0 이렇게 써야된다!
    
    var answer = 0;
    if(price >= 500000){
         answer =  Math.floor(price - (price * 0.2));
    }else if(price >= 300000 && price < 500000){
          answer = Math.floor(price - (price * 0.1));
    }else if(price >= 100000 && price < 300000){
       answer = Math.floor(price - (price * 0.05));
    }else{
        answer = price;
    }
    return answer;
}