---
layout: post
title: Random Contact 4.0
category: Dev
comments: true
tags: [app, android]
---
![Random Contact mockup](/public/images/2021/03/25/mockup_light.png)
An update to the Android app Random Contact had been in the plans for a couple of years now. 

One of the major roadblocks was the major rewrite of the [lib-aeapps](https://midhunhk.github.io/dev/2018/09/21/announcing-lib-ae-apps-4/) library that is used by Random Contact. The library project was finally upgraded to version 4 in late 2020.
<!-- more -->

The app had an outdated design and technical stack. The last major update was back in 2017 when it was migrated to the Android Studio format and based on the original Material Design Guidelines.

The first step was to redesign the screens using Adobe XD and add some missing flows. For good measure a Dark mode was also designed since it is easy to implement Day and Night themes with the latest Android libraries. 
![Dark Mode mockup](/public/images/2021/03/25/mockup_dark.png)

The app was rewritten with Kotlin, Jetpack library and Android Architecture Components. These enabled the core features to be completed within a week of part time contribution. 

The database interaction was very easy to code and manage with migrating to Room database and Life Cycle Components.

Additionally In-App Reviews, In-App Update and a welcome message for people upgrading the app were added. 

![Promotional Screenshots](/public/images/2021/03/25/promotional.png)

Most of the time was spent on the polishing the UI and tweaking the themes. A few last minute bugs needed to be squashed and the latest version of the app is now available on the Google Play Store.

### Links
1. [Play Store Link](https://play.google.com/store/apps/details?id=com.ae.apps.randomcontact)
2. [Case Study](https://ae-app-labs.github.io/case-studies/random-contact)
3. [Github Source](https://github.com/midhunhk/random-contact)