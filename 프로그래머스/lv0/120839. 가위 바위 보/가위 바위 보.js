function solution(rsp) {
    // 가위 2
    // 바위 0
    // 보 5
    var answer = '';
    let arr = rsp.split('');
    for(let i =0; i < arr.length; i++){
     if(arr[i] == 2){
        answer += '0';
     }else if(arr[i] == 0){
        answer += '5';
     }else if (arr[i] == 5){
        answer += '2';   
     }
    }
    return answer;   
}