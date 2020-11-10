function firstAlphabet(){
    const s = "i am avinash";
    let res = s.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')
    return res;



}
console.log(firstAlphabet());

const s = "i am avinash";
S = s.match(/[a-z]/g).join('');
console.log(S);


