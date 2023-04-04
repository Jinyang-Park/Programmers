function solution(emergency) {
    let max = [...emergency].sort((a, b)=> b-a)
    return emergency.map(x => max.indexOf(x)+1)
}