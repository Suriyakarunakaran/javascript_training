var data = 'the quick brown fox';
data = data.split(' ');
for (var i = 0; i < data.length; i++) {
  data[i] = data[i][0].toUpperCase() + data[i].substr(1);
}
var sd = data.join(' ');

console.log(sd);
