function solution(array, n) {
    var answer = 0;
    array = array.sort((a,b)=> b-a);
    // 내림차순 정렬 [28,10,3]

    array.map((num) => {
        // 20-28 <= 20-0 Math.abs는 음수를 양수로 바꾸어준다.
        // 8 <= 20
        // 20-10 <= 20-0
        // 10 <= 20
        // 3-20 <= 20-0
        // 17 <= 20
        if(Math.abs(n-num) <= Math.abs(n-answer)){
            answer = num
                       // console.log(num)
        }
    })
    return answer;
}
