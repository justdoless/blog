import{_ as i,X as l,Y as p,a0 as n,a1 as s,$ as e,a2 as t,C as o}from"./framework-9d02e721.js";const c={},u=t('<h1 id="利用github免费搭建托管个人站点" tabindex="-1"><a class="header-anchor" href="#利用github免费搭建托管个人站点" aria-hidden="true">#</a> 利用GitHub免费搭建托管个人站点</h1><blockquote><ol><li>静态博客托管</li><li>支持评论功能</li><li>源代码不开源</li></ol></blockquote><h2 id="github服务" tabindex="-1"><a class="header-anchor" href="#github服务" aria-hidden="true">#</a> GitHub服务</h2><h3 id="基础认知" tabindex="-1"><a class="header-anchor" href="#基础认知" aria-hidden="true">#</a> 基础认知</h3><ul><li>最广为人知的代码托管平台</li><li>静态文件托管服务(gh-pages)</li></ul><h3 id="更多功能" tabindex="-1"><a class="header-anchor" href="#更多功能" aria-hidden="true">#</a> 更多功能</h3><ul><li>自动化部署(actions)</li></ul><h3 id="优势" tabindex="-1"><a class="header-anchor" href="#优势" aria-hidden="true">#</a> 优势</h3><ul><li>免费服务器托管成本</li><li>无需管理维护服务器</li><li>内置集成自动化部署</li></ul><h2 id="静态托管" tabindex="-1"><a class="header-anchor" href="#静态托管" aria-hidden="true">#</a> 静态托管</h2><blockquote><p>基于免费账号的步骤</p></blockquote><h3 id="个人-组织下新建username-github-io或者organization-github-io" tabindex="-1"><a class="header-anchor" href="#个人-组织下新建username-github-io或者organization-github-io" aria-hidden="true">#</a> 个人/组织下新建username.github.io或者organization.github.io</h3><ul><li>需要时public权限 <s>（付费账号可以基于private权限的仓库）</s></li></ul>',13),r=n("img",{src:"https://kodo.justdoless.cn/blog.com/部署/新建个人仓库-username.github.io.png@70",alt:"新建个人仓库-username.github.io",tabindex:"0",loading:"lazy"},null,-1),d={href:"http://xn---username-uk6nq3cuin12pdgbj88c.github.io",target:"_blank",rel:"noopener noreferrer"},k=t('<h3 id="setting-pages-branch-下配置" tabindex="-1"><a class="header-anchor" href="#setting-pages-branch-下配置" aria-hidden="true">#</a> setting/pages/branch 下配置</h3><ul><li>10分钟左右生效</li></ul><figure><img src="https://kodo.justdoless.cn/blog.com/部署/setting-pages下配置托管页面.png@70" alt="setting-pages下配置托管页面" tabindex="0" loading="lazy"><figcaption>setting-pages下配置托管页面</figcaption></figure><h3 id="其他名称的仓库托管后域名地址" tabindex="-1"><a class="header-anchor" href="#其他名称的仓库托管后域名地址" aria-hidden="true">#</a> 其他名称的仓库托管后域名地址</h3><figure><img src="https://kodo.justdoless.cn/blog.com/部署/其他名称的仓库托管后域名地址.png@70" alt="其他名称的仓库托管后域名地址" tabindex="0" loading="lazy"><figcaption>其他名称的仓库托管后域名地址</figcaption></figure><h3 id="自定义域名解决的问题" tabindex="-1"><a class="header-anchor" href="#自定义域名解决的问题" aria-hidden="true">#</a> 自定义域名解决的问题</h3><ul><li>域名无法完全自定义:username.github.io</li><li>无法自定义多个站点:username.github.io/subfolder仓库子目录和subfolder仓库站点冲突</li></ul><figure><img src="https://kodo.justdoless.cn/blog.com/部署/自定义域名.png@70" alt="自定义域名" tabindex="0" loading="lazy"><figcaption>自定义域名</figcaption></figure><h3 id="更多问题" tabindex="-1"><a class="header-anchor" href="#更多问题" aria-hidden="true">#</a> 更多问题</h3><ul><li>资源/流量限制 <ul><li>GitHub免费托管的站点服务对站点资源和流量大小是有限制的</li><li>具体限制参考最新的文档说明</li></ul></li><li>站点主题样式选择 <ul><li>基于hexo/vuepress等开源项目搭建</li><li>或者完全自定义开发</li></ul></li><li>域名购买/SSL证书 <ul><li>域名服务商购买。<s>（推荐国外域名服务商，无需备案）</s></li><li>SSL免费认证或者付费认证。<s>（个人站点推荐免费的）</s></li></ul></li></ul><h2 id="评论功能" tabindex="-1"><a class="header-anchor" href="#评论功能" aria-hidden="true">#</a> 评论功能</h2>',11),h={href:"https://giscus.app",target:"_blank",rel:"noopener noreferrer"},b={href:"https://waline.js.org",target:"_blank",rel:"noopener noreferrer"},v=n("li",null,[s("自己搭建部署 "),n("ul",null,[n("li",null,"看需求可以基于开源的项目")])],-1),m=t(`<h2 id="源码保护" tabindex="-1"><a class="header-anchor" href="#源码保护" aria-hidden="true">#</a> 源码保护</h2><blockquote><p>源代码放到private仓库中，打包后部署到public仓库下</p></blockquote><h3 id="同一仓库下的自动化部署" tabindex="-1"><a class="header-anchor" href="#同一仓库下的自动化部署" aria-hidden="true">#</a> 同一仓库下的自动化部署</h3><blockquote><p>每当 push 到 main 分支时触发自动化部署，部署分支在gh-pages</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># .github/workflows/deploy.yml</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> Build and Deploy

<span class="token key atrule">permissions</span><span class="token punctuation">:</span>
  <span class="token key atrule">contents</span><span class="token punctuation">:</span> write

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token comment"># 每当 push 到 main 分支时触发部署</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">]</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build-and-deploy</span><span class="token punctuation">:</span>
    <span class="token key atrule">concurrency</span><span class="token punctuation">:</span> ci<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> github.ref <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> node switch
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&#39;18.x&#39;</span>
          <span class="token key atrule">registry-url</span><span class="token punctuation">:</span> <span class="token string">&#39;https://registry.npmjs.org&#39;</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install and Build
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          npm install
          npm run docs:build</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">folder</span><span class="token punctuation">:</span> dist
          <span class="token key atrule">clean-exclude</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            CNAME</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="不同仓库的自动化部署" tabindex="-1"><a class="header-anchor" href="#不同仓库的自动化部署" aria-hidden="true">#</a> 不同仓库的自动化部署</h3><blockquote><p>不想直接公开源代码</p><p>不同平台输出不同的内容(通过打包配置)</p></blockquote><h4 id="生成部署用的ssh-key" tabindex="-1"><a class="header-anchor" href="#生成部署用的ssh-key" aria-hidden="true">#</a> 生成部署用的SSH KEY</h4><blockquote><p>输入自定义名称，避免覆盖默认的文件，影响GitHub原有的SSH授权。</p><p>比如：<code>id_github_deploy_to_blog</code> &amp; <code>id_github_deploy_to_blog.pub</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> ed25519 <span class="token parameter variable">-C</span> <span class="token string">&quot;id_github_deploy_to_blog&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="配置新生成的ssh-key" tabindex="-1"><a class="header-anchor" href="#配置新生成的ssh-key" aria-hidden="true">#</a> 配置新生成的SSH KEY</h4><blockquote><p>每个private_key只能在单仓库中使用一次</p></blockquote><figure><img src="https://kodo.justdoless.cn/blog.com/部署/私钥配置在当前仓库中(settings-secrets-and-variablesactions-secrets).png@70" alt="私钥配置在当前仓库中(settings/secrets and variablesactions/secrets).png" tabindex="0" loading="lazy"><figcaption>私钥配置在当前仓库中(settings/secrets and variablesactions/secrets).png</figcaption></figure><figure><img src="https://kodo.justdoless.cn/blog.com/部署/公钥配置在目的仓库中(settings-Deploy-keys).png@70" alt="公钥配置在目的仓库中(settings/Deploy keys).png" tabindex="0" loading="lazy"><figcaption>公钥配置在目的仓库中(settings/Deploy keys).png</figcaption></figure><h4 id="对应的自动化部署脚本参考" tabindex="-1"><a class="header-anchor" href="#对应的自动化部署脚本参考" aria-hidden="true">#</a> 对应的自动化部署脚本参考</h4><blockquote><p>在当前仓库和目的仓库配置好密钥</p><p>对应的 <code>ssh-key: \${{ secrets.BLOG_PRIVATE_KEY }}</code> 要和仓库中定义的匹配</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># .github/workflows/deploy_to_blog.yml</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> Build and Deploy

<span class="token key atrule">permissions</span><span class="token punctuation">:</span>
  <span class="token key atrule">contents</span><span class="token punctuation">:</span> write

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token comment"># 每当 push 到 main 分支时触发部署</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">]</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build-and-deploy</span><span class="token punctuation">:</span>
    <span class="token key atrule">concurrency</span><span class="token punctuation">:</span> ci<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> github.ref <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> node switch
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&#39;18.x&#39;</span>
          <span class="token key atrule">registry-url</span><span class="token punctuation">:</span> <span class="token string">&#39;https://registry.npmjs.org&#39;</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install and Build
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          npm install
          npm run docs:build</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">clean</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 默认清除，可以不配置</span>
          <span class="token key atrule">branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages <span class="token comment"># 默认分支，可不配置</span>
          <span class="token key atrule">repository-name</span><span class="token punctuation">:</span> justdoless/blog <span class="token comment"># 提交的目的仓库</span>
          <span class="token key atrule">ssh-key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.BLOG_PRIVATE_KEY <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment"># 私钥配置在当前仓库中(settings/secrets and variables/actions/secrets),公钥配置在目的仓库中(settings/Deploy keys)</span>
          <span class="token key atrule">folder</span><span class="token punctuation">:</span> src/.vuepress/dist <span class="token comment"># 需要提交的目录文件</span>
          <span class="token key atrule">clean-exclude</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            CNAME</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,18),g={href:"https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/JamesIves/github-pages-deploy-action",target:"_blank",rel:"noopener noreferrer"},f={href:"https://levelup.gitconnected.com/github-action-to-automatically-push-to-another-repository-1e327862f067",target:"_blank",rel:"noopener noreferrer"},_={href:"https://cpina.github.io/push-to-another-repository-docs/setup-using-ssh-deploy-keys.html#setup-ssh-deploy-keys",target:"_blank",rel:"noopener noreferrer"};function x(q,w){const a=o("ExternalLinkIcon");return l(),p("div",null,[u,n("figure",null,[r,n("figcaption",null,[n("a",d,[s("新建个人仓库-username.github.io"),e(a)])])]),k,n("ul",null,[n("li",null,[s("开源的评论系统(推荐) "),n("ul",null,[n("li",null,[n("a",h,[s("giscus"),e(a)]),s("、"),n("a",b,[s("Waline"),e(a)]),s("等")])])]),v]),m,n("ul",null,[n("li",null,[n("a",g,[s("https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages"),e(a)])]),n("li",null,[n("a",y,[s("https://github.com/JamesIves/github-pages-deploy-action"),e(a)])]),n("li",null,[n("a",f,[s("https://levelup.gitconnected.com/github-action-to-automatically-push-to-another-repository-1e327862f067"),e(a)])]),n("li",null,[n("a",_,[s("https://cpina.github.io/push-to-another-repository-docs/setup-using-ssh-deploy-keys.html#setup-ssh-deploy-keys"),e(a)])])])])}const E=i(c,[["render",x],["__file","gh-pages.html.vue"]]);export{E as default};
