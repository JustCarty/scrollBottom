# scrollBottom
A direct opposite of jQuery's `scrollTop()` function.

## Usage
Simply call this function on any jQuery selector as you would do normally.

The scrollBottom works as a direct opposite to the native scrollTop function.  
Where scrollTop would get or set the number of pixels from the top of the selector to the top of the website, scrollBottom will get and set the number of pixels from the bottom of the selector to the bottom of the website.

```JavaScript
$(window).scrollBottom();
// or...
$('my-selector').scrollBottom();
// or...
$(window).scrollBottom(200);
```
