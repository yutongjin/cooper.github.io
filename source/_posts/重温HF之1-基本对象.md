---
title: 重温HF之1--基本对象
top: false
cover: false
toc: true
mathjax: true
date: 2020-03-17 15:00:28
password:
summary:
tags:
categories:
---
#### 1. 8种基本类型(primitive types) : boolean、char、byte、int、long、short、float、double.
#### 2. Java is pass by value, which means pass by copy. Everything, copy of primitive or copy of a remote reference to an object.
#### 3. 类成员变量有初始值，任何局部变量没有默认值，若不initialize就使用会error，数字一旦new 出来之后就有默认值。
#### 4. == 比较bits in two variables, what those bits represent doesn't matter.
``` java
int a = 3;
byte b = 3;
if(a == b){// true cast byte to int}
```
#### 5. 比较primitives 或者 指向相同对象的引用可以用 ==, 比较对象是否是同一对象用.equals().
