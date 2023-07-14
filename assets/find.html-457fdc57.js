import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as d,c as a,d as e,e as l,b as r,f as c}from"./app-5f880972.js";const v={},u=c(`<h1 id="linux下-which、whereis、locate、find-命令的区别" tabindex="-1"><a class="header-anchor" href="#linux下-which、whereis、locate、find-命令的区别" aria-hidden="true">#</a> Linux下 which、whereis、locate、find 命令的区别</h1><p>当我们用whereis和locate无法查找到我们需要的文件时，可以使用find，但是find是在硬盘上遍历查 找，因此非常消耗硬盘的资源，而且效率也非常低，因此建议大家优先使用whereis和locate。</p><blockquote><p>which 查看可执行文件的位置和别名(alias)</p><p>whereis 查看文件的位置，可以找到可执行命令和man page</p><p>locate 配合数据库查看文件位置，数据库大至每天更新一次。</p><p>find 实际搜寻硬盘查询文件名称(可以通配符)</p></blockquote><h2 id="_1-which" tabindex="-1"><a class="header-anchor" href="#_1-which" aria-hidden="true">#</a> 1. which</h2><p>which是通过 PATH环境变量到该路径内查找可执行文件，所以基本的功能是寻找可执行文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>语法：
  
  [root@redhat ~]# which 可执行文件名称 
  
  例如： 
  
  [root@redhat ~]# which passwd 
  
  /usr/bin/passwd 
  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-whereis" tabindex="-1"><a class="header-anchor" href="#_2-whereis" aria-hidden="true">#</a> 2. whereis</h2><p>只将二进制文件 查找出来<br> 和find相比，whereis查找的速度非常快，这是因为linux系统会将 系统内的所有文件都记录在一个数据库文件中，当使用whereis和下面即将介绍的locate时，会从数据库中查找数据，而不是像find命令那样，通 过遍历硬盘来查找，效率自然会很高。<br> 但是该数据库文件并不是实时更新，默认情况下时一星期更新一次，因此，我们在用whereis和locate 查找文件时，有时会找到已经被删除的数据，或者刚刚建立文件，却无法查找到，原因就是因为数据库文件没有被更新。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>语法： 

[root@redhat ~]# whereis [-bmsu] 文件或者目录名称 

参数说 明： 

-b ： 只找二进制文件 

-m： 只找在说明文件manual路径下的文件 

-s ： 只找source源文件 

-u ： 没有说明文档的文件 

例如： 

[root@redhat ~]# whereis passwd 

passwd: /usr/bin/passwd /etc/passwd /usr/share/man/man1/passwd.1.gz /usr/share/man/man5/passwd.5.gz 

将和passwd文件相关的文件都查找出来 

[root@redhat ~]# whereis -b passwd 

passwd: /usr/bin/passwd /etc/passwd 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-locate" tabindex="-1"><a class="header-anchor" href="#_3-locate" aria-hidden="true">#</a> 3. locate</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>语法： 
[root@redhat ~]# locate 文件或者目录名称 
例 如： 
[root@redhat ~]# locate passwd 
/home/weblogic/bea/user_projects/domains/zhanggongzhe112/myserver/stage/_appsdir_DB_war/DB.war/jsp/as/user/passwd.jsp 
/home/weblogic/bea/user_projects/domains/zhanggongzhe112/myserver/stage/_appsdir_admin_war/admin.war/jsp/platform/passwd.jsp 
/lib/security/pam_unix_passwd.so 
/lib/security/pam_passwdqc.so 
/usr/include/rpcsvc/yppasswd.x 
/usr/include/rpcsvc/yppasswd.h 
/usr/lib/perl5/5.8.5/i386-linux-thread-multi/rpcsvc/yppasswd.ph 
/usr/lib/kde3/kded_kpasswdserver.la 
/usr/lib/kde3/kded_kpasswdserver.so 
/usr/lib/ruby/1.8/webrick/httpauth/htpasswd.rb 
/usr/bin/vncpasswd 
/usr/bin/userpasswd 
/usr/bin/yppasswd 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-find" tabindex="-1"><a class="header-anchor" href="#_4-find" aria-hidden="true">#</a> 4. find</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>语法： 
[root@redhat ~]# find 路径 参数 
参 数说明： 
时间查找参数： 
-atime n :将n*24小时内存取过的的文件列出来 
-ctime n :将n*24小时内改变、新增的文件或者目录列出来 
-mtime n :将n*24小时内修改过的文件或者目录列出来 
-newer file ：把比file还要新的文件列出来 
名称查找参数： 
-gid n       ：寻找群组ID为n的文件 
-group name  ：寻找群组名称为name的文件 
-uid n       ：寻找拥有者ID为n的文件 
-user name   ：寻找用户者名称为name的文件 
-name file   ：寻找文件名为file的文件（可以使用通配符） 
例 如： 
[root@redhat ~]# find / -name zgz 
/home/zgz 
/home/zgz/zgz 
/home/weblogic/bea/user_projects/domains/zgz 
/home/oracle/product/10g/cfgtoollogs/dbca/zgz 
/home/oracle/product/10g/cfgtoollogs/emca/zgz 
/home/oracle/oradata/zgz 

[root@redhat ~]# find / -name &#39;*zgz*&#39; 
/home/zgz 
/home/zgz/zgz1 
/home/zgz/zgzdirzgz 
/home/zgz/zgz 
/home/zgz/zgzdir 
/home/weblogic/bea/user_projects/domains/zgz 
/home/weblogic/bea/user_projects/domains/zgz/zgz.log00006 
/home/weblogic/bea/user_projects/domains/zgz/zgz.log00002 
/home/weblogic/bea/user_projects/domains/zgz/zgz.log00004 
/home/weblogic/bea/user_projects/domains/zgz/zgz.log 
/home/weblogic/bea/user_projects/domains/zgz/zgz.log00008 
/home/weblogic/bea/user_projects/domains/zgz/zgz.log00005 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-参考" tabindex="-1"><a class="header-anchor" href="#_5-参考" aria-hidden="true">#</a> 5. 参考</h2>`,14),m={href:"https://github.com/HYSScc/Mr.L/blob/master/%E7%AC%AC1%E7%AB%A0%EF%BC%9A%E5%AE%83%E5%B1%B1%E4%B9%8B%E7%9F%B3%EF%BC%BB%E8%BD%AC%E8%BD%BD%EF%BC%BD/Linux%E5%91%BD%E4%BB%A4%E7%94%A8%E6%B3%95%E9%9B%86%E9%94%A6/Linux%E4%B8%8Bwhich%E3%80%81whereis%E3%80%81locate%E3%80%81find%20%E5%91%BD%E4%BB%A4%E7%9A%84%E5%8C%BA%E5%88%AB.md",target:"_blank",rel:"noopener noreferrer"};function o(t,b){const i=s("ExternalLinkIcon");return d(),a("div",null,[u,e("ul",null,[e("li",null,[e("a",m,[l("https://github.com/HYSScc/Mr.L/blob/master/第1章：它山之石［转载］/Linux命令用法集锦/Linux下which、whereis、locate、find 命令的区别.md"),r(i)])])])])}const g=n(v,[["render",o],["__file","find.html.vue"]]);export{g as default};
