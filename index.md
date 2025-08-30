---
layout: base.njk
title: "Justin Yek"
description: "Finance leader and software engineer exploring with AI and finance"
---

<div class="home-content">
    <section class="about-section">
      <h2>about</h2>
      <div class="about-content">
        <p>
          I lead finance at Airwallex, a $6.2B fintech that is building the future of global banking. Before this, I was a tech investment banker at Morgan Stanley and Citi, and founded and exited a software development agency. Columbia financial engineering grad.
        </p>
        <p>
          I write about how AI is changing finance and share what I'm learning as I implement these tools in real finance work. 
        </p>
      </div>
    </section>

    <section class="blog-section">
      <h2>writing</h2>
      <ul class="recent-posts">
        {% for post in collections.posts | slice(0, 5) %}
          <li>
            <a href="{{ post.url }}">{{ post.data.title }}</a>
            <span class="post-date">{{ post.date | dateFilter }}</span>
          </li>
        {% endfor %}
      </ul>
    </section>
  </div>
</div>