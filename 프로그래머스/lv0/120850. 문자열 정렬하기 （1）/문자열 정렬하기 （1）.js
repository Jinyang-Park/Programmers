function solution(my_string) {
    const num_string = my_string.match(/[0-9]/g);
    const arr = num_string.map((i)=> Number(i));
    return arr.sort((a,b) => a-b);
}