---
layout: post
title: Lamba expressions in Java 8
---
Ever since I heard Lambdas as one of the new features of Java 8, I tried reading some examples and ended by not understanding this at all. I knew support was provided for Lamba Expressions in .NET as part of LINQ. Other than some relation with complex mathematical terms, there was nothing I could understand about this.

While watching a session on <a href="https://frontendmasters.com/courses/advanced-javascript/">"Advanced Javascript"</a> by <a href="http://getify.me">Kyle Simpson</a>, I came across how Closures were implemented in JavaScript.

After setting up Eclipse Neon and JDK8, the first thing I tried was to write an example Lambda expression. It was then that a colleague of mine, <a href="https://github.com/RaghuChandrasekaran">Raghu</a> directed me to a real life example for lambdas which was simple to understand.

<script src="https://gist.github.com/midhunhk/ee0ca73ebed66c77eca4d155d7633fe5.js"></script>

Pre Java 8, this was acheived with an anonymous inner function like below.

<script src="https://gist.github.com/midhunhk/70cab9d2987432e351d4d030a86f81cc.js"></script>

The only thing that I can make out from this is

### More Reading
* <a href="http://bruceeckel.github.io/2015/10/17/are-java-8-lambdas-closures/">http://bruceeckel.github.io/2015/10/17/are-java-8-lambdas-closures/</a>
* <a href="http://www.tutorialspoint.com/java8/java8_lambda_expressions.htm">http://www.tutorialspoint.com/java8/java8_lambda_expressions.htm</a>
* <a href="https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html">https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html</a>
