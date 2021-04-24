---
layout: post
title: Splash Screen
category: Dev
summary: From my research, there are multiple ways to create a Splash Screen ranging from new Activity for splash which is displayed for a fixed time to the simple approach detailed below.
tags: [app, android]
---
<div class="custom-post-header gulf-stream">
  <div class="custom-post-title">Android Splash Screen</div>
</div>

With the latest updates to Trip O Meter (codenamed Balanjar - Version 2.0), the app startup time has increased a bit.
While I was not able to dig into the exact reason for the slowness, I thought about adding a Splash Screen while the app is loading.

From my research, there are multiple ways to create a Splash Screen ranging from new Activity for splash which is displayed for a fixed time to the simple approach detailed below.

<!-- more -->
We create a Splash layout which defines the content of the Splash screen.
<script src="https://gist.github.com/midhunhk/fe2be8b80e4b9af15797d805045c88b4.js?file=splash.xml"></script>

Next a new style is created with `android:windowBackground` as `@layout/splash`.
<script src="https://gist.github.com/midhunhk/fe2be8b80e4b9af15797d805045c88b4.js?file=styles.xml"></script>

Now set this style as the style for the Launcher Activity
<script src="https://gist.github.com/midhunhk/fe2be8b80e4b9af15797d805045c88b4.js?file=AndroidManifest.xml"></script>

Once the Activity is loaded, we would set the style of the Activity back to the default style. `R.style.AppTheme_NoActionBar` in this case represents the style `R.style.AppTheme.NoActionBar`. Just make sure this is called before calling `super.OnCreate`.
<script src="https://gist.github.com/midhunhk/fe2be8b80e4b9af15797d805045c88b4.js?file=MainActivity.java"></script>

That's it, the contents of splash.xml will be displayed instead of the blank white screen before the application launches. This is a good place to show the app's branding.
