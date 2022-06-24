---
layout: post
title: CryptX Web Version
category: Project
comments: true
featured: /public/images/2021/11/23/cryptx_web_featured.png
featured_thumb: /public/images/2021/11/23/cryptx_web_thumb.png
featured_hero: true
hero_link: https://www.midhunhk.com/cryptx-web/
hero_link_text: View Web App
tags: [technology, development]
---
I've long been interested in Digital Securtiy and Cryptography, but the math seemed to be above my level of comprehension.<br/><br/> 
Very recently I revisited one of my very earlier projects and decided to start making a web version of it.
<!-- more -->  

## Revisiting CryptX
It started as a simple project to learn programming along with my studies. And while I had my own implementation of encryption 
algorithms, I quickly realized the hard way, it is best to use an industry standard algorithm.

The desktop versions can be used to quickly encrypt and decrypt files on a desktop environment. But in the modern times, a web or mobile app 
version would be very much useful. Among them, a web application has a much quicker turnaround time.

## History of the project
I always wanted to summarize the different iterations, and been able to dig up source code and builds from earlier versions and upload to Github. So listing all important information below.

| Version         | Language    |  Algorithm   | Comment  | Repo |
|-----------------|-------------|--------------|----------|------|
| CryptX 1 (2006) |  C          | Simple       | Text mode| Source code lost |    
| CryptX 2 (2006  |  C & JS     | Simple       | Text and Binary | Source code lost |    
| CryptX 3 (2006) |  C & JS     | Simple       | Extra settings file | Source code lost |    
| CryptX 4 (2007) |  C & JS     | MD5 for Password |HTA UI|[Repo](https://github.com/midhunhk/cryptx-v4) |
| CryptX 5 (2008) |  C++ & JS   | 128 bit AES  | HTA UI   |[Repo](https://github.com/midhunhk/cryptx-v5) |
| CryptX 6 (2011) | ActionScript| 128 bit AES  |Green Threads|[Repo](https://github.com/midhunhk/cryptx) |
| CryptX Web (2021)| JavaScript | 256 bit AES  | SvelteJS |[Repo](https://github.com/midhunhk/cryptx-web)|

The first couple of versions were command line applications written in C, with 4 and 5 using a HTA UI and javascript bridge 
layer for invoking the application. I would have to create a future post about HTA UI for historical documentation purposes.

## CryptX Web
Developing the CryptX Web took just half a day, owing to the use of SveletJS framework and Bulma CSS for styling. 
More time went into final polish and researching on using CryptoJS library.

There were a few reasons for choosing [Svelte](https://svelte.dev/), which includes faster development and the Svelete compiler 
that compiles to vanilla javascript. And finally due to this, the code executes on the client browser and no data is sent back 
through the network.

## Tutorial
I do have a plan to make a tutorial for the web version of this project sometime in the future.
