---
title: 'this,bind,arrow function in js'
top: false
cover: false
toc: true
mathjax: true
date: 2020-04-03 23:17:37
password:
summary:
tags:
categories:
---
``` javascript
c = 100;
var a = {
    b:1,
  	c:10,
    foo:() => {
    	console.log(this.c);
	},
  	bar:function(){
    	console.log(this.c);
    }
}
a.bar();//普通函数，this 指向a
a.foo();//arrow function 没有默认this 指针，故函数里的this指向a所在的window
var fun = a.foo;//把a.foo function 传给 fun
fun();//在window scope下执行fun，this --> window
var funBind = a.bar.bind(a);//bind a.bar to a 
funBind();//binded to a
funBind = a.bar.bind(this);//bind a.bar to this
funBind();// binded to window

var fooArrow = a.bar;
fooArrow();
```
https://www.codementor.io/@dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc
https://medium.com/tfogo/advantages-and-pitfalls-of-arrow-functions-a16f0835799e
https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/
https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1
https://hackernoon.com/javascript-es6-arrow-functions-and-lexical-this-f2a3e2a5e8c4
https://stackoverflow.com/questions/52979915/why-we-dont-need-to-bind-the-arrow-function-in-react