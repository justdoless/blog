const e=JSON.parse('{"key":"v-bb30110e","path":"/posts/browser/cookie.html","title":"cookie","lang":"zh-CN","frontmatter":{"date":"2023-05-28T00:00:00.000Z","icon":"note","category":["cookie"],"tag":["cors","跨域","SameSite","跨站","httponly","xss","CSRF"],"description":"cookie 区分跨域和跨站的基本概念 跨域和跨站的风险、解决方案 HTTP Cookie（也叫 Web Cookie 或浏览器 Cookie）是服务器发送到用户浏览器并保存在本地的一小块数据。浏览器会存储 cookie 并在下次向同一服务器再发起请求时携带并发送到服务器上。通常，它用于告知服务端两个请求是否来自同一浏览器——如保持用户的登录状态。Cookie 使基于无状态的 HTTP 协议记录稳定的状态信息成为了可能。 Cookie 主要用于以下三个方面： Cookie 曾一度用于客户端数据的存储，因当时并没有其他合适的存储办法而作为唯一的存储手段，但现在推荐使用现代存储 API。由于服务器指定 Cookie 后，浏览器的每次请求都会携带 Cookie 数据，会带来额外的性能开销（尤其是在移动环境下）。新的浏览器 API 已经允许开发者直接将数据存储到本地，如使用 Web storage API（localStorage 和 sessionStorage）或 IndexedDB 。","head":[["meta",{"property":"og:url","content":"https://justdoless.cn/posts/browser/cookie.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"cookie"}],["meta",{"property":"og:description","content":"cookie 区分跨域和跨站的基本概念 跨域和跨站的风险、解决方案 HTTP Cookie（也叫 Web Cookie 或浏览器 Cookie）是服务器发送到用户浏览器并保存在本地的一小块数据。浏览器会存储 cookie 并在下次向同一服务器再发起请求时携带并发送到服务器上。通常，它用于告知服务端两个请求是否来自同一浏览器——如保持用户的登录状态。Cookie 使基于无状态的 HTTP 协议记录稳定的状态信息成为了可能。 Cookie 主要用于以下三个方面： Cookie 曾一度用于客户端数据的存储，因当时并没有其他合适的存储办法而作为唯一的存储手段，但现在推荐使用现代存储 API。由于服务器指定 Cookie 后，浏览器的每次请求都会携带 Cookie 数据，会带来额外的性能开销（尤其是在移动环境下）。新的浏览器 API 已经允许开发者直接将数据存储到本地，如使用 Web storage API（localStorage 和 sessionStorage）或 IndexedDB 。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-18T17:05:57.000Z"}],["meta",{"property":"article:author","content":"justdoless"}],["meta",{"property":"article:tag","content":"cors"}],["meta",{"property":"article:tag","content":"跨域"}],["meta",{"property":"article:tag","content":"SameSite"}],["meta",{"property":"article:tag","content":"跨站"}],["meta",{"property":"article:tag","content":"httponly"}],["meta",{"property":"article:tag","content":"xss"}],["meta",{"property":"article:tag","content":"CSRF"}],["meta",{"property":"article:published_time","content":"2023-05-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-18T17:05:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"cookie\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-28T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-18T17:05:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"justdoless\\",\\"url\\":\\"https://justdoless.cn\\",\\"email\\":\\"justdoless.com@gmail.com\\"}]}"]]},"headers":[{"level":2,"title":"1. HTTP 无状态","slug":"_1-http-无状态","link":"#_1-http-无状态","children":[]},{"level":2,"title":"2. Cookie 的查看","slug":"_2-cookie-的查看","link":"#_2-cookie-的查看","children":[]},{"level":2,"title":"3. Cookie 的设置","slug":"_3-cookie-的设置","link":"#_3-cookie-的设置","children":[]},{"level":2,"title":"4. Cookies 的属性","slug":"_4-cookies-的属性","link":"#_4-cookies-的属性","children":[{"level":3,"title":"4.1. Name/Value","slug":"_4-1-name-value","link":"#_4-1-name-value","children":[]},{"level":3,"title":"4.2. Expires","slug":"_4-2-expires","link":"#_4-2-expires","children":[]},{"level":3,"title":"4.3. Max-Age","slug":"_4-3-max-age","link":"#_4-3-max-age","children":[]},{"level":3,"title":"4.4. Domain","slug":"_4-4-domain","link":"#_4-4-domain","children":[]},{"level":3,"title":"4.5. Path","slug":"_4-5-path","link":"#_4-5-path","children":[]},{"level":3,"title":"4.6. Secure属性","slug":"_4-6-secure属性","link":"#_4-6-secure属性","children":[]},{"level":3,"title":"4.7. HTTPOnly","slug":"_4-7-httponly","link":"#_4-7-httponly","children":[]},{"level":3,"title":"4.8. SameSite","slug":"_4-8-samesite","link":"#_4-8-samesite","children":[]},{"level":3,"title":"4.9. 作用","slug":"_4-9-作用","link":"#_4-9-作用","children":[]},{"level":3,"title":"4.10. 属性值","slug":"_4-10-属性值","link":"#_4-10-属性值","children":[]}]},{"level":2,"title":"5. 跨域和跨站","slug":"_5-跨域和跨站","link":"#_5-跨域和跨站","children":[]},{"level":2,"title":"6. SameSite 改变","slug":"_6-samesite-改变","link":"#_6-samesite-改变","children":[]},{"level":2,"title":"7. Cookie 的缺点","slug":"_7-cookie-的缺点","link":"#_7-cookie-的缺点","children":[]},{"level":2,"title":"8. 参考","slug":"_8-参考","link":"#_8-参考","children":[]}],"git":{"createdTime":1702919157000,"updatedTime":1702919157000,"contributors":[{"name":"daidaibenben","email":"wxungang@163.com","commits":1}]},"readingTime":{"minutes":10.2,"words":3060},"filePathRelative":"posts/browser/cookie.md","localizedDate":"2023年5月28日","excerpt":"<h1> cookie</h1>\\n<blockquote>\\n<p>区分跨域和跨站的基本概念</p>\\n<p>跨域和跨站的风险、解决方案</p>\\n</blockquote>\\n<p>HTTP Cookie（也叫 Web Cookie 或浏览器 Cookie）是服务器发送到用户浏览器并保存在本地的一小块数据。浏览器会存储 cookie 并在下次向同一服务器再发起请求时携带并发送到服务器上。通常，它用于告知服务端两个请求是否来自同一浏览器——如保持用户的登录状态。Cookie 使基于无状态的 HTTP 协议记录稳定的状态信息成为了可能。</p>\\n<p>Cookie 主要用于以下三个方面：</p>\\n\\n<p>Cookie 曾一度用于客户端数据的存储，因当时并没有其他合适的存储办法而作为唯一的存储手段，但现在推荐使用现代存储 API。由于服务器指定 Cookie 后，浏览器的每次请求都会携带 Cookie 数据，会带来额外的性能开销（尤其是在移动环境下）。新的浏览器 API 已经允许开发者直接将数据存储到本地，如使用 Web storage API（localStorage 和 sessionStorage）或 IndexedDB 。</p>","copyright":{"author":"justdoless.com@gmail.com"},"autoDesc":true}');export{e as data};