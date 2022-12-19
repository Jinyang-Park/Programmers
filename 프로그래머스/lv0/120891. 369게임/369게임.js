function solution(order) {
    var answer = 0;
    let orderArr = [...(''+order)];

    for(let i =0; i< orderArr.length; i++){
        if(orderArr[i] == 3){
            answer += 1;
        } else if(orderArr[i] == 6){
            answer += 1;
        } else if (orderArr[i] == 9){

            answer += 1;
        }
    }
    return answer;
}