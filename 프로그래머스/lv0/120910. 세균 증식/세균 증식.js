function solution(n, t) {
    // answer를 n으로 준 이유는 2만큼씩 커져야된다.
    var answer = n;
    // let i = 1을 줘야 t값만큼 for문이 돌면서 answer*2를 하기 때문이다.
    // let i = 0으로 시작하면 한번더 answer가 곱해져서 4096값이 나온다.
    for(let i=1; i <= t; i++){
        answer = answer*2
        
    }
    return answer;
}