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

<script src="https://gist.github.com/midhunhk/8096ef74828732d5c9ab0a05453fcc63.js"></script>

Lets see the how this lambda expression really works.

`(name, age) -> System.out.println("Hello " + name + ", you are " + age + " old");`

Here, `UserInfo` has only one method `printInfo(String name, Integer age)`. This is all information for the compiler to create an anonymous inner class. This expression has two parts separated by a `->` operator. The first part, `(name, age)` represents the parameter list for the method and the code after `-> ` is the body for the method.

There is a steep learning curve when it comes to lambda expressions for experienced Java developers, especially if they are not familiar with this concept in javascript or any other languages. Once the basic princples are clear, it is easy to follow.

## Closures in JavaScript
The below code is the above example written in javascript. Here the object `userInfo` is a function that can be invoked by passing parameters

<script src="https://gist.github.com/midhunhk/dbbe1ff45823a44cb34b722265bb623c.js"></script>

## Predicates

`Predicate` is a Functional Interface included in Java 8 which represents a boolean valued function. It has a `boolean test(T t)` method which accepts an object as parameter and returns a boolean result. Check the below example and see if you are able to figure how it works

<script src="https://gist.github.com/midhunhk/6fd4c994de8708d7904c7a11c9da734b.js"></script>

### Further Reading
* <a href="https://docs.oracle.com/javase/8/docs/api/java/lang/FunctionalInterface.html">Functional Interfaces</a>

#### Update
Using lambda expressions is performance and memory efficient than using Anonymous inner classes. When we create an anonymnous inner class, JVM has to create a new object, allocate memory, initialize static blocks, run the constructor methods etc. These are not required when creating a lambda expression.
