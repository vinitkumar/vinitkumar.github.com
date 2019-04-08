---
layout: post
title: 'Coding principles every engineer should know'
date: 2019-04-08 18:18 +0530
tags: tech coding advice puregold
---

### IMPORTANT: Cross posting from this medium article https://medium.com/@sschillace/coding-principles-every-engineer-should-know-b946b48cc946 since I do not like medium as a platform and I do not want to loose this port in matrix :)
### The post has been written by [Sam Schillace](https://medium.com/@sschillace) and all references to me/I is referenced to Mr. Sam


Throughout my engineering career, I’ve had the opportunity work alongside and learn from many incredibly talented people, solve some serious technical challenges, and scale several successful companies. Recently, I was talking with the engineering team at Box about what I’ve learned along this journey, and what came out of that conversation were my personal engineering principals. These aren’t rules or engineering guidelines. They’re simply the principles that I pay attention to when I write and operate code.

## Be paranoid.

This one comes naturally to me. Since I’m mostly self-taught as a programmer, I never trust computers. I never trust that the system I just launched is really up. That the bug I fixed is really fixed. That code really does work the way I think it does without a test. I don’t trust anything. I don’t even trust myself! I never trust that I understand anything as well as I think I do until I check more than once. Paranoia is my friend, and it should be your friend, too. Always try to find a way to test assumptions along some other path, or get a second set of eyes to see what you’ve missed. Most of the time it’s not needed. Sometimes it’s really important.
## Don’t lie to the computer.
Another way to say this is “avoid leaky abstractions.” Don’t use systems in ways they’re not meant to be used. Don’t count on side effects. Don’t do things that won’t be obvious to the next person because the system wasn’t designed for them or they’re undocumented. If usage is three orders of magnitude more than current usage, then you should probably rethink the design. If the contract implies, but doesn’t guarantee, your use, you should change the component and the contract to be aligned. Computers are nasty things. They always bite when lied to, eventually.

## Keep it simple.

We like building things and solving problems. That’s why we do what we do. But a lot of the time, just because we can see a problem that could be solved, doesn’t mean it’s useful to solve it right now. I always think of myself as a fairly dumb programmer — I like clean, simple designs that are easy to understand. And this is a high challenge — anyone can solve a problem in a complex way, but only good programmers can solve problems in simple, understandable ways. It’s much harder to really think through the problem and solve only what needs to be solved in a simple, robust manner. Making yourself understood is the most important thing. Most time in code is spent maintaining, not creating.

## First rule of optimizing: don’t.

This is from a good book by John Bentley called Programming Pearls. (It’s explicitly meant to help you learn to think like an experienced programmer. It may be an old book but most of the lessons are incredibly relevant today.) Optimization can take many forms: speed, future-proofing, potential scale, possible uses, etc. The problem is, most optimization is ultimately never used, and, more or less by definition, optimization makes designs more complicated. So, first rule of thumb is don’t optimize until it’s really clear that you understand the problem completely. (His second rule: “don’t optimize, yet.” Meaning, even if you do understand it, don’t optimize until you really need to.)

## Don’t just fix the bug; fix all possibility of it ever happening again.

Don’t be sorry if you made a mistake — be angry and make it something you never have to think about again. I hate bugs. I hate systems that let me create bugs. I hate it when my own software lets my fragile human brain down and I create a bug that could have been avoided. And I really, really hate fixing the same bug twice. So I try as much as I can, every single time I fix a bug, to think about the following: where else might this bug be happening now? Where might it happen in the future? What are the adjacent patterns that create similar bugs? And how can I kill all the bastards at once, right now?

## Question assumptions constantly.

Because I have spent most of my time in my own startups, I’ve gotten in the habit of asking myself constantly “Why am I doing this? What problem does it solve? Is there a better way? Is there something else I could do instead that’s more important?” You should have that attitude all the time. Constantly be questioning the assumptions given to you. What’s the real problem you’re solving? Did someone ask you to solve an effect rather than the root cause? Is the solution complete? Over-complete? Is the impact worthwhile?

## Think long term. Slow down, it goes faster.

This might be one of the most important ones. It’s easy to hack things out. As engineers, we like efficiency; we like to build as many things as we can. But if we don’t build for the long term, eventually it gets harder and harder to build anything. Sometimes we don’t understand the problem at first and we write code that we later have to back out. Sometimes we do things that are easy for our local problem, but make things worse or harder for someone else or for a larger problem. Sometimes we rush and don’t finish the design, and this causes much more time later on for someone to fix. Sometimes we don’t bother to write it the right way, we just make a copy or hack something in because we’re under time pressure or don’t want to really think it through. I’ve seen all these things too many times. Others have said this better than I have. But I’ll repeat — the goal is building the largest number of great features, reaching the largest number users over time. The area under the curve for a given day doesn’t add much, no matter how much gets done on that day, relative to all the days added together. Think long term.


## Care about your code.

I guess this one doesn’t need much explanation, but it’s still something I see people missing from time to time. Take pride in your work! Care about the code you produce! I usually think of my poor future self, having to deal with my crappy code, when I’m tempted to be lazy and cut a corner. You don’t have to take this to an extreme — I used to joke at Google that other engineers treated their code like a pet, where my relationship with mine was more like a ranchers — pragmatic, not sentimental. But even still, I always hate it if my code isn’t well designed, doesn’t work well, isn’t readable, all that stuff.
##  Cheap, fast, right — pick two.

This is the iron triangle of software. This is the way the world of software engineering works. But it’s not an excuse for complacency. In fact, this is your opponent every single day. The difference between good and great programmers is often measured in how well they navigate the iron triangle. And really great ones find ways to bend it and get some of all three, more often than not. Try to be that kind of programmer — can you find a more elegant design that’s faster to build and is still right? Can you relax some constraint in the spec to get to the goal more quickly? You might not always be able to do that; in fact, you won’t beat the triangle. But if nothing else, make sure you understand what compromise you are choosing, and why, and that it’s the right one for the current situation.

## Conclusion: Be curious. Learn as much as you can, all the time.

Okay, this one is more career advice than anything else. But if you’re not curious and don’t really care that much about learning new things as an engineer and don’t care about new tech or new languages or new ideas, then why are you here? By no means are my principles perfect or an absolute representation of thinking/acting like a successful engineer, but I’m willing to bet there’s a fair amount of overlap with what others might be thinking. I’d love to hear your thoughts.

