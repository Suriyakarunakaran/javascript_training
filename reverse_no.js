var a = 1234;
var res = 0;

while(a>0){
    b = a%10;
    res = res*10 + b;
    a = Math.floor(a/10);
}
console.log(res);