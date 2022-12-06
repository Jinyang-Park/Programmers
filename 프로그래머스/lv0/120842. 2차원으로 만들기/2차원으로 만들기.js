function solution(num_list, n) {
    var answer = [];

    // i = 0 일때, 
    // 한바퀴 돌고 2 = 0+2
    // i = 2 일때, 
    // 한바퀴 돌고 4 = 2+2
    // i = 4 일때,
    // 한바퀴 돌고 6 = 4+2
    // i = 6 일때,
    for (let i = 0; i<num_list.length; i=i+n){
        // slice(0,2) 푸시이면 [[1,2]]
        // slice(2,4) 푸시이면 [[1,2],[3,4]]
        // slice(4,6) 푸시이면 [[1,2],[3,4],[5,6]]
        // slice(6,8) 푸시이면 [[1,2],[3,4],[5,6],[7,8]]
        answer.push(num_list.slice(i, i+n));
    }

    return answer;
}