var n = 'nice to meet you';
var i = 0;
var v = 0;
for(i = 0;n[i];i++){
  if(n[i] =='a'|| n[i]=='e'||n[i]=='i'||
           n[i]=='o'|| n[i]=='u'||n[i]=='A'||
           n[i]=='E'||n[i]=='I'||n[i]=='O' ||n[i]=='U'){
            v++;
           }
}
console.log(v);