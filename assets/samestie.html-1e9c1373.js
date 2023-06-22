import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as r,c as l,d as n,e,b as t,f as s}from"./app-afa4f5ab.js";const c={},u=s(`<h1 id="samesite-跨站" tabindex="-1"><a class="header-anchor" href="#samesite-跨站" aria-hidden="true">#</a> SameSite（跨站）</h1><blockquote><p>什么是跨站</p><p>和跨域的区别</p></blockquote><h2 id="cookie-简介" tabindex="-1"><a class="header-anchor" href="#cookie-简介" aria-hidden="true">#</a> Cookie 简介</h2><p>HTTP 协议是<strong>无状态</strong>的，但可以通过 Cookie 来维持客户端与服务端之间的“会话状态”。</p><p>简单来说就是：服务端通过 <strong>Set-Cookie</strong> 响应头设置 Cookie 到客户端，而客户端在下次向服务器发送请求时添加名为 <strong>Cookie</strong> 的请求头，以携带服务端之前“埋下”的内容，从而使得服务端可以识别客户端的身份。</p><p>举个简单的🌰：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 服务端</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

http
  <span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>url <span class="token operator">==</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>url <span class="token operator">==</span> <span class="token string">&quot;/favicon.ico&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">204</span><span class="token punctuation">;</span>
      res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span><span class="token string">&quot;Set-Cookie&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;name=haochuan9421&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 设置 cookie</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;some data&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 客户端</span>
<span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;/someapi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0c0cad0cdb5f476881eb9a2c2f9b48ac~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>当客户端再次发起请求时就会自动携带上之前“埋下”的 Cookie：</p><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/774e5734b5054b0fb91efb7d986d18c3~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>简单的介绍完 Cookie 后，我们来看一下它的 <code>SameSite</code> 属性。</p><h2 id="samesite-属性" tabindex="-1"><a class="header-anchor" href="#samesite-属性" aria-hidden="true">#</a> SameSite 属性</h2><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/44da76741b50490aac2a303f4468f50b~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p><code>SameSite</code> 有三个可选值：</p><ul><li><code>Strict</code></li><li><code>Lax</code></li><li><code>None</code>。</li></ul><p>从 Chrome 80 开始，如果不指定 SameSite 就等效于设置为 <code>Lax</code>。你可以通过 chrome://flags/#same-site-by-default-cookies 禁用这个行为，禁用后不指定 SameSite 就等效于设置为 <code>None</code>。关于他们的区别我们稍后结合具体的场景来介绍。</p><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2cac5d83dae04114b0df71ea20b5be18~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>先来看看上图中出现的 <code>third-party</code> 这个概念，对 Cookie 来说什么是 <strong>第三方</strong> 呢？</p>`,19),d={href:"http://bar.com",target:"_blank",rel:"noopener noreferrer"},p={href:"http://foo.com",target:"_blank",rel:"noopener noreferrer"},m=n("strong",null,"第三方 Cookie",-1),b=n("figure",null,[n("img",{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/49ca568da745434eb6ef47e7669c2daa~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp",alt:"image.png",tabindex:"0",loading:"lazy"}),n("figcaption",null,"image.png")],-1),v=n("p",null,[e("简单来说就是：在"),n("strong",null,"当前访问的网站"),e("和"),n("strong",null,"请求服务的网站"),e("是“"),n("strong",null,"跨站"),e("”（Cross Site）的情况下，第三方服务设置的 Cookie 就称之为 "),n("strong",null,"“第三方 Cookie”"),e("。")],-1),f=n("strong",null,"跨站",-1),g={href:"https://link.juejin.cn/?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPublic_Suffix_List",title:"https://en.wikipedia.org/wiki/Public_Suffix_List",target:"_blank",rel:"noopener noreferrer"},h={href:"http://foo.example.com",target:"_blank",rel:"noopener noreferrer"},k={href:"http://bar.example.com",target:"_blank",rel:"noopener noreferrer"},q={href:"http://example.com",target:"_blank",rel:"noopener noreferrer"},_={href:"http://foo.github.io",target:"_blank",rel:"noopener noreferrer"},w={href:"http://bar.github.io",target:"_blank",rel:"noopener noreferrer"},y={href:"http://github.io",target:"_blank",rel:"noopener noreferrer"},x={href:"http://github.io",target:"_blank",rel:"noopener noreferrer"},S={href:"https://link.juejin.cn/?target=https%3A%2F%2Fpublicsuffix.org%2Flist%2Fpublic_suffix_list.dat",title:"https://publicsuffix.org/list/public_suffix_list.dat",target:"_blank",rel:"noopener noreferrer"},j={href:"http://foo.example.com",target:"_blank",rel:"noopener noreferrer"},C={href:"http://foo.github.io",target:"_blank",rel:"noopener noreferrer"},z={href:"http://github.io",target:"_blank",rel:"noopener noreferrer"},F=n("figure",null,[n("img",{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0fd311d41c9e43f7ac977d9b7124b553~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp",alt:"image.png",tabindex:"0",loading:"lazy"}),n("figcaption",null,"image.png")],-1),A=n("figure",null,[n("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/607e70e122d949ef91745b35ad3d8837~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp",alt:"image.png",tabindex:"0",loading:"lazy"}),n("figcaption",null,"image.png")],-1),N={href:"https://link.juejin.cn/?target=https%3A%2F%2Fdatatracker.ietf.org%2Fdoc%2Fhtml%2Fdraft-ietf-httpbis-rfc6265bis-03%23section-5.2",title:"https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis-03#section-5.2",target:"_blank",rel:"noopener noreferrer"},H=n("strong",null,"端口",-1),T={href:"http://bar.com:8080",target:"_blank",rel:"noopener noreferrer"},L={href:"http://bar.com:9000",target:"_blank",rel:"noopener noreferrer"},B=n("strong",null,"不会",-1),P=n("strong",null,"协议",-1),R=n("strong",null,"会",-1),E={href:"https://link.juejin.cn/?target=http%3A%2F%2Fbar.com",title:"http://bar.com",target:"_blank",rel:"noopener noreferrer"},O={href:"https://link.juejin.cn/?target=https%3A%2F%2Fbar.com",title:"https://bar.com",target:"_blank",rel:"noopener noreferrer"},V=s('<blockquote><p>Cookie 本身是不区分端口和协议（Scheme）的。</p></blockquote><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7f9126e337cf4254b5422470ecbb60ac~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>除了<strong>加载第三方网站图片</strong>的场景，向<strong>第三方网站发起 AJAX/fetch 请求</strong>、<strong>嵌入第三方网站的 iframe</strong>、<strong>表单提交到第三方网站</strong>、<strong>链接跳转到第三方网站</strong>等都可能涉及到“第三方 cookie”。针对这些可能出现 “第三方cookie” 的场景，SameSite 设置为不同的值又会有哪些不同的效果呢？让我们来一一探究（多图警告😀）：</p><h3 id="_1-ajax-请求" tabindex="-1"><a class="header-anchor" href="#_1-ajax-请求" aria-hidden="true">#</a> 1. AJAX 请求</h3><p>当我们跨域发送 AJAX 请求时，由于浏览器同源策略的限制，我们的请求是无法发送的：</p><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3a9d9f6910c24268acf465e817c2c523~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure>',6),D={href:"https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FHTTP%2FCORS",title:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",target:"_blank",rel:"noopener noreferrer"},G=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const http = require(&quot;http&quot;);

http
  .createServer((req, res) =&gt; {
    if (req.url == &quot;/&quot;) {
      res.end(&quot;hello world&quot;);
    } else if (req.url == &quot;/favicon.ico&quot;) {
      res.statusCode = 204;
      res.end();
    } else {
      res.writeHead(200, [
        [&quot;Set-Cookie&quot;, &quot;name=haochuan9421&quot;], // 设置 cookie
        [&quot;Access-Control-Allow-Origin&quot;, &quot;*&quot;], // 允许跨域请求
      ]);
      res.end(&quot;some data&quot;);
    }
  })
  .listen(80, &quot;0.0.0.0&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/716fa62c6d034129813add6675fd0756~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>但是当我们再次发起请求时，虽然这个跨域请求的响应头中有设置 Cookie，却发现下次请求时并不会携带之前服务器设置的 Cookie。</p><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/26f823ef0ee8484fa27e46b51de9f165~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p><strong>这就带来一个问题，我们失去了利用 Cookie 来维持服务端与客户端“会话状态”的能力</strong>。那么如何在向第三方网站请求的时候携带 Cookie 呢？需要满足如下条件：</p><ol><li>网站开启 https 并将 Cookie 的 Secure 属性设置为 true</li><li>Access-Control-Allow-Origin 设置为具体的 origin，而不是 *</li><li>Access-Control-Allow-Credentials 设置为 true</li><li>SameSite 属性设置为 None</li></ol>`,6),X={href:"https://link.juejin.cn/?target=http%3A%2F%2Fwww.foo.com",title:"http://www.foo.com",target:"_blank",rel:"noopener noreferrer"},I={href:"https://link.juejin.cn/?target=http%3A%2F%2Fwww.bar.com",title:"http://www.bar.com",target:"_blank",rel:"noopener noreferrer"},J=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const https = require(&quot;https&quot;);
const fs = require(&quot;fs&quot;);

https
  .createServer(
    {
      key: fs.readFileSync(__dirname + &quot;/key.pem&quot;),
      cert: fs.readFileSync(__dirname + &quot;/cert.pem&quot;),
    },
    (req, res) =&gt; {
      if (req.url == &quot;/&quot;) {
        res.end(&quot;hellow world&quot;);
      } else if (req.url == &quot;/favicon.ico&quot;) {
        res.statusCode = 204;
        res.end();
      } else {
        res.writeHead(200, [
          [&quot;Set-Cookie&quot;, &quot;name=haochuan9421; Secure; SameSite=None&quot;],
          ...(req.headers.origin // 跨域请求时请求头中会包含 origin，也就是请求发出的网站
            ? [
                [&quot;Access-Control-Allow-Origin&quot;, req.headers.origin], // 不可以使用 *，必须指定
                [&quot;Access-Control-Allow-Credentials&quot;, &quot;true&quot;], // 设置允许跨域请求携带 Cookie
              ]
            : []),
        ]);
        res.end(&quot;some data&quot;);
      }
    }
  )
  .listen(443, &quot;0.0.0.0&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>满足上面的条件之后，跨域请求就可以携带 Cookie 了：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.open(&#39;GET&#39;, &quot;https://www.bar.com/someapi&quot;);
xhr.send();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/348d51adf1f944f8acf451087f301cfc~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p><strong>这四个条件缺一不可：</strong></p><p>当不开启 https 的时候：</p><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f1cbe833712445c798c97d5bc4372ac8~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>当不设置 Secure 属性：</p><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/99eeefaf9a8a4054857ee5587c6466d2~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>当 Access-Control-Allow-Origin 设置为 * 时</p><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3e23bf21b7a74a37a2823902b247eeb1~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>当 Access-Control-Allow-Credentials 的值不为 true 时</p><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4e251772a7254b7abb734f43381534bd~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>当 SameSite 属性设置为 Strict 或 Lax 时</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/393d5a88637040c1bdcb3ed25ee73008~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" loading="lazy"> <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/049d6f1d487245b182ab7aa96736908e~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" loading="lazy"></p><p>对于使用浏览器的 fetch API 发送请求也是一样的，使用 fetch 发起跨域请求时如果想携带 cookie，需要设置 &quot;credentials&quot; 为 &quot;include&quot;：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fetch(&quot;https://www.bar.com/somedata&quot;, {
  &quot;method&quot;: &quot;GET&quot;,
  &quot;credentials&quot;: &quot;include&quot;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-嵌套第三方-iframe" tabindex="-1"><a class="header-anchor" href="#_2-嵌套第三方-iframe" aria-hidden="true">#</a> 2. 嵌套第三方 iframe</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const https = require(&quot;https&quot;);
const fs = require(&quot;fs&quot;);

https
  .createServer(
    {
      key: fs.readFileSync(__dirname + &quot;/key.pem&quot;),
      cert: fs.readFileSync(__dirname + &quot;/cert.pem&quot;),
    },
    (req, res) =&gt; {
      console.log(req.headers.host);
      if (req.url == &quot;/&quot;) {
        if (req.headers.host === &quot;www.foo.com&quot;) {
          res.setHeader(&quot;Content-Type&quot;, &quot;text/html;charset=utf-8&quot;);
          res.end(\`&lt;div&gt;这是父页面&lt;/div&gt;
&lt;iframe src=&quot;https://www.bar.com/&quot;&gt;&lt;/iframe&gt;\`);
        } else {
          res.writeHead(200, [
            [&quot;Set-Cookie&quot;, &quot;name=haochuan9421; Secure; SameSite=None&quot;],
            [&quot;Content-Type&quot;, &quot;text/html;charset=utf-8&quot;],
          ]);
          res.end(\`&lt;div&gt;这是子页面&lt;/div&gt;\`);
        }
      } else {
        res.statusCode = 204;
        res.end();
      }
    }
  )
  .listen(443, &quot;0.0.0.0&quot;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果设置了SameSite 为 Strict: <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f0cb7fecced448de932173f38b200547~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" loading="lazy"> 如果设置了SameSite 为 Lax: <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f17c946dd3ac4b3991d53c28ea495ba7~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" loading="lazy"> 如果不指定 SameSite: <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9ab9e8db712448de8339a0fef0162c12~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" loading="lazy"> 如果设置了 SameSite 为 None: <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0a9e065ac3b64cb0a288fea9c91e3b8e~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" loading="lazy"></p><p>这说明只有明确的指定了 SameSite 为 None 时，跨域 iframe 页面被引入时 Cookie 才能生效。</p><p>举例说明一下：假设我们希望在自己的网站内嵌 bilibili 的视频播放器，直接通过 iframe 把 B 站播放器引入到我们自己的网站是无法使用 1080p 画质的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;iframe
  src=&quot;//player.bilibili.com/player.html?bvid=BV1Vv41157uK&amp;high_quality=1&quot;
  allowfullscreen=&quot;allowfullscreen&quot;
  width=&quot;100%&quot;
  height=&quot;500&quot;
  scrolling=&quot;no&quot;
  frameborder=&quot;0&quot;
&gt;&lt;/iframe&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/05d287e8dbe5496ca38230e0920eeccb~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>这是由于 B 站 Cookie 的 SameSite 属性并没有设置为 None，内嵌在其他第三方网站时 B 站播放器无法传递 Cookie 到服务器，服务器也就拿不到用户的登录态，对于未登录的用户 B 站是不提供 1080p 播放的。</p><p>不过在 Chrome 中我们可以通过禁用 chrome://flags/#same-site-by-default-cookies 来让”第三方 cookie“默认为 None，当我们关闭这个选项并重启浏览器之后，就可以在内嵌 iframe 中播放 1080p 的 B站视频了（前提是在 B 站已经登录过）。 <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d7bbf474da434837ae2e1be7e21b6667~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" loading="lazy"></p><h3 id="_3-加载第三方图片或脚本等" tabindex="-1"><a class="header-anchor" href="#_3-加载第三方图片或脚本等" aria-hidden="true">#</a> 3. 加载第三方图片或脚本等</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const https = require(&quot;https&quot;);
const fs = require(&quot;fs&quot;);

https
  .createServer(
    {
      key: fs.readFileSync(__dirname + &quot;/key.pem&quot;),
      cert: fs.readFileSync(__dirname + &quot;/cert.pem&quot;),
    },
    (req, res) =&gt; {
      console.log(req.headers.host, req.url);
      if (req.url == &quot;/&quot;) {
        if (req.headers.host === &quot;www.foo.com&quot;) {
          res.setHeader(&quot;Content-Type&quot;, &quot;text/html;charset=utf-8&quot;);
          res.end(\`&lt;div&gt;这是父页面&lt;/div&gt;
&lt;img src=&quot;https://www.bar.com/&quot;&gt;&lt;/img&gt;\`);
        } else {
          res.writeHead(200, [
            [&quot;Set-Cookie&quot;, &quot;name=haochuan9421; Secure; SameSite=Strict&quot;],
            [&quot;Content-Type&quot;, &quot;image/png&quot;],
          ]);
          fs.createReadStream(&quot;logo.png&quot;).pipe(res);
        }
      } else {
        res.statusCode = 204;
        res.end();
      }
    }
  )
  .listen(443, &quot;0.0.0.0&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3850f7bdb67b4cc3841f164e6adbd046~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" loading="lazy"> <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a9f440e0aa9d45bc9b39cb9d464bb409~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" loading="lazy"> <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2a6a07fe47284b8ba33245dc11605558~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" loading="lazy"> <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d6451147a5ca4cfe8d8cbc7d5e96945e~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" loading="lazy"></p><p>这和引入第三方的 iframe 是一样的，只有 SameSite 属性为 None，Cookie 才能生效。</p><p>举个应用的例子：下图是一个添加了谷歌广告的网站，可以看到谷歌广告相关的 Cookie 会把 SameSite 属性设置为 None。这样当足够多的网站引入了谷歌的广告脚本等资源时，他就可以构建出用户在各个网站的浏览轨迹以及访问偏好了，从而精准的推送广告。</p><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ab8f5ea72d034918adff3e7b5a751f13~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="_4-提交表单到第三方网站" tabindex="-1"><a class="header-anchor" href="#_4-提交表单到第三方网站" aria-hidden="true">#</a> 4. 提交表单到第三方网站</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const https = require(&quot;https&quot;);
const fs = require(&quot;fs&quot;);

https
  .createServer(
    {
      key: fs.readFileSync(__dirname + &quot;/key.pem&quot;),
      cert: fs.readFileSync(__dirname + &quot;/cert.pem&quot;),
    },
    (req, res) =&gt; {
      if (req.url == &quot;/&quot;) {
        if (req.headers.host === &quot;www.foo.com&quot;) {
          res.setHeader(&quot;Content-Type&quot;, &quot;text/html;charset=utf-8&quot;);
          res.end(\`&lt;form action=&quot;https://www.bar.com/&quot; method=&quot;post&quot; enctype=&quot;multipart/form-data&quot;&gt;
&lt;input type=&quot;text&quot; name=&quot;name&quot; /&gt;
&lt;input type=&quot;number&quot; name=&quot;age&quot; /&gt;
&lt;button type=&quot;submit&quot;&gt;提交&lt;/button&gt;
&lt;/form&gt;\`);
        } else {
          console.log(req.headers.host, req.url, req.method, req.headers.cookie);
          res.writeHead(200, [
            [&quot;Set-Cookie&quot;, &quot;name=haochuan9421; Secure; SameSite=Strict&quot;],
          ]);
          res.end(&quot;ok&quot;);
        }
      } else {
        res.statusCode = 204;
        res.end();
      }
    }
  )
  .listen(443, &quot;0.0.0.0&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8ceecb25609346238e2a2370e29038be~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" loading="lazy"> <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/464dff85bb1d45f8b13a7fb248b67f1c~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" loading="lazy"> <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a82bad21dd3e4742920b2caa0ce21b1b~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" loading="lazy"></p>`,35),M={href:"https://link.juejin.cn/?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCross-site_request_forgery",title:"https://en.wikipedia.org/wiki/Cross-site_request_forgery",target:"_blank",rel:"noopener noreferrer"},U={href:"https://link.juejin.cn/?target=http%3A%2F%2Fwww.foo.com",title:"http://www.foo.com",target:"_blank",rel:"noopener noreferrer"},W={href:"https://link.juejin.cn/?target=http%3A%2F%2Fwww.bar.com",title:"http://www.bar.com",target:"_blank",rel:"noopener noreferrer"},K=s(`<blockquote><p>这部分的示例只是为了说明问题，只展示一些关键步骤，具体的细节，比如登录和登陆态校验的实现会被简化</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 这是我们自己正常的网站
const https = require(&quot;https&quot;);
const fs = require(&quot;fs&quot;);

https
  .createServer(
    {
      key: fs.readFileSync(__dirname + &quot;/key.pem&quot;),
      cert: fs.readFileSync(__dirname + &quot;/cert.pem&quot;),
    },
    (req, res) =&gt; {
      if (req.url == &quot;/&quot;) {
        // 我们网站首页有一个转账的表单
        res.setHeader(&quot;Content-Type&quot;, &quot;text/html;charset=utf-8&quot;);
        res.end(\`&lt;form action=&quot;/transfer&quot; method=&quot;post&quot;&gt;
&lt;input type=&quot;number&quot; name=&quot;money&quot; /&gt;
&lt;button type=&quot;submit&quot;&gt;提交&lt;/button&gt;
&lt;/form&gt;\`);
      } else if (req.url == &quot;/login&quot;) {
        // 登录后，客户端会存储用户的 Cookie 信息
        res.setHeader(&quot;Set-Cookie&quot;, &quot;name=haochuan9421; Secure; SameSite=None&quot;);
        res.end(&quot;login success&quot;);
      } else if (req.url == &quot;/transfer&quot;) {
        // 登录后的用户可以转账，未登录的不能转账
        res.end(req.headers.cookie ? &quot;ok&quot; : &quot;fail&quot;);
      } else {
        res.statusCode = 204;
        res.end();
      }
    }
  )
  .listen(443, &quot;0.0.0.0&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Q={href:"https://link.juejin.cn/?target=http%3A%2F%2Fwww.bar.com",title:"http://www.bar.com",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://link.juejin.cn/?target=http%3A%2F%2Fwww.bar.com%2Flogin",title:"http://www.bar.com/login",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://link.juejin.cn/?target=http%3A%2F%2Fwww.bar.com",title:"http://www.bar.com",target:"_blank",rel:"noopener noreferrer"},$=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 这是一个要伪造请求的恶意网站
const https = require(&quot;https&quot;);
const fs = require(&quot;fs&quot;);

https
  .createServer(
    {
      key: fs.readFileSync(__dirname + &quot;/key.pem&quot;),
      cert: fs.readFileSync(__dirname + &quot;/cert.pem&quot;),
    },
    (req, res) =&gt; {
      if (req.url == &quot;/&quot;) {
        res.setHeader(&quot;Content-Type&quot;, &quot;text/html;charset=utf-8&quot;);
        res.end(\`&lt;div&gt;这是一个恶意网站&lt;/div&gt;
&lt;form
id=&quot;fake-form&quot;
action=&quot;https://www.bar.com/transfer&quot;
method=&quot;post&quot;
target=&quot;submit-target&quot;
&gt;
    &lt;input type=&quot;hidden&quot; name=&quot;money&quot; value=&quot;1000&quot; /&gt;
&lt;/form&gt;
&lt;iframe name=&quot;submit-target&quot;&gt;&lt;/iframe&gt;
&lt;script&gt;document.getElementById(&quot;fake-form&quot;).submit();&lt;/script&gt;\`);
      } else {
        res.statusCode = 204;
        res.end();
      }
    }
  )
  .listen(443, &quot;0.0.0.0&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9b3983eac70147e9ba71691a7c82c164~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>可以看到，用户被诱导进入恶意网站后，恶意网站自动像你的服务器发起了伪造的转账请求，由于你 Cookie 中的 SameSite 属性设置为 None，这就导致这次伪造的请求也会携带用户的 Cookie，单纯基于 Cookie 做的接口鉴权就被攻破了，用户的资金面临安全风险。这也是为什么最新版的浏览器都会把 SameSite 的默认值从 None 调整为 Lax 的一个重要原因。</p><h3 id="_5-链接跳转第三方网站" tabindex="-1"><a class="header-anchor" href="#_5-链接跳转第三方网站" aria-hidden="true">#</a> 5. 链接跳转第三方网站</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const https = require(&quot;https&quot;);
const fs = require(&quot;fs&quot;);

https
  .createServer(
    {
      key: fs.readFileSync(__dirname + &quot;/key.pem&quot;),
      cert: fs.readFileSync(__dirname + &quot;/cert.pem&quot;),
    },
    (req, res) =&gt; {
      if (req.url == &quot;/&quot;) {
        if (req.headers.host === &quot;www.foo.com&quot;) {
          res.setHeader(&quot;Content-Type&quot;, &quot;text/html;charset=utf-8&quot;);
          res.end(\`&lt;div&gt;foo page&lt;/div&gt;
&lt;a href=&quot;https://www.bar.com/&quot;&gt;www.bar.com&lt;/a&gt;\`);
        } else {
          console.log(req.headers.host, req.url, req.headers.cookie);
          res.writeHead(200, [
            [&quot;Set-Cookie&quot;, &quot;name=haochuan9421; Secure; SameSite=None&quot;],
            [&quot;Content-Type&quot;, &quot;text/html;charset=utf-8&quot;],
          ]);
          res.end(&quot;bar page&quot;);
        }
      } else {
        res.statusCode = 204;
        res.end();
      }
    }
  )
  .listen(443, &quot;0.0.0.0&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d35f9d3a9ac64030b2f32cbd95fee088~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" loading="lazy"> <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5172d5de78734f928f3b2454f15298db~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" loading="lazy"> <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/19917b24ce2b4611b2c6ec1f622b6ecf~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="image" loading="lazy"></p><p><code>Strict</code> 这个规则过于严格，可能造成非常不好的用户体验。比如，当前网页有一个 GitHub 链接，用户点击跳转就不会带有 GitHub 的 Cookie，跳转过去总是未登陆状态。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>现代浏览器针对 Cookie 的 <code>SameSite</code> 属性的默认值已经很合理了，作为网站所有者通常不需要手动设置这个属性，一般只有当我们的服务需要和“第三方”对接时才考虑怎么设置更合理。</p><p><code>Strict</code> 最为严格，表示完全禁止“第三方 Cookie”，只有当前网页的 URL 与请求目标一致时，才会带上 Cookie，一般用于保证系统的封闭性和安全性。</p><p><code>Lax</code> 是目前大多数现代浏览器的默认值，他在保证安全性的前提下，也可以避免一些不好的用户体验，比如从别的网站跳转过时会没有登录态。</p><p><code>None</code> 是最为宽松的一种设定，通常用于开放我们的服务给不同的第三方接入，同时又需要追踪用户的场景，比如广告，设置为 <code>None</code> 时需要考虑开放的安全性。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,13),ee={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://publicsuffix.org/list/public_suffix_list.dat",target:"_blank",rel:"noopener noreferrer"},ie={href:"https://juejin.cn/post/6963632513914765320#heading-1",target:"_blank",rel:"noopener noreferrer"};function te(se,ae){const i=o("ExternalLinkIcon");return r(),l("div",null,[u,n("p",null,[e("举个例子：假设我们现在访问的网站是 '"),n("a",d,[e("bar.com"),t(i)]),e("'，当我们引入 '"),n("a",p,[e("foo.com"),t(i)]),e("' 的图片时，图片服务如果设置了 Cookie，我们就称之为 “"),m,e("”。目前在新版的 Chrome 浏览器中，只有指定 Cookie 的 SameSite 属性为 None 且 Secure 属性为 true 才可以设置 “第三方 Cookie”（后面会具体介绍）。用户是可以在浏览器偏好设置中阻止“第三方 Cookie”的。")]),b,v,n("p",null,[e("是否是 “"),f,e("” 不是根据同源策略（协议，主机，端口）来判断，而是 "),n("a",g,[e("PSL"),t(i)]),e("（公共后缀列表）。比如 '"),n("a",h,[e("foo.example.com"),t(i)]),e("' 和 '"),n("a",k,[e("bar.example.com"),t(i)]),e("' 就不属于 “跨站”，因为他们同属于 "),n("a",q,[e("example.com"),t(i)]),e("，是“同站”。这里也不能简单理解为二级域名相同，比如 '"),n("a",_,[e("foo.github.io"),t(i)]),e("' 和 '"),n("a",w,[e("bar.github.io"),t(i)]),e("'，虽然都是 '"),n("a",y,[e("github.io"),t(i)]),e("' 的子域名，但是他们之间是跨站的，因为 '"),n("a",x,[e("github.io"),t(i)]),e("' 是在 PSL 中的，相当于顶级域名，可以在"),n("a",S,[e("此处"),t(i)]),e("查看哪些域名是属于 PSL 的。")]),n("p",null,[e("这其实和 Cookie 的 Domain 属性设置是差不多的。我们都知道子域名是可以设置父域名 Cookie 的，比如 '"),n("a",j,[e("foo.example.com"),t(i)]),e("' 的请求是可以设置 Domain 为 '.example.com' 的 Cookie 的。但是 '"),n("a",C,[e("foo.github.io"),t(i)]),e("' 的请求是不可以设置 Domain 为 '.github.io' 的 Cookie 的。这就像你无法设置 Cookie 的 'Domain' 为 '.com' 一样。因为 '.com' 和 '"),n("a",z,[e("github.io"),t(i)]),e("' 都在 PSL 中。")]),F,A,n("blockquote",null,[n("p",null,[e("更权威的解释可以参考这里"),n("a",N,[e('"Same-site" and "cross-site" Requests'),t(i)])])]),n("p",null,[H,e("不同时，比如我们的网站是 "),n("a",T,[e("bar.com:8080"),t(i)]),e(" ，我们引入 "),n("a",L,[e("bar.com:9000"),t(i)]),e(" 的图片时"),B,e("判定为第三方的。")]),n("p",null,[P,e("（Scheme）不同"),R,e("判定为第三方。比如我们的网站是 '"),n("a",E,[e("bar.com"),t(i)]),e("' ，我们引入 '"),n("a",O,[e("bar.com"),t(i)]),e("' 的图片时会判定为第三方。不过在 Chrome 中你可以通过 chrome://flags/#schemeful-same-site 来忽略协议的限制。")]),V,n("p",null,[e("不过我们可以使用 "),n("a",D,[e("CORS"),t(i)]),e(" 的方式来解决跨域的问题：")]),G,n("blockquote",null,[n("p",null,[e("想在本地测试这段代码的同学需要注意一下，"),n("a",X,[e("www.foo.com"),t(i)]),e(" 和 "),n("a",I,[e("www.bar.com"),t(i)]),e(" 的请求都会打到这个服务上，通过修改电脑的 hosts 文件很容易做到这一点，https 的证书是采用 mkcert 生成的自签名证书。")])]),J,n("p",null,[e("从上面的测试中可以看出将 SameSite 设置为 None 是一种危险的行为，它会使得针对你的网站发起 "),n("a",M,[e("CSRF"),t(i)]),e(" (Cross-site request forgery) 攻击变得非常容易，因为从一个第三方恶意网站向你的网站发起的请求也会携带 Cookie，这使得伪造的请求会被识别为一次普通用户发起的请求。下面具体演示一下，我们假设 "),n("a",U,[e("www.foo.com"),t(i)]),e(" 是一个恶意网站，"),n("a",W,[e("www.bar.com"),t(i)]),e(" 是我们自己的网站：")]),K,n("p",null,[e("用户直接访问 "),n("a",Q,[e("www.bar.com"),t(i)]),e(" 提交表单转账，由于没有登录（没有 Cookie）会提示失败，所以用户会先进入 "),n("a",Y,[e("www.bar.com/login"),t(i)]),e(" 登录，登录后客户端会有 Cookie，当用户回到首页再次提交转账表单时，就会转账成功，这模拟了一个简单的基于 Cookie 鉴权的网站。")]),n("p",null,[e("接下来我们一起来看看攻击者是如何突破 "),n("a",Z,[e("www.bar.com"),t(i)]),e(" 的鉴权滴。当攻击者知道了你网站有转账的功能，那么他就可以诱导用户进入准备好的恶意网站，在这个恶意网站中向你的网站发起转账请求，如果进入恶意网站的用户之前登录过你的网站并且登录态没有过期，那么这次伪造的请求就会成功把用户的钱转走。下面是恶意网站的代码：")]),$,n("ul",null,[n("li",null,[n("a",ee,[e("MDN"),t(i)])]),n("li",null,[n("a",ne,[e("https://publicsuffix.org/list/public_suffix_list.dat"),t(i)])]),n("li",null,[n("a",ie,[e("https://juejin.cn/post/6963632513914765320#heading-1"),t(i)])])])])}const le=a(c,[["render",te],["__file","samestie.html.vue"]]);export{le as default};
