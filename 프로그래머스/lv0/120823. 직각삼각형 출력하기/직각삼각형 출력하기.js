const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    //close가 입력값 3이온다
    //for문을 돌면서 close는 한줄에 대한 별의 갯수를 출력
    close = (Number(input[0]));
    // i=1이여야 첫번째 줄 * 출력
    // i += 1 --> i = i+1 --> 2 = 1+1 --> 3 = 2+1
    for(let i =1; i <= close; i+=1){
        console.log('*'.repeat(i))
    }
});