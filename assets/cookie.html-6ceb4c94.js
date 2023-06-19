const e=JSON.parse('{"key":"v-bb30110e","path":"/posts/browser/cookie.html","title":"cookie","lang":"zh-CN","frontmatter":{"date":"2023-05-28T00:00:00.000Z","icon":"note","category":["cookie"],"tag":["cors","跨域","SameSite","跨站","httponly","xss","CSRF"],"description":"cookie 区分跨域和跨站的基本概念 跨域和跨站的风险、解决方案 HTTP Cookie（也叫 Web Cookie 或浏览器 Cookie）是服务器发送到用户浏览器并保存在本地的一小块数据。浏览器会存储 cookie 并在下次向同一服务器再发起请求时携带并发送到服务器上。通常，它用于告知服务端两个请求是否来自同一浏览器——如保持用户的登录状态。Cookie 使基于无状态的 HTTP 协议记录稳定的状态信息成为了可能。 Cookie 主要用于以下三个方面： Cookie 曾一度用于客户端数据的存储，因当时并没有其他合适的存储办法而作为唯一的存储手段，但现在推荐使用现代存储 API。由于服务器指定 Cookie 后，浏览器的每次请求都会携带 Cookie 数据，会带来额外的性能开销（尤其是在移动环境下）。新的浏览器 API 已经允许开发者直接将数据存储到本地，如使用 Web storage API（localStorage 和 sessionStorage）或 IndexedDB 。","head":[["meta",{"property":"og:url","content":"https://justdoless.cn/posts/browser/cookie.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"cookie"}],["meta",{"property":"og:description","content":"cookie 区分跨域和跨站的基本概念 跨域和跨站的风险、解决方案 HTTP Cookie（也叫 Web Cookie 或浏览器 Cookie）是服务器发送到用户浏览器并保存在本地的一小块数据。浏览器会存储 cookie 并在下次向同一服务器再发起请求时携带并发送到服务器上。通常，它用于告知服务端两个请求是否来自同一浏览器——如保持用户的登录状态。Cookie 使基于无状态的 HTTP 协议记录稳定的状态信息成为了可能。 Cookie 主要用于以下三个方面： Cookie 曾一度用于客户端数据的存储，因当时并没有其他合适的存储办法而作为唯一的存储手段，但现在推荐使用现代存储 API。由于服务器指定 Cookie 后，浏览器的每次请求都会携带 Cookie 数据，会带来额外的性能开销（尤其是在移动环境下）。新的浏览器 API 已经允许开发者直接将数据存储到本地，如使用 Web storage API（localStorage 和 sessionStorage）或 IndexedDB 。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-19T08:49:58.000Z"}],["meta",{"property":"article:author","content":"justdoless"}],["meta",{"property":"article:tag","content":"cors"}],["meta",{"property":"article:tag","content":"跨域"}],["meta",{"property":"article:tag","content":"SameSite"}],["meta",{"property":"article:tag","content":"跨站"}],["meta",{"property":"article:tag","content":"httponly"}],["meta",{"property":"article:tag","content":"xss"}],["meta",{"property":"article:tag","content":"CSRF"}],["meta",{"property":"article:published_time","content":"2023-05-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-19T08:49:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"cookie\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-28T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-19T08:49:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"justdoless\\",\\"url\\":\\"https://justdoless.cn\\",\\"email\\":\\"justdoless.com@gmail.com\\"}]}"]]},"headers":[{"level":2,"title":"HTTP 无状态","slug":"http-无状态","link":"#http-无状态","children":[]},{"level":2,"title":"Cookie 的查看","slug":"cookie-的查看","link":"#cookie-的查看","children":[]},{"level":2,"title":"Cookie 的设置","slug":"cookie-的设置","link":"#cookie-的设置","children":[]},{"level":2,"title":"Cookies 的属性","slug":"cookies-的属性","link":"#cookies-的属性","children":[{"level":3,"title":"Name/Value","slug":"name-value","link":"#name-value","children":[]},{"level":3,"title":"Expires","slug":"expires","link":"#expires","children":[]},{"level":3,"title":"Max-Age","slug":"max-age","link":"#max-age","children":[]},{"level":3,"title":"Domain","slug":"domain","link":"#domain","children":[]},{"level":3,"title":"Path","slug":"path","link":"#path","children":[]},{"level":3,"title":"Secure属性","slug":"secure属性","link":"#secure属性","children":[]},{"level":3,"title":"HTTPOnly","slug":"httponly","link":"#httponly","children":[]},{"level":3,"title":"SameSite","slug":"samesite","link":"#samesite","children":[]},{"level":3,"title":"作用","slug":"作用","link":"#作用","children":[]},{"level":3,"title":"属性值","slug":"属性值","link":"#属性值","children":[]}]},{"level":2,"title":"跨域和跨站","slug":"跨域和跨站","link":"#跨域和跨站","children":[]},{"level":2,"title":"SameSite 改变","slug":"samesite-改变","link":"#samesite-改变","children":[]},{"level":2,"title":"Cookie 的缺点","slug":"cookie-的缺点","link":"#cookie-的缺点","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1687164598000,"updatedTime":1687164598000,"contributors":[{"name":"daidaibenben","email":"wxungang@163.com","commits":1}]},"readingTime":{"minutes":10.14,"words":3042},"filePathRelative":"posts/browser/cookie.md","localizedDate":"2023年5月28日","excerpt":"<h1> cookie</h1>\\n<blockquote>\\n<p>区分跨域和跨站的基本概念</p>\\n<p>跨域和跨站的风险、解决方案</p>\\n</blockquote>\\n<p>HTTP Cookie（也叫 Web Cookie 或浏览器 Cookie）是服务器发送到用户浏览器并保存在本地的一小块数据。浏览器会存储 cookie 并在下次向同一服务器再发起请求时携带并发送到服务器上。通常，它用于告知服务端两个请求是否来自同一浏览器——如保持用户的登录状态。Cookie 使基于无状态的 HTTP 协议记录稳定的状态信息成为了可能。</p>\\n<p>Cookie 主要用于以下三个方面：</p>\\n\\n<p>Cookie 曾一度用于客户端数据的存储，因当时并没有其他合适的存储办法而作为唯一的存储手段，但现在推荐使用现代存储 API。由于服务器指定 Cookie 后，浏览器的每次请求都会携带 Cookie 数据，会带来额外的性能开销（尤其是在移动环境下）。新的浏览器 API 已经允许开发者直接将数据存储到本地，如使用 Web storage API（localStorage 和 sessionStorage）或 IndexedDB 。</p>","copyright":{"author":"justdoless.com@gmail.com"},"autoDesc":true}');export{e as data};
