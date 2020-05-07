(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{491:function(t,a,s){"use strict";s.r(a);var r=s(1),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"设置国内镜像源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置国内镜像源"}},[t._v("#")]),t._v(" 设置国内镜像源")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/docker/daemon.json\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#新增以下内容(无则创建)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"registry-mirrors"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://hub-mirror.c.163.com"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://reg-mirror.qiniu.com"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://registry.docker-cn.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"live-restore"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("之后重新启动服务：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl daemon-reload\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl restart docker\n")])])]),s("p",[t._v("检查加速器是否生效:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ docker info\n  Registry Mirrors:\n    https://hub-mirror.c.163.com/\n    https://reg-mirror.qiniu.com/\n    https://registry.docker-cn.com/\n\n")])])]),s("h2",{attrs:{id:"设置时区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置时区"}},[t._v("#")]),t._v(" 设置时区")]),t._v(" "),s("h3",{attrs:{id:"镜像中直接修改-dockerfile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#镜像中直接修改-dockerfile"}},[t._v("#")]),t._v(" 镜像中直接修改(Dockerfile)")]),t._v(" "),s("p",[t._v("如果该镜像中有时区的设置,则可以直接修改")]),t._v(" "),s("div",{staticClass:"language-docker extra-class"},[s("pre",{pre:!0,attrs:{class:"language-docker"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" alpine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3.9\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置时区为上海")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" apk add tzdata && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \\\n    && echo "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Asia/Shanghai"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" /etc/timezone \\\n    && apk del tzdata\n")])])]),s("h2",{attrs:{id:"常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),s("h3",{attrs:{id:"运行容器-run"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行容器-run"}},[t._v("#")]),t._v(" 运行容器(run)")]),t._v(" "),s("p",[t._v("run是我们最常用的命令：")]),t._v(" "),s("div",{staticClass:"language-docker extra-class"},[s("pre",{pre:!0,attrs:{class:"language-docker"}},[s("code",[t._v("docker run nginx\n")])])]),s("p",[t._v("如上，便启动了一个nginx容器")]),t._v(" "),s("h3",{attrs:{id:"端口映射-p"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#端口映射-p"}},[t._v("#")]),t._v(" 端口映射(-p)")]),t._v(" "),s("p",[t._v("此时，我们还无法通过访问宿主机的IP来访问刚才部署的Nginx，需要先进行端口映射：")]),t._v(" "),s("div",{staticClass:"language-docker extra-class"},[s("pre",{pre:!0,attrs:{class:"language-docker"}},[s("code",[t._v("docker run "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("p 8080"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("80 nginx\n")])])]),s("h3",{attrs:{id:"后台运行-d"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后台运行-d"}},[t._v("#")]),t._v(" 后台运行(-d)")]),t._v(" "),s("p",[t._v("默认情况下，当我们推出命令行时，容器也会被关闭")]),t._v(" "),s("p",[t._v("我们可以使用-d参数使容器保持后台运行：")]),t._v(" "),s("p",[s("code",[t._v("docker run -d <image-name>")])]),t._v(" "),s("p",[t._v("然后访问宿主机的IP:8080，便可以看到"),s("code",[t._v("Welcome to nginx!")])]),t._v(" "),s("h3",{attrs:{id:"指定名称-n"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指定名称-n"}},[t._v("#")]),t._v(" 指定名称(-n)")]),t._v(" "),s("p",[s("code",[t._v("docker run --name <container-name> <image-name>")])]),t._v(" "),s("div",{staticClass:"language-docker extra-class"},[s("pre",{pre:!0,attrs:{class:"language-docker"}},[s("code",[t._v("docker run "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("name myredis redis\n")])])]),s("p",[t._v("如上，创建了一个名称为redis的容器")]),t._v(" "),s("h3",{attrs:{id:"进入交互模式-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进入交互模式-it"}},[t._v("#")]),t._v(" 进入交互模式(-it)")]),t._v(" "),s("p",[s("code",[t._v("docker run -it [image-name] /bin/bash")])]),t._v(" "),s("ul",[s("li",[t._v("-i interact 进入交互模式")]),t._v(" "),s("li",[t._v("-t tty 分配一个伪终端\n执行之后，可以看到命令行的主机名已经变成了容器的Id，表示成功进入到了容器中，可以使用exit命令退出容器")])]),t._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.runoob.com/docker/docker-mirror-acceleration.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker 镜像加速"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/isea533/article/details/87261764",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker 镜像，基于 alpine 系统的时区配置"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.runoob.com/docker/docker-hello-world.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Hello World"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);