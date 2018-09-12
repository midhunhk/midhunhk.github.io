---
layout: post
title: Message Counter 4.0
category: Dev
tags: [app, android]
---
<div class="featured">
  <img src="https://raw.githubusercontent.com/midhunhk/message-counter/gh-pages/resources/v4/page_header.png" alt="Message Counter 4" />
</div>

September marks a Major milestone for a hobby Android app. What started as a proof of concept back in 2013 has now reached Version 4 
and close to a total of 1,00,000 downloads.

<!-- more -->
The app has been completely rewritten from scratch in [Kotlin](https://kotlinlang.org/), making heavy use of 
[Android Architecture Components](https://developer.android.com/topic/libraries/architecture/) and targeting the latest 
Android API versions.

The core rewrite of the app took around 2 weeks, with another month of feature refinement, UI polish and internal testing. At a later stage, 
it was decided to incorporate learnings from Material Theming and custom fonts.

[Rewriting Message Counter](https://github.com/midhunhk/message-counter/issues/43) was no easy task, and it was started without 100% confidence.
The major driving force behind the rewrite was to improve performance and the worrying number of issues and ANRs reported in Google Play Console 
for existing versions. There were a lot of inconsistencies regarding the message counts that were reported as well.

Github issue tracker was very helpful inorder to track and prioritise the tasks for achieving this release. The prime goal of the rewrite was 
to provide existing functionality, retain user data and improve performance and accuracy.

Targeting the latest API provided the chance to handle Runtime Permissions and JobSchedulers that improve battery usage instead of running 
a background service. 

Overall, it was a good learning experience with around 220 separate commits over 280 files - a satisfactory amount of design, coding and learning.

I shall try to write about some learnings from the project in future posts.

## References
[Download from Google Play](https://play.google.com/store/apps/details?id=com.ae.apps.messagecounter)  
[Wiki](https://github.com/midhunhk/message-counter/wiki)  
[Source Code](https://github.com/midhunhk/message-counter)  
[App Page](http://midhunhk.github.io/message-counter/)  