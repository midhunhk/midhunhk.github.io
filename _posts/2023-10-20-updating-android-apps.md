---
layout: post
title: Updating Android Apps
category: Learning
comments: true 
featured_alt_text: An screenshot of webpage showing concentric arcs and circles on them.
featured_hero: false
hero_darken: true
summary: I had been procrastinating with the update of my Android apps that were published to the Play Store for a few years now. It finally caught up to me as Google Play gave me a deadline of Aug 31, 2023 to update them to target the latest Android API version or be delisted from the store.
tags: [android, app]
---
Just like I procrastinated writing this blog article by a month and a half, I had been pushing back on an important activity which Google Play expects all "active" developers to follow. 

That is to update the target version for all apps to the latest Android SDK version, else the app won't be listed on the Play Store anymore  

![upgrade apps notification](/public/images/2023/10/20/notification.png)

I had been snoozing this notification on my Gmail inbox for a while, until I had a little over two weeks for compliance. 

The main reason for delaying were because
-  Some API's were deprecated and needed to be worked around as well as few of the apps relying on a [library](https://github.com/midhunhk/lib-aeapps) that hadn't been updated since March 2021. 
- A number of dependencies to update, [Android Gradle](https://github.com/midhunhk/lib-aeapps/issues/37) 
- The need to migrate off from [dcendents.android-maven](https://github.com/midhunhk/lib-aeapps/issues/36) to Android Build Plygin's [publish-library](https://developer.android.com/build/publish-library) 
- Move from Gradle 6 to 8 which involved updating a lot of DSL constructs
- Migrate from Android Support libraries to Android X and solve some version compatability issues 
- Change the multi module build strucure, and use Kotlin DSL

A few long nights were spent on tackling one issue after the other along with [Trance music](https://www.astateoftrance.com/?home=1) and finally the important changes required for other apps to be able to consume the upgraded library were done. (It is still in version 5 Alpha).

![github contributions](/public/images/2023/10/20/contributions.png)

During the mean time, I had upgraded a couple of apps that did not have a dependency on the library, so I had an idea of what to expect from targeting the latest SDK version would entail.

Finally it was done, all the apps were updated and the latest builds were published to the Play Store well before the deadline and approved.
![upgrade apps notification](/public/images/2023/10/20/after-update.png)

During the upgrades, I did convert some old java based projects to use Kotlin and it was fun again to work with Kotlin.

In the end, the process of updating and enhancing Android apps to the latest version was rewarding. The cycle of Software Development is to face issues and keep solving them one by one. 

It is however a reminder that staying current in the fast-evolving world of app development is challenging. About 2-3 years worth of changes was a lot to keep up with unless they are made periodically.