function map(num, callback){
    const result=[];
    for(let i=0; i<num.length; i++){
        result.push(callback(num[i]));
    }
    return result;
}
const num=[1,2,3,4,5];
const callback=(num)=>
    num=num*2;

const ans=map(num,callback);
console.log(ans);