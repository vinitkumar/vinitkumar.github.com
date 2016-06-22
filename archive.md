---
layout: default
---

<div class="posts">
    {% for post in site.posts %}
        <ul>
            <li>
                <a href="{{ post.url}}">{{post.title}} <span class="post-date" style="display: inline-block;"> {{ post.date || date_to_string }}</span></a>
            </li>
        </ul>
         
    {% endfor %}
</div>
