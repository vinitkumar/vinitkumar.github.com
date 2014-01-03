---
layout: post
title: "Setup Macvim for Maximum awesomeness"
description: "How did I setup macvim for super awesomeness"
category: articles
tags: [life, general]
comments: false
---

I have been using vim for almost 5 years now. For a brief time i even
switched to Sublime text2 but I am finally back to home. Well, the
following guide is only for macs. Sorry GVIM users, i no longer use
Linux so I am not very sure about how these plugins will behave or even
work. I am sure some of them are only meant for macs.

Here is the latest screenshot of my macvim:

![Macvim](/public/img/vim.png)

As you can see, it has a nice Filebrowser that is way more clean and
intuitive than NERDTree and is pretty. Also there is a very clean file
navigation using `\-p`.  

## Installation

First and foremost down this build of Macvim from alloy's fork:
[Mavim](https://github.com/alloy/macvim/releases/download/snapshot-71/MacVim-71-20130920.zip)
Unzip it and then put the `Macvim.app` into your `Applications`.

Follow these instructions to have the same in your Mac.


First of all do this:

```sh
$ mkdir .vim
$ git clone git@github.com:vinitkumar/.vim.git
```

- Copy all the vimrc file from the repo to the home and then install the
peepopen app from here: [Peepopen](http://topfunky.github.io/PeepOpen/).

- When installed open peepopen and set MacVim as your default editor.

Once you are done with these steps you have a super awesome development
IDE optimised for Python/JS/Ruby development.

##Credits

Credit must be given to @alloy[http://github.com/alloy] and
[@topfunky](http://twitter.com/topfunky) for creating these wonderful
addons to Vim.

Happy hacking!
