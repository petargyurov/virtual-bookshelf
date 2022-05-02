# Virtual Bookshelf
This is a simple visualisation of books on a bookshelf using some CSS transforms to give the effect of picking out the book when you hover over it.

I use it on my [personal site](https://petargyurov.com) to track what books I've read. It integrates nicely with static site generators, and well, just about anything since it's all vanilla JS, CSS and HTML.

![Example](https://i.imgur.com/6u0CySS.png)

**How do I add more books?**

A book is defined as follows:
```html
<div class="book">
    <div class="side spine">
        <span class="spine-title"> Book Title </span>
        <span class="spine-author"> PG </span>
    </div>
    <div class="side top"></div>
    <div class="side cover"></div>
</div>
```

Simply add this snippet for each book you want inside `<div class="bookshelf">`.

**Why use JS at all?**

I originally aimed for a no-JS implementation but there was no way of adding randomness to the book height, colours and patterns without it. You can of course remove the JS and implement that stuff manually.

**Is this free to use?**

Yep, do whatever you want with it.

**Is it perfect?**

Nope. Doesn't handle long titles well. I'm sure there are other alignment issues. I wrote this in a day, don't expect much. Feel free to submit fixes/improvements.
