---
title: What is 'a fast website'?
date: 2020-10-02
card: 'linear-gradient( 135deg, #FCCF31 10%, #F55555 100%);'
description: What does fast mean when it comes to putting something online? Is it how long a page takes to down? To render? To be interactive?
category: Performance
header: /images/fast.jpg
---

Everyone who uses the web a lot complains when a website is too slow. Website owners want their website to be fast. What does that actually mean though? How do you measure the speed of a website?

There are a lot of different ways to measure the loading time of a website, and a lot of different tradeoffs at play when you optimize for one over another. Whether you test the time it takes to connect to the server, or to start delivering the content, or to render the content on the page, depends on what you want to optimize for.

## Different measures of website speed

When someone says a website is slow they usually mean that their perception of how long it takes from clicking a link or entering an address in their browser til the page has finished loading and they can actually use it is greater than *some length of time*. If you ask a web developer though you'll probably get any number of different answers about what 'a slow website' is.

::: aside 7 code sticky black full-width-img
  <figure>
    <picture>
      <source srcset="speed-1x.webp 1x, speed-2x.webp 2x" />
      <img src="./speed.jpg" alt="Fancy blue car dial">
    </picture>
    <figcaption>A cliche representing the speed of a typical website.</figcaption>
  </figure>
:::

### Time to first byte

The first measure of slowness is simply how long it takes from issuing a request for a website til when the very first byte of data starts to be returned. As far as website metrics go this is slightly unhelpful - it's more a measure of the latency and bandwidth available between the user and the website server than a measure of how fast the website is. That said, if the user is on a slow connection that definitely, and very obviously, results in lots of slow websites.

### DOMContentLoaded

The next measure of website speed is how long the browser takes to go from the request being issued to the `DOMContentLoaded` event being triggered. `DOMContentLoaded` fires when the website's HTML context has been downloaded and parsed. This is a better measure of speed than TTFB but it ignores any blocking requests that have yet to be completed, so the fact that DOMContentLoaded has fired absolutely **doesn't** tell us that the page is ready to be used. It's useful for some metrics but it's not really telling us how fast a website really is.

### Time to first paint

TTFP, or Time to First Paint, is the first measure of time in loading a website that's actually useful for telling how fast a website takes to load. It's the time between issuing the request for a page and the browser actually being able to draw something on the screen. This means that the initial request for the HTML has to have completed, *and* all the blocking requests for additional content such as CSS and blocking JS content have to have completed as well.

What this doesn't tell us is how much more work there is to do after the initial load, so a website that quickly downloads a framework and then slowly hydrates it with content can *still* feel slow even when the metrics are telling us the browser has drawn something to the screen very quickly.

### Time to interactive

The last commonly used metric is TTI, or Time to Interactive. This is the time taken from the request being sent to the server the page is on to everything being available, and for the browser to have parsed and rendered the page, and for it to finally be ready for the user to interact with. This is what most people consider to be the measure of how long a website takes to load.

### Loaded

The very last measure of how long a website takes to load is the browser firing its 'Loaded' event. The loaded event fires when everything is completely downloaded, running, interactive, and *finished*. This sounds good on paper but in reality most websites are actually ready to use some time before this event is fired, so it gives a false impression of how long something has taken. Consequently it's not very useful.

## Real speed and perceptual speed

All the measurable things that can be used to define speed ignore an important problem - what 'slow' is when you're loading a website is not only wholly subjective but also open to intepretation depending on the circumstances you're loading the page under. A user might be willing to wait much longer to load a website full of kitten pictures because the reward is worth the wait while they're much less happy to wait for their calendar application to tells them whether they have a meeting starting in 60 seconds.

Even within a web *page* something can be perceived to have happened more quickly than it actually did due to other activity in the browser. Showing a user a loading spinner or a progress bar can make them more aware that something is taking time, but because they're getting feedback they're more willing to wait.

Speed is not just down how many milliseconds something took. But, obviously, if it can really take fewer then it'll feel faster too.

## Where does the time go?

It's all very well knowing how long a page took to load but in order to optimize it it's necessary to know where the time was spent. In order to know that the first thing to understand is what actually happens when you load a page. That is the topic of the next post (coming soon!).