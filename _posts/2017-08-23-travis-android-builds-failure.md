---
layout: post
title: Travis Android Build Failure
category: Dev
tags: [app, android]
---
<div class="custom-post-header mexican-red">
<div class="custom-post-title">Travis Android Build Failure</div>
</div>
The last release for Trip O Meter was in July. Last week, I was modifying some other configuration in the project, and all of a sudden the Trip O Meter Travis Builds started failing.
I had setup the CI builds for every checkin with the latest release [Fig and Camelot](http://midhunhk.github.io/dev/2017/07/17/fig-and-camelot/).

The error stated that there were no andorid images found although I did not make any changes to the travis configuration file.
> [Error: Target id is not valid. Use 'android list targets' to get the target ids.](https://travis-ci.org/midhunhk/trip-o-meter/builds/265911464)

Lot of head banging, multiple checkins, and a couple of branches created for isolating this issue all failed.

I did a Rebuild of the [latest release tag](https://travis-ci.org/midhunhk/trip-o-meter/builds/254211222) and that was passing. So I created a branch from that tag, but the branch was still failing.

It was then that I just compared the "Job Configuration" for both the above builds (The tag as well as the new branch based on the tag). The only difference was the tag which is working had `"dist": "precise"`, but the failing branch had `"dist": "trusty"`. All other confirguration was same.

![Job View](https://blog.travis-ci.com/images/job-view-config-dist.png)

After a few google searches, it came to my attention that from July 18th onwards the default distribution to run builds was made as "trusty". 
And apparantly, `trusty` does not support Android SDKs by default. 

I currently solved this problem by updating the config file to use `precise` as shown below.

*.travis.yml*  
`language: android`  
`dist: precise`  
`jdk: oraclejdk8`  

Once the Android SDKs are available in trusty, or when workarounds to install the SDK and tools onto trusty are available, the Builds would be switched to `trusty`.

## References
[Travis Blogpost](https://blog.travis-ci.com/2017-07-11-trusty-as-default-linux-is-coming?utm_source=web&utm_medium=banner&&utm_campaign=trusty-default)  
[Issue raised on GitHub](https://github.com/travis-ci/travis-ci/issues/5990)  
[Refernce fix for this issue](https://github.com/Amos2016GroupOne/amos-ss16-proj1/pull/11/files)  
