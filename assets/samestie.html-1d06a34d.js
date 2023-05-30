const e=JSON.parse('{"key":"v-4a31db9a","path":"/posts/browser/samestie.html","title":"SameSite（跨站）","lang":"zh-CN","frontmatter":{"date":"2023-05-28T00:00:00.000Z","icon":"note","category":["cookie"],"tag":["cors","跨域","SameSite","跨站","httponly","xss","CSRF"],"description":"SameSite（跨站） 什么是跨站 和跨域的区别 Cookie 简介 HTTP 协议是无状态的，但可以通过 Cookie 来维持客户端与服务端之间的“会话状态”。 简单来说就是：服务端通过 Set-Cookie 响应头设置 Cookie 到客户端，而客户端在下次向服务器发送请求时添加名为 Cookie 的请求头，以携带服务端之前“埋下”的内容，从而使得服务端可以识别客户端的身份。","head":[["meta",{"property":"og:url","content":"https://justdoless.github.io/posts/browser/samestie.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"SameSite（跨站）"}],["meta",{"property":"og:description","content":"SameSite（跨站） 什么是跨站 和跨域的区别 Cookie 简介 HTTP 协议是无状态的，但可以通过 Cookie 来维持客户端与服务端之间的“会话状态”。 简单来说就是：服务端通过 Set-Cookie 响应头设置 Cookie 到客户端，而客户端在下次向服务器发送请求时添加名为 Cookie 的请求头，以携带服务端之前“埋下”的内容，从而使得服务端可以识别客户端的身份。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-30T14:44:39.000Z"}],["meta",{"property":"article:author","content":"justdoless"}],["meta",{"property":"article:tag","content":"cors"}],["meta",{"property":"article:tag","content":"跨域"}],["meta",{"property":"article:tag","content":"SameSite"}],["meta",{"property":"article:tag","content":"跨站"}],["meta",{"property":"article:tag","content":"httponly"}],["meta",{"property":"article:tag","content":"xss"}],["meta",{"property":"article:tag","content":"CSRF"}],["meta",{"property":"article:published_time","content":"2023-05-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-30T14:44:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SameSite（跨站）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-28T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-30T14:44:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"justdoless\\",\\"url\\":\\"https://justdoless.github.io\\",\\"email\\":\\"justdoless.com@gmail.com\\"}]}"]]},"headers":[{"level":2,"title":"Cookie 简介","slug":"cookie-简介","link":"#cookie-简介","children":[]},{"level":2,"title":"SameSite 属性","slug":"samesite-属性","link":"#samesite-属性","children":[{"level":3,"title":"1. AJAX 请求","slug":"_1-ajax-请求","link":"#_1-ajax-请求","children":[]},{"level":3,"title":"2. 嵌套第三方 iframe","slug":"_2-嵌套第三方-iframe","link":"#_2-嵌套第三方-iframe","children":[]},{"level":3,"title":"3. 加载第三方图片或脚本等","slug":"_3-加载第三方图片或脚本等","link":"#_3-加载第三方图片或脚本等","children":[]},{"level":3,"title":"4. 提交表单到第三方网站","slug":"_4-提交表单到第三方网站","link":"#_4-提交表单到第三方网站","children":[]},{"level":3,"title":"5. 链接跳转第三方网站","slug":"_5-链接跳转第三方网站","link":"#_5-链接跳转第三方网站","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1685457879000,"updatedTime":1685457879000,"contributors":[{"name":"daidaibenben","email":"wxungang@163.com","commits":1}]},"readingTime":{"minutes":13.9,"words":4170},"filePathRelative":"posts/browser/samestie.md","localizedDate":"2023年5月28日","excerpt":"<h1> SameSite（跨站）</h1>\\n<blockquote>\\n<p>什么是跨站</p>\\n<p>和跨域的区别</p>\\n</blockquote>\\n<h2> Cookie 简介</h2>\\n<p>HTTP 协议是<strong>无状态</strong>的，但可以通过 Cookie 来维持客户端与服务端之间的“会话状态”。</p>\\n<p>简单来说就是：服务端通过 <strong>Set-Cookie</strong> 响应头设置 Cookie 到客户端，而客户端在下次向服务器发送请求时添加名为 <strong>Cookie</strong> 的请求头，以携带服务端之前“埋下”的内容，从而使得服务端可以识别客户端的身份。</p>","copyright":{"author":"justdoless.com@gmail.com"},"autoDesc":true}');export{e as data};
