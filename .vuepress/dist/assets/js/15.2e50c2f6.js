(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{30:function(a,s,e){a.exports=e.p+"assets/img/image-20190715085036593.ab4a32ff.png"},31:function(a,s,e){a.exports=e.p+"assets/img/image2019-07-15_09.01.21.1ac5bd70.png"},311:function(a,s,e){a.exports=e.p+"assets/img/image-20190718175957160.f5abe01a.png"},312:function(a,s,e){a.exports=e.p+"assets/img/image-20190715101542756.5934c00e.png"},313:function(a,s,e){a.exports=e.p+"assets/img/image-20190715193838012.eca23618.png"},340:function(a,s,e){"use strict";e.r(s);var t=e(0),r=Object(t.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"安装-kubernetes-用于测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-kubernetes-用于测试","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装 Kubernetes 用于测试")]),a._v(" "),t("p",[a._v("如果您想拥有一个供个人学习测试使用的 kubernetes 集群，推荐的做法是在阿里云采购如下配置：")]),a._v(" "),t("ul",[t("li",[a._v("3台 2核4G 的ECS（突发性能实例 t5 ecs.t5-c1m2.large，或同等配置）")]),a._v(" "),t("li",[a._v("100G EFS")])]),a._v(" "),t("p",[a._v("Kuboard 的在线 demo 环境使用的是如下拓扑结构，本文档描述了如何在阿里云完成该 demo 环境的搭建。（推荐阿里云是因为，阿里云是当下技术爱好者最容易接触到的云环境，拥有一个3节点 Kubernetes 集群，每天的成本不超过12元，且，停机状态下不收费，非常适合于技术爱好者学习时使用。）")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://promotion.aliyun.com/ntms/yunparter/invite.html?userCode=obezo3pg",target:"_blank",rel:"noopener noreferrer"}},[a._v("领取阿里云最高2000元红包"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"http://demo.eip.work/#/login?isReadOnly=true&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IiJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJrdWJvYXJkLXZpZXdlci10b2tlbi02djZiZiIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50Lm5hbWUiOiJrdWJvYXJkLXZpZXdlciIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6IjhiYTU3YmI1LWFiMTctNDM1NS1hNTM0LTQ0Njk4NGY0NzFlZiIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlLXN5c3RlbTprdWJvYXJkLXZpZXdlciJ9.DcXNIp0RKha1zkV4ga_QlGfcvMLGx2LOyzX-0VeboC3FojKFhxnfBeoda-zTeh6ugJlSM4kQYrRcof1Kx8Mg3-UgofNmgRySbDEVKtJZyMUoHqLmySKUIn8sbX8q83RNcqwcvY-fM8-w8HSuzU7Td7WWNuZrlCL4q_LQDYIBet1nlQ83YsENKNE8rsZQFDw8YM0MH6BEZLdwyhaboy_jjYbsU7kv8gks3aIX4lh1Fs9ZFQpC_6B0_MZvb7rEeG2M8QWXoUkDoL5JCKu6Wot5GlWf0kDMxIsViggP0NmSDTKh6kIvCkT2FZ2I4guEcjE_EjBpdOS6Abta22tzLlPKhg",target:"_blank",rel:"noopener noreferrer"}},[a._v("Kuboard 在线体验"),t("OutboundLink")],1),a._v("\n为保证环境的稳定性，在线 Demo 中只提供只读权限。"),t("span",{staticStyle:{color:"#F56C6C","font-weight":"500"}},[a._v("（请在PC浏览器中打开）")])]),a._v(" "),t("p",[t("img",{attrs:{src:e(311),alt:"image-20190718175957160"}})]),a._v(" "),t("h2",{attrs:{id:"制作标准机镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#制作标准机镜像","aria-hidden":"true"}},[a._v("#")]),a._v(" 制作标准机镜像")]),a._v(" "),t("p",[a._v("通过使用标准机镜像，可以")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("避免重复执行对测试机安装必要软件的过程")])]),a._v(" "),t("li",[t("strong",[a._v("以一种相对标准化的过程管理测试机的维护")])])]),a._v(" "),t("p",[a._v("标准机镜像中预装了如下内容：")]),a._v(" "),t("ul",[t("li",[a._v("docker")]),a._v(" "),t("li",[a._v("gitlab-runner")]),a._v(" "),t("li",[a._v("kubernetes images")])]),a._v(" "),t("p",[a._v("本文档描述的安装过程已基于 centos 7.6 验证")]),a._v(" "),t("p",[a._v("标准机镜像的制作过程描述如下：")]),a._v(" "),t("h3",{attrs:{id:"安装docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装docker","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装docker")]),a._v(" "),t("p",[t("strong",[a._v("卸载旧版本")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum remove docker "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\tdocker-client "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\tdocker-client-latest "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\tdocker-common "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\tdocker-latest "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\tdocker-latest-logrotate "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\tdocker-logrotate "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\tdocker-selinux "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\tdocker-engine-selinux "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\tdocker-engine\n")])])]),t("p",[t("strong",[a._v("下载依赖包及安装包")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://download.docker.com/linux/centos/7/x86_64/stable/Packages/containerd.io-1.2.6-3.3.el7.x86_64.rpm\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://download.docker.com/linux/centos/7/x86_64/stable/Packages/docker-ce-cli-18.09.7-3.el7.x86_64.rpm\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://download.docker.com/linux/centos/7/x86_64/stable/Packages/docker-ce-18.09.7-3.el7.x86_64.rpm\n")])])]),t("p",[t("strong",[a._v("安装")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y containerd.io-1.2.6-3.3.el7.x86_64.rpm\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y docker-ce-cli-18.09.7-3.el7.x86_64.rpm\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y docker-ce-18.09.7-3.el7.x86_64.rpm\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" docker\n")])])]),t("p",[t("strong",[a._v("启动 docker 服务")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl start docker\n")])])]),t("p",[t("strong",[a._v("检查 docker 版本")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker version\n")])])]),t("p",[t("strong",[a._v("参考文档")])]),a._v(" "),t("p",[a._v("https://docs.docker.com/install/linux/docker-ce/centos/")]),a._v(" "),t("p",[a._v("https://docs.docker.com/install/linux/linux-postinstall/")]),a._v(" "),t("h3",{attrs:{id:"安装-nfs-utils"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-nfs-utils","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装 nfs-utils")]),a._v(" "),t("p",[t("strong",[a._v("执行安装命令")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" nfs-utils\n")])])]),t("p",[a._v("必须先安装 nfs-utils 才能挂载 nfs 网络存储")]),a._v(" "),t("h3",{attrs:{id:"k8s基本配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#k8s基本配置","aria-hidden":"true"}},[a._v("#")]),a._v(" K8S基本配置")]),a._v(" "),t("p",[t("strong",[a._v("配置K8S的yum源")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v("EOF "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" /etc/yum.repos.d/kubernetes.repo\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("kubernetes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Kubernetes\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("enabled")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("repo_gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("gpgkey")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg\n        http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg\nEOF\n")])])]),t("p",[t("strong",[a._v("关闭swap、防火墙")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("swapoff -a\n")])])]),t("p",[t("strong",[a._v("关闭SeLinux")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("setenforce "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n")])])]),t("p",[t("strong",[a._v("修改 /etc/sysctl.conf")])]),a._v(" "),t("p",[t("code",[a._v("vim /etc/sysctl.conf")])]),a._v(" "),t("p",[a._v("向其中添加")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("net.ipv4.ip_forward = 1\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\n")])])]),t("p",[a._v("如下图所示")]),a._v(" "),t("p",[t("img",{attrs:{src:e(30),alt:"image-20190715085036593",title:":size=600x445"}})]),a._v(" "),t("p",[t("strong",[a._v("安装kubelet、kubeadm、kubectl")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y kubelet-1.15.0 kubeadm-1.15.0 kubectl-1.15.0\n")])])]),t("p",[t("strong",[a._v("修改docker Cgroup Driver为systemd")])]),a._v(" "),t("p",[t("code",[a._v("vim /usr/lib/systemd/system/docker.service")])]),a._v(" "),t("p",[a._v("向其中他添加")]),a._v(" "),t("p",[t("code",[a._v("--exec-opt native.cgroupdriver=systemd")])]),a._v(" "),t("p",[a._v("如下图所示")]),a._v(" "),t("p",[t("img",{attrs:{src:e(31),alt:"屏幕快照 2019-07-15 09.01.21",title:":size=1000x326"}})]),a._v(" "),t("p",[a._v("重启 docker")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("systemctl daemon-reload\nsystemctl restart docker\n")])])]),t("p",[t("strong",[a._v("启动kubelet")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" kubelet "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" systemctl start kubelet\n")])])]),t("p",[t("strong",[a._v("加载 kubernetes 镜像")])]),a._v(" "),t("p",[a._v("由于k8s服务相关镜像在国外镜像源，国内无法访问")]),a._v(" "),t("p",[a._v("执行以下命令添加docker k8s国内镜像源")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -sSL https://get.daocloud.io/daotools/set_mirror.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" -s http://f1361db2.m.daocloud.io\n\nsystemctl restart docker\n")])])]),t("p",[t("strong",[a._v("拉取k8s相关镜像")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker pull mirrorgooglecontainers/kube-apiserver:v1.15.0\ndocker pull mirrorgooglecontainers/kube-controller-manager:v1.15.0\ndocker pull mirrorgooglecontainers/kube-scheduler:v1.15.0\ndocker pull mirrorgooglecontainers/kube-proxy:v1.15.0\ndocker pull mirrorgooglecontainers/pause:3.1\ndocker pull mirrorgooglecontainers/etcd:3.3.10\ndocker pull coredns/coredns:1.3.1\n")])])]),t("p",[t("strong",[a._v("更改镜像名为k8s官网镜像")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker tag d235b23c3570 k8s.gcr.io/kube-proxy:v1.15.0\ndocker tag 201c7a840312 k8s.gcr.io/kube-apiserver:v1.15.0\ndocker tag 2d3813851e87 k8s.gcr.io/kube-scheduler:v1.15.0\ndocker tag 8328bb49b652 k8s.gcr.io/kube-controller-manager:v1.15.0\ndocker tag da86e6ba6ca1 k8s.gcr.io/pause:3.1\ndocker tag eb516548c180 k8s.gcr.io/coredns:1.3.1\ndocker tag 2c4adeb21b4f k8s.gcr.io/etcd:3.3.10\n")])])]),t("p",[t("strong",[a._v("制作镜像")])]),a._v(" "),t("p",[a._v("请参考阿里云基于ECS "),t("a",{attrs:{href:"https://help.aliyun.com/document_detail/35109.html?spm=5176.2020520101.0.0.75fc4df5mtdFmV",target:"_blank",rel:"noopener noreferrer"}},[a._v("制作虚拟机镜像"),t("OutboundLink")],1),a._v(" 的文档")]),a._v(" "),t("h2",{attrs:{id:"初始化-master-节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化-master-节点","aria-hidden":"true"}},[a._v("#")]),a._v(" 初始化 master 节点")]),a._v(" "),t("h3",{attrs:{id:"在-demo-master-a-1-机器上执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-demo-master-a-1-机器上执行","aria-hidden":"true"}},[a._v("#")]),a._v(" 在 demo-master-a-1 机器上执行")]),a._v(" "),t("p",[a._v("以下命令以 root 身份执行")]),a._v(" "),t("p",[t("strong",[a._v("配置 apiserver.demo 的域名")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"x.x.x.x  apiserver.demo"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" /etc/hosts\n")])])]),t("blockquote",[t("p",[a._v("请替换其中的 x.x.x.x 为您的 demo-master-a-1 的实际 ip 地址")])]),a._v(" "),t("p",[t("strong",[a._v("创建 /root/k8s/kubeadm-config.yaml")])]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kubeadm.k8s.io/v1beta1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ClusterConfiguration\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kubernetesVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" v1.15.0\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("controlPlaneEndpoint")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"apiserver.demo:6443"')]),a._v("\n\n")])])]),t("p",[t("strong",[a._v("初始化 apiserver")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("kubeadm init --config"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("kubeadm-config.yaml --upload-certs\n")])])]),t("p",[a._v("执行结果如下图所示：")]),a._v(" "),t("p",[t("img",{attrs:{src:e(312),alt:"image-20190715101542756",title:":size=800x388"}})]),a._v(" "),t("p",[t("strong",[a._v("初始化 root 用户的 kubectl 配置")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf /root/.kube/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" /root/.kube/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" -i /etc/kubernetes/admin.conf /root/.kube/config\n")])])]),t("p",[t("strong",[a._v("安装 calico")])]),a._v(" "),t("p",[a._v("（需要在安全组–ServerFarm需要为集群服务器器端口6443建立安全组规则）")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("kubectl apply -f "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nhttps://docs.projectcalico.org/v3.6/getting-started/kubernetes/installation/hosted/kubernetes-datastore/calico-networking/1.7/calico.yaml\n")])])]),t("blockquote",[t("p",[a._v("安装calico， 请参考https://docs.projectcalico.org/v3.6/getting-started/kubernetes/")])]),a._v(" "),t("p",[t("strong",[a._v("等待calico安装就绪：")])]),a._v(" "),t("p",[a._v("执行如下命令，等待3-10分钟，直到所有的容器组处于 Running 状态")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("watch")]),a._v(" kubectl get pod -n kube-system\n")])])]),t("h3",{attrs:{id:"检查-apiserver初始化结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查-apiserver初始化结果","aria-hidden":"true"}},[a._v("#")]),a._v(" 检查 apiserver初始化结果")]),a._v(" "),t("p",[a._v("在第一个master节点 demo-master-a-1 上执行")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("kubectl get nodes\n")])])]),t("h2",{attrs:{id:"初始化-worker节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化-worker节点","aria-hidden":"true"}},[a._v("#")]),a._v(" 初始化 worker节点")]),a._v(" "),t("h3",{attrs:{id:"获得-join命令参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获得-join命令参数","aria-hidden":"true"}},[a._v("#")]),a._v(" 获得 join命令参数")]),a._v(" "),t("p",[t("strong",[a._v("在 master 节点 demo-master-a-1 节点执行")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("kubeadm token create --print-join-command\n")])])]),t("p",[a._v("可获取kubeadm join 命令及参数，如下所示")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("kubeadm "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("join")]),a._v(" apiserver.demo:6443 --token mpfjma.4vjjg8flqihor4vt     --discovery-token-ca-cert-hash sha256:6f7a8e40a810323672de5eee6f4d19aa2dbdb38411845a1bf5dd63485c43d303\n")])])]),t("h3",{attrs:{id:"初始化worker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化worker","aria-hidden":"true"}},[a._v("#")]),a._v(" 初始化worker")]),a._v(" "),t("p",[t("strong",[a._v("针对所有的 worker 节点执行")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"x.x.x.x  apiserver.demo"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" /etc/hosts\nkubeadm "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("join")]),a._v(" apiserver.demo:6443 --token mpfjma.4vjjg8flqihor4vt     --discovery-token-ca-cert-hash sha256:6f7a8e40a810323672de5eee6f4d19aa2dbdb38411845a1bf5dd63485c43d303\n")])])]),t("blockquote",[t("ul",[t("li",[t("p",[a._v("将 x.x.x.x 替换为 loader balancer 的实际 ip")])]),a._v(" "),t("li",[t("p",[a._v("将 kubeadm join 命令后的参数替换为上一个步骤中实际从 demo-master-a-1 节点获得的参数")])])])]),a._v(" "),t("h3",{attrs:{id:"检查-apiserver初始化结果-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查-apiserver初始化结果-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 检查 apiserver初始化结果")]),a._v(" "),t("p",[a._v("在第一个master节点 demo-master-a-1 上执行")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("kubectl get nodes\n")])])]),t("p",[t("img",{attrs:{src:e(313),alt:"image-20190715193838012"}})]),a._v(" "),t("h2",{attrs:{id:"移除-worker-节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移除-worker-节点","aria-hidden":"true"}},[a._v("#")]),a._v(" 移除 worker 节点")]),a._v(" "),t("blockquote",[t("p",[a._v("正常情况下，您无需移除 worker 节点")])]),a._v(" "),t("p",[a._v("在准备移除的 worker 节点上执行")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("kubeadm reset\n")])])]),t("p",[a._v("在第一个 master 节点 demo-master-a-1 上执行")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("kubectl delete node demo-worker-x-x\n")])])]),t("blockquote",[t("ul",[t("li",[a._v("将 demo-worker-x-x 替换为要移除的 worker 节点的名字")]),a._v(" "),t("li",[a._v("worker 节点的名字可以通过在第一个 master 节点 demo-master-a-1 上执行 kubectl get nodes 命令获得")])])]),a._v(" "),t("h2",{attrs:{id:"安装-ingress-controller"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-ingress-controller","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装 Ingress Controller")]),a._v(" "),t("blockquote",[t("p",[a._v("ingress官方文档：https://kubernetes.io/docs/concepts/services-networking/ingress/")]),a._v(" "),t("p",[a._v("Ingress Controllers官网介绍："),t("a",{attrs:{href:"https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("本文中使用如下部署方式：https://kubernetes.github.io/ingress-nginx/deploy/baremetal/#using-a-self-provisioned-edge")]),a._v(" "),t("p",[a._v("kubernetes支持多种Ingress Controllers，本文推荐使用")]),a._v(" "),t("p",[a._v("https://github.com/nginxinc/kubernetes-ingress")])]),a._v(" "),t("h3",{attrs:{id:"在-demo-master-a-1-上执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-demo-master-a-1-上执行","aria-hidden":"true"}},[a._v("#")]),a._v(" 在 demo-master-a-1 上执行")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("kubectl apply -f https://raw.githubusercontent.com/eip-work/eip-monitor-repository/master/dashboard/nginx-ingress.yaml\n")])])]),t("h3",{attrs:{id:"配置域名解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置域名解析","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置域名解析")]),a._v(" "),t("p",[a._v("将域名 *.demo.yourdomain.com 解析到地址负载均衡服务器 的 IP 地址 z.z.z.z")]),a._v(" "),t("h3",{attrs:{id:"验证配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 验证配置")]),a._v(" "),t("p",[a._v("在浏览器访问 a.demo.yourdomain.com，将得到 404 NotFound 错误页面")])])},[],!1,null,null,null);s.default=r.exports}}]);