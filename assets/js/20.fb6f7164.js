(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{492:function(t,a,s){"use strict";s.r(a);var r=s(1),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("是一个高效的HTTP反向代理服务器.他的功能很强大")]),t._v(" "),s("ul",[s("li",[t._v("路由")]),t._v(" "),s("li",[t._v("缓存")]),t._v(" "),s("li",[t._v("负载均衡")]),t._v(" "),s("li",[t._v("防盗链\n还有许多许多的，欢迎补上")])]),t._v(" "),s("h2",{attrs:{id:"location匹配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#location匹配"}},[t._v("#")]),t._v(" location匹配")]),t._v(" "),s("h3",{attrs:{id:"格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#格式"}},[t._v("#")]),t._v(" 格式")]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" 空格 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("uri"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("h4",{attrs:{id:"精确匹配-相等"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#精确匹配-相等"}},[t._v("#")]),t._v(" 精确匹配: 相等(=)")]),t._v(" "),s("h4",{attrs:{id:"字符串匹配-字符串匹配-空格-匹配开头"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符串匹配-字符串匹配-空格-匹配开头"}},[t._v("#")]),t._v(" 字符串匹配: 字符串匹配(空格) 匹配开头(^~)")]),t._v(" "),s("h4",{attrs:{id:"正则匹配-区分大小写匹配-不区分大小写匹配-区分大小写不匹配-不区分大小写不匹配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正则匹配-区分大小写匹配-不区分大小写匹配-区分大小写不匹配-不区分大小写不匹配"}},[t._v("#")]),t._v(" 正则匹配: 区分大小写匹配(~) 不区分大小写匹配(~*) 区分大小写不匹配(!~) 不区分大小写不匹配(!~*)")])]),t._v(" "),s("h3",{attrs:{id:"搜索优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搜索优先级"}},[t._v("#")]),t._v(" 搜索优先级")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",[t._v("精确匹配 >\n字符串匹配( 长 > 短 [ 注: ^~ 匹配则停止匹配 ]) >\n正则匹配( 上 > 下 )")]),t._v(" "),s("p",[t._v("精确匹配只能命中一个"),s("br"),t._v("\n字符串匹配使用匹配最长的为匹配结果"),s("br"),t._v("\n正则匹配按照location定义的顺序进行匹配，先定义具有高优先级")])]),t._v(" "),s("blockquote",[s("p",[t._v("特别注意："),s("br"),t._v("\n字符串匹配优先搜索，但是只是记录下最长的匹配 ( 如果 ^~ 是最长的匹配，则会直接命中，停止搜索正则 )，然后继续搜索正则匹配，如果有正则匹配，则命中正则匹配，如果没有正则匹配，则命中最长的字符串匹配.")])]),t._v(" "),s("h3",{attrs:{id:"root与alias"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#root与alias"}},[t._v("#")]),t._v(" root与alias")]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("img"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alias")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("var"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("若按照上述配置的话，则访问/img/目录里面的文件时，ningx会自动去"),s("font",{attrs:{color:"red"}},[s("strong",[t._v("/var/www/image")])]),t._v("目录找文件")],1),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("img"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("var"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("若按照这种配置的话，则访问/img/目录下的文件时，nginx会去"),s("font",{attrs:{color:"red"}},[s("strong",[t._v("/var/www/image/")])]),s("font",{attrs:{color:"red"}},[s("td",{attrs:{bgcolor:"yellow"}},[s("strong",[t._v("img/")])])]),t._v("目录下找文件")],1),t._v(" "),s("blockquote",[s("p",[t._v("注：alias与root最主要的差别就在于"),s("code",[t._v("多了黄色")]),t._v("背景块")])]),t._v(" "),s("p",[t._v("alias是一个目录别名的定义，root则是最上层目录的定义。\n还有一个重要的区别是alias后面"),s("font",[s("td",{attrs:{bgcolor:"yellow"}},[s("strong",[t._v("必须要用“/”结束")])])]),t._v(",否则会找不到文件的。。。而root则可有可无~~")],1),t._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/sunkeydev/p/5225051.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("nginx配置：location配置方法及实例详解"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://blog.csdn.net/zhangliangzi/article/details/78257593",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nginx——location常见配置指令，alias、root、proxy_pass"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://www.cnblogs.com/shihaiming/p/6183923.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("nginx的location root 指令"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://juejin.im/post/5e78626ae51d45270c27a66f?utm_source=gold_browser_extension",target:"_blank",rel:"noopener noreferrer"}},[t._v("后端程序员不得不会的 Nginx 转发匹配规则"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);