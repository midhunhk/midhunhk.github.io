---
layout: post
title: AndroidX migration and ConstraintLayout
category: Dev
comments: true
tags: [android, development]
---
I migrated an Android app to AndroidX with the help of the Refactor option from Android Studio. After all the references in the java files were updated,
I ran into the below error when I tried running my app.

`android.view.InflateException: Binary XML file line #2 in <>: Error inflating class androidx.constraintlayout.ConstraintLayout`  
` Caused by: android.view.InflateException: Binary XML file line #2 in <>: Error inflating class androidx.constraintlayout.ConstraintLayout`  
` Caused by: java.lang.ClassNotFoundException: androidx.constraintlayout.ConstraintLayout`  

After a bit of head scratching and internet search, I was able to fix it by simply changing 
`androidx.constraintlayout.ConstraintLayout` to `androidx.constraintlayout.widget.ConstraintLayout`

I was expecting atleasst the IDE to throw an error, but had to find and fix it the hard way.