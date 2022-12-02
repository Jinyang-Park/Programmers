function solution(array) {
    // 오름차순 제거
    array.sort((a,b)=> a-b);
    // 소수점 제거 
   return array[Math.floor(array.length/2)];
    
}