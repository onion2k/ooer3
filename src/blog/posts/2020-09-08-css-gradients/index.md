---
title: CSS Gradients
date: 2020-09-08
description: CSS is amazing in 2020, and we can use it to do some pretty whizzy effects on pages. One of the best features are the gradients - linear-gradient, radial-gradient and conic-gradient. Here's a few ways to do some interesting things with them.
category: CSS
gradient: 'linear-gradient( 135deg, #FCCF31 10%, #F55555 100%);'
---

CSS has been around for a while now, and if you spend a bit of time poking around in the corners of the specification you can find some really cool features. Some are big and obvious and get written about all the time, and others ... don't.

One thing that could certainly be utilised more by designers is CSS's gradient feature. There are five options - linear, radial, conic, and repeating linear and repeating conic - and they're exceptionally handy for creating effects that you might otherwise implement with an image file or an SVG (which is also technically an image).

## You're looking at a gradient right now.

::: aside 5 code sticky
  ```css
  header, footer {
    background-image: linear-gradient(
      135deg,
      #ebed88 25%,
      #dfe277 25%,
      #dfe277 50%,
      #ebed88 50%,
      #ebed88 75%,
      #dfe277 75%,
      #dfe277 100%
    );
  }

  article {
    background: linear-gradient(
      90deg,
      rgba(255,255,255,1) 0%,
      rgba(255,255,255,1) 50%,
      rgba(0,0,0,1) 50%,
      rgba(0,0,0,1) 100%
    );
  }
  ```
:::

There's a gradient on this page. There's a couple actually. The first is the stripey background in the header and footer. The second is the half white/half black backround of the blog post itself. These two examples demonstrate one important factor about CSS gradients - they don't have to be what you might have once considered to be a 'gradient', eg one color fading to another over an image. You can do that of course, but you can also make sharp steps to change from one color to another.

The amount of control that gradients give you are essentially the same as you might find in any image editing application. You can control the colors using any format that CSS accepts, the direction that the gradient travels in, and the spacing between each step. For repeating gradients you also get to define how often the pattern should repeat.

Gradients in CSS are intrinsically dimensionless. This means that they expand to fit the space they're given. In order to control the scaling of a gradient we need to use the `background-` set of CSS rules. This means using either the `background` shorthand or `background-image` rule with things like `background-size`, `background-position`, and `background-repeat` to set how the gradient is displayed.

This leads on to another important point about CSS gradients - as a rule they're almost always used as a background to another element.

## Using gradients

### Linear gradients

The first type of gradient to look at is the boring old linear type. It's useful to creating a fade from one color to another, or for making stripes, or for creating the kind of 'dual color' background that this post is using. The API for a linear gradient is relatively straightforward - a direction, and then a series of steps for the browser to interpolate. They're best explained on MDN.

::: aside 1 code
  <div style="background-image: linear-gradient(115deg, #f00, #00f); width: 100%; height: 100px"></div>
:::

A simple gradient can be developed by creating a div and assigning it a background-image of `linear-gradient()` with a direction, a start color and an end color.

::: aside 1 code sticky
  ``` css
    background-image: linear-gradient(115deg, #f00, #00f);
  ```
:::

Beyond using a single pair of color stops for the start and end points it is possible to generate much more exciting and interesting gradients to achieve some interesting effects.

::: aside 1 code sticky
  <div style="background-image: linear-gradient(115deg, #f00, #00f, #f00, #00f); width: 100%; height: 100px"></div>
:::

To use a CSS gradient to create a more 'stripey' effect you just need to add more color stops. There isn't really a limit to the number that can be included in the gradient. You can also include a length value in the gradient if you don't want all the stripes to be the same size.

::: aside 3 code sticky
  ``` css
    background-image: linear-gradient(
      115deg,
      #f00,
      #00f,
      #f00,
      #00f
    );
  ```
:::

There are lots of really useful linear gradient generators around the web too. I find myself coming back to https://cssgradient.io/ quite often.

### Radial gradients

A radial gradient is a circular gradient starting in the center of the element and fading outwards towards the edge. The same principles that you can use on a linear gradient apply to radial gradients too - a gradient from the center outwards will make a 'splash' effect, while using multiple color steps will make concentric circles that can be used to generate a target or a circular path.

::: aside 1 code sticky
  <div style="background-image: radial-gradient(red, blue); width: 100%; height: 100px;"></div>
:::

::: aside 1 code sticky
  ``` css
    background-image: radial-gradient(red, blue);
  ```
:::

### Conic gradients

Conic gradients are similar to radial gradients but rather than going from the center of the circle outwards they start rotate around the center for a full 360 degrees. This is a little less useful for a simple gradient with two color stops but it can make useful effects with 3 color stops that start at one color, move smoothly through a second, and then return to the first.

