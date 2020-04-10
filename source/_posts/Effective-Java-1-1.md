---
title: Effective Java 1.1
top: false
cover: false
toc: true
mathjax: true
date: 2020-03-06 22:36:06
password:
summary:
tags:
categories: Java
---
每天学一点点，记录一点点。
### 考虑使用静态工厂方法代替构造器
## 能够增大类的提供者对自己所提供的类的控制力。
2.1 第一优势，静态工厂方法有名字
2.2 第二个优势，不用每次被调用时都创建新对象
2.3 第三个优势，可以返回原返回类型的子类
2.4 第四个优势，在创建带泛型的实例时，能使代码变得简洁
3.1 可以有多个参数相同但名称不同的工厂方法
3.2 可以减少对外暴露的属性
参考：https://www.jianshu.com/p/ceb5ec8f1174

ps：静态工厂方法和工厂方法模式，抽象工厂模式的区别
参考：https://blog.csdn.net/QuinnNorris/article/details/66977156