---
layout: post
title: Android error on Toast
category: Dev
comments: true
summary: Solving an error when using a Toast from within a Fragment 
tags: [android, kotlin, development]
---
I was trying to Toast a message to show a debug message from a `Fragment` method that I had written a couple of days ago.
I got the below error message when running the app.

`java.lang.RuntimeException: Can't toast on a thread that has not called Looper.prepare()`

What I didn't realize was the method was run on a separate thread (as opposed to the main/UI thread) since it was doing an IO operation.
There are multiple ways to handle this, but the most easiest of them is to do this. 

```kotlin
activity!!.runOnUiThread( Runnable {
  Toast.makeText(activity, "Saving ${messages.size} messages", Toast.LENGTH_SHORT).show()
})
 ```
