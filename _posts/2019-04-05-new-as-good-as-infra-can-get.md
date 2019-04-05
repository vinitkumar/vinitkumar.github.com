---
layout: post
title: new As Good As Infra Can Get
date: 2019-04-05 12:49 +0530
tags: tech infra cloud devops
---

Infra is one of the most host topics in the Software development these days. There are so many tools,
so much to learn that very few people actually know what to do and what the best practises. Everyone wants
to jump on the microservice bandwagon. However, it's not as easy as it seems. I medidated quite a bit on this
and have come up with these points that I think are maybe some good to follow tips:



- Use standard, stable and well documented platform.
- Use multi-zone DB to embrace for regional failures and quick failovers.
- Have DB backups scheduled to a different cloud service security (for eg: s3 in case the db is hosted on GCE/GKE)
- Test the restore and snapshots. Maintain automatic backups.
- Backup Database, Put apps and services on maintainence while doing major upgrades/migrations.
- The Config should definitely be version controlled and tags are maintained. (follow semantic versioning)
- Performance, security and stability of the cluster are the corner stones to live by.
- While evaluating any new service, library refer the above and ask yourself if it is going to make it better or is it going to make it better.
- Tradeoffs if any needs to be documented and made very clear.
- Maintain better dev prod parity. Ideally, the apps should checklist all the columns of 12 factor apps. Refer this(https://12factor.net)
- Test new tech, plugins in local -> staging -> production. Push code to production only whent there are no known bugs or issues.
