(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{30:function(a,s,e){a.exports=e.p+"assets/img/image-20190715085036593.ab4a32ff.png"},31:function(a,s,e){a.exports=e.p+"assets/img/image2019-07-15_09.01.21.1ac5bd70.png"},314:function(a,s,e){a.exports=e.p+"assets/img/image-20190713075717350.df5244cd.png"},315:function(a,s,e){a.exports=e.p+"assets/img/image2019-6-10_15-36-29.2870ee7d.png"},338:function(a,s,e){"use strict";e.r(s);var t=e(0),r=Object(t.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"安装-kubernetes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-kubernetes","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装 Kubernetes")]),a._v(" "),t("h1",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[a._v("#")]),a._v(" 介绍")]),a._v(" "),t("p",[a._v("kubernetes 安装有多种选择，本文档描述的集群安装具备如下特点：")]),a._v(" "),t("ul",[t("li",[a._v("使用 kubernetes 1.15.0")]),a._v(" "),t("li",[a._v("三个 master 组成主节点集群，通过内网 loader balancer 实现负载均衡")]),a._v(" "),t("li",[a._v("多个 worker 组成工作节点集群，通过外网 loader balancer 实现负载均衡")]),a._v(" "),t("li",[a._v("使用 calico 作为网络插件")]),a._v(" "),t("li",[a._v("使用 nginx-ingress 作为 kubernetes ingress controller")])]),a._v(" "),t("p",[t("a",{attrs:{href:"https://promotion.aliyun.com/ntms/yunparter/invite.html?userCode=obezo3pg",target:"_blank",rel:"noopener noreferrer"}},[a._v("领取阿里云最高2000元红包"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("下图为 kubernetes 安装的拓扑图")]),a._v(" "),t("p",[t("img",{attrs:{src:e(314),alt:"image-20190713075717350"}})]),a._v(" "),t("ul",[t("li",[a._v("标准机用于制作 centos 镜像，该镜像预先安装了 docker / kubelet /  kubectl / kubeadm， 并预先下载了 kubernetes 所需的 docker image")]),a._v(" "),t("li",[a._v("跳板机用于通过 ssh 端口访问标准机、master 节点、worker 节点的 shell，如果您所使用的环境中，可以直接访问各节点的 shell，也可以无需跳板机")]),a._v(" "),t("li",[a._v("NAT y.y.y.y将 apiserver 的6443端口映射到外网，如果您始终只在 master 节点上执行 kubectl 命令，则无需做此映射")]),a._v(" "),t("li",[a._v("Load Balancer z.z.z.z 是 kubernetes 的 Ingress 外网映射，通常是必须的")])]),a._v(" "),t("h1",{attrs:{id:"安装步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装步骤","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装步骤")]),a._v(" "),t("h2",{attrs:{id:"制作标准机镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#制作标准机镜像","aria-hidden":"true"}},[a._v("#")]),a._v(" 制作标准机镜像")]),a._v(" "),t("p",[a._v("通过使用标准机镜像，可以")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("避免重复执行对测试机安装必要软件的过程")])]),a._v(" "),t("li",[t("strong",[a._v("以一种相对标准化的过程管理测试机的维护")])])]),a._v(" "),t("p",[a._v("标准机镜像中预装了如下内容：")]),a._v(" "),t("ul",[t("li",[a._v("docker")]),a._v(" "),t("li",[a._v("gitlab-runner")]),a._v(" "),t("li",[a._v("kubernetes images")])]),a._v(" "),t("p",[a._v("本文档描述的安装过程已基于 centos 7.6 验证")]),a._v(" "),t("p",[a._v("标准机镜像的制作过程描述如下：")]),a._v(" "),t("h3",{attrs:{id:"安装docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装docker","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装docker")]),a._v(" "),t("p",[t("strong",[a._v("卸载旧版本")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum remove docker "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\tdocker-client "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\tdocker-client-latest "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\tdocker-common "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\tdocker-latest "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\tdocker-latest-logrotate "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\tdocker-logrotate "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\tdocker-selinux "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\tdocker-engine-selinux "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\tdocker-engine\n")])])]),t("p",[t("strong",[a._v("下载依赖包及安装包")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://download.docker.com/linux/centos/7/x86_64/stable/Packages/containerd.io-1.2.6-3.3.el7.x86_64.rpm\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://download.docker.com/linux/centos/7/x86_64/stable/Packages/docker-ce-cli-18.09.7-3.el7.x86_64.rpm\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://download.docker.com/linux/centos/7/x86_64/stable/Packages/docker-ce-18.09.7-3.el7.x86_64.rpm\n")])])]),t("p",[t("strong",[a._v("安装")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y containerd.io-1.2.6-3.3.el7.x86_64.rpm\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y docker-ce-cli-18.09.7-3.el7.x86_64.rpm\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y docker-ce-18.09.7-3.el7.x86_64.rpm\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" docker\n")])])]),t("p",[t("strong",[a._v("启动 docker 服务")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl start docker\n")])])]),t("p",[t("strong",[a._v("检查 docker 版本")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker version\n")])])]),t("p",[t("strong",[a._v("参考文档")])]),a._v(" "),t("p",[a._v("https://docs.docker.com/install/linux/docker-ce/centos/")]),a._v(" "),t("p",[a._v("https://docs.docker.com/install/linux/linux-postinstall/")]),a._v(" "),t("h3",{attrs:{id:"安装-nfs-utils"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-nfs-utils","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装 nfs-utils")]),a._v(" "),t("p",[t("strong",[a._v("执行安装命令")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" nfs-utils\n")])])]),t("p",[a._v("必须先安装 nfs-utils 才能挂载 nfs 网络存储")]),a._v(" "),t("h3",{attrs:{id:"k8s基本配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#k8s基本配置","aria-hidden":"true"}},[a._v("#")]),a._v(" K8S基本配置")]),a._v(" "),t("p",[t("strong",[a._v("配置K8S的yum源")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v("EOF "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" /etc/yum.repos.d/kubernetes.repo\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("kubernetes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Kubernetes\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("enabled")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("repo_gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("gpgkey")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg\n        http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg\nEOF\n")])])]),t("p",[t("strong",[a._v("关闭swap、防火墙")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("swapoff -a\n")])])]),t("p",[t("strong",[a._v("关闭SeLinux")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("setenforce "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n")])])]),t("p",[t("strong",[a._v("修改 /etc/sysctl.conf")])]),a._v(" "),t("p",[t("code",[a._v("vim /etc/sysctl.conf")])]),a._v(" "),t("p",[a._v("向其中添加")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("net.ipv4.ip_forward = 1\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\n")])])]),t("p",[a._v("如下图所示")]),a._v(" "),t("p",[t("img",{attrs:{src:e(30),alt:"image-20190715085036593",title:":size=600x445"}})]),a._v(" "),t("p",[t("strong",[a._v("安装kubelet、kubeadm、kubectl")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y kubelet-1.15.0 kubeadm-1.15.0 kubectl-1.15.0\n")])])]),t("p",[t("strong",[a._v("修改docker Cgroup Driver为systemd")])]),a._v(" "),t("p",[t("code",[a._v("vim /usr/lib/systemd/system/docker.service")])]),a._v(" "),t("p",[a._v("向其中他添加")]),a._v(" "),t("p",[t("code",[a._v("--exec-opt native.cgroupdriver=systemd")])]),a._v(" "),t("p",[a._v("如下图所示")]),a._v(" "),t("p",[t("img",{attrs:{src:e(31),alt:"屏幕快照 2019-07-15 09.01.21",title:":size=1000x326"}})]),a._v(" "),t("p",[a._v("重启 docker")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("systemctl daemon-reload\nsystemctl restart docker\n")])])]),t("p",[t("strong",[a._v("启动kubelet")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" kubelet "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" systemctl start kubelet\n")])])]),t("p",[t("strong",[a._v("加载 kubernetes 镜像")])]),a._v(" "),t("p",[a._v("由于k8s服务相关镜像在国外镜像源，国内无法访问")]),a._v(" "),t("p",[a._v("执行以下命令添加docker k8s国内镜像源")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -sSL https://get.daocloud.io/daotools/set_mirror.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" -s http://f1361db2.m.daocloud.io\n\nsystemctl restart docker\n")])])]),t("p",[t("strong",[a._v("拉取k8s相关镜像")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker pull mirrorgooglecontainers/kube-apiserver:v1.15.0\ndocker pull mirrorgooglecontainers/kube-controller-manager:v1.15.0\ndocker pull mirrorgooglecontainers/kube-scheduler:v1.15.0\ndocker pull mirrorgooglecontainers/kube-proxy:v1.15.0\ndocker pull mirrorgooglecontainers/pause:3.1\ndocker pull mirrorgooglecontainers/etcd:3.3.10\ndocker pull coredns/coredns:1.3.1\n")])])]),t("p",[t("strong",[a._v("更改镜像名为k8s官网镜像")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker tag d235b23c3570 k8s.gcr.io/kube-proxy:v1.15.0\ndocker tag 201c7a840312 k8s.gcr.io/kube-apiserver:v1.15.0\ndocker tag 2d3813851e87 k8s.gcr.io/kube-scheduler:v1.15.0\ndocker tag 8328bb49b652 k8s.gcr.io/kube-controller-manager:v1.15.0\ndocker tag da86e6ba6ca1 k8s.gcr.io/pause:3.1\ndocker tag eb516548c180 k8s.gcr.io/coredns:1.3.1\ndocker tag 2c4adeb21b4f k8s.gcr.io/etcd:3.3.10\n")])])]),t("p",[t("strong",[a._v("制作镜像")])]),a._v(" "),t("p",[a._v("请参考阿里云基于ECS "),t("a",{attrs:{href:"https://help.aliyun.com/document_detail/35109.html?spm=5176.2020520101.0.0.75fc4df5mtdFmV",target:"_blank",rel:"noopener noreferrer"}},[a._v("制作虚拟机镜像"),t("OutboundLink")],1),a._v(" 的文档")]),a._v(" "),t("h2",{attrs:{id:"初始化api-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化api-server","aria-hidden":"true"}},[a._v("#")]),a._v(" 初始化API Server")]),a._v(" "),t("h3",{attrs:{id:"创建-apiserver-的-elb（私网）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-apiserver-的-elb（私网）","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建 ApiServer 的 ELB（私网）")]),a._v(" "),t("p",[a._v("监听端口：6443 / TCP")]),a._v(" "),t("p",[a._v("后端资源组：包含 apple-master-a-1, apple-master-b-1, apple-master-b-2")]),a._v(" "),t("p",[a._v("后端端口：6443")]),a._v(" "),t("p",[a._v("开启 按源地址保持会话")]),a._v(" "),t("p",[a._v("假设完成创建以后，ELB的 ip 地址为 x.x.x.x")]),a._v(" "),t("h3",{attrs:{id:"初始化第一个master节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化第一个master节点","aria-hidden":"true"}},[a._v("#")]),a._v(" 初始化第一个master节点")]),a._v(" "),t("p",[a._v("在 apple-master-a-1机器上执行")]),a._v(" "),t("p",[t("strong",[a._v("配置 apiserver.apple 的域名")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" -i\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"x.x.x.x  apiserver.apple"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" /etc/hosts\n")])])]),t("blockquote",[t("p",[a._v("请替换其中的 x.x.x.x 为您的负载均衡服务器的实际 ip 地址")])]),a._v(" "),t("p",[t("strong",[a._v("创建 /root/k8s/kubeadm-config.yaml")])]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kubeadm.k8s.io/v1beta1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ClusterConfiguration\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kubernetesVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" v1.14.3\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("controlPlaneEndpoint")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"apiserver.apple:6443"')]),a._v("\n\n")])])]),t("p",[t("strong",[a._v("初始化 apiserver")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("kubeadm init --config"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/root/k8s/kubeadm-config.yaml --upload-certs\n\n")])])]),t("p",[a._v("执行结果如下图所示：")]),a._v(" "),t("p",[t("img",{attrs:{src:e(315),alt:"image2019-6-10_15-36-29"}})]),a._v(" "),t("p",[t("strong",[a._v("初始化 gitlab-runner 用户的 kubectl 配置")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf /home/gitlab-runner/.kube/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" /home/gitlab-runner/.kube/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" -i /etc/kubernetes/admin.conf /home/gitlab-runner/.kube/config\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" -R gitlab-runner:gitlab-runner /home/gitlab-runner/.kube\n")])])]),t("p",[t("strong",[a._v("安装 calico")])]),a._v(" "),t("p",[a._v("（需要在安全组–ServerFarm需要为集群服务器器端口6443建立安全组规则）")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("su")]),a._v(" - gitlab-runner\nkubectl apply -f "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\t\thttps://docs.projectcalico.org/v3.6/getting-started/kubernetes/installation/hosted/kubernetes-datastore/calico-networking/1.7/calico.yaml\n")])])]),t("blockquote",[t("p",[a._v("安装calico， 请参考https://docs.projectcalico.org/v3.6/getting-started/kubernetes/")])]),a._v(" "),t("p",[t("strong",[a._v("等待calico安装就绪：")])]),a._v(" "),t("p",[a._v("执行如下命令，等待3-10分钟，直到所有的容器组处于 Running 状态")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("watch")]),a._v(" kubectl get pod -n kube-system\n")])])]),t("h3",{attrs:{id:"初始化第二、三个master节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化第二、三个master节点","aria-hidden":"true"}},[a._v("#")]),a._v(" 初始化第二、三个master节点")]),a._v(" "),t("p",[a._v("在 apple-master-b-1 和 apple-master-b-2 机器上执行")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" -i\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"x.x.x.x  apiserver.apple"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" /etc/hosts\n")])])]),t("p",[a._v("执行 （以下命令行在初始化 apple-master-a-1 时，被打印在控制台上，执行时应该使用控制台打印出的命令参数）")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("kubeadm "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("join")]),a._v(" apiserver.apple:6443 --token ejwx62.vqwog6il5p83uk7y "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--discovery-token-ca-cert-hash sha256:6f7a8e40a810323672de5eee6f4d19aa2dbdb38411845a1bf5dd63485c43d303 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--experimental-control-plane --certificate-key 70eb87e62f052d2d5de759969d5b42f372d0ad798f98df38f7fe73efdf63a13c\n")])])]),t("h3",{attrs:{id:"检查-apiserver初始化结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查-apiserver初始化结果","aria-hidden":"true"}},[a._v("#")]),a._v(" 检查 apiserver初始化结果")]),a._v(" "),t("p",[a._v("在第一个master节点 apple-master-a-1 上执行")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" -i\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("su")]),a._v(" - gitlab-runner\nkubectl get nodes\n")])])]),t("h2",{attrs:{id:"初始化-worker节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化-worker节点","aria-hidden":"true"}},[a._v("#")]),a._v(" 初始化 worker节点")]),a._v(" "),t("h3",{attrs:{id:"获得-join命令参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获得-join命令参数","aria-hidden":"true"}},[a._v("#")]),a._v(" 获得 join命令参数")]),a._v(" "),t("p",[t("strong",[a._v("在第一个master节点 apple-master-a-1 节点执行")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" -i\nkubeadm token create --print-join-command\n")])])]),t("p",[a._v("可获取kubeadm join 命令及参数，如下所示")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("kubeadm "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("join")]),a._v(" apiserver.apple:6443 --token mpfjma.4vjjg8flqihor4vt     --discovery-token-ca-cert-hash sha256:6f7a8e40a810323672de5eee6f4d19aa2dbdb38411845a1bf5dd63485c43d303\n")])])]),t("h3",{attrs:{id:"初始化worker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化worker","aria-hidden":"true"}},[a._v("#")]),a._v(" 初始化worker")]),a._v(" "),t("p",[t("strong",[a._v("针对所有的 worker 节点执行")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" -i\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"x.x.x.x  apiserver.apple"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" /etc/hosts\nkubeadm "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("join")]),a._v(" apiserver.apple:6443 --token mpfjma.4vjjg8flqihor4vt     --discovery-token-ca-cert-hash sha256:6f7a8e40a810323672de5eee6f4d19aa2dbdb38411845a1bf5dd63485c43d303\n")])])]),t("blockquote",[t("ul",[t("li",[t("p",[a._v("将 x.x.x.x 替换为 loader balancer 的实际 ip")])]),a._v(" "),t("li",[t("p",[a._v("将 kubeadm join 命令后的参数替换为上一个步骤中实际从 apple-master-a-1 节点获得的参数")])])])]),a._v(" "),t("h3",{attrs:{id:"检查-apiserver初始化结果-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查-apiserver初始化结果-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 检查 apiserver初始化结果")]),a._v(" "),t("p",[a._v("在第一个master节点 apple-master-a-1 上执行")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" -i\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("su")]),a._v(" - gitlab-runner\nkubectl get nodes\n")])])]),t("h2",{attrs:{id:"移除-worker-节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移除-worker-节点","aria-hidden":"true"}},[a._v("#")]),a._v(" 移除 worker 节点")]),a._v(" "),t("blockquote",[t("p",[a._v("正常情况下，您无需移除 worker 节点")])]),a._v(" "),t("p",[a._v("在准备移除的 worker 节点上执行")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" -i\t\nkubeadm reset\n")])])]),t("p",[a._v("在第一个 master 节点 apple-master-a-1 上执行")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" -i\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("su")]),a._v(" - gitlab-runner\nkubectl delete node apple-worker-x-x\n")])])]),t("blockquote",[t("ul",[t("li",[a._v("将 apple-worker-x-x 替换为要移除的 worker 节点的名字")]),a._v(" "),t("li",[a._v("worker 节点的名字可以通过在第一个 master 节点 apple-master-a-1 上执行 kubectl get nodes 命令获得")])])]),a._v(" "),t("h2",{attrs:{id:"安装-ingress-controller"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-ingress-controller","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装 Ingress Controller")]),a._v(" "),t("blockquote",[t("p",[a._v("ingress官方文档：https://kubernetes.io/docs/concepts/services-networking/ingress/")]),a._v(" "),t("p",[a._v("Ingress Controllers官网介绍："),t("a",{attrs:{href:"https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("本文中使用如下部署方式：https://kubernetes.github.io/ingress-nginx/deploy/baremetal/#using-a-self-provisioned-edge")]),a._v(" "),t("p",[a._v("kubernetes支持多种Ingress Controllers，本文推荐使用")]),a._v(" "),t("p",[a._v("https://github.com/nginxinc/kubernetes-ingress")])]),a._v(" "),t("h3",{attrs:{id:"在-apple-master-a-1-上执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-apple-master-a-1-上执行","aria-hidden":"true"}},[a._v("#")]),a._v(" 在 apple-master-a-1 上执行")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("su")]),a._v(" - gitlab-runner\nkubectl apply -f https://raw.githubusercontent.com/eip-work/eip-monitor-repository/master/dashboard/nginx-ingress.yaml\n")])])]),t("h3",{attrs:{id:"在iaas云控制台完成如下配置（公网elb）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在iaas云控制台完成如下配置（公网elb）","aria-hidden":"true"}},[a._v("#")]),a._v(" 在IaaS云控制台完成如下配置（"),t("strong",[a._v("公网ELB")]),a._v("）")]),a._v(" "),t("p",[a._v("创建负载均衡 ELB：")]),a._v(" "),t("p",[a._v("​    监听器 1：80 / TCP， SOURCE_ADDRESS 会话保持")]),a._v(" "),t("p",[a._v("​    服务器资源池 1： apple-worker-x-x 的所有节点的 80端口")]),a._v(" "),t("p",[a._v("​    监听器 2：443 / TCP， SOURCE_ADDRESS 会话保持")]),a._v(" "),t("p",[a._v("​    服务器资源池 2： apple-worker-x-x 的所有节点的443端口")]),a._v(" "),t("p",[a._v("假设刚创建的负载均衡 ELB 的 IP 地址为： z.z.z.z")]),a._v(" "),t("h3",{attrs:{id:"配置域名解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置域名解析","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置域名解析")]),a._v(" "),t("p",[a._v("将域名 *.apple.yourdomain.com 解析到地址负载均衡服务器 的 IP 地址 z.z.z.z")]),a._v(" "),t("h3",{attrs:{id:"验证配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 验证配置")]),a._v(" "),t("p",[a._v("在浏览器访问 a.apple.yourdomain.com，将得到 404 NotFound 错误页面")])])},[],!1,null,null,null);s.default=r.exports}}]);