---
layout: post
title: "Converting LaTex to PDF on macOS"
description: "Setup Mac for editing Latex"
category: articles
tags: latex macos pdf
comments: false
---

I have been writing my resume in LaTeX for more than a decade now. Writing your resume in LaTex has it's own benefit.
You can check it out here:
- [Why i do my resume in latex](http://www.toofishes.net/blog/why-i-do-my-resume-latex/)

Now, writing your resume in all LaTex is all well and good but converting it into pdf on macOS is a task on it's own. The MacTeX package is a BIG download of around 6GB and it's not worth spending so much time and energy for only trying to convert your resume from LaTex to PDF. Well, you can ofcourse use one of the online latex-to-pdf converter or you can install the `basictex` package and set your local mac environment capable of converting to PDF.


Follow these steps to get it working:

```
# install basictex using brew #NOTE your password might be required
brew cask install basictex
# try to install texlivefly, it complains about tlmgr outdated
sudo tlmgr install texliveonfly
# update tlmgr
sudo tlmgr update --self
# now install textliveonfly
sudo tlmgr install texliveonfly

# use the commands using sudo.
# for eg: if your resume file name is vinit_kumar.tex

sudo texliveonfly vinit_kumar.tex

# this outputs a file named vinit_kumar.pdf in the same directory
# now, open this file like this to check if all your changes made it through.

open vinit_kumar.pdf
```

Credits where it's due: [Get Mactex Faster](https://www.apptic.me/blog/get-mactex-faster-easily-using-basictex.php)

The idea came from this website, though the issue was it was not working without `sudo`. Hence, wrote this post more of an reminder of how to get LaTex to PDF working on macOS
