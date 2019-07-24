(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{274:function(a,t,s){a.exports=s.p+"assets/img/image-20190721085144545.25f25dda.png"},275:function(a,t,s){a.exports=s.p+"assets/img/image-20190721090118542.46c31055.png"},276:function(a,t,s){a.exports=s.p+"assets/img/image-20190721090753742.28d009f3.png"},277:function(a,t,s){a.exports=s.p+"assets/img/image-20190721090840925.a5231632.png"},278:function(a,t,s){a.exports=s.p+"assets/img/image-20190721090935511.80fb3864.png"},279:function(a,t,s){a.exports=s.p+"assets/img/image-20190721091005130.330e9f1d.png"},355:function(a,t,s){"use strict";s.r(t);var e=s(0),r=Object(e.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"多环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 多环境")]),a._v(" "),e("p",[a._v("在实际开发项目的过程中，我们必然会碰到如下场景：")]),a._v(" "),e("ol",[e("li",[a._v("创建一个开发环境，并在其中完成应用部署")]),a._v(" "),e("li",[a._v("创建一个测试环境，再次完成应用部署")]),a._v(" "),e("li",[a._v("创建一个准上线环境，再次完成应用部署")]),a._v(" "),e("li",[a._v("创建一个生产环境，再次完成应用部署")])]),a._v(" "),e("p",[a._v("当我们的微服务系统较为复杂时，一个环境中可能需要部署许多（几十个甚至更多）的微服务部署单元，这个时候，重复在多套环境中执行部署任务就会变得容易出错。")]),a._v(" "),e("p",[a._v("Kuboard 针对这种场景，提供了导出配置、导入配置的功能，以便运维人员可以轻易的复制多套部署环境。")]),a._v(" "),e("h2",{attrs:{id:"导出配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导出配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 导出配置")]),a._v(" "),e("h3",{attrs:{id:"前提"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前提","aria-hidden":"true"}},[a._v("#")]),a._v(" 前提")]),a._v(" "),e("p",[a._v("必须满足如下条件：")]),a._v(" "),e("ul",[e("li",[a._v("您已经通过 kuboard 的 "),e("a",{attrs:{href:"/guide/namespace/workload"}},[a._v("创建工作负载")]),a._v(" 功能完成了微服务的部署。")])]),a._v(" "),e("blockquote",[e("p",[a._v("部署微服务过程中，您还可能用到 kuboard 的配置编辑功能、Secrets 编辑功能 等。")])]),a._v(" "),e("p",[a._v("假设您已完成微服务部署，并已进入 namespace 界面，如下图所示：")]),a._v(" "),e("p",[e("img",{attrs:{src:s(274),alt:"image-20190721085144545"}})]),a._v(" "),e("h3",{attrs:{id:"操作步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤","aria-hidden":"true"}},[a._v("#")]),a._v(" 操作步骤")]),a._v(" "),e("ul",[e("li",[a._v("点击 "),e("em",[e("strong",[a._v("导出工作负载")])]),a._v(" "),e("ul",[e("li",[a._v("选择要导出的分层")]),a._v(" "),e("li",[a._v("点击 "),e("em",[e("strong",[a._v("刷新")])])]),a._v(" "),e("li",[a._v("选择要导出的工作负载")])])])]),a._v(" "),e("p",[e("img",{attrs:{src:s(275),alt:"image-20190721090118542"}})]),a._v(" "),e("ul",[e("li",[e("p",[a._v("点击 "),e("em",[e("strong",[a._v("下一步")])])]),a._v(" "),e("p",[a._v("选择要导出的配置（configMap）信息")])])]),a._v(" "),e("p",[e("img",{attrs:{src:s(276),alt:"image-20190721090753742"}})]),a._v(" "),e("ul",[e("li",[e("p",[a._v("点击 "),e("em",[e("strong",[a._v("下一步")])])]),a._v(" "),e("p",[a._v("选择要导出的 Secrets")])])]),a._v(" "),e("p",[e("img",{attrs:{src:s(277),alt:"image-20190721090840925"}})]),a._v(" "),e("ul",[e("li",[a._v("点击 "),e("em",[e("strong",[a._v("下一步")])])])]),a._v(" "),e("p",[e("img",{attrs:{src:s(278),alt:"image-20190721090935511"}})]),a._v(" "),e("ul",[e("li",[a._v("点击 "),e("em",[e("strong",[a._v("确定")])])])]),a._v(" "),e("p",[e("img",{attrs:{src:s(279),alt:"image-20190721091005130"}})]),a._v(" "),e("ul",[e("li",[e("p",[a._v("查看已导出文件")]),a._v(" "),e("p",[a._v("导出文件的命名格式为 kuboard_namespace_date_time.yaml，例如：")]),a._v(" "),e("p",[a._v("kuboard_example_2019_07_21_09_09_47.yaml")]),a._v(" "),e("p",[a._v("导出文件的内容如下所示：")]),a._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("---")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" apps/v1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" StatefulSet\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" example\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" cloud"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("eureka\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("annotations")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("k8s.eip.work/workload")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" cloud"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("eureka\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("k8s.eip.work/displayName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 服务注册\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("k8s.eip.work/service")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ClusterIP\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("k8s.eip.work/ingress")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'true'")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("labels")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("k8s.eip.work/layer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" cloud\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("k8s.eip.work/name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" cloud"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("eureka\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("selector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("matchLabels")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("k8s.eip.work/layer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" cloud\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("k8s.eip.work/name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" cloud"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("eureka\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("...")]),a._v("\n")])])])])]),a._v(" "),e("blockquote",[e("p",[a._v("该文件可以通过 kubectl apply -f 命令直接执行，但是建议使用 kuboard 进行导入，以便在导入时在线编辑在特定于新环境的配置信息。")])]),a._v(" "),e("h2",{attrs:{id:"导入配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导入配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 导入配置")]),a._v(" "),e("h3",{attrs:{id:"前提-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前提-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 前提")]),a._v(" "),e("p",[a._v("您已经通过 kuboard 导出了配置文件，或者从别处获取到 kuboard 导出的配置文件")]),a._v(" "),e("h3",{attrs:{id:"操作步骤-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 操作步骤")]),a._v(" "),e("p",[a._v("请参考 "),e("a",{attrs:{href:"/guide/example/import"}},[a._v("导入 example 微服务")])])])},[],!1,null,null,null);t.default=r.exports}}]);