import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as d,c as t,b as e,d as n,e as s,f as i}from"./app-W0AsD-Vp.js";const c={},u=i(`<h1 id="linux安装webrtc的stun-turn服务器" tabindex="-1"><a class="header-anchor" href="#linux安装webrtc的stun-turn服务器" aria-hidden="true">#</a> linux安装webrtc的stun/turn服务器</h1><ul><li>阿里云环境</li><li>安装、验证 coturn 服务</li></ul><h2 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装" aria-hidden="true">#</a> 1. 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 相关依赖会自动安装
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> coturn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-依赖库" tabindex="-1"><a class="header-anchor" href="#_1-1-依赖库" aria-hidden="true">#</a> 1.1. 依赖库</h3><blockquote><p>如果没有，可以自行安装</p></blockquote><p>1 安装gcc环境，通过 which gcc 检测是否安装了gcc环境</p><p>2 安装openssl，<code>yum -y install openssl-devel</code></p><p>3 安装libevent</p>`,9),o={href:"https://libevent.org",target:"_blank",rel:"noopener noreferrer"},v=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> libevent-2.1.12-stable.tar.gz
  
  <span class="token builtin class-name">cd</span> libevent-2.1.12-stable
  
  ./configure
  
  <span class="token function">make</span>
  
  <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-配置" tabindex="-1"><a class="header-anchor" href="#_2-配置" aria-hidden="true">#</a> 2. 配置</h2><p>1 生成签名文件到 /etc 目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>openssl req -x509 -newkey rsa:2048 -keyout /etc/turn_server_pkey.pem -out /etc/turn_server_cert.pem -days 99999 -nodes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2 生成用户</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>turnadmin -a -u root -p password -r stun.daidaibenben.top，用户名称：wjc，密码：123456，realm：wjc.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3 修改配置文件</p><blockquote><p>按照下面参数修改配置文件</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  cd /usr/local/etc
  
  cp turnserver.conf.default turnserver.conf
  
 #与前ifconfig查到的网卡名称一致
 relay-device=eth0
 #内网IP
 listening-ip=0.0.0.0
 #公网IP
 external-ip=0.0.0.0
 #用户名密码，创建IceServer时用
 user=wjc:123456
 #一般与turnadmin创建用户时指定的realm一致
 realm=wjc.com
 #端口号
 listening-port=3478
 #不开启会报CONFIG ERROR: Empty cli-password, and so telnet cli interface is disabled! Please set a non empty cli-password!错误
 cli-password=qwerty

 cert=/etc/turn_server_cert.pem
 pkey=/etc/turn_server_pkey.pem
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-服务器配置" tabindex="-1"><a class="header-anchor" href="#_2-1-服务器配置" aria-hidden="true">#</a> 2.1. 服务器配置</h3><blockquote><p>特别是防火墙的设置</p></blockquote><p>1 服务器安全组打开 3478/udp，3478/tcp，49152-65535/udp，49152-65535/tcp</p><p>2 防火墙打开 3478/udp，3478/tcp，49152-65535/udp，49152-65535/tcp</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  firewall-cmd --zone=public --add-port=3478/udp --permanent
  firewall-cmd --zone=public --add-port=3478/tcp --permanent
  firewall-cmd --zone=public --add-port=49152-65535/udp --permanent
  firewall-cmd --zone=public --add-port=49152-65535/tcp --permanent
  
  firewall-cmd --reload
  
  # 查看端口是否开放
  
    firewall-cmd --zone=public --query-port=3478/tcp  
    firewall-cmd --zone=public --query-port=3478/udp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-测试turn服务器" tabindex="-1"><a class="header-anchor" href="#_3-测试turn服务器" aria-hidden="true">#</a> 3. 测试turn服务器</h2>`,15),p={href:"https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice",target:"_blank",rel:"noopener noreferrer"},m=i(`<p>出现 relay 877558997 udp 114.115.244.15（服务器IP） 63262 表示成功</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 开启服务. 也可以直接使用 systemctl 启动

  turnserver -a -f -r wjc.com
  
  turnserver -a -o -f -r wjc.com  使用 -o 参数后台启动
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function b(h,_){const a=r("ExternalLinkIcon");return d(),t("div",null,[u,e("p",null,[n("通过 "),e("a",o,[n("https://libevent.org"),s(a)]),n(" 下载最新版的 libevent")]),v,e("blockquote",null,[e("p",null,[e("a",p,[n("https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice"),s(a)])])]),m])}const x=l(c,[["render",b],["__file","coturn.html.vue"]]);export{x as default};
