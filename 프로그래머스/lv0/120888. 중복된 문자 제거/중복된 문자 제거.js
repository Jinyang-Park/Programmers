function solution(my_string) {
    const set = new Set(my_string);
    // console.log(set) --> Set(4) { 'p', 'e', 'o', 'l' }
    let arr1 = [...set].join('');
    // console.log([...set])--> [ 'p', 'e', 'o', 'l' ]
    return arr1;
}