function solution(s) {
    let res = [...s];
    return res.filter(x => s.match(new RegExp(x, 'g')).length === 1).sort().join('');
}
