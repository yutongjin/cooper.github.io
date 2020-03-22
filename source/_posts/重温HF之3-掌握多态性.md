---
title: 重温HF之3-掌握多态性
top: false
cover: false
toc: true
mathjax: true
date: 2020-03-21 14:34:59
password:
summary:
tags:
categories:
---
## 1. static 多态
也叫compile 多态，本质就是编译时method的多态性，其实就是方法的overload.
> Same method name is overloaded with different type or number of parameters in same class (different signature). Targeted method call is resolved at compile time

## 2.dynamic 多态
也叫runtime 多态，本质是继承属性和函数override的组合。
看过很多文章在讲向上转型（upcasting）和向下转型（downcasting），有的文章讲的非常复杂，研究了一番后打算总结如下。
### （1）向下转型
其实是最简单的一种--人工强制cast。
``` java
class Sup{
	void m1(){
		System.out.println("Sup m1");
	}
}

class Sub extends Sup{
	void m1(){
		System.out.println("Sub m1");
	}
	void m2(){
		System.out.println("Sub m2");
	}
}
```
在这里我们进行一个操作
``` java
Sup a = new Sub();
a.m1();// Sub m1
a.m2();// 找不到符号，因为 ref 为 a的变量找不到m2方法，也就是上一章我们说过的父类不知道子类
((Sub)a).m2();//如果想调用Sub实例的方法，就必须强制cast，但是操作危险性大。
```
### （2）向上转型
说白了，向上转型就是
##### 1.在自己的ref class 里没有找到想要的方法，把自己（自动向上转型）变成父类找这个方法。
##### 2.找到的话再以new出来的对象为bottom看看override到哪层。

>我们不妨换个思考的角度，为什么要 “把自己（自动向上转型）变成父类”？？？

##### 我本身就是个父类啊，继承就是因为我满足了IS-A关系，我为什么不能默认把父类的方法都取到自己身上然后去找呢？

so 找到之后再从ref 往下 看有没有override的情况然后以new出来的对象为底，结束。

**如果形式参数没有怎么办?**
> 答：把形式参数多态向上找。
## 用一个经典案例解释上面

``` java 
public class TestForPoli {
    static public class A {
        public String show(D obj) {
            return ("A and D");
        }

        public String show(A obj) {
            return ("A and A");
        }
    }

    static public class B extends A{
        public String show(B obj){
            return ("B and B");
        }

        public String show(A obj){
            return ("B and A");
        }
        public String showOnlyInB(){
            return ("showOnlyInB");
        }
    }

    static public class C extends B{
        public String show(D obj) {
            return ("C and D");
        }
    }

    static public class D extends B{
        public String show(D obj) {
            return ("D and D");
        }
    }

    public static void main(String[] args) {
        A a1 = new A();
        A a2 = new B();
        B b = new B();
        C c = new C();
        D d = new D();
        A ac = new C();
        B bc = new D();
        System.out.println("1--" + a1.show(b));
        System.out.println("2--" + a1.show(c));
        System.out.println("3--" + a1.show(d));
        System.out.println("4--" + a2.show(b));
        System.out.println("5--" + a2.show(c));
        System.out.println("6--" + a2.show(d));
        System.out.println("7--" + b.show(b));
        System.out.println("8--" + b.show(c));
        System.out.println("9--" + b.show(d));
        System.out.println("10--" + ac.show(d));
        System.out.println("11--" + bc.show(d));
        //test for down cast
        System.out.println("12--" + ((B)a2).show(b));
        //System.out.println("13--" + a2.showOnlyInB());


    }
}
```

输出结果如下

``` java
1--A and A
2--A and A
3--A and D
4--B and A
5--B and A
6--A and D
7--B and B
8--B and B
9--A and D
10--C and D
11--D and D
12--B and B
```
#### （1）a1.show(b)

>a1 ：ref为A，实例为A，向上的关系只有object，show（b）找不到，尝试去找show（（super）b）也就是把形式参数向上转型，找到了show（A a）方法，所以输出A and A。
2 3 同理。

#### （2）a2.show(b)
>a2 ：ref为A，实例为B，向上的关系只有object，show（b）找不到，尝试去找show（（super）b）就是把形式参数向上转型，找到了show（A a）方法，（到这里和上面是一样的），但是实例为B，我们需要进行的操作是看show（A a）方法有没有被override，然后发现class B里有一个show（A a）的方法，故输出B and A
5 同理，6是因为A里直接有一个show（D d）的method，而且这个方法没有被实例B override，故输出A and D
7 easy
#### （3）b.show(c)
这里我们使用向上转型继承的方法，把b的super类a的方法都加到b里，然后还是没有找到show（B）的办法，我们此时就去找形式参数c的super类，向上找到了B，于是输出B and B
#### （4）b.show(d)
这里我们使用向上转型继承的方法，把b的super类a的方法都加到b里，解决。









