var posts=["2024/09/28/CentOS8/","2024/09/28/如何在hexo新建一篇文章/","2024/09/26/面试/MySQL面试题/","2024/09/26/面试/hashmap源码/","2024/09/26/面试/Redis面试题/","2024/09/26/面试/框架篇面试题/","2024/09/26/面试/消息中间件面试题/","2024/09/26/面试/微服务面试题/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };