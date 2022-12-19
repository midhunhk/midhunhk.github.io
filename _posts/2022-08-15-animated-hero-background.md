---
layout: post
title: Animated Hero Background with HTML5 and SASS
category: Learning
comments: true
featured: /public/images/site/bg/mesh_01.jpg
featured_alt_text: A bluish mesh gradient
featured_hero: true
tags: [tutorial, technology]
---
When the org website for [ae app labs](https://ae-app-labs.github.io) was redesigned and upgraded to use SvelteKit, I added an animated background for the hero section. I had that idea for a long time and wanted to change the boring and simple background from the last redesign.

<!-- more -->  
<iframe width="560" height="315" src="https://www.youtube.com/embed/KwI1sZFaj1M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

It is basically a vertically stacked set of waves using Scalable Vector Graphics (SVG) that are animated using CSS3.

![Ae App Labs Redesign](/public/images/2022/08/15/ae_app_labs_home.png)
Above is the current landing page for the org website, and the wavy background layers move up and down with different intervals.

First thing to do is to get the svg with the stacked waves, which I created using the [Haikei App](https://app.haikei.app). After tweaking the parameters to generate random stacked waves and downloading the svg, we just copy paste the contents of the file into the web page.

It will look like the below snippet, where we can remove some unwanted tags and assign a class of `wave` to each of the paths that represent a wave.

```html
    <main>
        <div class="hero">
            <svg>
                <path class="wave" .../>
                <path class="wave" .../>
                ...
            </svg>
        </div>
    </main>
```

Next up, we define the `wave` class in css as an animation. Here we are telling the object to move up and down for an infinite number of times with a default duration of 5 seconds and to rewind the animation when it reaches the end. 

This is achieved with the `@keyframes` directive where we just specify the starting and ending state and the browser does the interpolation between the states.

```css
.wave {
    animation: waveAnimation 5s infinite alternate-reverse;
}
@keyframes waveAnimation {
    from {
        transform: translate(0, -20px);
        z-index: 5;
    }
    to {
        transform: translate(0, 20px);
    }
}
```

To get the staggered effect, we would need to override the animation duration for each of the layers in the html. This can be achived by adding the attribute `style="animation-duration:4s"` and chanding the value for each layer.

That is all to get this effect.

## References
1. [Haikei.app](https://app.haikei.app/)
2. [Source for web-animated-hero](https://github.com/ae-app-labs/web-animated-hero)
3. [@keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)
