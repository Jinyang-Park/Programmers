function solution(hp) {
  const first = Math.floor(hp / 5);
    console.log(first)
  const second = Math.floor((hp - first * 5) / 3);
    console.log(second)
  const third = hp - first * 5 - second * 3;
    console.log(third)
  return first + second + third;
}