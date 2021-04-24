---
layout: post
title: Swap two numbers without a temporary variable
category: Dev
comments: true
tags: [development,java,kotlin]
---
For no reason, I was reminded of a simple code snippet to swap (interchange) two numbers that I had discovered in my early programming days.
I may have used it once or twice in my 10 years of being a professional software developer.
<br/> <br/>
Swapping two numbers is a common use case when working with some algorithms and the like.
<br/> <br/>
<!-- more -->
Given two variables, let's say `a` and `b`, we can swap their values without using a temporary variable as:
<br/> <br/>
`b = (a + b) - (a = b);`
<br/> <br/>
It might be be a bit confusing at first, but works based on how the compiler does evaluations.
I have tested this as a Java project and even works with negative numbers as well. I am pretty sure it would also work on C/C++ too.
<br/> <br/>
```java
public class SwapSample {

	public static void main(String[] args) {
		int a = 10, b = 20;
		printVariables("Before", a, b);
		
		b = (a + b) - (a = b);
		
		printVariables("After ", a, b);
	}

	private static void printVariables(String message, int a, int b) {
		System.out.println(message + ": a = " + a + " & b = " + b);
	}
}
```
<br/> <br/>
The above code would produce the output as:
<br/> <br/>
`Before: a = 10 & b = 20`
`After : a = 20 & b = 10`
<br/> <br/>
Keep coding.
<br/> <br/>