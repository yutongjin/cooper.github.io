---
layout: “conquer
title: “conquer Singleton”
date: 2020-03-06 23:20:49
tags:
---

https://www.jianshu.com/p/eb30a388c5fc
## Eager 

```java
public class SingleB {
    private static final SingleB INSTANCE = new SingleB();
    private SingleB() {}
    public static SingleB getInstance() {
        return INSTANCE;
    }
}
```

## Lazy


如果一个对象使用频率不高，占用内存还特别大，明显就不合适用饿汉式了，这时就需要一种懒加载的思想，当程序需要这个实例的时候才去创建对象，就如同一个人懒的饿到不行了才去吃东西。
v1
```java
// Version 1.1
public class Single1 {
    private static Single1 instance;
    private Single1() {}
    public static Single1 getInstance() {
        if (instance == null) {
            instance = new Single1();
        }
        return instance;
    }
}
```
v2加锁版

```java
public class SingletonClass {
    private static SingletonClass SINGLE_INSTANCE = null;
    private SingletonClass() {}
    public static SingletonClass getInstance() {
        if (SINGLE_INSTANCE == null) {  
          synchronized(SingletonClass.class) {
          SINGLE_INSTANCE = new SingletonClass();
          }
        }
        return SINGLE_INSTANCE;
    }
}
```

v3 加锁版

```java
public class SingletonClass {
    private static SingletonClass SINGLE_INSTANCE = null;
    private SingletonClass() {}
    public static SingletonClass getInstance() {
        if (SINGLE_INSTANCE == null) {
            synchronized (SingletonClass.class) {
                if (SINGLE_INSTANCE == null) {
                    SINGLE_INSTANCE = new SingletonClass();
                }
            }
        }
        return SINGLE_INSTANCE;
    }
}
```
https://juejin.im/post/5c94654e6fb9a071090d63ac
https://blog.csdn.net/gavin_dyson/article/details/69668946