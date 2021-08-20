---
layout: post
title: Using Kotlin for Spring Boot Projects
category: Learning
comments: true
tags: [development, kotlin]
---
Recently I decided to try out Kotlin for future Spring Boot projects in place of Java. 
Having used Kotlin for all of my recent Android projects, as well as the experience of rewriting some old ones with Kotlin drove that thought.

Upon creating a **Hello Kotlin** application, I was greeted with this error on startup.
<br/>

```java
org.springframework.beans.factory.parsing.BeanDefinitionParsingException: 
Configuration problem: @Configuration class 'KotlinDemoApplication' may not be final. 
Remove the final modifier to continue.
Offending resource: org.example.snippet.kotlindemo.KotlinDemoApplication
	at org.springframework.beans.factory.parsing.FailFastProblemReporter.error(FailFastProblemReporter.java:72) ~[spring-beans-5.3.9.jar:5.3.9]
	at org.springframework.context.annotation.ConfigurationClass.validate(ConfigurationClass.java:217) ~[spring-context-5.3.9.jar:5.3.9]
	at org.springframework.context.annotation.ConfigurationClassParser.validate(ConfigurationClassParser.java:216) ~[spring-context-5.3.9.jar:5.3.9]
```

The error message had the answer in it, but that seemed to be too obvious. All classes are final by default in Kotlin, unless explicitly specified with the `open` keyword.

I may have missed something in the config when using the [Spring Initalizer](https://start.spring.io/) or something was overlooked in the generated project file from Spring Initializer.

But this runtime error was solved by adding the `open` keyword infront of the `KotlinDemoApplication`.

## Notes
I had to install a few additional plugins to use Kotlin with Eclipse, which was not documented in any of the related websites. 
 - Eclipse Weaving Service
 - AspectJ Development Tools
 - Kotlin (Kotlin language support for Kotlin 1.4.0)
 - Kotlin-gradle  
<br/>

## References
 - [This stackoverflow answer](https://stackoverflow.com/a/56410163/592025)
 - The Demo Spring Boot application [spring-boot-kotlin-blog](https://github.com/ae-app-labs/spring-boot-kotlin-blog)
 - [Prefer composition over inheritance](http://web.mit.edu/6.005/www/fa14/classes/14-inheritance/)
 - [Why are Kotlin classes final by default instead of open?](https://stackoverflow.com/questions/51680006/why-are-kotlin-classes-final-by-default-instead-of-open)