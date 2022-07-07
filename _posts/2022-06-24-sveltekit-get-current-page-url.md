---
layout: post
title: Current Page URL in SvelteKit and SEO Tags
description: Let's explore the method to get the current page url in a SveletKit app, and additionally Twitter and Open Graph tags for SEO
category: Learning
featured: /public/images/site/bg/mesh_01.jpg
featured_hero: true
tags: [technology, development, small-post]
---
Having recently updated the [ae app labs org website](https://ae-app-labs.github.io/) to use SvelteKit, I came across some SEO optimizations that can be done to improve how articles are previewed on Twitter, Linked In etc.
<!-- more -->  

One of the important meta tags that we need to use is the `meta property="og:url"`, which can be imported from `$app/stores`.
```javascript
<script>
	import { page } from '$app/stores'
</script>
```

And there after access the url path in our page.
```html
<meta property="og:url" content="{$page.url.pathname}"/>
```
This property was previously `$page.path`, but seems to have changed in the latest version.
Luckily the compiler was able to understand the intent and provide a helpful message.

`$page.path has been replaced by $page.url.pathname`

The other SEO Fields that can be added are for Twitter and Open Graph Tags

```html
  <meta name="twitter:site" content="@midhunhk" />
  <meta name="twitter:creator" content="@midhunhk" />
  <meta property="og:url" content="/personal/2021/12/31/year-in-review/"/>
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://midhunhk.com/public/images/2021/12/winter_2021.jpg" />
  <meta name="og:image" content="https://midhunhk.com/public/images/2021/12/winter_2021.jpg" />  
  <meta name="twitter:image:alt" content="A walkway covered in snow at a Scarborough park in Winter" />
  <meta name="twitter:title" content="Year 2021 in Review" />
  <meta property="og:title" content="Year 2021 in Review"/>  
  <meta name="description" content="The yearly review of notable learnings from the year">
  <meta name="twitter:description" content="The yearly review of notable learnings from the year" />
  <meta name="og:description" content="The yearly review of notable learnings from the year">  
```

All the changes can be tested using the Twitter Card Validator as well which gives us a good idea on how it will be rendered.
![Twitter Card Validator](/public/images/2022/06/24/twitter_card_validator.png)

## References
 - [SvelteKit Migration Guide](https://kit.svelte.dev/docs/modules#$app-stores)
 - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
 - [What are Open Graph Tags](https://redclayinteractive.com/what-are-open-graph-tags/)
