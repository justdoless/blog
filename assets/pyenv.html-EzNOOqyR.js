import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-7Fpb1U4e.js";const l={},i=e(`<h1 id="pyenv管理python" tabindex="-1"><a class="header-anchor" href="#pyenv管理python" aria-hidden="true">#</a> pyenv管理python</h1><blockquote><p>通过 pyenv 管理 python 版本</p></blockquote><h2 id="通过-homebrew-安装-pyenv" tabindex="-1"><a class="header-anchor" href="#通过-homebrew-安装-pyenv" aria-hidden="true">#</a> 通过 homebrew 安装 pyenv</h2><blockquote><p>如果没有安装 <code>xcode-select</code> 需要先运行 <code>xcode-select --install</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew update 
brew <span class="token function">install</span> pyenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改-zsh-profile" tabindex="-1"><a class="header-anchor" href="#修改-zsh-profile" aria-hidden="true">#</a> 修改 zsh profile</h2><blockquote><p>否则通过pyenv切换python版本会不生效</p></blockquote><ul><li>编辑 .zshrc</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> ~/.zshrc 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在配置下面增加</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">PYENV_ROOT</span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$HOME</span>/.pyenv&quot;</span>
<span class="token builtin class-name">command</span> <span class="token parameter variable">-v</span> pyenv <span class="token operator">&gt;</span>/dev/null <span class="token operator">||</span> <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$PYENV_ROOT</span>/bin:<span class="token environment constant">$PATH</span>&quot;</span>
<span class="token builtin class-name">eval</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>pyenv init -<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>让修改生效</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> ~/.zshrc

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pyenv-常用命令" tabindex="-1"><a class="header-anchor" href="#pyenv-常用命令" aria-hidden="true">#</a> pyenv 常用命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看 pyenv 已经管理了哪些 python 版本 </span>
pyenv versions 
    system 
    <span class="token number">2.7</span>.13 
    * <span class="token number">3.8</span>.9 <span class="token punctuation">(</span>set by /Users/yourname/.pyenv/version<span class="token punctuation">)</span> 

<span class="token comment"># 使用pyenv安装指定的Python版本 </span>
pyenv <span class="token function">install</span> <span class="token parameter variable">-v</span> <span class="token number">3.8</span>.9 
pyenv <span class="token function">install</span> <span class="token parameter variable">-v</span> <span class="token number">2.7</span>.13 

<span class="token comment"># 把Python切换到指定版本 </span>
pyenv global <span class="token number">3.8</span>.9 

<span class="token comment"># 查看系统当前python版本 </span>
python 
    Python <span class="token number">3.8</span>.9 <span class="token punctuation">(</span>default, Jun <span class="token number">23</span> <span class="token number">2021</span>, <span class="token number">14</span>:45:36<span class="token punctuation">)</span> 
    
<span class="token comment"># 查看pyenv当前支持哪些Python版本 </span>
pyenv <span class="token function">install</span> <span class="token parameter variable">--list</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),t=[i];function p(c,o){return s(),a("div",null,t)}const v=n(l,[["render",p],["__file","pyenv.html.vue"]]);export{v as default};
