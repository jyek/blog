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
          This is a space for ideas, experiments, and thoughts around AI, finance, and what happens when the two collide.
        </p>
        <p>
          I believe AI is going to fundamentally change finance teams — not just in productivity, but in how we think, plan, and make decisions. I'm here to share what I'm learning as I apply AI tools in real finance work, and hopefully learn from others doing the same.
        </p>
        <p>
          Right now, I lead finance at Airwallex, a fintech company building the future of global banking. We're valued at $6.2B and growing fast.
        </p>
        <p>
          Before this, I was a tech investment banker at Morgan Stanley and Citi, helping founders in China and Southeast Asia with strategy, fundraising, and IPOs. 
        </p>
        <p>
          In between, I started and sold a web and mobile dev agency that grew to a team of 20+ engineers and designers, where I shipped products for funded startups to multinational companies.
        </p>
        <p>
          I studied financial engineering at Columbia and have always been a builder at heart.
        </p>
      </div>
    </section>

    <section class="blog-section">
      <h2>writing</h2>
      <ul class="recent-posts">
        {% for post in collections.posts | slice(0, 5) %}
          <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
        {% endfor %}
      </ul>
    </section>
  </div>
</div>