---
layout: post
title: Java 8 Functional Interfaces
---
I did further research into Lambda expressions in Java 8 after my <a href="http://midhunhk.github.io/2016/07/30/java-8-lambdas-thread/">last article</a>.
It was then that I came to know about "Functional Interfaces". Undrstanding the basics is key to learning Lambda expressions in Java 8. 

>> A Functional Interface is an interface that has only one abstract method. Lambdas help us get rid of boilerplate code and remove use of anonymous inner classes.

See below for examples with a custom interface and how code with and without lambda expressions.

<script src="https://gist.github.com/midhunhk/8096ef74828732d5c9ab0a05453fcc63.js"></script>

There is a steep learning curve when it comes to lambda expressions for experienced Java developers, especially if they are not familiar with this concept in javascript of any other languages.

## Closures in JavaScript
The below code is the above example written in javascript. Here the object `userInfo` is a function that can be invoked by passing parameters

<script src="https://gist.github.com/midhunhk/dbbe1ff45823a44cb34b722265bb623c.js"></script>

### Further Reading
* <a href="https://docs.oracle.com/javase/8/docs/api/java/lang/FunctionalInterface.html">Functional Interfaces</a>
