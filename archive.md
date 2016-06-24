---
layout: default
---

<div class="posts">
    {% for post in site.posts %}
        <ul>
            <li>
                <a href="{{ post.url}}">{{post.title}} <span class="post-date" style="display: inline-block;"> {{ post.date || date_to_string }}</span></a>
                {% for tag in post.tags %}
                    <p>{{tag}}</p>
                {% endfor %}
            </li>
        </ul>
         
    {% endfor %}
</div>
