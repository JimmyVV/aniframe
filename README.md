# requestAnimationFrame 简单库

## 安装
```
$ npm install https://github.com/JimmyVV/aniframe
```

## 使用
```
let aniframe = require('aniframe');

function draw(){//...}

aniframe.run(function(){
    console.log(1);
})
setTimeout(function(){
	aniframe.cancel(draw);
},200);
```

## API

 - run(fn): 调用需要使用 RAM 的动画函数，如果想要传入参数，可以使用 `bind()`
```
aniframe.run(dynamicDraw.bind(this,"on","left"));
```
 - cancel(): 取消动画执行

## Author
 - [JimmyVV][1]
  


  [1]: https://github.com/JimmyVV