function solution(emergency) {
    let max = [...emergency].sort((a, b)=> b-a)
    // 큰 수 대로 정렬됨
    // console.log(max)
    // [76, 24, 3]
    return emergency.map(x => max.indexOf(x)+1)
    // emergency.map을 돌리면 x는 3 -> max.indexOf(3) -> 2+1 -> [3]
    // emergency.map을 돌리면 x는 76 -> max.indexOf(76) -> 0+1 -> [3,1]
    // emergency.map을 돌리면 x는 24 -> max.indexOf(24) -> 1+1 -> [3,1,2]
}