import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as h,c as p,b as a,w as n,d as e,e as o,f as r}from"./app-9d4cd641.js";const f={},u=e("h1",{id:"cookie",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cookie","aria-hidden":"true"},"#"),o(" cookie")],-1),b=e("blockquote",null,[e("p",null,"区分跨域和跨站的基本概念"),e("p",null,"跨域和跨站的风险、解决方案")],-1),_=e("p",null,"HTTP Cookie（也叫 Web Cookie 或浏览器 Cookie）是服务器发送到用户浏览器并保存在本地的一小块数据。浏览器会存储 cookie 并在下次向同一服务器再发起请求时携带并发送到服务器上。通常，它用于告知服务端两个请求是否来自同一浏览器——如保持用户的登录状态。Cookie 使基于无状态的 HTTP 协议记录稳定的状态信息成为了可能。",-1),k=e("p",null,"Cookie 主要用于以下三个方面：",-1),m=e("p",null,"如用户登录状态、购物车、游戏分数或其他需要记录的信息",-1),g=e("p",null,"如用户自定义设置、主题和其他设置",-1),C=e("p",null,"如跟踪分析用户行为等",-1),x=e("p",null,"Cookie 曾一度用于客户端数据的存储，因当时并没有其他合适的存储办法而作为唯一的存储手段，但现在推荐使用现代存储 API。由于服务器指定 Cookie 后，浏览器的每次请求都会携带 Cookie 数据，会带来额外的性能开销（尤其是在移动环境下）。新的浏览器 API 已经允许开发者直接将数据存储到本地，如使用 Web storage API（localStorage 和 sessionStorage）或 IndexedDB 。",-1),S=e("h2",{id:"_1-http-无状态",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-http-无状态","aria-hidden":"true"},"#"),o(" 1. HTTP 无状态")],-1),v=e("p",null,"一般我们都会说 “HTTP 是一个无状态的协议”，不过要注意这里的 HTTP 其实是指 HTTP 1.x，而所谓无状态协议，简单的理解就是即使同一个客户端连续两次发送请求给服务器，服务器也识别不出这是同一个客户端发送的请求，这导致的问题就比如你加了一个商品到购物车中，但因为识别不出是同一个客户端，你刷新下页面就没有了……",-1),w=e("p",null,"为了解决 HTTP 无状态导致的问题，后来出现了 Cookie。不过这样说可能会让你产生一些误解，首先无状态并不是不好，有优点，但也会导致一些问题。而 Cookie 的存在也不是为了解决通讯协议无状态的问题，只是为了解决客户端与服务端会话状态的问题，这个状态是指后端服务的状态而非通讯协议的状态。",-1),T=e("h2",{id:"_2-cookie-的查看",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-cookie-的查看","aria-hidden":"true"},"#"),o(" 2. Cookie 的查看")],-1),A=e("p",null,"我们可以在浏览器的开发者工具中查看到当前页面的 Cookie：",-1),P={href:"https://camo.githubusercontent.com/3e0e8fb6add717273a015dbf4ed9be163200cf8bff28bfd2888477658f08616c/68747470733a2f2f67772e616c6963646e2e636f6d2f7466732f544231776d584779514c30674b306a535a464158586341397058612d323438322d3739342e6a7067",target:"_blank",rel:"noopener noreferrer"},y=e("img",{src:"https://camo.githubusercontent.com/3e0e8fb6add717273a015dbf4ed9be163200cf8bff28bfd2888477658f08616c/68747470733a2f2f67772e616c6963646e2e636f6d2f7466732f544231776d584779514c30674b306a535a464158586341397058612d323438322d3739342e6a7067",alt:"",tabindex:"0",loading:"lazy"},null,-1),E=e("figcaption",null,null,-1),H=e("p",null,[o("尽管我们在浏览器里查看到了 Cookie，这并不意味着 Cookie 文件只是存放在浏览器里的。实际上，Cookies 相关的内容还可以存在本地文件里，就比如说 Mac 下的 Chrome，存放目录就是 "),e("code",null,"~/Library/Application Support/Google/Chrome/Default"),o("，里面会有一个名为 Cookies 的数据库文件，你可以使用 sqlite 软件打开它：")],-1),L={href:"https://camo.githubusercontent.com/1a6fbd88fd97431bf389395c8fc41b1ee54ca419ce7d7cb6c78293416c425c9e/68747470733a2f2f67772e616c6963646e2e636f6d2f7466732f5442314442644a79485931674b306a535a544558585844515658612d323339382d313538382e706e67",target:"_blank",rel:"noopener noreferrer"},D=e("img",{src:"https://camo.githubusercontent.com/1a6fbd88fd97431bf389395c8fc41b1ee54ca419ce7d7cb6c78293416c425c9e/68747470733a2f2f67772e616c6963646e2e636f6d2f7466732f5442314442644a79485931674b306a535a544558585844515658612d323339382d313538382e706e67",alt:"",tabindex:"0",loading:"lazy"},null,-1),z=e("figcaption",null,null,-1),M=r('<p>存放在本地的好处就在于即使你关闭了浏览器，Cookie 依然可以生效。</p><h2 id="_3-cookie-的设置" tabindex="-1"><a class="header-anchor" href="#_3-cookie-的设置" aria-hidden="true">#</a> 3. Cookie 的设置</h2><p>那 Cookie 是怎么设置的呢？简单来说就是</p><ol><li>客户端发送 HTTP 请求到服务器</li><li>当服务器收到 HTTP 请求时，在响应头里面添加一个 Set-Cookie 字段</li><li>浏览器收到响应后保存下 Cookie</li><li>之后对该服务器每一次请求中都通过 Cookie 字段将 Cookie 信息发送给服务器。</li></ol><p>我们以 <code>https://main.m.taobao.com/</code> 为例来看下这个过程：</p><p>我们在请求返回的 Response Headers 可以看到 Set-Cookie 字段：</p>',6),N={href:"https://camo.githubusercontent.com/87dc519cd5fd84ed479787d84330f81fcd3b097c210c0b6bacb5d86a82160092/68747470733a2f2f67772e616c6963646e2e636f6d2f7466732f5442317734464679555431674b306a535a46725858634e435858612d323739342d313338362e6a7067",target:"_blank",rel:"noopener noreferrer"},R=e("img",{src:"https://camo.githubusercontent.com/87dc519cd5fd84ed479787d84330f81fcd3b097c210c0b6bacb5d86a82160092/68747470733a2f2f67772e616c6963646e2e636f6d2f7466732f5442317734464679555431674b306a535a46725858634e435858612d323739342d313338362e6a7067",alt:"",tabindex:"0",loading:"lazy"},null,-1),I=e("figcaption",null,null,-1),U=e("p",null,"然后我们查看下 Cookie：",-1),W={href:"https://camo.githubusercontent.com/e62dc77a4a913db39f209093826816bab4ec1ebcfc690656db0b7149b42b7815/68747470733a2f2f67772e616c6963646e2e636f6d2f7466732f5442315056464a794b4c32674b306a535a466d58586337695858612d313932342d3633322e6a7067",target:"_blank",rel:"noopener noreferrer"},q=e("img",{src:"https://camo.githubusercontent.com/e62dc77a4a913db39f209093826816bab4ec1ebcfc690656db0b7149b42b7815/68747470733a2f2f67772e616c6963646e2e636f6d2f7466732f5442315056464a794b4c32674b306a535a466d58586337695858612d313932342d3633322e6a7067",alt:"",tabindex:"0",loading:"lazy"},null,-1),B=e("figcaption",null,null,-1),V=e("p",null,"我们刷新一遍页面，再看下这个请求，可以在 Request Headers 看到 cookie 字段：",-1),F={href:"https://camo.githubusercontent.com/a19a30875ab8639fe2e4ed12f56a34b7133e9b17a6712c117e20578e4c64c52f/68747470733a2f2f67772e616c6963646e2e636f6d2f7466732f5442315177464a79515432674b306a535a50635858634b6b7058612d323739302d313139322e6a7067",target:"_blank",rel:"noopener noreferrer"},O=e("img",{src:"https://camo.githubusercontent.com/a19a30875ab8639fe2e4ed12f56a34b7133e9b17a6712c117e20578e4c64c52f/68747470733a2f2f67772e616c6963646e2e636f6d2f7466732f5442315177464a79515432674b306a535a50635858634b6b7058612d323739302d313139322e6a7067",alt:"",tabindex:"0",loading:"lazy"},null,-1),j=e("figcaption",null,null,-1),G=e("h2",{id:"_4-cookies-的属性",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-cookies-的属性","aria-hidden":"true"},"#"),o(" 4. Cookies 的属性")],-1),X=e("p",null,"在下面这张图里我们可以看到 Cookies 相关的一些属性：",-1),J={href:"https://camo.githubusercontent.com/8abbb6e15a6c836042cbfd3230a44408c510a0596e85304f9952c869507f06b3/68747470733a2f2f67772e616c6963646e2e636f6d2f7466732f54423133364e45794b4c32674b306a535a506858586168765858612d313932382d3631362e6a7067",target:"_blank",rel:"noopener noreferrer"},K=e("img",{src:"https://camo.githubusercontent.com/8abbb6e15a6c836042cbfd3230a44408c510a0596e85304f9952c869507f06b3/68747470733a2f2f67772e616c6963646e2e636f6d2f7466732f54423133364e45794b4c32674b306a535a506858586168765858612d313932382d3631362e6a7067",alt:"",tabindex:"0",loading:"lazy"},null,-1),Q=e("figcaption",null,null,-1),Y=r(`<p>这里主要说一些大家可能没有注意的点：</p><h3 id="_4-1-name-value" tabindex="-1"><a class="header-anchor" href="#_4-1-name-value" aria-hidden="true">#</a> 4.1. Name/Value</h3><p>操作 Cookie 的时候注意对 Value 进行编码处理。</p><h3 id="_4-2-expires" tabindex="-1"><a class="header-anchor" href="#_4-2-expires" aria-hidden="true">#</a> 4.2. Expires</h3><p>Expires 用于设置 Cookie 的过期时间。比如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Set-Cookie: <span class="token assign-left variable">id</span><span class="token operator">=</span>a3fWa<span class="token punctuation">;</span> <span class="token assign-left variable">Expires</span><span class="token operator">=</span>Wed, <span class="token number">21</span> Oct <span class="token number">2015</span> 07:28:00 GMT<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当 Expires 属性缺省时，表示是会话性 Cookie，像上图 Expires 的值为 Session，表示的就是会话性 Cookie。当为会话性 Cookie 的时候，值保存在客户端内存中，并在用户关闭浏览器时失效。需要注意的是，有些浏览器提供了会话恢复功能，这种情况下即使关闭了浏览器，会话期 Cookie 也会被保留下来，就好像浏览器从来没有关闭一样。</p><p>与会话性 Cookie 相对的是持久性 Cookie，持久性 Cookies 会保存在用户的硬盘中，直至过期或者清除 Cookie。这里值得注意的是，设定的日期和时间只与客户端相关，而不是服务端。</p><h3 id="_4-3-max-age" tabindex="-1"><a class="header-anchor" href="#_4-3-max-age" aria-hidden="true">#</a> 4.3. Max-Age</h3><p>Max-Age 用于设置在 Cookie 失效之前需要经过的秒数。比如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Set-Cookie: <span class="token assign-left variable">id</span><span class="token operator">=</span>a3fWa<span class="token punctuation">;</span> Max-Age<span class="token operator">=</span><span class="token number">604800</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Max-Age 可以为正数、负数、甚至是 0。</p><p>如果 max-Age 属性为正数时，浏览器会将其持久化，即写到对应的 Cookie 文件中。</p><p>当 max-Age 属性为负数，则表示该 Cookie 只是一个会话性 Cookie。</p><p>当 max-Age 为 0 时，则会立即删除这个 Cookie。</p><p>假如 Expires 和 Max-Age 都存在，Max-Age 优先级更高。</p><h3 id="_4-4-domain" tabindex="-1"><a class="header-anchor" href="#_4-4-domain" aria-hidden="true">#</a> 4.4. Domain</h3><p>Domain 指定了 Cookie 可以送达的主机名。假如没有指定，那么默认值为当前文档访问地址中的主机部分（但是不包含子域名）。</p>`,18),Z={href:"http://a.taobao.com",target:"_blank",rel:"noopener noreferrer"},$={href:"http://b.taobao.com",target:"_blank",rel:"noopener noreferrer"},ee=r(`<p>在这里注意的是，不能跨域设置 Cookie，比如阿里域名下的页面把 Domain 设置成百度是无效的：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Set<span class="token operator">-</span>Cookie<span class="token operator">:</span> qwerty<span class="token operator">=</span>219ffwef9w0f<span class="token punctuation">;</span> Domain<span class="token operator">=</span>baidu<span class="token punctuation">.</span>com<span class="token punctuation">;</span> Path<span class="token operator">=</span><span class="token operator">/</span><span class="token punctuation">;</span> Expires<span class="token operator">=</span>Wed<span class="token punctuation">,</span> <span class="token number">30</span> Aug <span class="token number">2020</span> <span class="token number">00</span><span class="token operator">:</span><span class="token number">00</span><span class="token operator">:</span><span class="token number">00</span> <span class="token constant">GMT</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-5-path" tabindex="-1"><a class="header-anchor" href="#_4-5-path" aria-hidden="true">#</a> 4.5. Path</h3><p>Path 指定了一个 URL 路径，这个路径必须出现在要请求的资源的路径中才可以发送 Cookie 首部。比如设置 <code>Path=/docs</code>，<code>/docs/Web/</code> 下的资源会带 Cookie 首部，<code>/test</code> 则不会携带 Cookie 首部。</p><p>Domain 和 Path 标识共同定义了 Cookie 的作用域：即 Cookie 应该发送给哪些 URL。</p><h3 id="_4-6-secure属性" tabindex="-1"><a class="header-anchor" href="#_4-6-secure属性" aria-hidden="true">#</a> 4.6. Secure属性</h3><p>标记为 Secure 的 Cookie 只应通过被HTTPS协议加密过的请求发送给服务端。使用 HTTPS 安全协议，可以保护 Cookie 在浏览器和 Web 服务器间的传输过程中不被窃取和篡改。</p><h3 id="_4-7-httponly" tabindex="-1"><a class="header-anchor" href="#_4-7-httponly" aria-hidden="true">#</a> 4.7. HTTPOnly</h3><p>设置 HTTPOnly 属性可以防止客户端脚本通过 document.cookie 等方式访问 Cookie，有助于避免 XSS 攻击。</p><h3 id="_4-8-samesite" tabindex="-1"><a class="header-anchor" href="#_4-8-samesite" aria-hidden="true">#</a> 4.8. SameSite</h3><p>SameSite 是非常值得一提的内容，因为 2020/2 月份发布的 Chrome80 版本中默认屏蔽了第三方的 Cookie，这会导致阿里系的很多应用都产生问题，为此还专门成立了问题小组，推动各 BU 进行改造。</p><h3 id="_4-9-作用" tabindex="-1"><a class="header-anchor" href="#_4-9-作用" aria-hidden="true">#</a> 4.9. 作用</h3><p>我们先来看看这个属性的作用：</p><p>SameSite 属性可以让 Cookie 在跨站请求时不会被发送，从而可以阻止跨站请求伪造攻击（CSRF）。</p><h3 id="_4-10-属性值" tabindex="-1"><a class="header-anchor" href="#_4-10-属性值" aria-hidden="true">#</a> 4.10. 属性值</h3><p>SameSite 可以有下面三种值：</p><ol><li><strong>Strict</strong> 仅允许一方请求携带 Cookie，即浏览器将只发送相同站点请求的 Cookie，即当前网页 URL 与请求目标 URL 完全一致。</li><li><strong>Lax</strong> 允许部分第三方请求携带 Cookie</li><li><strong>None</strong> 无论是否跨站都会发送 Cookie</li></ol><p>之前默认是 None 的，Chrome80 后默认是 Lax。</p><h2 id="_5-跨域和跨站" tabindex="-1"><a class="header-anchor" href="#_5-跨域和跨站" aria-hidden="true">#</a> 5. 跨域和跨站</h2><p>首先要理解的一点就是跨站和跨域是不同的。同站(same-site)/跨站(cross-site)」和第一方(first-party)/第三方(third-party)是等价的。但是与浏览器同源策略（SOP）中的「同源(same-origin)/跨域(cross-origin)」是完全不同的概念。</p>`,20),oe={href:"https://www.taobao.com/pages/...%EF%BC%8C%E5%AE%83%E7%9A%84%E5%8D%8F%E8%AE%AE%E6%98%AF",target:"_blank",rel:"noopener noreferrer"},ae={href:"http://www.taobao.xn--com%2C-ye1g628gmm4a/",target:"_blank",rel:"noopener noreferrer"},te={href:"http://taobao.com",target:"_blank",rel:"noopener noreferrer"},ne={href:"http://www.taobao.com",target:"_blank",rel:"noopener noreferrer"},se={href:"http://www.baidu.com/",target:"_blank",rel:"noopener noreferrer"},ie={href:"http://www.a.taobao.com",target:"_blank",rel:"noopener noreferrer"},re={href:"http://www.b.taobao.com/",target:"_blank",rel:"noopener noreferrer"},ce={href:"http://a.github.io",target:"_blank",rel:"noopener noreferrer"},le={href:"http://b.github.io",target:"_blank",rel:"noopener noreferrer"},de=e("h2",{id:"_6-samesite-改变",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-samesite-改变","aria-hidden":"true"},"#"),o(" 6. SameSite 改变")],-1),he=e("p",null,"接下来看下从 None 改成 Lax 到底影响了哪些地方的 Cookies 的发送？直接来一个图表：",-1),pe={href:"https://camo.githubusercontent.com/feff36574753ce4c04ddfe9769e623ad671a539ac8792a40f8aff34909ee8114/68747470733a2f2f67772e616c6963646e2e636f6d2f7466732f54423172473448794b4832674b306a535a4645585863714d7058612d313430302d3532382e706e67",target:"_blank",rel:"noopener noreferrer"},fe=e("img",{src:"https://camo.githubusercontent.com/feff36574753ce4c04ddfe9769e623ad671a539ac8792a40f8aff34909ee8114/68747470733a2f2f67772e616c6963646e2e636f6d2f7466732f54423172473448794b4832674b306a535a4645585863714d7058612d313430302d3532382e706e67",alt:"",tabindex:"0",loading:"lazy"},null,-1),ue=e("figcaption",null,null,-1),be=e("p",null,"从上图可以看出，对大部分 web 应用而言，Post 表单，iframe，AJAX，Image 这四种情况从以前的跨站会发送三方 Cookie，变成了不发送。",-1),_e=e("p",null,"Post表单：应该的，学 CSRF 总会举表单的例子。",-1),ke=e("p",null,"iframe：iframe 嵌入的 web 应用有很多是跨站的，都会受到影响。",-1),me=e("p",null,"AJAX：可能会影响部分前端取值的行为和结果。",-1),ge=e("p",null,"Image：图片一般放 CDN，大部分情况不需要 Cookie，故影响有限。但如果引用了需要鉴权的图片，可能会受到影响。",-1),Ce=e("p",null,"除了这些还有 script 的方式，这种方式也不会发送 Cookie，像淘宝的大部分请求都是 jsonp，如果涉及到跨站也有可能会被影响。",-1),xe=e("p",null,"我们再看看会出现什么的问题？举几个例子：",-1),Se=e("ol",null,[e("li",null,[e("p",null,"天猫和飞猪的页面靠请求淘宝域名下的接口获取登录信息，由于 Cookie 丢失，用户无法登录，页面还会误判断成是由于用户开启了浏览器的“禁止第三方 Cookie”功能导致而给与错误的提示")]),e("li",null,[e("p",null,"淘宝部分页面内嵌支付宝确认付款和确认收货页面、天猫内嵌淘宝的登录页面等，由于 Cookie 失效，付款、登录等操作都会失败")]),e("li",null,[e("p",null,"阿里妈妈在各大网站比如今日头条，网易，微博等投放的广告，也是用 iframe 嵌入的，没有了 Cookie，就不能准确的进行推荐")]),e("li",null,[e("p",null,"一些埋点系统会把用户 id 信息埋到 Cookie 中，用于日志上报，这种系统一般走的都是单独的域名，与业务域名分开，所以也会受到影响。")]),e("li",null,[e("p",null,"一些用于防止恶意请求的系统，对判断为恶意请求的访问会弹出验证码让用户进行安全验证，通过安全验证后会在请求所在域种一个Cookie，请求中带上这个Cookie之后，短时间内不再弹安全验证码。在Chrome80以上如果因为Samesite的原因请求没办法带上这个Cookie，则会出现一直弹出验证码进行安全验证。")]),e("li",null,[e("p",null,"天猫商家后台请求了跨域的接口，因为没有 Cookie，接口不会返回数据")]),e("li",null,[e("p",null,"……")])],-1),ve=e("p",null,"如果不解决，影响的系统其实还是很多的……",-1),we=e("p",null,"解决方案就是设置 SameSite 为 none。",-1),Te={href:"https://www.adobe.com/sea/",target:"_blank",rel:"noopener noreferrer"},Ae={href:"https://camo.githubusercontent.com/19e99f017d864253810865ce7dd6550f1ace4e7e38c40b0f592c2eb57681772a/68747470733a2f2f67772e616c6963646e2e636f6d2f7466732f5442314976424b79473631674b306a535a466c585858444b4658612d313933342d313032322e6a7067",target:"_blank",rel:"noopener noreferrer"},Pe=e("img",{src:"https://camo.githubusercontent.com/19e99f017d864253810865ce7dd6550f1ace4e7e38c40b0f592c2eb57681772a/68747470733a2f2f67772e616c6963646e2e636f6d2f7466732f5442314976424b79473631674b306a535a466c585858444b4658612d313933342d313032322e6a7067",alt:"",tabindex:"0",loading:"lazy"},null,-1),ye=e("figcaption",null,null,-1),Ee=e("p",null,"不过也会有两点要注意的地方：",-1),He=e("ol",null,[e("li",null,"HTTP 接口不支持 SameSite=none")],-1),Le=e("p",null,"如果你想加 SameSite=none 属性，那么该 Cookie 就必须同时加上 Secure 属性，表示只有在 HTTPS 协议下该 Cookie 才会被发送。",-1),De=e("ol",{start:"2"},[e("li",null,"需要 UA 检测，部分浏览器不能加 SameSite=none")],-1),ze=e("p",null,"IOS 12 的 Safari 以及老版本的一些 Chrome 会把 SameSite=none 识别成 SameSite=Strict，所以服务端必须在下发 Set-Cookie 响应头时进行 User-Agent 检测，对这些浏览器不下发 SameSite=none 属性",-1),Me=e("h2",{id:"_7-cookie-的缺点",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-cookie-的缺点","aria-hidden":"true"},"#"),o(" 7. Cookie 的缺点")],-1),Ne=e("p",null,"如果被问到话，可以从大小、安全、增加请求大小等方面回答。",-1),Re=e("h2",{id:"_8-参考",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_8-参考","aria-hidden":"true"},"#"),o(" 8. 参考")],-1),Ie={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie",target:"_blank",rel:"noopener noreferrer"},Ue={href:"https://github.com/mqyqingfeng/Blog/issues/157",target:"_blank",rel:"noopener noreferrer"},We={href:"https://publicsuffix.org/list/public_suffix_list.dat",target:"_blank",rel:"noopener noreferrer"};function qe(Be,Ve){const c=l("Tabs"),t=l("ExternalLinkIcon");return h(),p("div",null,[u,b,_,k,a(c,{id:"17",data:[{id:"会话状态管理"},{id:"个性化设置"},{id:"浏览器行为跟踪"}]},{title0:n(({value:s,isActive:i})=>[o("会话状态管理")]),title1:n(({value:s,isActive:i})=>[o("个性化设置")]),title2:n(({value:s,isActive:i})=>[o("浏览器行为跟踪")]),tab0:n(({value:s,isActive:i})=>[m]),tab1:n(({value:s,isActive:i})=>[g]),tab2:n(({value:s,isActive:i})=>[C]),_:1}),x,S,v,w,T,A,e("figure",null,[e("a",P,[y,a(t)]),E]),H,e("figure",null,[e("a",L,[D,a(t)]),z]),M,e("figure",null,[e("a",N,[R,a(t)]),I]),U,e("figure",null,[e("a",W,[q,a(t)]),B]),V,e("figure",null,[e("a",F,[O,a(t)]),j]),G,X,e("figure",null,[e("a",J,[K,a(t)]),Q]),Y,e("p",null,[o("像淘宝首页设置的 Domain 就是 .taobao.com，这样无论是 "),e("a",Z,[o("a.taobao.com"),a(t)]),o(" 还是 "),e("a",$,[o("b.taobao.com"),a(t)]),o(" 都可以使用 Cookie。")]),ee,e("p",null,[o("同源策略的同源是指两个 URL 的协议/主机名/端口一致。例如，"),e("a",oe,[o("https://www.taobao.com/pages/...，它的协议是"),a(t)]),o(" https，主机名是 "),e("a",ae,[o("www.taobao.com，端口是"),a(t)]),o(" 443。")]),e("p",null,[o("同源策略作为浏览器的安全基石，其「同源」判断是比较严格的，相对而言，Cookie中的「同站」判断就比较宽松：只要两个 URL 的 eTLD+1 相同即可，不需要考虑协议和端口。其中，eTLD 表示有效顶级域名，注册于 Mozilla 维护的公共后缀列表（Public Suffix List）中，例如，.com、.co.uk、.github.io 等。eTLD+1 则表示，有效顶级域名+二级域名，例如 "),e("a",te,[o("taobao.com"),a(t)]),o(" 等。")]),e("p",null,[o("举几个例子，"),e("a",ne,[o("www.taobao.com"),a(t)]),o(" 和 "),e("a",se,[o("www.baidu.com"),a(t)]),o(" 是跨站，"),e("a",ie,[o("www.a.taobao.com"),a(t)]),o(" 和 "),e("a",re,[o("www.b.taobao.com"),a(t)]),o(" 是同站，"),e("a",ce,[o("a.github.io"),a(t)]),o(" 和 "),e("a",le,[o("b.github.io"),a(t)]),o(" 是跨站(注意是跨站)。")]),de,he,e("figure",null,[e("a",pe,[fe,a(t)]),ue]),be,_e,ke,me,ge,Ce,a(c,{id:"283",data:[{id:"问题"},{id:"解决"}]},{title0:n(({value:s,isActive:i})=>[o("问题")]),title1:n(({value:s,isActive:i})=>[o("解决")]),tab0:n(({value:s,isActive:i})=>[xe,Se,ve]),tab1:n(({value:s,isActive:i})=>[we,e("p",null,[o("以 Adobe 网站为例："),e("a",Te,[o("https://www.adobe.com/sea/"),a(t)]),o("，查看请求可以看到：")]),e("figure",null,[e("a",Ae,[Pe,a(t)]),ye]),Ee,He,Le,De,ze]),_:1}),Me,Ne,Re,e("ul",null,[e("li",null,[e("a",Ie,[o("MDN"),a(t)])]),e("li",null,[e("a",Ue,[o("https://github.com/mqyqingfeng/Blog/issues/157"),a(t)])]),e("li",null,[e("a",We,[o("https://publicsuffix.org/list/public_suffix_list.dat"),a(t)])])])])}const je=d(f,[["render",qe],["__file","cookie.html.vue"]]);export{je as default};
