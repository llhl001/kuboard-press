(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{288:function(a,t,s){a.exports=s.p+"assets/img/1563696697515.94512132.png"},289:function(a,t,s){a.exports=s.p+"assets/img/1563697667480.8c846298.png"},290:function(a,t,s){a.exports=s.p+"assets/img/1563698644736.d67b2e09.png"},291:function(a,t,s){a.exports=s.p+"assets/img/1563698714557.fa1eeb1c.png"},292:function(a,t,s){a.exports=s.p+"assets/img/1563698865448.2cbaf53a.png"},334:function(a,t,s){"use strict";s.r(t);var e=s(0),r=Object(e.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"在单机使用-kind-安装-kubernetes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在单机使用-kind-安装-kubernetes","aria-hidden":"true"}},[a._v("#")]),a._v(" 在单机使用 kind 安装 Kubernetes")]),a._v(" "),e("p",[a._v("本文旨在通过使用 kind 搭建本地 k8s 集群环境，为技术爱好者提供快速上手 Kuboard 的基本实践方式。")]),a._v(" "),e("h2",{attrs:{id:"环境简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境简介","aria-hidden":"true"}},[a._v("#")]),a._v(" 环境简介")]),a._v(" "),e("p",[a._v("本地搭建 k8s 集群需要 kind 工具及 docker 环境。")]),a._v(" "),e("p",[a._v("建议硬件配置：2核 cpu，8G 内存")]),a._v(" "),e("p",[a._v("ps: 以下均为在 Linux 平台实践，其他平台可参考文章中链接。")]),a._v(" "),e("h3",{attrs:{id:"kind-简介与安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kind-简介与安装","aria-hidden":"true"}},[a._v("#")]),a._v(" kind 简介与安装")]),a._v(" "),e("p",[a._v("kind：https://kind.sigs.k8s.io/ 是一个使用 Docker 容器运行本地 Kubernetes 集群的工具。\nps:本文使用kind V0.4.0")]),a._v(" "),e("p",[a._v("安装:")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("linux:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -Lo ./kind-linux-amd64 https://github.com/kubernetes-sigs/kind/releases/download/v0.4.0/kind-linux-amd64\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x ./kind-linux-amd64\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" ./kind-linux-amd64 /usr/local/bin/kind\n")])])])]),a._v(" "),e("li",[e("p",[a._v("win:")]),a._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[a._v("curl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exe "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Lo kind"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("windows"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("amd64"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exe https:"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("github"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("com"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("kubernetes"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("sigs"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("kind"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("releases"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("download"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("v0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("4"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("0"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("kind"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("windows"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("amd64\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("Move-Item")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\\kind"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("windows"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("amd64"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exe c:\\some"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("dir")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-in")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("your"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("PATH\\kind"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exe\n")])])])]),a._v(" "),e("li",[e("p",[a._v("mac:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -Lo ./kind-darwin-amd64 https://github.com/kubernetes-sigs/kind/releases/download/v0.4.0/kind-darwin-amd64\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x ./kind-darwin-amd64\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" ./kind-darwin-amd64 /usr/local/bin/kind\n")])])])])]),a._v(" "),e("h3",{attrs:{id:"docker-环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-环境","aria-hidden":"true"}},[a._v("#")]),a._v(" docker 环境")]),a._v(" "),e("p",[a._v("Kind 的主要功能目前需要有 Docker 环境的支持，可参考 Docker 官方文档：https://links.jianshu.com/go?to=https%3A%2F%2Fdocs.docker.com%2Finstall%2F 进行安装。")]),a._v(" "),e("h3",{attrs:{id:"kubectl-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kubectl-安装","aria-hidden":"true"}},[a._v("#")]),a._v(" kubectl 安装")]),a._v(" "),e("p",[a._v("kubectl https://kubernetes.io/docs/tasks/tools/install-kubectl/ 是 Kubernetes 命令行工具，可以在 Kubernetes 上部署和管理应用程序")]),a._v(" "),e("p",[a._v("Linux:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("curl -LO https://storage.googleapis.com/kubernetes-release/release/v1.15.0/bin/linux/amd64/kubectl\nchmod +x ./kubectl\nsudo mv ./kubectl /usr/local/bin/kubectl\n")])])]),e("p",[a._v("ps: 由于网络问题多次尝试可下载成功")]),a._v(" "),e("h2",{attrs:{id:"k8s-集群搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#k8s-集群搭建","aria-hidden":"true"}},[a._v("#")]),a._v(" k8s 集群搭建")]),a._v(" "),e("h3",{attrs:{id:"准备-kind-搭建集群配置文件-kind-config-yaml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备-kind-搭建集群配置文件-kind-config-yaml","aria-hidden":"true"}},[a._v("#")]),a._v(" 准备 kind 搭建集群配置文件 kind-config.yaml")]),a._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Cluster\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kind.sigs.k8s.io/v1alpha3\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("nodes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("role")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" control"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("plane\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("role")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" worker\n")])])]),e("h3",{attrs:{id:"使用-kind-搭建集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-kind-搭建集群","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用 kind 搭建集群")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("kind create cluster --config kind-config.yaml\n")])])]),e("h3",{attrs:{id:"创建成功"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建成功","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建成功")]),a._v(" "),e("p",[e("img",{attrs:{src:s(288),alt:"1563696697515"}})]),a._v(" "),e("p",[a._v("按照提示配置环境变量")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('export KUBECONFIG="$(kind get kubeconfig-path --name="kind")"\n')])])]),e("p",[a._v("查看集群信息")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("kubectl cluster-info\n")])])]),e("p",[e("img",{attrs:{src:s(289),alt:"1563697667480"}})]),a._v(" "),e("h2",{attrs:{id:"kuboard-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kuboard-安装","aria-hidden":"true"}},[a._v("#")]),a._v(" kuboard 安装")]),a._v(" "),e("p",[a._v("官方安装地址：http://kuboard.cn/#/install/install-dashboard")]),a._v(" "),e("h3",{attrs:{id:"获取并修改-yaml-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取并修改-yaml-文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 获取并修改 yaml 文件")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://raw.githubusercontent.com/eip-work/eip-monitor-repository/master/dashboard/kuboard.yaml\n")])])]),e("p",[a._v("修改文件 kuboard.yaml 中 Ingress 的 host 为空")]),a._v(" "),e("h3",{attrs:{id:"执行安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 执行安装")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("kubectl apply -f kuboard.yaml \n")])])]),e("h3",{attrs:{id:"查看启动状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看启动状态","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看启动状态")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("kubectl get pods -n kube-system --watch\n")])])]),e("p",[a._v("等待 kuboard 启动成功")]),a._v(" "),e("h3",{attrs:{id:"访问-kuboard-页面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#访问-kuboard-页面","aria-hidden":"true"}},[a._v("#")]),a._v(" 访问 kuboard 页面")]),a._v(" "),e("p",[a._v("待启动成功后，需要做 80 端口转发，通过浏览器访问 kuboard")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("kubectl port-forward service/kuboard 9080:80 -n kube-system\n")])])]),e("p",[a._v("获取登录 token")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("kubectl -n kube-system describe secret "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("kubectl -n kube-system get secret "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" kuboard-user "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("awk")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{print "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$1")]),a._v("}'")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("   \n")])])]),e("p",[e("img",{attrs:{src:s(290),alt:"1563698644736"}})]),a._v(" "),e("p",[a._v("浏览器中访问 http://localhost:9080")]),a._v(" "),e("p",[e("img",{attrs:{src:s(291),alt:"1563698714557"}})]),a._v(" "),e("p",[a._v("将获取的 token 复制到浏览器中，访问成功")]),a._v(" "),e("p",[e("img",{attrs:{src:s(292),alt:"1563698865448"}})])])},[],!1,null,null,null);t.default=r.exports}}]);