::: aside 1 code sticky
  <div style="background-image: conic-gradient(red, blue, red); width: 100%; height: 100px;"></div>
:::

::: aside 1 code sticky
  ``` css
    background-image: conic-gradient(red, blue, red);
  ```
:::

Conic gradients can also be used to generate a 'sunburst' effect. The effect makes a great background to an element when it's combined with a rotation animation.

::: aside 1 code sticky
  <div style="background-image: conic-gradient(
      red 0deg,
      red 30deg,
      white 30deg,
      white 60deg,
      red 60deg,
      red 90deg,
      white 90deg,
      white 120deg,
      red 120deg,
      red 150deg,
      white 150deg,
      white 180deg,
      red 180deg,
      red 210deg,
      white 210deg,
      white 240deg,
      red 240deg,
      red 270deg,
      white 270deg,
      white 300deg,
      red 300deg,
      red 330deg,
      white 330deg
    );
    width: 100%; height: 100px"></div>
:::

The way that the conic sunburst works is by defining 'stripes'. Each pair of colors has a start and an end point in degrees, and there's no gaps that the browser has to interpolate so where one ends the other starts immediately. This gives a clear cut off from one part of the gradient to the next, which results in stripes.

::: aside 1 code sticky
  ```css
    background-image: conic-gradient(
      red 0deg,
      red 30deg,
      white 30deg,
      white 60deg,
      red 60deg,
      red 90deg,
      white 90deg,
      white 120deg,
      red 120deg,
      red 150deg,
      white 150deg,
      white 180deg,
      red 180deg,
      red 210deg,
      white 210deg,
      white 240deg,
      red 240deg,
      red 270deg,
      white 270deg,
      white 300deg,
      red 300deg,
      red 330deg,
      white 330deg
    );
  ```
:::

However, while this effect is good, the amount of code required is unweildy. It's very repetitive. Browsers have an alternative CSS rule that can cut down on the amount of code significantly. 

### Repeating gradients

The sunburst effect ends up using a lot (well, relatively speaking) of CSS code that is essentially just repetition of a single pair of rules - every 30 degrees around the circle it repeats the same white and red transition. CSS3 has shorthand methods for creating these sorts of effects called repeating-linear-gradient, repeating-radial-gradient and repeating-conic-gradient.

::: aside 1 code sticky
  <div style="background-image: repeating-conic-gradient(
      red 0deg,
      red 30deg,
      white 30deg,
      white 60deg
    );
    width: 100%; height: 100px"></div>
:::

To use a repeating gradient I need to create a gradient as normal, but without specifying all of the positions. In a linear gradient that means it doesn't have to cover 100% of the gradient, and for radial and conic gradients the color stops don't need to complete a full circle. For any space that isn't covered the gradient will be repeated until it's complete.

::: aside 1 code sticky
  ```css
    background-image: repeating-conic-gradient(
      red 0deg,
      red 30deg,
      white 30deg,
      white 60deg
    );
  ```
:::

## Browser compatibility

CSS gradients have been supported in browsers for a _long_ time. Every major browser supports linear and radial gradients going back to IE10. Unfortunately conic gradients are only supported in Firefox when the `layout.css.conic-gradient.enabled` is set to true.

Using the `@supports` directive in CSS I can detect whether or not the user's browser is capable of displaying a gradient though, so it's straightforward to provide a fallback. You don't have to repeat the entire CSS line in the `@supports` directive; using a minimal version that checks for support is enough.

::: aside 1 code sticky
```css
  @supports (background: repeating-conic-gradient([...])) {
  	div { background-image: repeating-conic-gradient([...]); }
  }
```
:::

## Why not just use an image though?

As lovely and as fancy as CSS gradients are, the obvious question is still "Why though?" There are a couple of reasons.

Firstly, under the surface every image a webpage uses represents another network request. That represents a point of failure, and a request that has to be completed before the page is complete, and an addtional load on the burgeoning page weight of every website out there today. Even with the delights of HTTP2 and parallel requests it still takes time to download an image.

If you can replace an image, even a lightweight SVG, with a couple of lines of CSS then that means your website loads faster, uses less bandwidth, and is kinder to kittens.

The second reason to use CSS instead of an image is that the CSS route offers much more control if the technology fits properly. With an image you're stuck with the pixels that were defined when it was saved. With CSS you can write code to modify how it looks using the environment it's being displayed in - that means gradients that react to media queries, or browser APIs, or user interaction. You can do some seriously impressive and useful things with CSS that a bitmap doesn't afford you (Sort of... filters can do a lot, and SVGs even more, but fuck JPEGs, right?)
