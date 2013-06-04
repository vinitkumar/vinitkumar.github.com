---
layout: post
title: "My Current Projects"
description: "What i am doing these days"
category: articles
tags: [projects, JavaScript, Node]
---
These days i have been really busy doing just one work, i.e writing a Twitter clone in node. It was mostly an exercise to get more familiar with the node stack and get ready for the real world projects that i work on. Well, i must say it was an interesting experience. 
Because i knew nothing about how twitter works.Except the knowledge that it was earlier based on ruby on rails. 
I made two main models:
* Tweet
* User

Tweet model contains all the operations related to the tweet and User models contains all the operations on Users.
I am following the thick models, thin controllers model. All the views are written in jade and express is used to create the app. For DB, the obvious choice was MongoDB. I am using mongoose with express.

Right now, you can do following operations:
* Login using Facebook or Github
* Compose a new tweet
* Check out your profile
* Edit and Delete your tweet.
* Favorite tweets of other user.
* Follow another user.
* Add comments to tweet

Future work will be mostly replicating twitter features. While the operations seems much easy to use on twitter, but implementing it can be quite tricky at times.

Another project i worked on was Node Modular Demo, it is a good take on bootstrapping express applications in a more modular structure so that it can be easier to decouple, debug and reuse. Which is a great approach.
