function solution(box, n) {
    return box.map((x) => Math.floor(x/n)).reduce((a,b) => a * b);
    //reduce((3, 2) => 3 * 2)
    //reduce((6, 2) => 6 * 2)
    // 12
}