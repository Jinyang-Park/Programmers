// function solution(price) {
//     // 화살표 함수로 사용하면 안된다! 
//     //  >= 0 이렇게 써야된다!
    
//     var answer = 0;
//     if(price >= 500000){
//          answer =  price - (price * 0.2);
//     }else if(price >= 300000 ){
//           answer = price - (price * 0.1);
//     }else if(price >= 100000 ){
//        answer = price - (price * 0.05);
//     }else{
//         answer = price;
//     }
//     return Math.floor(answer);
// }

function solution(price) {

    let arr_discount = [[500000, 0.2], [300000, 0.1], [100000, 0.05]]

    for(let i = 0 ; i < arr_discount.length ; i++)
        if(arr_discount[i][0] <= price) return Math.floor(price * (1-arr_discount[i][1]))        

    return price
}