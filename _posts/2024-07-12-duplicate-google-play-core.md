---
layout: post
title: Duplicate class StateUpdatedListener found
title_alt: Duplicate class com.google.android.play.core.listener.StateUpdatedListener found
category: Dev
comments: true
featured: /public/images/photos/boat-pier.jpg
featured_alt_text: A picture of a boat on Lake Ontario moving towards a pier which has a red lighthouse and people on it on a bright summer day.
featured_hero: true
hero_darken: true
summary: Over the last week I had spent a few evenings for what seemed like a 'minor' and routine library upgrade for my Android Apps. And I almost gave up.
tags: [technology, development, rant, ai, android]
---
As per the latest Google Play policies, all Android apps on the Play Store must target API Level 34 by August 31, 2024. And the notice read like:

>The Play Core Library uses broadcast receivers and has already been updated to be compatible with Android 14. You should update to a newer version of the library as soon as possible as older versions of the Play Core library may crash in apps targeting Android 14. As a reminder, from August 31, Google Play will require all new app releases to target Android 14.
>

> Your app still uses a version of the Play Core library that is incompatible with targetSdkVersion 34, listed here:
>   com.google.android.play:core


## Night 1
However, a straight forward bump in the version proved unsuccessful as I started getting 'Duplicate class errors for many classes' in the library that was updated. There were some migration steps that were documented which were trivial.

The error upon appliucation build looked something like this:
```
Duplicate class com.google.android.play.core.listener.StateUpdatedListener found in modules 
	core-1.6.1.aar -> jetified-core-1.6.1-runtime (com.google.android.play:core:1.6.1) and 
	core-common-2.0.3.aar -> jetified-core-common-2.0.3-runtime (com.google.android.play:core-common:2.0.3)
```
Clearly there is `com.google.android.play:core:1.6.1`, the old version and `com.google.android.play:core-common:2.0.3` which is the newer one that I upgraded as per the [documentation](https://developer.android.com/guide/playcore#playcore-migration).

Having double and triple checked the `build.gradle` file and not seeing `play:core:1.6.1` in sight, I suspected it was coming from my own library [lib-aeappps](https://github.com/midhunhk/lib-aeapps) which I carefully checked and published a [new version](https://jitpack.io/#midhunhk/lib-aeapps).

It was late in the night, what started out as a quick fix had taken a few hours. The build was still failing, so I decided to continue the next day(evening/night).

## Night 2
I backtracked my changes, went over the `google.play.core` upgrade documentation, even rebuilt [lib-aeappps](https://github.com/midhunhk/lib-aeapps) after ensuring it's dependencies were not exposed to consumer apps.

Suggestions by `Gemini` within Android Studio were unhelpful in resolving the error.

One of the suggestions was to exclude a dependant library so only one version was included at compile time. Theoreticaly this seems right, but I knew this won't work because they got rid of `core` module with version 2 of `com.google.android.play`.

```
implementation("com.google.android.play:app-update:2.1.0") {
    exclude group: 'com.google.android.play', module: 'core'
}
```

Since the build was failing with the same error, I knew my thought was correct and researched into how to find out all the dependencies including transitive ones to find out which one was still referncing the older version.

A search led me down to the below gradle command.

`./gradlew dependencies`

However, the output was less dramatic. Not the expected output.

```
No configurations

A web-based, searchable dependency report is available by adding the --scan option.

BUILD SUCCESSFUL in 11s
1 actionable task: 1 executed
```
The web-based report also had no usable information.

Frustrated, I posted a question on stack overflow in case some one else had faced similar issue and had a solution: [stackoverflow.com/../google-play-core-library-version-conflicts-during-upgrade-to-api-34](https://stackoverflow.com/questions/78715090/google-play-core-library-version-conflicts-during-upgrade-to-api-34)

With that I shutdown for the night, hoping someone would take a look and provide a solution.

## Night 3
The next day (night), and with no answers to my StackOverflow qurstion, I decided to continue the hunt for a solution myself. After going through the official gradle docs, I realized I could run the below command instead.

`./gradlew -q app:dependencies`

Low and behold, it started listing out the dependencies as a tree.
Once I had piped the output to a text file, a quick search for `com.google.android.play:core` revealed the source of the issue.

```
...
+--- com.google.android.play:review:2.0.1
|    +--- com.google.android.gms:play-services-basement:18.1.0 -> 18.3.0 (*)
|    +--- com.google.android.gms:play-services-tasks:18.0.2 -> 18.1.0 (*)
|    \--- com.google.android.play:core-common:2.0.2 -> 2.0.3
+--- com.google.android.play:app-update:2.1.0
|    +--- com.google.android.gms:play-services-basement:18.1.0 -> 18.3.0 (*)
|    +--- com.google.android.gms:play-services-tasks:18.0.2 -> 18.1.0 (*)
|    \--- com.google.android.play:core-common:2.0.3
\--- com.github.dnKaratzas:android-inapp-update:1.0.2
     +--- com.google.android.play:core:1.6.1
     +--- androidx.annotation:annotation:1.1.0 -> 1.6.0 (*)
     +--- androidx.lifecycle:lifecycle-runtime:2.2.0-alpha02 -> 2.6.2 (*)
     \--- com.google.android.material:material:1.0.0 -> 1.12.0 (*)
...
```

Aha, a thrid party library `com.github.dnKaratzas:android-inapp-update:1.0.2` was pulling in `com.google.android.play:core:1.6.1`

Since this library had not been updated in a long time, either I need to remove this library and the feature (inapp update) or try something else based on the learing from recent days.

```
implementation ('com.github.dnKaratzas:android-inapp-update:1.0.2') {
    exclude group: 'com.google.android.play', module: 'core'
}
```

Voila! the duplicate classes error on build is gone.

## Evening 4
Sadly, the app crashes on startup in the Emulator, so it's time to take out the scissors/digital eraser.

```
java.lang.NoSuchMethodError: No interface method getAppUpdateInfo()Lcom/google/android/play/core/tasks/Task; in class Lcom/google/android/play/core/appupdate/AppUpdateManager; or its super classes (declaration of 'com.google.android.play.core.appupdate.AppUpdateManager' appears in <dex file>)
    at eu.dkaratzas.android.inapp.ucheckForUpdate(InAppUpdateManager.java:282)
    at eu.dkaratzas.android.inapp.updat(InAppUpdateManager.java:165)
    at eu.dkaratzas.android.inapp.update.(InAppUpdateManager.java:153)
    at eu.dkaratzas.android.inapp.update.I(InAppUpdateManager.java:136)
    at com.ae.apps.stickerapp.Entr(EntryActivity.java:69)
```

With the `build.gradle` file updated and the feature removed, the app started working normally. 
A new release build was generated and uploaded to Google Play to satisfy the API 34 requirement. 

Maybe one day I will revisit and implement the "in-app update" feature back in. 
It could be part of `lib-aeapps` which has been in a Beta version for more than a year due to partial rewrite and upgrades.