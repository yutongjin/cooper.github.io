---
title: Go back to Facebook
top: false
cover: false
toc: true
mathjax: true
date: 2020-04-28 22:15:42
password:
summary:
tags:
categories: backToFb
---
> todo

|question|method?|
|:-:|:------:|
|delete node in BST|recursive|
|dp||
|quick select||
|union find||
|palindrome substring|dp做|

*** 

<!--more-->
#### 5.7 不能偷懒！！！！
##### Spiral Matrix

两种做法，要不就在一个while循环里搞4个while循环 设置四个变量 空间o1
更直观的做法是假设你在里面走，然后循环螺旋遍历。空间on，代码也比较复杂

##### Populating Next Right Pointers in Each Node 1 & 2	
默认就把自己当成不完全树做，用bfs搞，一层一层来。空间on

#### 5.4 E5大佬的面经，好好做！！！[Link](https://www.1point3acres.com/bbs/forum.php?mod=viewthread&tid=632977&extra=page%3D1%26filter%3Dsortid%26sortid%3D311%26sortid%3D311)

##### odd even linked list
你可以一点点挪，但是这样结尾的点可能停在odd end 也可能停在even end，需要加一个变量check一下。
最好办法是用记录两个list的oddhead和evenhead，base case是even的下一个没有了，这样一次挪两个。
结束的时候直接odd.next = 最开始记录的even head即可。 同时cover了len = 1和len = 2两种base case。

##### [单调函数](https://leetcode.com/problems/monotonic-array/)

记录一个变量，就这么做吧，没别的更好的办法了

*** 

#### 5.2 周末快乐

##### atmost remove 1 char to make palindrome 
##### palindrome substring 
dp不好理解的话， 尝试一下从中间char入手，效果惊人
#### Find Peak Element
用你的思路去写，尽管代码复杂一点，说清楚就行！

*** 

#### 4.30 有活干的感觉真爽

##### 938 Range Sum of BST
面经题，很像删bst node和222，优化可以到lgn（本题最坏情况on）

##### 138 Copy List with Random Pointer	
经典fb tag，按照构图加走图的原则来做，构图的原因是如果不先把点弄出来，random的指针无法get到。
记得去做clone graph

*** 

#### 4.29 困了晚上刷不动题怎么办

##### leetcode 973
经典pq问题，优化从nlgn -> klgn 解决。不懂为什么有人用快排，nlgn 甚至 n方的算法。但是快排还是得在面试前看一下，永远的痛。215.

##### Merge k Sorted Lists
经典pq问题，divide and conquer也可以，得看下merge sort，也是痛。

##### Valid Palindrome	
easy 面经题，注意大写字母转小写直接+32 然后cast就可以了

##### Validate Binary Search Tree	
停在null比较省代码，经典树题。

##### Remove Invalid Parentheses
经典面经301，还是bfs比较舒服，注意开头的砍枝，加分项。

##### Binary Tree Vertical Order Traversal
这题之前看过很多遍怎么还是卡住了，难点在于有两个顺序，一个从上到下，一个从左到右。

dfs 可以横向扩展，但是没法保证上下，需要用treemap，所以最暴力就是两个treemap搞定。

bfs自动保证上下顺序，再用一个level记录左右的level就可以了。

##### Maximum Points You Can Obtain from Cards
经典题，直觉上dfs -> dfs memo -> dp 但是超时
从结果上入手，拿到的卡一定是左边连续i个加上右边连续k - i个，
反向sliding window，牛逼。

##### Find Largest Value in Each Tree Row
Bfs模版

##### Koko Eating Bananas
经典binary search 练习模版

##### Maximum Score After Splitting a String
index 细节题 仔细！！！

##### Simplify Path
string 处理，split()

##### Tree Diameter
543的多叉树版本，可以当作模板

##### Nested List Weight Sum II
Nest问题， map， 深度

##### Valid Parenthesis String
Amazon经典题，potential，分析上限下限。