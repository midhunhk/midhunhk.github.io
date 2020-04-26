---
layout: post
title: Pipeline Design Pattern
category: Dev
tags: [java, development]
---
To simplify a process, I had to quickly build a utility app to create report based on status from a large number of emails on a daily basis.

I had alwyas planned to refactor the single Java source file into a proper design when I found some free time.
That's how I got to implement my version of the Pipeline Design Pattern.
<!-- more -->
After refactoring, I was left with the following classes, and I will explain the main ones below.

![Classes](/public/images/2020/03/pipeline-pattern-classes.png)

The key interfaces in this implementation are "Pipeline" and "Stage"

<script src="https://gist.github.com/midhunhk/750a2c54f978485fbebcfc13c3d8b104.js"></script>

<script src="https://gist.github.com/midhunhk/168465f884051d0f642994acfee395fa.js"></script>

The next step is to create a number of Stages for the pipeline as required.
These stages are added to the pipeline and it is executed like in the main class like this.

<script src="https://gist.github.com/midhunhk/fd776304766781d202d5105f9344a839.js"></script>

The `GenerateReportsStage` makes use of the interface `Reporter` so that reports of different types can be created.

Further Reading:
https://stackoverflow.com/questions/39947155/pipeline-design-pattern-implementation
