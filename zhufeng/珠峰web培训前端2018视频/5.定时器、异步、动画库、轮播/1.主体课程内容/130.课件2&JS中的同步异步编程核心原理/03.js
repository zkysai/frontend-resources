let n = 0;
setTimeout(()=>{
    console.log(++n);  //=>2) 不输出，一直循环
},3000);

console.log("n=",n); //=>1) n=0
while(1===1){
}