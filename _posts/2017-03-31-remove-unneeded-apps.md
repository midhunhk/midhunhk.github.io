---
layout: post
title: Remove Unneeded apps in Ubuntu
category: Dev
tags: [linux, ubuntu, terminal]
---
<div class="custom-post-header rocket-red">
  <div class="custom-post-title">sudo apt-get autoremove</div>
</div>

While learning some commands on Ubuntu Terminal, I came across one called `apt-get autoremove`. 
This was actually suggested by the terminal when I was playing around with `apt-get`.

Whenever an application is installed using `apt-get`, the system will also install dependend software. 
It is common in Ubuntu/Linux that applications share the same libraries. But when you you remove an appplication, the dependency will not be removed as it may be used by another application.

When we run `sudo apt-get autoremove`, it will remove the dependencies that were installed with applications and that are no longer used by anything else on the system.

I was able to save around 1 GB of disk space when I ran this command. How much space could you save?
