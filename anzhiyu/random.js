var posts=["posts/3ef31c5e.html","posts/d8439cde.html","posts/79666db.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };