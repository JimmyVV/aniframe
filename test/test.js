const aniframe = require('../src');
console.log(aniframe);
aniframe.run(function(){
    console.log(1);
})
setTimeout(function(){
	aniframe.cancel();
},200);