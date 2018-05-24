---
layout: post
title: "Using React with djangoCMS 3.5.2"
description: "How to get react working with latest djangoCMS"
category: articles
tags: react django
comments: false
---

React is one of the most useful frontend library out there. At Socialschools, we use React to render some content using our API from App server. It has been in production since June last year and it is really amazing building neat stuff using both React and djangoCMS.

djangoCMS provides us the best Hybrid experience possible, we render say 70% of the content from server rendered pages and it provides us good support for even running React et. al without any hiccups. The latest version of djangoCMS 3.5.x series came up with a neat feature that allows the content to be refreshed as you edit without need of a reload.

This is from the [djangoCMS documentation](http://docs.django-cms.org/en/latest/topics/frontend-integration.html):

> Generally speaking, django CMS is wholly frontend-agnostic. It doesn’t care what your site’s frontend is built on or uses.

> The exception to this is when editing your site, as the django CMS toolbar and editing controls use their own frontend code, and this can sometimes affect or be affected by your site’s code.

> The content reloading introduced in django CMS 3.5 for plugin operations (when moving/adding/deleting etc) pull markup changes from the server. This may require a JS widget to be reinitialised, or additional CSS to be loaded, depending on your own frontend set-up.


So even though the functionality is very nice and is very good UX for our end users it introduces a serious issue with the frontend frameworks like React. Let me explain:


Let's say you have a simple React application that looks something like this:


```js
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }


  componentDidMount() {
    // do a fetch to the API resources and set the data in the state
    this.setState({data: data })

  }

  render() {
    return(
      <div className="container">
      { this.state.data &&  this.state.data.map((element, key) => (
          <span key={key}>{element}</span>
      ))}
      </div>
    )

  }
}

ReactDOM.render(<App/>, document.getElementByID("root"))
```

This used to work perfectly with the old djangoCMS since everytime you edit a content, there would be a reload and because of that the `componentDidMount()` will be called and hence there would be an API call and the React app would be rendered.

However, due to the change in the way frontend editing works now, this is no longer the case by default and it cause strange behaviour to occur.

For eg: You filled up the djangoCMS plugin that implemented this React Plugin and it is rendered properly. Now, you wanted to do change in other plugin like Text Plugin. So as a result, as soon as you submit save button for the text plugin after doing the change, the CMS javascript sends a request for the server rendered HTML and replace it in place for the page. The problem here is that there was no page reload, so the react app was never triggered and mounted, so you properly working filled up React app just vanishes from the site.

In case if it's not clear, the reason for this is: **React needs to mount the component to do the API request**. Since, the HTML was hot swapped, it never for the opportunity to do so and hence the React plugin gets empty after the edit.

Now, the good folks at djangoCMS are kind enough to make a note of it in their documentation but somehow I missed it before while reading the release notes for djangoCMS 3.5.x

This is their suggested solution:

```js
<script>
  // catch the cms-content-refresh event and use it
  // to trigger actions that are not done due to to Hot SWAP of the HTML
  CMS.$(window).on('cms-content-refresh', function () {
    // Render React Again?
  });
</script>
```

Now, though this solution gives us the first clue of how to go about fixing it, the code is not just drop-in replacement and won't work right away in the React and similar apps. You will need to do following to get it working on your React app and similar frameworks.

Here is a more complete solution to get it done.

```js
document.addEventListener("DOMContentLoaded", function() {
  // Handler when the DOM is fully loaded
  window.CMS.$(window).on('cms-content-refresh', function () {
    // render react or call for actions that were skipped because of the
    // change in how djangoCMS behaves now.
  });
});
```

So if you look at the above piece of code, notice that I used plain JS to look for `document.ready` event of jQuery, since in most the React apps we do not use jQuery and also, it doesn't make sense to add more files to your App bundle size when you can get away with it.

The logic to look for "DomContentLoaded" event is that the global variable `CMS` won't be available unless all content is loaded and we require it to watch for the `cms-content-refresh` event. So as a solution we **hook up the ReactDOM render method whenever we get catch a refresh event from the CMS.**

Following is the updated React App code after accomodating changes for this event handling.


```js
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }


  componentDidMount() {
    // do a fetch to the API resources and set the data in the state
    this.setState({data: data })

  }

  render() {
    return(
      <div className="container">
      { this.state.data &&  this.state.data.map((element, key) => (
          <span key={key}>{element}</span>
      ))}
      </div>
    )

  }
}

ReactDOM.render(<App/>, document.getElementByID("root"))


document.addEventListener("DOMContentLoaded", function() {
  // Handler when the DOM is fully loaded
  window.CMS.$(window).on('cms-content-refresh', function () {
    // render react or call for actions that were skipped because of the
    // change in how djangoCMS behaves now.
    ReactDOM.render(<App/>, document.getElementByID("root"))
  });
});

```


Now, you can just compile your React app and change the files in your template for djangoCMS app and it would not have disappearing content during frontend editing.


