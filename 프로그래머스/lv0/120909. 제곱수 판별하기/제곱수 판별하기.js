function solution(n) {
    let int = Math.sqrt(n);
    
    if(n % int == 0){
        return 1;
    }else {
        return 2;
    }
}