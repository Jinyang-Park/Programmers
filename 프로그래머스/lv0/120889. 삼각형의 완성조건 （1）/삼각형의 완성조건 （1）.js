function solution(sides) {
    // sort 하여 내림차순 정렬 [3,2,1]
    // 그럼 [1], [2]번째를 더해서 [0] 보다 크면 result 1
    // 아니면 result 2
    sides.sort((a,b) => b - a);
    console.log(sides);
    if(sides[1]+ sides[2] > sides[0]){
        return 1;
    }else {
        return 2;
    }
}