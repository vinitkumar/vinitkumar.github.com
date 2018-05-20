---
layout: post
title: "Setup Macvim for Maximum awesomeness"
description: "How did I setup macvim for super awesomeness"
category: articles
tags: vim macvim development
comments: false
---

I have been using vim for almost 5 years now. For some time, I even
switched to Sublime text2 but I am finally back home. Well, the
following guide is only for macs. Sorry GVIM users!
Here is the latest screenshot of my macvim:

![Macvim](/public/img/vim.png)

As you can see, it has a nice Filebrowser that is way more clean and
intuitive than NERDTree.  

## Installation

First and foremost down this build of Macvim from alloy's fork:
[Macvim](https://github.com/alloy/macvim/releases/download/snapshot-71/MacVim-71-20130920.zip)
Unzip it and then put the `Macvim.app` into your `Applications`.

Follow these instructions to have the same in your Mac.

First of all do this:

```sh
git clone git@github.com:vinitkumar/.vim.git
git clone https://github.com/gmarik/vundle.git ~/.vim/bundle/vundle
cd .vim
cp vimrc ~/.vimrc
cp vimrc.before ~/.vimrc.before
cp vimrc.bundles ~/.vimrc.bundles
vim +BundleInstall +qall
```
Install the peepopen app from here: [Peepopen](http://topfunky.github.io/PeepOpen/).
When installed open peepopen and set MacVim as your default editor.

Once you are done with these steps you have a super awesome development
IDE optimised for Python/JS/Ruby development.

##Credits

Credit must be given to [@alloy](http://github.com/alloy) and
[@topfunky](http://twitter.com/topfunky) for creating these wonderful
addons to Vim.

Happy hacking!
