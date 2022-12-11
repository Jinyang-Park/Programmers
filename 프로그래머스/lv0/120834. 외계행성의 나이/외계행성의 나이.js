function solution(age) {
    let alpha =["a","b","c","d","e","f","g","h","i","j"];
 // let age =  [ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9 ];
    var answer = ''
    age = age.toString().split("");
    //['2','3']
    
    for(let i =0; i< age.length; i++){
        answer += alpha[age[i]]
        // console.log(age[i]) --> 2 --> alpha[2] --> c
        // console.log(age[i]) --> 3 --> alpha[3] --> d
    }
    return answer;
    // 'cd'
}