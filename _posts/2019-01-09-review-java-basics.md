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

概念： 使得子类具有弗雷的各种属性和方法，而不需要再次编写相同的代码。
特点： 在子类继承父类的同时，可以重新定义某些属性，并重写某些方法，时期获得与父类不同的功能。

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




