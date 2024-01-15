import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-gQAb7vcp.js";const t={},p=e(`<h1 id="日常开发中的代理配置" tabindex="-1"><a class="header-anchor" href="#日常开发中的代理配置" aria-hidden="true">#</a> 日常开发中的代理配置</h1><blockquote><p>代理软件无法代理终端、命令行等软件的流量导致无法访问</p></blockquote><h2 id="配置git代理" tabindex="-1"><a class="header-anchor" href="#配置git代理" aria-hidden="true">#</a> 配置git代理</h2><blockquote><p>~/.zshrc 中新增配置, 需要开启时运行：<code>proxy_git_on</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 开启代理</span>
<span class="token keyword">function</span> <span class="token function-name function">proxy_git_on</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment"># 需要先删除，设置多次报错</span>
    <span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> http.proxy
    <span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> https.proxy

    <span class="token function">git</span> config <span class="token parameter variable">--global</span> http.proxy http://127.0.0.1:7890
    <span class="token function">git</span> config <span class="token parameter variable">--global</span> https.proxy http://127.0.0.1:7890
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;已开启git代理&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">proxy_git_off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> http.proxy
    <span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> https.proxy
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;已关闭git代理&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置npm代理" tabindex="-1"><a class="header-anchor" href="#配置npm代理" aria-hidden="true">#</a> 配置npm代理</h2><blockquote><p>~/.zshrc 中新增配置, 需要开启时运行：<code>proxy_npm_on</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 开启代理</span>
<span class="token keyword">function</span> <span class="token function-name function">proxy_npm_on</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment"># 不需要先删除，设置多次没影响</span>
    <span class="token function">npm</span> config <span class="token builtin class-name">set</span> proxy http://127.0.0.1:7890
    <span class="token function">npm</span> config <span class="token builtin class-name">set</span> https-proxy http://127.0.0.1:7890
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;已开启npm代理&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">proxy_npm_off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">npm</span> config delete proxy
    <span class="token function">npm</span> config delete https-proxy
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;已关闭npm代理&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置终端代理" tabindex="-1"><a class="header-anchor" href="#配置终端代理" aria-hidden="true">#</a> 配置终端代理</h2><blockquote><p>~/.zshrc 中新增配置, 需要开启时运行：<code>proxy_on</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 该设置仅对当前终端窗口生效，关闭窗口，下次需要再设置一次 proxy_on [需要开启全局模式]</span>
<span class="token keyword">function</span> <span class="token function-name function">proxy_on</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable">no_proxy</span><span class="token operator">=</span><span class="token string">&quot;localhost,127.0.0.1,localaddress,localdomain.com&quot;</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable">http_proxy</span><span class="token operator">=</span><span class="token string">&quot;http://127.0.0.1:7890&quot;</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable">https_proxy</span><span class="token operator">=</span><span class="token variable">$http_proxy</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable">ftp_proxy</span><span class="token operator">=</span><span class="token variable">$http_proxy</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable">rsync_proxy</span><span class="token operator">=</span><span class="token variable">$http_proxy</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable">HTTP_PROXY</span><span class="token operator">=</span><span class="token variable">$http_proxy</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable">HTTPS_PROXY</span><span class="token operator">=</span><span class="token variable">$http_proxy</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable">FTP_PROXY</span><span class="token operator">=</span><span class="token variable">$http_proxy</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable">RSYNC_PROXY</span><span class="token operator">=</span><span class="token variable">$http_proxy</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;已开启终端代理&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">proxy_off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin class-name">unset</span> http_proxy
    <span class="token builtin class-name">unset</span> https_proxy
    <span class="token builtin class-name">unset</span> ftp_proxy
    <span class="token builtin class-name">unset</span> rsync_proxy
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;已关闭终端代理&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),i=[p];function l(o,c){return s(),a("div",null,i)}const d=n(t,[["render",l],["__file","proxy.html.vue"]]);export{d as default};
