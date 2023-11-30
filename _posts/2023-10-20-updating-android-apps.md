---
layout: post
title: Updating Android Apps
category: Learning
comments: true 
featured: /public/images/site/bg/mesh_01.jpg
featured_hero: true
hero_darken: true
summary: I had been procrastinating with the update of my Android apps that were published to the Play Store for a few years now. It finally caught up to me as Google Play gave me a deadline of Aug 31, 2023 to update them to target the latest Android API version or be delisted from the store.
tags: [android, app]
---
Just like I procrastinated writing this blog article by a month and a half, I had been pushing back on an important activity which Google Play expects all "active" developers to follow. 

That is to update the target version for all apps to the latest Android SDK version, else the app won't be listed on the Play Store anymore  

![upgrade apps notification](/public/images/2023/10/20/notification.png)

I had been snoozing this notification on my Gmail inbox for a while, until I had a little over two weeks for compliance. 

The main reason for delaying were because
-  Some API's were deprecated and needed to be worked around, as well as few of the apps relying on a [library](https://github.com/midhunhk/lib-aeapps) that hadn't been updated since March 2021. 
- A number of dependencies to update, most importantly [Android Gradle](https://github.com/midhunhk/lib-aeapps/issues/37) 
- The need to migrate off from [dcendents android-maven](https://github.com/midhunhk/lib-aeapps/issues/36) plugin to Android Build Plugin's [publish-library](https://developer.android.com/build/publish-library).
- Maintain multi module structure upon publish after changing the publish-library 
- Move from Gradle 6 to 8 which involved updating a lot of DSL constructs
- Migrate from legacy Android Support libraries to Android X and solve some version compatability issues 
- Change the multi module build strucure, and use Kotlin DSL

A few long nights were spent on tackling one issue after the other along with [Trance music](https://www.astateoftrance.com/?home=1), and tens upon tens of browser windows to google, stackoverflow and chat gpt. Then finally the important changes required for other apps to be able to consume the upgraded library were done. This included the ability to publish multiple modules from the library after updating the publish plugin. That was the first major milestone to unblocking of next steps - updating the android apps.

![github contributions](/public/images/2023/10/20/contributions.png)

During the mean time, I had upgraded a couple of apps that did not have a dependency on the library, so I had an idea of what to expect from targeting the latest SDK version would entail.

Finally it was done, all the apps were updated and the latest builds were published to the Play Store well before the deadline and approved.
![upgrade apps notification](/public/images/2023/10/20/after-update.png)

During the upgrades, I did convert some old java based projects to use Kotlin and it was fun again to work with Kotlin.

In the end, the process of updating and enhancing Android apps to the latest version was rewarding. The cycle in Software Development is to face issues and the challenge to solve them one by one. 

It is however a reminder that staying current in the fast-evolving world of app (front end in general) development is challenging. Trying to make about 2-3 years worth of changes at once did seem like a lot to keep up with, unless they are made periodically.

## What's Next?
 - The [lib-aeapps](https://github.com/midhunhk/lib-aeapps) is still in Alpha, some more items need to be cleaned up before it can become a proper release. Thankfully it has not become so popular that there is constant demand to publish the latest updates. 
 - A migration guide to v5 for the library needs to be added.
 - I have a feeling, another android library getting deprecated is just around the corner
