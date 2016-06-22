---
layout: default
---

<div class="posts">
	{% for posts in posts %}
		<a href="{{ post.url}}">{{post.title}}</a> <span class="post-date"> {{ post.date || date_to_string }}</span>
	{% endfor %}
</div>
