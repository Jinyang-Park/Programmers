function solution(numbers) {
    var answer = [];
    for(let i =0; i < numbers.length; i++){
        for(let j=0; j < numbers.length; j++){
            // i =0 이면 j=0 x 
            // i =0 j=1 곱하면 2
            // i =0 j=2 곱하면 3
            // i =0 j=3 곱하면 4
            // i =0 j=4 곱하면 5
            // i =1 이면 j=0 곱하면 2
            // i =1 j=1 x
            // i =1 j=2 곱하면 6
            // i =1 j=3 곱하면 8
            // i =1 j=4 곱하면 5 
            if(i!==j){
                answer.push(numbers[i]*numbers[j])
            }
        }
    }
     return Math.max(...answer);
    // ...answer에는 ['2','3','4','5','6','8',...]
    // Math.max하면 큰 값을 리턴
}