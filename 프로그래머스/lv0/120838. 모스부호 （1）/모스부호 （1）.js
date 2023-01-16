function solution(letter) {
    // 1. 모스부호가 담긴 배열을 변수에 할당한다.
   let morse = 
{
        '.-':'a',
        '-...':'b',
        '-.-.':'c',
        '-..':'d',
        '.':'e',
        '..-.':'f',
        '--.':'g',
        '....':'h',
        '..':'i',
        '.---':'j',
        '-.-':'k',
        '.-..':'l',
        '--':'m',
        '-.':'n',
        '---':'o',
        '.--.':'p',
        '--.-':'q',
        '.-.':'r',
        '...':'s',
        '-':'t',
        '..-':'u',
        '...-':'v',
        '.--':'w',
        '-..-':'x',
        '-.--':'y',
        '--..':'z'
        }
   // 2. letter를 toString하고 split을 한다.
   var answer = '';
   letter = letter.split(" ");
    // split("") 로 하면 '.','.','.' 이런식으로 split이 되고
    // split(" ") "" 안에 한칸 띄우면	[ '....', '.', '.-..', '.-..', '---' ] 잘 split이 된다.
    // console.log(letter);
    
    for(let i = 0; i < letter.length; i++){
        answer += morse[letter[i]];
    }
    return answer
    // return letter.split(" ").map((x) => morse[x]).join("");
}