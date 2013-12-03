## Theme

I designed this simple minimalistic theme keeping one thing in mind that the content should shine more than anything else.
Also, i optimized it a bit using Google pagespeed module so it should be very fast on all platforms.

##Usage:

First, clone this repo to your own github account and rename the repo as <githubusernmae>.github.com

In-order to use the theme, go to `.config.yml`  and replace all of the fields with your own content:

```yaml
title:            <your name>
description:      My weblog
logo:             <yourlogo>
disqus_shortname:
#Comment out url when working locally to resolve base urls correctly
#url:              

# Owner/author information
owner:
  name:           <your name>
  avatar:         <your avatar>
  email:          
  # Social networking links used in footer. Update and remove as you like.
  twitter:        
  github:         
  stackexchange:  
  # For Google Authorship https://plus.google.com/authorship
  google_plus:  

# Analytics and webmaster tools stuff goes here
google_analytics:   
google_verify:
# https://ssl.bing.com/webmaster/configure/verify/ownership Option 2 content= goes here
bing_verify:

# Links to include in top navigation
# For external links add external: true
links:
  - title: About
    url: /about
  - title: Blog
    url: /articles
  - title: Code
    url: http://github.com/<your github>

# http://en.wikipedia.org/wiki/List_of_tz_database_time_zones
timezone:    India/Mumbai
future:      true
pygments:    true
markdown:    kramdown

# https://github.com/mojombo/jekyll/wiki/Permalinks
permalink:   /:categories/:title

kramdown:
  auto_ids: true
  footnote_nr: 1
  entity_output: as_char
  toc_levels: 1..6
  use_coderay: false

  coderay:
    coderay_line_numbers:
    coderay_line_numbers_start: 1
    coderay_tab_width: 4
    coderay_bold_every: 10
    coderay_css: class

include: [".htaccess"]
exclude: ["lib", "config.rb", "Capfile", "config", "log", "Rakefile", "Rakefile.rb", "tmp", "less", "*.sublime-project", "*.sublime-workspace", "test", "spec"]
```

Once done setting up the config.yml make sure you have the jekyll installed. Also, replace the content in _posts and add your own blog posts.


You could check how the blog looks by doing 

```bash
$ jekyll serve
```




