import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as s,c as r,d as e,e as a,b as d,f as t}from"./app-6e9eca2d.js";const l={},c=t(`<h1 id="mongodb-安装-配置" tabindex="-1"><a class="header-anchor" href="#mongodb-安装-配置" aria-hidden="true">#</a> mongodb 安装 &amp; 配置</h1><h2 id="_1-mongodb-安装" tabindex="-1"><a class="header-anchor" href="#_1-mongodb-安装" aria-hidden="true">#</a> 1. mongodb 安装</h2><h3 id="_1-1-添加yum源" tabindex="-1"><a class="header-anchor" href="#_1-1-添加yum源" aria-hidden="true">#</a> 1.1. 添加yum源</h3><p>我这里使用的是yum命令安装，需要先添加yum源：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vi /etc/yum.repos.d/mongodb-org-6.0.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后将如下内容添加进去：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按照官方文档添加了yum源文件，但是当执行<code>yum install -y mongodb-org</code>命令的时候报错了：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Error: Failed to download metadata for repo &#39;mongodb-org-6.0&#39;: Cannot download repomd.xml: Status code: 404 for https://repo.mongodb.org/yum/redhat/3/mongodb-org/6.0/x86_64/repodata/repomd.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我的解决办法就是将<code>$releasever</code>变量直接修改为Centos的版本<code>8</code>，如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/8/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改完后再次执行如下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install -y mongodb-org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>MongoDB就能安装成功了。</p><h3 id="_1-2-启动mongodb服务" tabindex="-1"><a class="header-anchor" href="#_1-2-启动mongodb服务" aria-hidden="true">#</a> 1.2. 启动MongoDB服务</h3><p>安装完成后，使用<code>systemctl</code>命令启动MongoDB服务：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl start mongod  #启动systemctl status mongod #查看状态
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-3-验证安装" tabindex="-1"><a class="header-anchor" href="#_1-3-验证安装" aria-hidden="true">#</a> 1.3. 验证安装</h3><p>连接到 MongoDB 数据库服务器并打印版本号：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// mongod -h
mongod -h

// 进入命令行模式
mongosh
// 查看数据库列表
show dbs;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-参考" tabindex="-1"><a class="header-anchor" href="#_2-参考" aria-hidden="true">#</a> 2. 参考</h2>`,21),m={href:"https://www.mongodb.com/docs/v6.0/tutorial/install-mongodb-on-red-hat/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://bootschool.net/article/61a8c242e7ac006d8b321537/how-to-install-mongodb-5.0-on-alibaba-cloud-linux-3",target:"_blank",rel:"noopener noreferrer"};function u(b,v){const n=i("ExternalLinkIcon");return s(),r("div",null,[c,e("ul",null,[e("li",null,[e("a",m,[a("https://www.mongodb.com/docs/v6.0/tutorial/install-mongodb-on-red-hat/"),d(n)])]),e("li",null,[e("a",g,[a("https://bootschool.net/article/61a8c242e7ac006d8b321537/how-to-install-mongodb-5.0-on-alibaba-cloud-linux-3"),d(n)])])])])}const x=o(l,[["render",u],["__file","mongodb.html.vue"]]);export{x as default};
