---
layout: post
title: Observe Content Provider in Android
category: Dev
tags: [java, development, kotlin]
---
Message Counter was using a background service to start an SMS Content Observer. While upgrading the app to target 
the latest Android API, it appeared that the service was killed after around 1 minute of the application went to the background.  

This proved challenging for the app's functionality until further research led to...  
<!-- more -->
Android has introduced `JobService` and related classes with API 21 which helps to schedule a `Service` that would be invoked 
based on certain conditions that are configured. With API 24, it got the ability to listen to changes to Content URIs. 
Since I had a tough time to find this solution, the below code explains how to implement this.

First off, we would create a `JobService` class which is actually a Service and Android calls the `onStartJob` when some specified conditions are met. Since this method is called on the Main thread, its best to offload the processing to a separate thread.

<script src="https://gist.github.com/midhunhk/bb7de0dbb3bb11ba0b08cb55d073a751.js"></script>

I'm using the `doAsync` method from the `Anko Commons` library from Jetbrains to simplify the work in a new thread.

`implementation "org.jetbrains.anko:anko-commons:0.10.4"`

That looks simple, right. Next step is to schedule the Job after specifying the conditions. The below example code uses an 
`addTriggerContentUri` operation on the Content Observer URI that we are interested in. Optionally specify any delays or 
any other conditions that you may need with the builder and schedule it.

<script src="https://gist.github.com/midhunhk/a78e499ea8758dffd03042a9b06161ec.js"></script>

That's it. Now whenever the conditions specified are met, Android will call the `onStartJob` method.
We have a simpler, memory and performance efficient approach to observe the content provider.

### Further Reading
1. https://medium.com/urbanclap-engineering/making-app-ready-for-oreo-738bf57114f4
2. https://medium.com/exploring-code/how-to-handle-background-services-in-android-o-f96783e65268
3. https://developer.android.com/reference/android/app/job/JobService
