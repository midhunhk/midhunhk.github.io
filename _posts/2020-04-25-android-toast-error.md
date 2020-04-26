---
layout: post
title: java.lang.RuntimeException: Can't toast on a thread that has not called Looper.prepare()
category: Dev
tags: [android, kotlin, development]
---
I was trying to Toast a message to show a debug message from a `Fragment` method that I had written a couple of days ago.

What I didn't realize was the method was run on a separate thread (as opposed to the main/UI thread) since it was doing an IO operation.
There are multiple ways to handle this, but the most easiest of them is to do this. 

<script src="https://gist.github.com/midhunhk/8241c0f96d14fd3e03a93c6232bf65e1.js"></script>
