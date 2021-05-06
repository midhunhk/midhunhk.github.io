---
layout: post
title: Message Counter 3.2
category: Dev
tags: [app, android]
---
We have released the latest version of Message Counter developed with codename **Unicorn**  this week.

<!-- more -->
### Migration to Android Studio
The major change for the project is migration from Eclipse Project to gradle based Android Studio Project.
This change allows many optimization and improved tools and of course support from Google for the development environment. 

### Track Sent messages when Service is offline
Other major change is an experimental feature added to track messages sent while the Background service was not running. This is a frequently
raised issue by many users and took many hours of research, development and testing to fix. This is released as an experimental feature
this time as it can be optionally

### Sent messages for Fresh install
Leveraging the changes made for tracking sent messages when the service is offline, for a fresh install we could count the messages
sent so far from the device. A couple of users had complained that the app would only

### New App Page
The app page for Message Counter had been designed from the scratch and is available at [Message Counter](http://midhunhk.github.io/message-counter/).

### Other
Various optimizations and updated graphics are part of this release as well.

### Change volume
The changes for this release account for around **30 separate Commits** with **39 files modified**.

### What's Next?
We plan for a follow up to this release with more changes are well as some planned future releases taking into account requests from users as well as general improvements.
