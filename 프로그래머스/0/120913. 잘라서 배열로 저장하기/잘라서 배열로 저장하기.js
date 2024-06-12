function solution(my_str, n) {
    // 1. slice로 n만큼 잘른다
    // 2. 만약 my_str 10이면 3길이만큼 자른다.
    // 3. 3, 3, 3, 1 이 남는다.
    // 4. 1이 n보다 작으니깐 넣어준다.
let num = [];
    for(let i = 0; i < my_str.length / n; i++) {
        num = [...num, my_str.slice(i*n,n+(i*n))] // (0,6) , (6, 12) , (12,18)
        // (0,3), (3, 6), (6, 9)
        
    }
    return num;
}