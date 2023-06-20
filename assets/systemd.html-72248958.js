import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as t,c as r,d as s,e as a,b as o,f as n}from"./app-1d2f6884.js";const c={},p=n(`<h1 id="服务进程自启动管理" tabindex="-1"><a class="header-anchor" href="#服务进程自启动管理" aria-hidden="true">#</a> 服务进程自启动管理</h1><blockquote><p>使用系统自带的 systemctl 命令管理服务。</p></blockquote><h2 id="systemctl" tabindex="-1"><a class="header-anchor" href="#systemctl" aria-hidden="true">#</a> systemctl</h2><ul><li>service配置文件 <ul><li>具体路径参考最新的配置要求: <code>/usr/lib/systemd/system/nodejs.service</code></li></ul></li><li>nodejs.service 文件权限设置777可执行权限</li></ul><h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h3><ul><li>systemctl daemon-reload 重置配置文件</li><li>systemctl start nodejs.service 启动服务</li><li>systemctl restart nodejs.service 启动服务</li><li>systemctl status nodejs.service 查看服务状态</li><li>systemctl enable nodejs.service 开机自启动服务</li></ul><h2 id="nodejs" tabindex="-1"><a class="header-anchor" href="#nodejs" aria-hidden="true">#</a> nodejs</h2><blockquote><p>nodejs.service 配置参考</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>koa Server Service

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>simple
<span class="token assign-left variable">User</span><span class="token operator">=</span>root
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>on-failure
<span class="token assign-left variable">RestartSec</span><span class="token operator">=</span>15s

<span class="token assign-left variable">WorkingDirectory</span><span class="token operator">=</span>/home/nodejs_koa
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/home/nodejs_koa/systemd.sh


<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),d={href:"http://systemd.sh",target:"_blank",rel:"noopener noreferrer"},v=n(`<blockquote><p>service 文件中直接配置 <code>ExecStart=npm start</code> 报错：无法使用全局的npm命令</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">.</span> /root/.nvm/nvm.sh

<span class="token function">npm</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="frp自启动服务" tabindex="-1"><a class="header-anchor" href="#frp自启动服务" aria-hidden="true">#</a> frp自启动服务</h2><ul><li>frps.service</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>Frp Server Service
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>simple
<span class="token assign-left variable">User</span><span class="token operator">=</span>nobody
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>on-failure
<span class="token assign-left variable">RestartSec</span><span class="token operator">=</span>5s
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/frp/frps <span class="token parameter variable">-c</span> /usr/local/frp/frps.ini
<span class="token assign-left variable">LimitNOFILE</span><span class="token operator">=</span><span class="token number">1048576</span>

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function u(m,b){const e=l("ExternalLinkIcon");return t(),r("div",null,[p,s("ul",null,[s("li",null,[s("a",d,[a("systemd.sh"),o(e)]),a(" 文件配置")])]),v])}const f=i(c,[["render",u],["__file","systemd.html.vue"]]);export{f as default};
