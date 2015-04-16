---
layout: post
title: "Clean Up Your Mac From Other Files"
description: "How to cleanup Your Mac From Other Files"
category: articles
tags: [mac, cleanup, commandline, expert]
comments: false
---

![screenshot](https://cldup.com/-iOX0p9Ob8-3000x3000.png)

Sometimes, your mac  is filled up with files and you can't seem to
understand what really is taking much space. Here is how you can find out. 

- First of all  find disk usage and save it to a log file. Also, find all
big files that are there. Grepping  using 'G' would find all files that are  in
GB.

Also, save the second list to another file so that we are only doing it once.


```sh
du -h > ~/space.log
cat ~/space.log | awk '{print $1}' | grep 'G' >  ~/highspace.log
```

Next,  open a split window and do 

```sh
cat ~/highspace.log
```

And Now, start finding the ones which are big one by one. 

Let's say one of the entry was 5.6G, Let's find which one was it. 

```sh
du -h | grep '5.6G'
#which outputs
5.6 ./Document/Movie.avi
```

Now, if you feel the file is not needed and you want to delete it. Do the
following:

```sh
sudo rm -rf Documents/Movie.avi
```

Voila! Repeat this process and remove all files and directories that you  no
longer need.

# Disclaimer:

Do it very patiently  and backup everything that's important. This guide is for
very advanced users and  you should only do it if you know what you are doing.
I am responsible for any data loss. Do it at your own risk.
