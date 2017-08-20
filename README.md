# Share Counter
Social media share counting with ease.

**Features**

* Support Facebook
* Zero dependency

**Usage**

Add the attribute `data-counter` to the `a` tags that you wish to get the count of share for like the following:

```html
<a data-counter href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgithub.com%2F" target="_blank">Share on Facebook</a>
```

>  Note that the URL need to be encoded.

The script will load when the document is ready and append the count to the `a` tag in a `span`. Style it the way you want.