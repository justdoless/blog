const t=JSON.parse('{"key":"v-d7e7207c","path":"/posts/env/proxy.html","title":"日常开发中的代理配置","lang":"zh-CN","frontmatter":{"date":"2023-05-15T00:00:00.000Z","icon":"note","category":["env"],"tag":["devtools","科学上网","GFW","git","bash","npm"],"description":"日常开发中的代理配置 代理软件无法代理终端、命令行等软件的流量导致无法访问 配置git代理 ~/.zshrc 中新增配置, 需要开启时运行：proxy_git_on # 开启代理 function proxy_git_on() { # 需要先删除，设置多次报错 git config --global --unset http.proxy git config --global --unset https.proxy git config --global http.proxy http://127.0.0.1:7890 git config --global https.proxy http://127.0.0.1:7890 echo -e \\"已开启git代理\\" } function proxy_git_off(){ git config --global --unset http.proxy git config --global --unset https.proxy echo -e \\"已关闭git代理\\" }","head":[["meta",{"property":"og:url","content":"https://justdoless.cn/posts/env/proxy.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"日常开发中的代理配置"}],["meta",{"property":"og:description","content":"日常开发中的代理配置 代理软件无法代理终端、命令行等软件的流量导致无法访问 配置git代理 ~/.zshrc 中新增配置, 需要开启时运行：proxy_git_on # 开启代理 function proxy_git_on() { # 需要先删除，设置多次报错 git config --global --unset http.proxy git config --global --unset https.proxy git config --global http.proxy http://127.0.0.1:7890 git config --global https.proxy http://127.0.0.1:7890 echo -e \\"已开启git代理\\" } function proxy_git_off(){ git config --global --unset http.proxy git config --global --unset https.proxy echo -e \\"已关闭git代理\\" }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-16T14:00:24.000Z"}],["meta",{"property":"article:author","content":"justdoless"}],["meta",{"property":"article:tag","content":"devtools"}],["meta",{"property":"article:tag","content":"科学上网"}],["meta",{"property":"article:tag","content":"GFW"}],["meta",{"property":"article:tag","content":"git"}],["meta",{"property":"article:tag","content":"bash"}],["meta",{"property":"article:tag","content":"npm"}],["meta",{"property":"article:published_time","content":"2023-05-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-16T14:00:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"日常开发中的代理配置\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-16T14:00:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"justdoless\\",\\"url\\":\\"https://justdoless.cn\\",\\"email\\":\\"justdoless.com@gmail.com\\"}]}"]]},"headers":[{"level":2,"title":"配置git代理","slug":"配置git代理","link":"#配置git代理","children":[]},{"level":2,"title":"配置npm代理","slug":"配置npm代理","link":"#配置npm代理","children":[]},{"level":2,"title":"配置终端代理","slug":"配置终端代理","link":"#配置终端代理","children":[]}],"git":{"createdTime":1705413624000,"updatedTime":1705413624000,"contributors":[{"name":"xgwang","email":"xgwang@sysnew.com","commits":1}]},"readingTime":{"minutes":1.14,"words":341},"filePathRelative":"posts/env/proxy.md","localizedDate":"2023年5月15日","excerpt":"<h1> 日常开发中的代理配置</h1>\\n<blockquote>\\n<p>代理软件无法代理终端、命令行等软件的流量导致无法访问</p>\\n</blockquote>\\n<h2> 配置git代理</h2>\\n<blockquote>\\n<p>~/.zshrc 中新增配置, 需要开启时运行：<code>proxy_git_on</code></p>\\n</blockquote>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># 开启代理</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function-name function\\">proxy_git_on</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\"># 需要先删除，设置多次报错</span>\\n    <span class=\\"token function\\">git</span> config <span class=\\"token parameter variable\\">--global</span> <span class=\\"token parameter variable\\">--unset</span> http.proxy\\n    <span class=\\"token function\\">git</span> config <span class=\\"token parameter variable\\">--global</span> <span class=\\"token parameter variable\\">--unset</span> https.proxy\\n\\n    <span class=\\"token function\\">git</span> config <span class=\\"token parameter variable\\">--global</span> http.proxy http://127.0.0.1:7890\\n    <span class=\\"token function\\">git</span> config <span class=\\"token parameter variable\\">--global</span> https.proxy http://127.0.0.1:7890\\n    <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token parameter variable\\">-e</span> <span class=\\"token string\\">\\"已开启git代理\\"</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function-name function\\">proxy_git_off</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">git</span> config <span class=\\"token parameter variable\\">--global</span> <span class=\\"token parameter variable\\">--unset</span> http.proxy\\n    <span class=\\"token function\\">git</span> config <span class=\\"token parameter variable\\">--global</span> <span class=\\"token parameter variable\\">--unset</span> https.proxy\\n    <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token parameter variable\\">-e</span> <span class=\\"token string\\">\\"已关闭git代理\\"</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"justdoless.com@gmail.com"},"autoDesc":true}');export{t as data};