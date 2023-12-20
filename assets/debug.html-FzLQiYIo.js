import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as h,c as i,b as e,d as o,e as r,f as n}from"./app-tEXYgRGf.js";const c={},s=n('<h1 id="前端调试" tabindex="-1"><a class="header-anchor" href="#前端调试" aria-hidden="true">#</a> 前端调试</h1><blockquote><ol><li>优先使用浏览器(chrome/edge)自带的调试功能</li><li>自带调试无法满足时，考虑使用第三方调试工具(charles \\ whistle \\ httpCanary)</li></ol></blockquote><h2 id="_1-浏览器-chrome-edge-自带的调试功能" tabindex="-1"><a class="header-anchor" href="#_1-浏览器-chrome-edge-自带的调试功能" aria-hidden="true">#</a> 1. 浏览器(chrome/edge)自带的调试功能</h2><blockquote><p>除了调试、请求抓包等功能，还有手机模拟器、性能分析、PWA和安装第三方框架插件(VUE/REACT)等更多功能</p></blockquote><ul><li>通过电脑浏览器(chrome/edge)自带的调试功能，可以解决日常中绝大多数场景的开发调试需求</li><li>特定手机的适配性问题可以通过数据线连接电脑来调试真机</li></ul><h2 id="_2-第三方调试工具" tabindex="-1"><a class="header-anchor" href="#_2-第三方调试工具" aria-hidden="true">#</a> 2. 第三方调试工具</h2><blockquote><p>列举一些使用第三方调试工具的特定场景</p></blockquote><h3 id="部分场景说明" tabindex="-1"><a class="header-anchor" href="#部分场景说明" aria-hidden="true">#</a> 部分场景说明</h3><ul><li>手机端APP配置了不支持通过数据线调试</li><li>配置证书，抓取手机端APP的https请求</li><li>动态修改，方便测试验证不同场景案例</li></ul><h3 id="httpcanary" tabindex="-1"><a class="header-anchor" href="#httpcanary" aria-hidden="true">#</a> HttpCanary</h3><blockquote><p>无需电脑，直接通过手机就可以快速查看请求情况</p></blockquote><h3 id="charles" tabindex="-1"><a class="header-anchor" href="#charles" aria-hidden="true">#</a> charles</h3><blockquote><ol><li>通过配置自定义根证书，抓取手机端APP的https请求。</li><li>动态修改请求参数，方便测试验证不同场景案例</li><li>通过替换某一个js资源(部署后的代码被压缩混淆等导致不方便直接调试)，快速排查定位问题。</li></ol></blockquote><h3 id="whistle" tabindex="-1"><a class="header-anchor" href="#whistle" aria-hidden="true">#</a> whistle</h3><blockquote><ol><li>配置hosts</li><li>映射html/js/json等各种资源请求到本地或者远程目标服务器</li></ol></blockquote><ul><li>远程用户反馈特定机型适配性</li></ul><blockquote><p>通过部署到公网服务器上，远程设备配置好代理，即可实现远程排查</p></blockquote><ul><li>直接访问本地打包后的项目</li></ul><blockquote><p>通过配置hosts、映射html请求到本地；解决前端工程化项目中无法单独替换某一个文件的测试验证。</p></blockquote><h2 id="_3-参考" tabindex="-1"><a class="header-anchor" href="#_3-参考" aria-hidden="true">#</a> 3. 参考</h2>',20),d={href:"https://developer.chrome.com/docs/devtools?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/99969/HttpCanary/blob/master/zh-CN/README.md",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.charlesproxy.com/documentation/getting-started",target:"_blank",rel:"noopener noreferrer"},b={href:"https://wproxy.org/whistle/",target:"_blank",rel:"noopener noreferrer"};function _(m,f){const t=a("ExternalLinkIcon");return h(),i("div",null,[s,e("ul",null,[e("li",null,[e("a",d,[o("https://developer.chrome.com/docs/devtools?hl=zh-cn"),r(t)])]),e("li",null,[e("a",u,[o("https://github.com/99969/HttpCanary/blob/master/zh-CN/README.md"),r(t)])]),e("li",null,[e("a",p,[o("https://www.charlesproxy.com/documentation/getting-started"),r(t)])]),e("li",null,[e("a",b,[o("https://wproxy.org/whistle/"),r(t)])])])])}const x=l(c,[["render",_],["__file","debug.html.vue"]]);export{x as default};
