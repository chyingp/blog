// 对比2
for(var index = 0; index < 10; index++) {}

console.log(index);  // 10

for(let index2 = 0; index2 < 10; index2++) {}

try{
	console.log(index2);
}catch(e){
	console.log(e.message);  // index2 is not defined
}