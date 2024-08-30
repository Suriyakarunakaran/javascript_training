var a = 1001;
var n = a;
var res = 0;

while(a>0){
    b = a%10;
    res = res*10 + b;
    a = Math.floor(a/10);
}
console.log(res);
if (n === res) {
  console.log('palindrome');
} else {
  console.log('not');
}
