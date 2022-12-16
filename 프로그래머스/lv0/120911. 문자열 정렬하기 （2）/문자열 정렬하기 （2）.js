function solution(my_string) {
    // if문을 사용해서 대문자를 소문자로 바꿔주고 to.UpperCase -> to.LowerCase
    // sort사용해서 알파벳으로 정렬 (a,b)=> a === b ? 0 : a < b ? -1 : 1)
    return my_string
        .split('')
        .map((x) => (x.toUpperCase()? x.toLowerCase() :x.toUpperCase()))
        .sort((a,b)=> a === b ? 0 : a < b ? -1 : 1)
        .join('')
}