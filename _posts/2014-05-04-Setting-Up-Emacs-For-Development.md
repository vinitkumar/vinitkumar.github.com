---
layout: post
title: "Setting Up Emacs for Development"
description: "Setting up Emacs for development"
category: articles
tags: [emacs, editors]
comments: false
---

I have always wanted to use Emacs. Last day, I wanted to have a good JavaScript/Node Repl in my editor. Though I had always used Vim since last 5 years but even then setting up a REPL is not very easy. So I decided to give Emacs a try and till now and I am enjoying using Emacs since yesterday.

Here is a guide that would help you to setup emacs as well.

First of all, If you are on Mac install emacs for osx form [here](http://emacsformacosx.com/). For other platforms too, you could install the GUI version of Emacs easily.

# My Emacs config

This is my Emac config which could be used for development in following technologies:

* Ruby / Ruby on Rails
* CSS / LESS / SASS / SCSS
* HAML / Markdown / Textile / ERB
* Clojure (via nrepl)
* Javascript / Coffeescript
* Python
* PHP
* Haskell
* Erlang
* Common Lisp (with Slime)

In particular, there's a nice config for *tab autocompletion*, and
flycheck is used to immediately highlight syntax errors in Ruby, HAML,
Python, Javascript, PHP and a number of other languages.


## Demo

This is my emacs live in action:

<img src="https://i.cloudup.com/WbWR5pblgM.gif">

## Requirements

* Emacs 23 or greater (note that Emacs 24 is required for some
  functionality, and will likely become the minimum required version
  some time soon.)

## Installation

To install, clone this repo to `~/.emacs.d`, i.e. ensure that the
`init.el` contained in this repo ends up at `~/.emacs.d/init.el`:

```
git clone https://github.com/vinitkumar/emacs.d.git ~/.emacs.d
```

Upon starting up Emacs for the first time, further third-party
packages will be automatically downloaded and installed.


## Adding your own customization

To add your own customization, use <kbd>M-x customize</kbd> and/or
create a file `~/.emacs.d/lisp/init-local.el` which looks like this:

```el
... your code here ...

(provide 'init-local)
```


## Tips for using these emacs settings

If you want to use my settings straight out of the box, here are some things to note:

 * I recommend starting with a blank emacs +
   [Technomancy's better-defaults package](https://github.com/technomancy/better-defaults),
   and then dig through this repo for useful nuggets, instead of forking it directly.

 * The key bindings are optimized for a norwegian keyboard layout.

 * Start by reading up on all the cool stuff in key-bindings.el.

 * You quit emacs with `C-x r q`, mnemonic *Really Quit*.

 * Find file in project with `C-x o`, in dir with `C-x C-f`, recent with `C-x f`

 * Add your user- and project-specific stuff in .emacs.d/users/[machine name]/*.el

 * `C-h` is rebound to backspace, like in the shell. Get help on `F1` instead.

 * Autocomplete with `C-.` (autocomplete entire lines with `C-:`)

 * expand-region is your friend. Find its bound key by doing `F1 f er/expand-region`

 * Undo with `C-_` and redo with `M-_`. Watch the undo-tree with `C-x u`

 * Quickly jump anywhere in the buffer with `C-ø` then the starting letter of a word.

 * Indent and clean up white space in the entire buffer with `C-c n`

 * On a mac, the Meta key `M` is bound to Command.

 * I recommend rebinding Caps Lock to Ctrl and use that instead of the often badly placed Ctrl-key.

 * Watch [emacsrocks.com](http://emacsrocks.com)

## Survival guide for the first week of emacs

When you start using emacs for the first time, your habits fight you every inch
of the way. Your fingers long for the good old familiar keybindings. Here's an
overview of the most commonly used shortcuts to get you through this pain:

* `C      ` Shorthand for the ctrl-key
* `M      ` Shorthand for the meta-key (bound to cmd on my mac settings)
* `S      ` Shorthand for the shift-key

### Files

* `C-x C-f` Open a file. Starts in the current directory
* `C-x f  ` Open a recently visited file
* `C-x o  ` Open a file in the current project (based on .git ++)
* `C-x C-s` Save this file
* `C-x C-w` Save as ...
* `C-x C-j` Jump to this files' current directory
* `C-x b  ` Switch to another open file (buffer)
* `C-x C-b` List all open files (buffers)

### Cut copy and paste

* `C-space` Start marking stuff. C-g to cancel.
* `C-w    ` Cut (aka kill)
* `C-k    ` Cut till end of line
* `M-w    ` Copy
* `C-y    ` Paste (aka yank)
* `M-y    ` Cycle last paste through previous kills
* `C-x C-y` Choose what to paste from previous kills
* `C-@    ` Mark stuff quickly. Press multiple times

### General

* `C-g    ` Quit out of whatever mess you've gotten yourself into
* `M-x    ` Run a command by name
* `C-.    ` Autocomplete
* `C-_    ` Undo
* `M-_    ` Redo
* `C-x u  ` Show the undo-tree
* `C-x m  ` Open magit. It's a magical git interface for emacs

### Navigation

* `C-arrow` Move past words/paragraphs
* `C-a    ` Go to start of line
* `C-e    ` Go to end of line
* `M-g M-g` Go to line number
* `C-x C-i` Go to symbol
* `C-s    ` Search forward. Press `C-s` again to go further.
* `C-r    ` Search backward. Press `C-r` again to go further.

### Window management

* `C-x 0  ` Close this window
* `C-x 1  ` Close other windows
* `C-x 2  ` Split window horizontally
* `C-x 3  ` Split window vertically
* `S-arrow` Jump to window to the left/right/up/down

### Help

* `F1 t   ` Basic tutorial
* `F1 k   ` Help for a keybinding
* `F1 r   ` Emacs' extensive documentation

## Credits & Inspriation

This config is totally based on this [repo](https://github.com/purcell/emacs.d.git) by [Mr. Steve Purcell](https://github.com/purcell). But this might diverge with time and my personal intrests/settings.


The Survival guide has been taken from .emacs.d repo of [Mr. Magnar Sveen](https://github.com/magnars)