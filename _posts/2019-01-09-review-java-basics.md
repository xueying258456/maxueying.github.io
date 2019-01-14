---
layout: post
title:  "2019年 重新复习Java基础概念 期限1个月"
categories: JavaBasics
tags: JavaBasics
author: MLM
---

* content
{:toc}

## 程序设计语言的发展

### 机器语言

概念：由“0”和“1”组成的指令序列；
特点：运行效率最开，编写效率最低。

### 汇编语言（第二代计算机语言）

概念：用一些简洁的英文字母、符号串、来替代特定的指令的二进制串。
特点：便于学习，编写效率提高，但移植性不好，依赖机器硬件。

### 高级语言

概念：接近于数学语言或人的自然语言，同时又不依赖于计算机硬件，编出的程序能在所有机器上通用。
标志：1954年 第一个脱离机器硬件的高级语言 Fortran
    
     较为普遍的高级语言：
     Fortran、ALGOL、COBOL、BASIC、LISP、SNOBOL、PL/1、Pascal、C、Prolog、Ada、C++、VC、VB、Delphi、Java等

标志：1969年 提出了结构化程序设计方法
标志：1970年 第一个结构化程序设计语言————Pascal语言 代表着结构化程序设计时期的开始
标志：20世纪80年代初 面向对象的程序设计诞生  代表：C++、Java

## Java语言概述


### 面向对象的相关概念

#### 1、OOP基本概念

Δ 对象 （Object）

概念： 系统中用来描述客观事物的一个实体，他是构成系统的一个基本单位。
组成： 一组属性和对这组属性进行操作的一组服务。

Δ 类   （Class）

概念： 具有相同属性和服务的一组对象的集合，为属于该类的所有对象提供了同一的抽象描述，其内部包括属性和服务两个重要部分。

※类的实例化结果就是对象。

Δ 消息 （Message）

概念： 消息就是想对象发出的服务请求。
组成： 提供服务的对象表示、服务表示、输入信息和回答信息。
※服务通常被称为方法或者函数。

#### 2、OOP基本特性

Δ 封装性（Encapsulation）

概念：
    ⒈把对象的全部属性`成员变量`和全部服务`成员方法`结合在一起，形成一个不可分割的独立单位`对象`。
    ⒉信息隐藏，即尽可能隐蔽对象的内部细节，对外形成一个边界`存在有限的对外方法`。

Δ 多态性（Polymorphism）

概念： 一般类中定义的属性或者服务被特殊类继承之后，可以具有不同的数据类型或表现出不同的行为。
    `相同的信息给与不同的对象会引发不同的动作`

Δ 继承  （Inheritance）

概念： 使得子类具有父类的各种属性和方法，而不需要再次编写相同的代码。
特点： 在子类继承父类的同时，可以重新定义某些属性，并重写某些方法，使其获得与父类不同的功能。

概念： 

#### 例子

``` bash
class Animals {
	String name;
	void speak() {};
}

class Dog extends Animals {
	Dog() {
		super.name = "dog";
	}
	
	void speak(){
		System.out.println(this.name + " wang");
	}
}

class Cat extends Animals {
	
	Cat() {
		super.name = "cat";
	}
	
	void speak(){
		System.out.println(this.name + " miao");
	}
}

public class animal {
	public static void main(String[] args) {
		Animals dog = new Dog();
		dog.speak();
		Animals cat = new Cat();
		cat.speak();
	}
}
```

## Java程序的分类

> Java程序按照运行方式可以分为两种类型： Java应用程序`Application`和Java小程序`Applet`。

### Java应用程序

> 它是独立完整的程序，它可以在Java平台上独立运行，通常在命令行使用独立的解释器。

* HelloWordl.java：
```
public class HelloWorld //类名
{
	public static void main(String args[]){
		System.out.println("Hello,World!");
	}
}
```

* 命令行运行结果
```
D:\github\molingmiao.github.io\test>javac HelloWorld.java

D:\github\molingmiao.github.io\test>java HelloWorld
Hello,World!

D:\github\molingmiao.github.io\test>
```


### Java小程序Applet(不用深挖，这坑已经很少人用了)

