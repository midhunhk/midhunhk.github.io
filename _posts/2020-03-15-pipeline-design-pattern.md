---
layout: post
title: Pipeline Design Pattern
category: Dev
comments: true
tags: [java, development]
---
To simplify a process, I had to quickly build a utility app to create report based on status from a large number of emails on a daily basis.

I had always planned to refactor the single Java source file into a proper design when I found some free time.
That's how I got to implement my version of the Pipeline Design Pattern.

<!-- more -->
After refactoring, I was left with the following classes, and I will explain the main ones below.

![Classes](/public/images/2020/03/pipeline-pattern-classes.png)

The key interfaces in this implementation are "Pipeline" and "Stage"

<script src="https://gist.github.com/midhunhk/750a2c54f978485fbebcfc13c3d8b104.js"></script>

<script src="https://gist.github.com/midhunhk/168465f884051d0f642994acfee395fa.js"></script>

The next step is to create a number of Stages for the pipeline as required. 

Assuming `Messages` is a model object that has a list of messages in it, then for example:

```java
class ReadNamesStage implements Stage<Messages> {

    Messages execute(Messages input){
      // Read messages, probably an IO operation. 
      return message;
    }

}

class RemoveDuplicateStage implements Stage<Messages> {

  Messages execute(Messages input){
    Messages output;
    // Logic to remove duplicates from the input and save to output
    return output;
  }

}

class GenerateReportStage implements Stage<Messages> {

  Messages execute(Messages input){
    Reporter reporter = new HTMLReportGenerator();
    reporter.generate(input);
    
    return input;
  }
  
}
```

Next, we need to implement the Pipeline interface.

```java

class MessageReaderPipeline implements Pipeline {

    List<Stage> stages = new ArrayList<>();

    public void addPipe(Stage stage){
        stages.add(stage);
    }
    
    public void execute(){
        // The input to the first stage is empty in this implementation
        Messages input = null, output;
        for(Stage stage: stages){
            output = stage.execute(input);
            // Output of a stage serves as the input to the next
            input = output;
         }
    }

}

```

These stages are added to the pipeline and it is executed like in the main class like this.

<script src="https://gist.github.com/midhunhk/fd776304766781d202d5105f9344a839.js"></script>

The `GenerateReportsStage` makes use of the interface `Reporter` so that reports of different types can be created.

A sample implementation is available at: [https://github.com/ae-app-labs/pipeline-design-pattern](https://github.com/ae-app-labs/pipeline-design-pattern)

Further Reading:
[https://stackoverflow.com/questions/39947155/pipeline-design-pattern-implementation](https://stackoverflow.com/questions/39947155/pipeline-design-pattern-implementation)
