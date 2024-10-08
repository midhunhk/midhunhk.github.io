---
layout: post
title: Lambda expressions in Java 8
category: Dev
tags: [java, java8, lambda]
---
Ever since I heard Lambdas as one of the new features of Java 8, I did some research on it and ended up not understanding it at all. Other than some relation with complex mathematical terms, there was nothing I could understand about this.

<!-- more -->
This week, while watching a session on Advanced Javascript, I came across some Closure examples.

After setting up Eclipse Neon and JDK8, the first thing I tried was to write an example Lambda expression. It was then that a colleague of mine, <a href="https://github.com/RaghuChandrasekaran">Raghu</a> directed me to a real life example for lambdas which was simple to understand.

```java
// Create a Runnable 
Runnable runnable = () -> System.out.println("Hello Closure");
    
// Create a new thread to run this runnable
new Thread(runnable).start(); 
```

Pre Java 8, this was acheived with an anonymous inner function like below.

```java
// Create a new thread with an anonymous runnable implementation and start it
new Thread(new Runnable() {
	
	@Override
	public void run() {
		System.out.println("Hello Thread");
	}
}).start();
```

Other than being less "looking like code", this does the same job. So thats that!

### Further Reading
* <a href="http://bruceeckel.github.io/2015/10/17/are-java-8-lambdas-closures/">http://bruceeckel.github.io/2015/10/17/are-java-8-lambdas-closures/</a>
* <a href="http://www.tutorialspoint.com/java8/java8_lambda_expressions.htm">http://www.tutorialspoint.com/java8/java8_lambda_expressions.htm</a>
* <a href="https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html">https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html</a>
* <a href="https://frontendmasters.com/courses/advanced-javascript/">Advanced Javascript by Kyle Simpson</a>