> 它是一种嵌入在HTML网页文档中的Java程序，不能独立运行，也没有main()方法，必须通过网页浏览器来运行，因此称为小程序。


* HelloApplet.java
```
import java.awt.Graphics;
import java.applet.Applet;
public class HelloApplet extends Applet{
	public void paint(Graphics g){
		g.drawString("Hello,Applet!",20,20);
	}
}
```	
* HelloApplet.html
```
<html>
	<head>
		<title>Applet对应的HTML</title>
	</head>
	<body>
		<applet code="HelloApplet.class" width=200 height=100></applet>
	</body>
</html>
```

## Java程序的基本结构

* package
* import
* public classDefinition
* classDefinition
* interfaceDefinition

## Java程序开发环境

* JDK `Java Development Kit` 是sun公司针对Java开发人员发布的免费软件开发工具包
* JRE `Java Runtime Environment` Java运行时环境

# 数据类型和基本语句

## Java的基本语法

### 标识符

* 合法标识符的组成：数字、字母、下划线(_)或美元符号($)组成，而且还要求首位不能是数字。`区分大小写`

### Java中的关键字和保留字

> 关键字

>> 	访问控制
>>	private    protected    public
>>
>>	类,方法和变量修饰符
>>	abstract    class    extends    final    implements    interface    native    new
>>	static    strictfp    synchronized    transient    volatile
>>    
>>	程序控制
>>	break    continue    return    do    while    if    else    for    instanceof    switch
>>	case    default
>>    
>>	异常处理
>>	try    cathc  finally  throw    throws
>>
>>	包相关
>>	import    package
>>    
>>	基本类型
>>	boolean    byte    char    double    float    int    long    short    null    true    false   enum
>>
>>	变量引用
>>	super    this    void
>>    

> 保留字

>>	goto    const 

### 变量

* 概念： 在程序运行过程中其值可以变化的量，主要用于保存输入、输出和程序运行过程中的中间数据。`使用前要先声明，再使用`

### 常量

* 概念： 在程序运行的整个过程中保持其值不改变的量，用于 代表常数、便于程序的修改； 提高程序的可读性。`在声明前添加关键字final`

### 语句块

* 概念： 用一堆大括号包含的内容叫做语句块，语句块可以互相嵌套。

### 注释

* 概念： 帮助开发人员更好的理解程序的编写意图，有利于程序的修改和维护，提高程序的可读性。

#### 单行注释

* 格式：  //注释内容

#### 块注释

* 格式：  /\*注释内容\*/

#### 文档注释

* 格式：  /\*\*注释内容\*/
  `文档注释是要写入Javadoc文档的，它将用来生成HTML格式的代码报告。`
  `文档注释必须写在类、构造函数、方法等之前`

## 运算符与表达式

### 运算符

#### 算术运算符

* 单目： +`取正` -`取负` ++`自加1` --`自减1`
* 双目： +`加` -`减` *`乘` /`除` %`求余`

#### 关系运算符

* ==`相等` !=`不等` >`大于` <`小于` >=`大于等于` <=`小于等于`  

#### 逻辑运算符

* &&/&`与` !`非` ||/|`或`

#### 三元运算符

* 格式： (表达式) ？ true处理区 : false处理区

#### 位运算符

* &(与): 两边操作数的位同时为1   ？ 1 : 0 ;
* |(或): 两边操作数的位有一边为1 ？ 1 : 0 ;
* ~(非): 0变1,1变0;
* ^(异): 两边操作数的位不同时    ？ 1 : 0 ;

#### 位移运算符

* <<	带符号左移；
* \>\>  带符号右移；
* \>\>\>无符号右移；

#### instanceof运算符

* 双目运算符： A(对象) instanceof B(类) 
* A是B类创建的对象 ？ true : false ;

#### 赋值运算符

* = , += , -= , *= , /= ,  %= , &= , ^= , |= , <<= , >>=
* 左值与等号右边的值发生对应的运算后，赋给左值。

### 表达式

* 概念： 用运算符将操作数连接起来的符合Java规则的式子;

## 数据类型




