---
layout: post
title: Spring Cloud
category: Learning
comments: true
tags: [technology]
---
Last year I had learnt Spring Cloud and the various components in it, and also had some written notes. So this year, when I came across them I decided to persist it in digital form. <br/><br/>
Being a Java developer and having used Spring frameowrk and Spring Boot for most of my enterprise projects, it was vey easy to be work with Spring Cloud for microservices. Spring Cloud provides tools to quickly build some of the common patterns in distributed systems.
<!-- more -->  

## Features
Let's take a look at some of the features provided by Spring Cloud.

### Service Discovery
Register into a service discovery and easily discover other services available in the ecosystem.
e.g; Netflix Eureka, Hashicop Consul

### Router and Filter
An API Gateway service that provides dynamic routing, monitoring, resiliency etc.
e.g; Netflix Zuul

### Distributed Configuration
A centralized external configuration management backed by a git repository. The Config Server has a central place to manage external properties for applications across all environments.
e.g; [Spring Cloud Config](https://spring.io/projects/spring-cloud-config)

### Client side loadbalancing
Load balancing improves the distribution of workloads across multiple services.
e.g; Ribbon

### Circuit Breaker
It allows graceful degradation of functionality when a method call on a service fails. This allows a microservice to continue operating when a related service fails.
e.g; Hysterix

### Routing
Spring Cloud Gateway is an intelligent and programmable router based on Project Reactor.

### Log Tracing
Provides support for log correlation and distributed tracing.
e.g; Zipkin, [Sleuth](https://spring.io/projects/spring-cloud-sleuth)

### Security
It provides support for Oauth2 server and resource service by use of few annotations. [Spring Cloud Security](https://spring.io/projects/spring-cloud-security) offers a set of primitives for building secure applications and services with minimum fuss. 

## References
1. [Spring Cloud](https://spring.io/projects/spring-cloud)
2. [Spring Cloud Learning](https://github.com/ae-app-labs/spring-cloud-learning)
