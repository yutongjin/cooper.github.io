---
title: 重温HF之2-把继承搞明白
top: false
cover: false
toc: true
mathjax: true
date: 2020-03-19 15:42:00
password:
summary:
tags:
categories:
---
#### 1. 继承时方法会被override但是成员变量不会被override
#### 2. 子类可以同时获得自己和父类的non-private成员变量，但是父类不知道子类。
#### 3. final方法不可以被继承
#### 4. static方法不可以被继承，随着类的加载而加载，继承毛线。但是如果权限允许子类还是可以用。
#### 5. 继承的好处是是可以提高效率，抽取封装，缺点是提高了代码耦合。
#### 6. 牢记is-a法则
reciprocates ： 往复运动
rigid ： 严格的
https://zhuanlan.zhihu.com/p/44670566
详细介绍：https://www.cnblogs.com/roy-blog/p/7669143.html
延伸 ： 类加载过程 https://zhuanlan.zhihu.com/p/33509426
多态：https://www.jianshu.com/p/b7fd72de2d0e
static : https://zhuanlan.zhihu.com/p/70110497