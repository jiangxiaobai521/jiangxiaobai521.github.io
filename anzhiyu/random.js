var posts=["posts/73864691.html","posts/3ef31c5e.html","posts/d8439cde.html","posts/97408b2e.html","posts/a378bd8e.html","posts/79666db.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };