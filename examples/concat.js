var buffer1 = Buffer.from('ab');
var buffer2 = Buffer.from('ca');
var buffer3 = Buffer.from('ac');
var arr = [buffer1, buffer2, buffer3];

console.log(arr);

var buf = Buffer.concat(arr);

console.log(buf);
