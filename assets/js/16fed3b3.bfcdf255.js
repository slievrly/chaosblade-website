"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[272],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),k=r,m=u["".concat(o,".").concat(k)]||u[k]||d[k]||l;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},71403:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c}});var a=n(87462),r=(n(67294),n(3905));const l={id:"blade create k8s container-process"},s="\u6a21\u62df\u5bb9\u5668\u5185\u8fdb\u7a0b\u573a\u666f",i={unversionedId:"experiment-types/k8s/blade create k8s container-process",id:"version-1.7.1/experiment-types/k8s/blade create k8s container-process",title:"\u6a21\u62df\u5bb9\u5668\u5185\u8fdb\u7a0b\u573a\u666f",description:"\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7.1/experiment-types/k8s/blade_create_k8s_container-process.md",sourceDirName:"experiment-types/k8s",slug:"/experiment-types/k8s/blade create k8s container-process",permalink:"/docs/experiment-types/k8s/blade create k8s container-process",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.1/experiment-types/k8s/blade_create_k8s_container-process.md",tags:[],version:"1.7.1",frontMatter:{id:"blade create k8s container-process"},sidebar:"docs",previous:{title:"\u6a21\u62df\u5bb9\u5668\u5185CPU\u8d1f\u8f7d\u5b9e\u9a8c\u573a\u666f",permalink:"/docs/experiment-types/k8s/blade create k8s container-cpu"},next:{title:"\u6a21\u62df\u5bb9\u5668\u8d44\u6e90\u81ea\u8eab\u573a\u666f",permalink:"/docs/experiment-types/k8s/blade create k8s container-container"}},o={},c=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2},{value:"yaml \u914d\u7f6e\u65b9\u5f0f",id:"yaml-\u914d\u7f6e\u65b9\u5f0f",level:3},{value:"blade \u547d\u4ee4\u6267\u884c\u65b9\u5f0f",id:"blade-\u547d\u4ee4\u6267\u884c\u65b9\u5f0f",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6a21\u62df\u5bb9\u5668\u5185\u8fdb\u7a0b\u573a\u666f"},"\u6a21\u62df\u5bb9\u5668\u5185\u8fdb\u7a0b\u573a\u666f"),(0,r.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,"kubernetes \u4e0b \u5bb9\u5668\u5185\u8fdb\u7a0b\u573a\u666f\uff0c\u540c\u57fa\u7840\u8d44\u6e90\u7684\u8fdb\u7a0b\u573a\u666f"),(0,r.kt)("h2",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,r.kt)("p",null,"\u652f\u6301\u7684\u8fdb\u7a0b\u573a\u666f\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"blade create k8s container-process kill")," \u6740\u5bb9\u5668\u5185\u6307\u5b9a\u8fdb\u7a0b\uff0c\u540c ",(0,r.kt)("a",{parentName:"li",href:"/docs/experiment-types/host/blade%20create%20process%20kill"},"blade create process kill")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"blade create k8s container-process stop")," \u6302\u8d77\u5bb9\u5668\u5185\u6307\u5b9a\u8fdb\u7a0b\uff0c\u540c ",(0,r.kt)("a",{parentName:"li",href:"/docs/experiment-types/host/blade%20create%20process%20stop"},"blade create process stop"))),(0,r.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u57fa\u7840\u573a\u666f\u5404\u81ea\u6240\u9700\u7684\u53c2\u6570\u5916\uff0c\u5728 kubernetes \u73af\u5883\u4e0b\uff0c\u8fd8\u652f\u6301\u7684\u53c2\u6570\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"container-ids")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bb9\u5668ID\uff0c\u652f\u6301\u914d\u7f6e\u591a\u4e2a"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"container-names")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bb9\u5668\u540d\u79f0\uff0c\u652f\u6301\u914d\u7f6e\u591a\u4e2a"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"docker-endpoint ")),(0,r.kt)("td",{parentName:"tr",align:null},"Docker server \u5730\u5740"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u4e3a\u672c\u5730\u7684 /var/run/docker.sock")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"namespace")),(0,r.kt)("td",{parentName:"tr",align:null},"Pod \u6240\u5c5e\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u53ea\u80fd\u586b\u5199\u4e00\u4e2a\u503c\uff0c\u5fc5\u586b\u9879"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f8b\uff1a",(0,r.kt)("inlineCode",{parentName:"td"},"default"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"evict-count")),(0,r.kt)("td",{parentName:"tr",align:null},"\u9650\u5236\u5b9e\u9a8c\u751f\u6548\u7684\u6570\u91cf"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"evict-percent")),(0,r.kt)("td",{parentName:"tr",align:null},"\u9650\u5236\u5b9e\u9a8c\u751f\u6548\u6570\u91cf\u7684\u767e\u5206\u6bd4\uff0c\u4e0d\u5305\u542b %"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"labels")),(0,r.kt)("td",{parentName:"tr",align:null},"Pod \u8d44\u6e90\u6807\u7b7e\uff0c\u591a\u4e2a\u6807\u7b7e\u4e4b\u95f4\u662f\u6216\u7684\u5173\u7cfb"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"names")),(0,r.kt)("td",{parentName:"tr",align:null},"Pod \u8d44\u6e90\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kubeconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"kubeconfig \u6587\u4ef6\u5168\u8def\u5f84\uff08\u4ec5\u9650\u4f7f\u7528 blade \u547d\u4ee4\u8c03\u7528\u65f6\u4f7f\u7528\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'\u4f8b: "/root/.kube/config"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"waiting-time")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9e\u9a8c\u7ed3\u679c\u7b49\u5f85\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a 20s\uff0c\u53c2\u6570\u503c\u8981\u5305\u542b\u5355\u4f4d\uff0c\u4f8b\u5982 10s\uff0c1m"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,r.kt)("p",null,"\u6307\u5b9a default \u547d\u540d\u7a7a\u95f4\u4e0b Pod \u540d\u662f frontend-d89756ff7-tl4xl\uff0c\u5bb9\u5668id\u4e3a f1de335b4eeaf\uff0c\u8fdb\u7a0b\u540d\u4e3a top \u7684\u8fdb\u7a0b\u3002"),(0,r.kt)("h3",{id:"yaml-\u914d\u7f6e\u65b9\u5f0f"},"yaml \u914d\u7f6e\u65b9\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: chaosblade.io/v1alpha1\nkind: ChaosBlade\nmetadata:\n  name: kill-container-process-by-id\nspec:\n  experiments:\n  - scope: container\n    target: process\n    action: kill\n    desc: "kill container process by id"\n    matchers:\n    - name: container-ids\n      value:\n      - "f1de335b4eeaf"\n    - name: process\n      value: ["top"]\n    - name: names\n      value: ["frontend-d89756ff7-tl4xl"]\n')),(0,r.kt)("p",null,"\u4f8b\u5982\u914d\u7f6e\u597d\u6587\u4ef6\u540e\uff0c\u4fdd\u5b58\u4e3a kill_container_process_by_id.yaml \uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6267\u884c\u5b9e\u9a8c\u573a\u666f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl apply -f kill_container_process_by_id.yaml \n")),(0,r.kt)("p",null," \u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u6bcf\u4e2a\u5b9e\u9a8c\u7684\u6267\u884c\u72b6\u6001\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get blade kill-container-process-by-id -o json\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "apiVersion": "chaosblade.io/v1alpha1",\n   "kind": "ChaosBlade",\n   "metadata": {\n       "finalizers": [\n           "finalizer.chaosblade.io"\n       ],\n       "generation": 1,\n       "name": "kill-container-process-by-id",\n       "resourceVersion": "9438733",\n       "selfLink": "/apis/chaosblade.io/v1alpha1/chaosblades/kill-container-process-by-id",\n       "uid": "a5a597be-ff7e-11e9-a8e2-00163e08a39b"\n   },\n   "status": {\n       "expStatuses": [\n           {\n               "action": "kill",\n               "resStatuses": [\n                   {\n                       "id": "10cdc57b9c80a9f0",\n                       "kind": "container",\n                       "name": "php-redis",\n                       "nodeName": "cn-hangzhou.192.168.0.204",\n                       "state": "Success",\n                       "success": true,\n                       "uid": "f1de335b4eeaf035b8d23a87080f3d24cebc803cbb6ad15e5fe0d8567e2e8939"\n                   }\n               ],\n               "scope": "container",\n               "state": "Success",\n               "success": true,\n               "target": "process"\n           }\n       ],\n       "phase": "Running"\n   }\n}\n')),(0,r.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u505c\u6b62\u5b9e\u9a8c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl delete -f kill_container_process_by_id.yaml \n")),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c\u505c\u6b62\u5b9e\u9a8c\u4e0d\u4f1a\u6062\u590d\u5df2\u6740\u6389\u7684\u8fdb\u7a0b\uff01\uff01"),(0,r.kt)("h3",{id:"blade-\u547d\u4ee4\u6267\u884c\u65b9\u5f0f"},"blade \u547d\u4ee4\u6267\u884c\u65b9\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"blade create k8s container-process kill --process top --names frontend-d89756ff7-tl4xl --container-ids f1de335b4eeaf --namespace default --kubeconfig config\n")),(0,r.kt)("p",null,"\u5982\u679c\u6267\u884c\u5931\u8d25\uff0c\u4f1a\u8fd4\u56de\u8be6\u7ec6\u7684\u9519\u8bef\u4fe1\u606f\uff1b\u5982\u679c\u6267\u884c\u6210\u529f\uff0c\u4f1a\u8fd4\u56de\u5b9e\u9a8c\u7684 UID\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"code":200,"success":true,"result":"06d5ebae60e8fe3f"}\n')),(0,r.kt)("p",null,"\u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u8be2\u5b9e\u9a8c\u72b6\u6001\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'blade query k8s create 06d5ebae60e8fe3f --kubeconfig config\n\n{"code":200,"success":true,"result":{"uid":"06d5ebae60e8fe3f","success":true,"error":"","statuses":[{"id":"1000cbd2018e2c90","uid":"f1de335b4eeaf035b8d23a87080f3d24cebc803cbb6ad15e5fe0d8567e2e8939","name":"php-redis","state":"Success","kind":"container","success":true,"nodeName":"cn-hangzhou.192.168.0.204"}]}}\n')),(0,r.kt)("p",null,"\u9500\u6bc1\u5b9e\u9a8c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"blade destroy 06d5ebae60e8fe3f\n")),(0,r.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u505c\u6b62\u5b9e\u9a8c\u4e0d\u4f1a\u6062\u590d\u5df2\u6740\u6389\u7684\u8fdb\u7a0b\uff01\u8bf7\u8c28\u614e\u4f7f\u7528")),(0,r.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.kt)("p",null,"Q: \u5982\u679c\u72b6\u6001\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"status": {\n        "expStatuses": [\n            {\n                "action": "kill",\n                "error": "see resStatus for the error details",\n                "resStatuses": [\n                    {\n                        "kind": "container",\n                        "name": "slave",\n                        "nodeName": "cn-hangzhou.192.168.0.204",\n                        "state": "Error",\n                        "success": false,\n                        "uid": "c3175f916e87fe06c339712427758f3d51dcb38d3e71cfae168bbbdfeab86710"\n                    }\n                ],\n                "scope": "container",\n                "state": "Error",\n                "success": false,\n                "target": "process"\n            }\n        ],\n        "phase": "Error"\n    }\n')),(0,r.kt)("p",null,"A: \u5176\u5b9e\u5df2\u7ecf\u6267\u884c\uff0c\u53ea\u662f\u8fd4\u56de\u7ed3\u679c\u6709\u4e71\u7801\uff1b\u5220\u9664\u5b9e\u9a8c\uff0c\u91cd\u65b0\u6267\u884c\u5b9e\u9a8c\u5373\u53ef"),(0,r.kt)("p",null,"Q: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"status": {\n        "expStatuses": [\n            {\n                "action": "kill",\n                "error": "the resources not found",\n                "scope": "container",\n                "state": "Error",\n                "success": false,\n                "target": "process"\n            }\n        ],\n        "phase": "Error"\n    }\n')),(0,r.kt)("p",null,"A: container \u6ca1\u6709\u627e\u5230"),(0,r.kt)("p",null,"Q: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"status": {\n        "expStatuses": [\n            {\n                "action": "kill",\n                "error": "see resStatus for the error details",\n                "resStatuses": [\n                    {\n                        "error": "top process not found exit status 1",\n                        "kind": "container",\n                        "name": "php-redis",\n                        "nodeName": "cn-hangzhou.192.168.0.204",\n                        "state": "Error",\n                        "success": false,\n                        "uid": "f1de335b4eeaf035b8d23a87080f3d24cebc803cbb6ad15e5fe0d8567e2e8939"\n                    }\n                ],\n                "scope": "container",\n                "state": "Error",\n                "success": false,\n                "target": "process"\n            }\n        ],\n        "phase": "Error"\n    }\n')),(0,r.kt)("p",null,"A\uff1a\u76ee\u6807\u8fdb\u7a0b\u627e\u4e0d\u5230"),(0,r.kt)("p",null,"\u5176\u4ed6\u95ee\u9898\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/docs/experiment-types/k8s/blade%20create%20k8s"},"blade create k8s")," \u5e38\u89c1\u95ee\u9898"))}d.isMDXComponent=!0}}]);