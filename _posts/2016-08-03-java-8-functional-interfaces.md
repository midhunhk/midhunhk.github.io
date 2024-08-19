---
layout: post
title: Java 8 Functional Interfaces
category: Dev
tags: [java, java8, lambda]
---
I did further research into Lambda expressions in Java 8 after my <a href="http://midhunhk.github.io/2016/07/30/java-8-lambdas-thread/">last article</a>.
It was then that I came to know about "Functional Interfaces". Understanding the basics is the key to learning Lambda expressions in Java 8.

<!-- more -->
## Functional Interface

>A Functional Interface is an interface that has only one abstract method. Lambdas help us get rid of boilerplate code and remove use of anonymous inner classes.

See below for examples with a custom interface and see how code with and without lambda expressions look.

```java
// This is a Functional Interface having only 1 abstract method
interface UserInfo{
	// Method that takes two inputs and returns nothing
  	void printInfo(String name, Integer age);
}

public static void main(String[] args) {
	// Example 1 - Using regular Java form, without the use of lambdas
  	UserInfo userInfo = new UserInfo() {
			
			@Override
			public void printInfo(String name, Integer age) {
				System.out.println("Hello " + name + ", you are " + age + " old");
			}
	};
		
  	userInfo.printInfo("Adam", 28);
  	userInfo.printInfo("Betty", 24);
  	userInfo.printInfo("Charlie", 27);
  
  	// Example 2 - Using Java 8 Lambda expressions
  	UserInfo info = (name, age) -> System.out.println("Hello " + name + ", you are " + age + " old");
  
  	info.printInfo("Adam", 28);
  	info.printInfo("Betty", 24);
  	info.printInfo("Charlie", 27);
}
```

Lets see the how this lambda expression really works.

`(name, age) -> System.out.println("Hello " + name + ", you are " + age + " old");`

Here, `UserInfo` has only one method `printInfo(String name, Integer age)`. This is all information for the compiler to create an anonymous inner class. This expression has two parts separated by a `->` operator. The first part, `(name, age)` represents the parameter list for the method and the code after `-> ` is the body for the method.

There is a steep learning curve when it comes to lambda expressions for experienced Java developers, especially if they are not familiar with this concept in javascript or any other languages. Once the basic princples are clear, it is easy to follow.

## Closures in JavaScript
The below code is the above example written in javascript. Here the object `userInfo` is a function that can be invoked by passing parameters

```javascript
var userInfo = function (name, age) { console.log(`Hi ${name} your age is ${age}`)};
userInfo("Jack", 28); // Hi Jack, your age is 28

typeof(userInfo) // "function"
```

## Predicates

`Predicate` is a Functional Interface included in Java 8 which represents a boolean valued function. It has a `boolean test(T t)` method which accepts an object as parameter and returns a boolean result. Check the below example and see if you are able to figure how it works

```java
import java.util.function.Predicate;
public class PredicateSample {

	public static void main(String args[]) {
		// Initialize a predicate object with an implementation
		Predicate<String> predicate = name -> name.equals("Pink");

		// Test the predicate with different data
		System.out.println(predicate.test("Pink")); // true
		System.out.println(predicate.test("Floyd")); // false
	}
}
```

### Further Reading
- [Functional Interfaces](https://docs.oracle.com/javase/8/docs/api/java/lang/FunctionalInterface.html)
<br/><br/>

### Update
Using lambda expressions is performance and memory efficient than using Anonymous inner classes. When we create an anonymnous inner class, JVM has to create a new object, allocate memory, initialize static blocks, run the constructor methods etc. These are not required when creating a lambda expression.
