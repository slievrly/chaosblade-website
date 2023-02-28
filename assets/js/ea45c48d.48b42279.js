"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[2618],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,g=p["".concat(c,".").concat(m)]||p[m]||s[m]||l;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},34061:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return d}});var a=n(87462),r=(n(67294),n(3905));const l={},i="\u67b6\u6784\u7bc7",o={unversionedId:"community/java-dev-guide/architecture",id:"community/java-dev-guide/architecture",title:"\u67b6\u6784\u7bc7",description:"\u672c\u7bc7\u4ecb\u7ecd chaosblade-exec-jvm \u7684\u7cfb\u7edf\u67b6\u6784\u8bbe\u8ba1\uff0c\u5206\u522b\u4ecb\u7ecd\u4e86\u4ece\u547d\u4ee4\u4e0b\u53d1\u3001\u63d2\u4ef6\u52a0\u8f7d\u3001PointCut\u5339\u914d\u3001\u6545\u969c\u6ce8\u5165\u3001\u63d2\u4ef6\u5378\u8f7d\u7684\u5b9e\u73b0\u539f\u7406\u3002",source:"@site/docs/community/java-dev-guide/architecture.md",sourceDirName:"community/java-dev-guide",slug:"/community/java-dev-guide/architecture",permalink:"/docs/next/community/java-dev-guide/architecture",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/docs/community/java-dev-guide/architecture.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Issue\u63d0\u4ea4\u548c\u5904\u7406\u89c4\u8303",permalink:"/docs/next/community/issue-standard"},next:{title:"\u6a21\u578b\u7bc7",permalink:"/docs/next/community/java-dev-guide/model"}},c={},d=[{value:"\u7cfb\u7edf\u8bbe\u8ba1",id:"\u7cfb\u7edf\u8bbe\u8ba1",level:2},{value:"\u6a21\u5757\u7ba1\u7406",id:"\u6a21\u5757\u7ba1\u7406",level:3},{value:"SandboxModule",id:"sandboxmodule",level:4},{value:"StatusManager",id:"statusmanager",level:4},{value:"ModelSpecManager",id:"modelspecmanager",level:4},{value:"ListenerManager",id:"listenermanager",level:4},{value:"RequestHandler",id:"requesthandler",level:4},{value:"\u5b9e\u73b0\u539f\u7406",id:"\u5b9e\u73b0\u539f\u7406",level:2},{value:"\u5b9e\u9a8c\u6b65\u9aa4",id:"\u5b9e\u9a8c\u6b65\u9aa4",level:3},{value:"Agent\u6302\u8f7d",id:"agent\u6302\u8f7d",level:3},{value:"Plugin\u52a0\u8f7d\u65b9\u5f0f",id:"plugin\u52a0\u8f7d\u65b9\u5f0f",level:4},{value:"PointCut\u5339\u914d",id:"pointcut\u5339\u914d",level:4},{value:"Enhancer",id:"enhancer",level:4},{value:"\u521b\u5efa\u6df7\u6c8c\u5b9e\u9a8c",id:"\u521b\u5efa\u6df7\u6c8c\u5b9e\u9a8c",level:3},{value:"ModelSpec",id:"modelspec",level:4},{value:"DirectlyInjectionAction",id:"directlyinjectionaction",level:4},{value:"\u6545\u969c\u80fd\u529b\u6ce8\u5165",id:"\u6545\u969c\u80fd\u529b\u6ce8\u5165",level:3},{value:"\u5339\u914d\u53c2\u6570\u5305\u88c5",id:"\u5339\u914d\u53c2\u6570\u5305\u88c5",level:4},{value:"\u53c2\u6570\u5339\u914d\u548c\u80fd\u529b\u6ce8\u5165\uff08Inject\u8c03\u7528\uff09",id:"\u53c2\u6570\u5339\u914d\u548c\u80fd\u529b\u6ce8\u5165inject\u8c03\u7528",level:4},{value:"\u6545\u969c\u89e6\u53d1",id:"\u6545\u969c\u89e6\u53d1",level:4},{value:"\u9500\u6bc1\u5b9e\u9a8c",id:"\u9500\u6bc1\u5b9e\u9a8c",level:3},{value:"\u5378\u8f7dAgent",id:"\u5378\u8f7dagent",level:3}],u={toc:d};function s(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u67b6\u6784\u7bc7"},"\u67b6\u6784\u7bc7"),(0,r.kt)("p",null,"\u672c\u7bc7\u4ecb\u7ecd ",(0,r.kt)("inlineCode",{parentName:"p"},"chaosblade-exec-jvm")," \u7684\u7cfb\u7edf\u67b6\u6784\u8bbe\u8ba1\uff0c\u5206\u522b\u4ecb\u7ecd\u4e86\u4ece\u547d\u4ee4\u4e0b\u53d1\u3001\u63d2\u4ef6\u52a0\u8f7d\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"PointCut"),"\u5339\u914d\u3001\u6545\u969c\u6ce8\u5165\u3001\u63d2\u4ef6\u5378\u8f7d\u7684\u5b9e\u73b0\u539f\u7406\u3002"),(0,r.kt)("h2",{id:"\u7cfb\u7edf\u8bbe\u8ba1"},"\u7cfb\u7edf\u8bbe\u8ba1"),(0,r.kt)("p",null,"Chaosblade-exec-jvm\u901a\u8fc7JavaAgent attach\u65b9\u5f0f\u6765\u5b9e\u73b0\u7c7b\u7684transform\u6ce8\u5165\u6545\u969c\uff0c\u5e95\u5c42\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/jvm-sandbox"},"jvm-sandbox"),"\u5b9e\u73b0\uff0c\u901a\u8fc7\u63d2\u4ef6\u7684\u53ef\u62d4\u63d2\u8bbe\u8ba1\u6765\u6269\u5c55\u5bf9\u4e0d\u540cjava\u5e94\u7528\u7684\u652f\u6301\uff0c\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u6269\u5c55\u63d2\u4ef6\uff0c\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/docs/next/community/java-dev-guide/plugin"},"\u5982\u4f55\u6269\u5c55\u63d2\u4ef6"),"\u3002"),(0,r.kt)("h3",{id:"\u6a21\u5757\u7ba1\u7406"},"\u6a21\u5757\u7ba1\u7406"),(0,r.kt)("h4",{id:"sandboxmodule"},"SandboxModule"),(0,r.kt)("p",null,'\u4f5c\u4e3aSandbox\uff08chaosblade\uff09\u7684\u6a21\u5757\u3001\u6240\u6709\u7684Sandbox\u4e8b\u4ef6\uff0c\u5982Agent\u6302\u8f7d\uff08\u6a21\u5757\u52a0\u8f7d\uff09\u3001Agent\u5378\u8f7d\uff08\u6a21\u5757\u5378\u8f7d\uff09\u3001\u6a21\u5757\u6fc0\u6d3b\u3001\u6a21\u5757\u51bb\u7ed3\u7b49\u90fd\u4f1a\u5728\u6b64\u89e6\u53d1\uff0cSandbox\u5185\u7f6ejetty\u5bb9\u5668\uff0c\u8bbf\u95eeapi\u56de\u8c03\u5230\u6ce8\u89e3\u4e3a@Http("/xx")\u7684\u65b9\u6cd5\uff0c\u6765\u5b9e\u73b0\u6545\u969c\u80fd\u529b\u3002'),(0,r.kt)("h4",{id:"statusmanager"},"StatusManager"),(0,r.kt)("p",null,"blade create \u547d\u4ee4\u5728StatusManager\u6ce8\u518c\u72b6\u6001\u3001\u5e76\u7ba1\u7406\u6574\u4e2a\u5b9e\u9a8c\u7684\u72b6\u6001\uff0c\u5305\u542b\u653b\u51fb\u6b21\u6570\u3001\u653b\u51fb\u7684\u767e\u5206\u6bd4\u3001\u547d\u4ee4\u53c2\u6570\u3001\u653b\u51fb\u65b9\u5f0f\uff08Action\uff09\u7b49\u3002"),(0,r.kt)("h4",{id:"modelspecmanager"},"ModelSpecManager"),(0,r.kt)("p",null,"\u7ba1\u7406\u63d2\u4ef6\u7684ModelSpec\uff0cModelSpec\u7684\u6ce8\u518c\u3001\u5378\u8f7d\u3002"),(0,r.kt)("h4",{id:"listenermanager"},"ListenerManager"),(0,r.kt)("p",null,"\u7ba1\u7406\u63d2\u4ef6\u7684\u751f\u547d\u5468\u671f\uff0c\u63d2\u4ef6\u7684\u52a0\u8f7d\u3001\u5378\u8f7d\u3002"),(0,r.kt)("h4",{id:"requesthandler"},"RequestHandler"),(0,r.kt)("p",null,'Sandbox\u5185\u7f6ejetty\u5bb9\u5668\uff0c\u8bbf\u95eeapi\u56de\u8c03\u5230\u6ce8\u89e3\u4e3a@Http("/xx")\u7684\u65b9\u6cd5\uff0c\u7531\u4e8b\u4ef6\u5206\u53d1\u5668\uff08DispatchService\uff09\u5c06\u4e8b\u4ef6\u5206\u5230RequestHandler\u5904\u7406\uff0cRequestHandler\u5206\u4e3a\u5982\u4e0b\u8868\u683c\uff08\u8868\u683c\u4e2d\u7684\u3010\u4e00\u5b9a\u6761\u4ef6\u3011\u53ef\u4ee5\u53c2\u8003\u4e0b\u9762\u7684plugin\u52a0\u8f7d\u65b9\u5f0f\uff09\uff1a'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u547d\u4ee4"),(0,r.kt)("th",{parentName:"tr",align:null},"RequestHandler"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blade create"),(0,r.kt)("td",{parentName:"tr",align:null},"CreateHandler\u521b\u5efa\u4e00\u4e2a\u5b9e\u9a8c\uff0cStatusManager\u6ce8\u518c\u72b6\u6001\uff0c\u6ee1\u8db3\u4e00\u5b9a\u6761\u4ef6\u7684\u63d2\u4ef6\u52a0\u8f7d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blade status"),(0,r.kt)("td",{parentName:"tr",align:null},"StatusHandler\u53bbStatusManager\u67e5\u8be2\u5b9e\u9a8c\u72b6\u6001\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blade destroy"),(0,r.kt)("td",{parentName:"tr",align:null},"DestroyHandler\u9500\u6bc1\u5b9e\u9a8c\uff0c\u6ee1\u8db3\u4e00\u5b9a\u6761\u4ef6\u7684\u63d2\u4ef6\u5378\u8f7d\u3002")))),(0,r.kt)("h2",{id:"\u5b9e\u73b0\u539f\u7406"},"\u5b9e\u73b0\u539f\u7406"),(0,r.kt)("p",null,"\u4ee5servlet\uff0capi\u7684\u63a5\u53e3\u5ef6\u8fdf\u4e3a\u4f8b\uff0c\u5b9e\u73b0\u539f\u7406\u5982\u4e0b\u56fe\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:" \u539f\u7406\u56fe",src:n(21567).Z,width:"1954",height:"1280"})),(0,r.kt)("h3",{id:"\u5b9e\u9a8c\u6b65\u9aa4"},"\u5b9e\u9a8c\u6b65\u9aa4"),(0,r.kt)("p",null,"\u4e0b\u9762\u901a\u8fc7\u547d\u4ee4\u7684\u62c6\u5efa\u62c6\u89e3\u4ecb\u7ecd\u6bcf\u4e2a\u6b65\u9aa4\u662f\u5982\u4f55\u5b9e\u73b0\uff0c\u4ee5servlet\uff0capi\u7684\u63a5\u53e3\u5ef6\u8fdf\u4e3a\u4f8b\uff0c\u6f14\u7ec3\u5b9e\u9a8c\u7684\u6b65\u9aa4\u5927\u81f4\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'./blade p jvm --pid 888\n{"code":200,"success":true,"result":"98e792c9a9a5dfea"}\n\n./blade create servlet --requestpath=/topic delay --time=3000\n{"code":200,"success":true,"result":"52a27bafc252beee"}\n\n./blade destroy 52a27bafc252beee\n\n./blade revoke 98e792c9a9a5dfea\n')),(0,r.kt)("h3",{id:"agent\u6302\u8f7d"},"Agent\u6302\u8f7d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./blade p jvm --pid 888\n")),(0,r.kt)("p",null,"\u8be5\u547d\u4ee4\u4e0b\u53d1\u540e\uff0c\u5c06\u5728\u76ee\u6807jvm\u8fdb\u7a0b\u6302\u5728Agent\uff0c\u89e6\u53d1SandboxModule onLoad()\u4e8b\u4ef6\uff0c\u521d\u59cb\u5316PluginLifecycleListener\u6765\u7ba1\u7406\u63d2\u4ef6\u7684\u751f\u547d\u5468\u671f\u3002"),(0,r.kt)("h4",{id:"plugin\u52a0\u8f7d\u65b9\u5f0f"},"Plugin\u52a0\u8f7d\u65b9\u5f0f"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u52a0\u8f7d\u65b9\u5f0f"),(0,r.kt)("th",{parentName:"tr",align:null},"\u52a0\u8f7d\u6761\u4ef6"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SandboxModule onActive()\u4e8b\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null},"Pointcut\u3001ClassMatcher\u3001MethodMatcher\u90fd\u4e0d\u4e3a\u7a7a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blade create\u547d\u4ee4CreateHandler"),(0,r.kt)("td",{parentName:"tr",align:null},"ModelSpect\u4e3aPreCreateInjectionModelHandler\u7c7b\u578b\uff0c\u4e14ActionFlag \u4e0d\u4e3aDirectlyInjectionAction\u7c7b\u578b")))),(0,r.kt)("p",null,"SandboxModule onActive()\u4e8b\u4ef6\uff0c\u4f1a\u6ce8\u518cModelSpec\uff1bPlugin\u52a0\u8f7d\u65f6\uff0c\u521b\u5efa\u4e8b\u4ef6\u76d1\u542c\u5668SandboxEnhancerFactory.createAfterEventListener(plugin)\uff0c\u76d1\u542c\u5668\u4f1a\u76d1\u542c\u611f\u5174\u8da3\u7684\u4e8b\u4ef6\uff0c\u5982BeforeAdvice\u3001AfterAdvice\u7b49\uff0c\u5177\u4f53\u5b9e\u73b0\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// \u52a0\u8f7d\u63d2\u4ef6\npublic void add(PluginBean plugin) {\n        PointCut pointCut = plugin.getPointCut();\n        if (pointCut == null) {\n            return;\n        }\n        String enhancerName = plugin.getEnhancer().getClass().getSimpleName();\n            // \u521b\u5efafilter PointCut\u5339\u914d\n        Filter filter = SandboxEnhancerFactory.createFilter(enhancerName, pointCut);\n   \n        if (plugin.isAfterEvent()) {\n            // \u4e8b\u4ef6\u76d1\u542c\n            int watcherId = moduleEventWatcher.watch(filter, SandboxEnhancerFactory.createAfterEventListener(plugin),\n                Type.BEFORE, Type.RETURN);\n            watchIds.put(PluginUtil.getIdentifierForAfterEvent(plugin), watcherId);\n        } else {\n            int watcherId = moduleEventWatcher.watch(\n                filter, SandboxEnhancerFactory.createBeforeEventListener(plugin), Event.Type.BEFORE);\n            watchIds.put(PluginUtil.getIdentifier(plugin), watcherId);\n        }\n    }\n")),(0,r.kt)("h4",{id:"pointcut\u5339\u914d"},"PointCut\u5339\u914d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SandboxModule onActive()\u4e8b\u4ef6\u89e6\u53d1Plugin\u52a0\u8f7d\u540e\uff0cSandboxEnhancerFactory\u521b\u5efafilter\uff0cfilter\u5185\u90e8\u901a\u8fc7PointCut\u7684ClassMatcher\u548cMethodMatcher\u8fc7\u6ee4\u3002")),(0,r.kt)("h4",{id:"enhancer"},"Enhancer"),(0,r.kt)("p",null,"\u5982\u679c\u5df2\u7ecf\u52a0\u8f7d\u63d2\u4ef6\uff0c\u6b64\u65f6\u76ee\u6807\u5e94\u7528\u5339\u914d\u80fd\u5339\u914d\u5230filter\u540e\uff0cEventListener\u5df2\u7ecf\u53ef\u4ee5\u88ab\u89e6\u53d1\uff0c\u4f46\u662fchaosblade-exec-jvm\u5185\u90e8\u901a\u8fc7StatusManager\u7ba1\u7406\u72b6\u6001\uff0c\u6240\u4ee5\u6545\u969c\u80fd\u529b\u4e0d\u4f1a\u88ab\u89e6\u53d1\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982BeforeEventListener\u89e6\u53d1\u8c03\u7528BeforeEnhancer\u7684beforeAdvice\u65b9\u6cd5\uff0c\u5728ManagerFactory.getStatusManager().expExists(targetName)\u5224\u65ad\u65f6\u5019\u88ab\u4e2d\u65ad\uff0c\u5177\u4f53\u7684\u5b9e\u73b0\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"com.alibaba.chaosblade.exec.common.aop.BeforeEnhancer\n\npublic void beforeAdvice(String targetName, \n            ClassLoader classLoader, \n            String className,\n            Object object,\n            Method method, \n            Object[] methodArguments) throws Exception {\n            // StatusManager \n        if (!ManagerFactory.getStatusManager().expExists(targetName)) {\n            return;\n        }\n        EnhancerModel model = doBeforeAdvice(classLoader, className, object, method, methodArguments);\n        if (model == null) {\n            return;\n        }\n        model.setTarget(targetName).setMethod(method).setObject(object).setMethodArguments(methodArguments);\n        Injector.inject(model);\n    }\n")),(0,r.kt)("h3",{id:"\u521b\u5efa\u6df7\u6c8c\u5b9e\u9a8c"},"\u521b\u5efa\u6df7\u6c8c\u5b9e\u9a8c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./blade create servlet --requestpath=/topic delay --time=3000\n")),(0,r.kt)("p",null,'\u8be5\u547d\u4ee4\u4e0b\u53d1\u540e\uff0c\u89e6\u53d1SandboxModule @Http("/create")\u6ce8\u89e3\u6807\u8bb0\u7684\u65b9\u6cd5\uff0c\u5c06\u4e8b\u4ef6\u5206\u53d1\u7ed9com.alibaba.chaosblade.exec.service.handler.CreateHandler\u5904\u7406\n\u5728\u5224\u65ad\u5fc5\u8981\u7684uid\u3001target\u3001action\u3001model\u53c2\u6570\u540e\u8c03\u7528handleInjection\uff0chandleInjection\u901a\u8fc7\u72b6\u6001\u7ba1\u7406\u5668\u6ce8\u518c\u672c\u6b21\u5b9e\u9a8c\uff0c\u5982\u679c\u63d2\u4ef6\u7c7b\u578b\u662fPreCreateInjectionModelHandler\u7684\u7c7b\u578b\uff0c\u5c06\u9884\u5904\u7406\u4e00\u4e9b\u4e1c\u897f\u3002\u540c\u662f\u5982\u679cAction\u7c7b\u578b\u662fDirectlyInjectionAction\uff0c\u90a3\u4e48\u5c06\u76f4\u63a5\u8fdb\u884c\u6545\u969c\u80fd\u529b\u6ce8\u5165\uff0c\u5982jvm oom\u7b49\uff0c\u5982\u679c\u4e0d\u662f\u90a3\u4e48\u5c06\u52a0\u8f7d\u63d2\u4ef6\u3002'),(0,r.kt)("h4",{id:"modelspec"},"ModelSpec"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PreCreateInjectionModelHandler\t\u9884\u521b\u5efa"),(0,r.kt)("li",{parentName:"ul"},"PreDestroyInjectionModelHandler\t\u9884\u9500\u6bc1")),(0,r.kt)("h4",{id:"directlyinjectionaction"},"DirectlyInjectionAction"),(0,r.kt)("p",null,"\u5982\u679cModelSpec\u662fPreCreateInjectionModelHandler\u7c7b\u578b\uff0c\u4e14ActionSpec\u7684\u7c7b\u578b\u662fDirectlyInjectionAction\u7c7b\u578b\uff0c\u5c06\u76f4\u63a5\u8fdb\u884c\u6545\u969c\u80fd\u529b\u6ce8\u5165\uff0c\u6bd4\u5982JvmOom\u6545\u969c\u80fd\u529b\uff0cActionSpec\u7684\u7c7b\u578b\u4e0d\u662fDirectlyInjectionAction\u7c7b\u578b\uff0c\u5c06\u52a0\u8f7d\u63d2\u4ef6\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"DirectlyInjectionAction"),(0,r.kt)("th",{parentName:"tr",align:null},"Not DirectlyInjectionAction"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PreCreateInjectionModelHandler\uff08ModelSpec\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76f4\u63a5\u8fdb\u884c\u6545\u969c\u80fd\u529b\u6ce8\u5165"),(0,r.kt)("td",{parentName:"tr",align:null},"\u52a0\u8f7d\u63d2\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PreDestroyInjectionModelHandler\uff08ModelSpec\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u505c\u6b62\u6545\u969c\u80fd\u529b\u6ce8\u5165"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5378\u8f7d\u63d2\u4ef6")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private Response handleInjection(String suid, Model model, ModelSpec modelSpec) {\n                // \u6ce8\u518c\n        RegisterResult result = this.statusManager.registerExp(suid, model);\n        if (result.isSuccess()) {\n            // handle injection\n            try {\n                applyPreInjectionModelHandler(suid, modelSpec, model);\n            } catch (ExperimentException ex) {\n                this.statusManager.removeExp(suid);\n                return Response.ofFailure(Response.Code.SERVER_ERROR, ex.getMessage());\n            }\n\n            return Response.ofSuccess(model.toString());\n        }\n        return Response.ofFailure(Response.Code.DUPLICATE_INJECTION, "the experiment exists");\n    }\n')),(0,r.kt)("p",null,"\u6ce8\u518c\u6210\u529f\u540e\u8fd4\u56deuid\uff0c\u5982\u679c\u672c\u9636\u6bb5\u76f4\u63a5\u8fdb\u884c\u6545\u969c\u80fd\u529b\u6ce8\u5165\u4e86\uff0c\u6216\u8005\u81ea\u5b9a\u4e49Enhancer advice\u8fd4\u56denull\uff0c\u90a3\u4e48\u540e\u4e0d\u901a\u8fc7Inject\u7c7b\u89e6\u53d1\u6545\u969c\u3002"),(0,r.kt)("h3",{id:"\u6545\u969c\u80fd\u529b\u6ce8\u5165"},"\u6545\u969c\u80fd\u529b\u6ce8\u5165"),(0,r.kt)("p",null,"\u6545\u969c\u80fd\u529b\u6ce8\u5165\u7684\u65b9\u5f0f\uff0c\u6700\u7ec8\u90fd\u662f\u8c03\u7528ActionExecutor\u6267\u884c\u6545\u969c\u80fd\u529b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7Inject\u6ce8\u5165\u3002"),(0,r.kt)("li",{parentName:"ul"},"DirectlyInjectionAction\u76f4\u63a5\u6ce8\u5165\uff0c\u76f4\u63a5\u6ce8\u5165\u4e0d\u8fdb\u8fc7Inject\u7c7b\u8c03\u7528\u9636\u6bb5\uff0c\u5982\u679cjvm oom\u7b49\u3002")),(0,r.kt)("p",null,"DirectlyInjectionAction\u76f4\u63a5\u6ce8\u5165\u4e0d\u7ecf\u8fc7Enhancer\u53c2\u6570\u5305\u88c5\u5339\u914d\u76f4\u63a5\u5230\u6545\u969c\u89e6\u53d1ActionExecutor\u6267\u884c\u9636\u6bb5\uff0c\u5982\u679c\u662fInject\u6ce8\u5165\u6b64\u65f6\u56e0\u4e3aStatusManager\u5df2\u7ecf\u6ce8\u518c\u4e86\u5b9e\u9a8c\uff0c\u5f53\u4e8b\u4ef6\u518d\u6b21\u51fa\u53d1\u540eManagerFactory.getStatusManager().expExists(targetName)\u7684\u5224\u65ad\u4e0d\u4f1a\u88ab\u4e2d\u65ad\uff0c\u7ee7\u7eed\u5f80\u4e0b\u8d70\uff0c\u5230\u4e86\u81ea\u5b9a\u4e49\u7684Enhancer\uff0c\u5728\u81ea\u5b9a\u4e49\u7684Enhancer\u91cc\u9762\u53ef\u4ee5\u62ff\u5230\u539f\u65b9\u6cd5\u7684\u53c2\u6570\u3001\u7c7b\u578b\u7b49\uff0c\u751a\u81f3\u53ef\u4ee5\u53cd\u5c04\u8c03\u539f\u7c7b\u578b\u7684\u5176\u4ed6\u65b9\u6cd5\uff0c\u8fd9\u6837\u505a\u98ce\u9669\u8f83\u5927\uff0c\u4e00\u822c\u5728\u8fd9\u91cc\u5f80\u5f80\u662f\u53d6\u4e00\u4e9b\u6210\u5458\u53d8\u91cf\u6216\u8005get\u65b9\u6cd5\u7b49\uff0c\u7528\u6237\u540e\u7eed\u53c2\u6570\u5339\u914d\u3002"),(0,r.kt)("h4",{id:"\u5339\u914d\u53c2\u6570\u5305\u88c5"},"\u5339\u914d\u53c2\u6570\u5305\u88c5"),(0,r.kt)("p",null,"\u81ea\u5b9a\u4e49\u7684Enhancer\uff0c\u5982ServletEnhancer\uff0c\u628a\u4e00\u4e9b\u9700\u8981\u4e0e\u547d\u4ee4\u884c\u5339\u914d\u7684\u53c2\u6570 \u5305\u88c5\u5728MatcherModel\u91cc\u9762\uff0c\u7136\u540e\u5305\u88c5EnhancerModel\u8fd4\u56de\uff0c\u6bd4\u5982  --requestpath = /index\uff0c\u90a3\u4e48requestpath\u7b49\u4e8erequestURI\u53bb\u9664contextPath\u3002\u53c2\u6570\u5339\u914d\u5728 Injector.inject(model)\u9636\u6bb5\u5224\u65ad\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class ServletEnhancer extends BeforeEnhancer {\n\n    private static final Logger LOOGER = LoggerFactory.getLogger(ServletEnhancer.class);\n\n    @Override\n    public EnhancerModel doBeforeAdvice(ClassLoader classLoader, String className, Object object,\n                                        Method method, Object[] methodArguments)\n        throws Exception {\n        // \u83b7\u53d6\u539f\u65b9\u6cd5\u7684\u4e00\u4e9b\u53c2\u6570\n        Object request = methodArguments[0];\n        String queryString = ReflectUtil.invokeMethod(request, "getQueryString", new Object[] {}, false);\n        String contextPath = ReflectUtil.invokeMethod(request, "getContextPath", new Object[] {}, false);\n        String requestURI = ReflectUtil.invokeMethod(request, "getRequestURI", new Object[] {}, false);\n        String requestMethod = ReflectUtil.invokeMethod(request, "getMethod", new Object[] {}, false);\n\n        String requestPath = StringUtils.isBlank(contextPath) ? requestURI : requestURI.replaceFirst(contextPath, "");\n\n        // \n        MatcherModel matcherModel = new MatcherModel();\n        matcherModel.add(ServletConstant.QUERY_STRING_KEY, queryString);\n        matcherModel.add(ServletConstant.METHOD_KEY, requestMethod);\n        matcherModel.add(ServletConstant.REQUEST_PATH_KEY, requestPath);\n        return new EnhancerModel(classLoader, matcherModel);\n    }\n}\n')),(0,r.kt)("h4",{id:"\u53c2\u6570\u5339\u914d\u548c\u80fd\u529b\u6ce8\u5165inject\u8c03\u7528"},"\u53c2\u6570\u5339\u914d\u548c\u80fd\u529b\u6ce8\u5165\uff08Inject\u8c03\u7528\uff09"),(0,r.kt)("p",null,"inject\u9636\u6bb5\u9996\u5148\u83b7\u53d6StatusManager\u6ce8\u518c\u7684\u5b9e\u9a8c\uff0ccompare(model, enhancerModel)\u7ecf\u5e38\u53c2\u6570\u6bd4\u5bf9\uff0c\u5931\u8d25\u540ereturn\uff0climitAndIncrease(statusMetric)\u5224\u65ad --effect-count --effect-percent\u6765\u63a7\u5236\u5f71\u54cd\u7684\u6b21\u6570\u548c\u767e\u5206\u6bd4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public static void inject(EnhancerModel enhancerModel) throws InterruptProcessException {\n        String target = enhancerModel.getTarget();\n        List<StatusMetric> statusMetrics = ManagerFactory.getStatusManager().getExpByTarget(\n            target);\n        for (StatusMetric statusMetric : statusMetrics) {\n            Model model = statusMetric.getModel();\n            if (!compare(model, enhancerModel)) {\n                continue;\n            }\n            try {\n                boolean pass = limitAndIncrease(statusMetric);\n                if (!pass) {\n                    LOGGER.info("Limited by: {}", JSON.toJSONString(model));\n                    break;\n                }\n                LOGGER.info("Match rule: {}", JSON.toJSONString(model));\n                enhancerModel.merge(model);\n                ModelSpec modelSpec = ManagerFactory.getModelSpecManager().getModelSpec(target);\n                ActionSpec actionSpec = modelSpec.getActionSpec(model.getActionName());\n                actionSpec.getActionExecutor().run(enhancerModel);\n            } catch (InterruptProcessException e) {\n                throw e;\n            } catch (UnsupportedReturnTypeException e) {\n                LOGGER.warn("unsupported return type for return experiment", e);\n                statusMetric.decrease();\n            } catch (Throwable e) {\n                LOGGER.warn("inject exception", e);          \n                statusMetric.decrease();\n            }\n            break;\n        }\n    }\n')),(0,r.kt)("h4",{id:"\u6545\u969c\u89e6\u53d1"},"\u6545\u969c\u89e6\u53d1"),(0,r.kt)("p",null,"\u7531Inject\u89e6\u53d1\uff0c\u6216\u8005\u6709DirectlyInjectionAction\u76f4\u63a5\u89e6\u53d1\uff0c\u6700\u540e\u8c03\u7528\u81ea\u5b9a\u4e49\u7684ActionExecutor\u751f\u6210\u6545\u969c\uff0c\u5982 DefaultDelayExecutor\uff0c\u6b64\u65f6\u6545\u969c\u80fd\u529b\u5df2\u7ecf\u751f\u6548\u4e86\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public void run(EnhancerModel enhancerModel) throws Exception {\n    String time = enhancerModel.getActionFlag(timeFlagSpec.getName());\n    Integer sleepTimeInMillis = Integer.valueOf(time);\n    int offset = 0;\n    String offsetTime = enhancerModel.getActionFlag(timeOffsetFlagSpec.getName());\n    if (!StringUtil.isBlank(offsetTime)) {\n        offset = Integer.valueOf(offsetTime);\n    }\n    TimeoutExecutor timeoutExecutor = enhancerModel.getTimeoutExecutor();\n    if (timeoutExecutor != null) {\n        long timeoutInMillis = timeoutExecutor.getTimeoutInMillis();\n        if (timeoutInMillis > 0 && timeoutInMillis < sleepTimeInMillis) {\n            sleep(timeoutInMillis, 0);\n            timeoutExecutor.run(enhancerModel);\n            return;\n        }\n    }\n    sleep(sleepTimeInMillis, offset);\n}\n\npublic void sleep(long timeInMillis, int offsetInMillis) {\n        Random random = new Random();\n        int offset = 0;\n        if (offsetInMillis > 0) {\n            offset = random.nextInt(offsetInMillis);\n        }\n        if (offset % 2 == 0) {\n            timeInMillis = timeInMillis + offset;\n        } else {\n            timeInMillis = timeInMillis - offset;\n        }\n        if (timeInMillis <= 0) {\n            timeInMillis = offsetInMillis;\n        }\n        try {\n            // \u89e6\u53d1\u5ef6\u8fdf\n            TimeUnit.MILLISECONDS.sleep(timeInMillis);\n        } catch (InterruptedException e) {\n            LOGGER.error("running delay action interrupted", e);\n        }\n    }\n')),(0,r.kt)("h3",{id:"\u9500\u6bc1\u5b9e\u9a8c"},"\u9500\u6bc1\u5b9e\u9a8c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./blade destroy 52a27bafc252beee\n")),(0,r.kt)("p",null,'\u8be5\u547d\u4ee4\u4e0b\u53d1\u540e\uff0c\u89e6\u53d1SandboxModule @Http("/destory")\u6ce8\u89e3\u6807\u8bb0\u7684\u65b9\u6cd5\uff0c\u5c06\u4e8b\u4ef6\u5206\u53d1\u7ed9com.alibaba.chaosblade.exec.service.handler.DestroyHandler\u5904\u7406\u3002\u6ce8\u9500\u672c\u6b21\u6545\u969c\u7684\u72b6\u6001\u3002'),(0,r.kt)("p",null,"\u5982\u679c\u63d2\u4ef6\u7684ModelSpec\u662fPreDestroyInjectionModelHandler\u7c7b\u578b\uff0c\u4e14ActionSpec\u7684\u7c7b\u578b\u662fDirectlyInjectionAction\u7c7b\u578b\uff0c\u505c\u6b62\u6545\u969c\u80fd\u529b\u6ce8\u5165\uff0cActionSpec\u7684\u7c7b\u578b\u4e0d\u662fDirectlyInjectionAction\u7c7b\u578b\uff0c\u5c06\u5378\u8f7d\u63d2\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public Response handle(Request request) {\n        String uid = request.getParam("suid");\n        String target = request.getParam("target");\n        String action = request.getParam("action");\n        if (StringUtil.isBlank(uid)) {\n            if (StringUtil.isBlank(target) || StringUtil.isBlank(action)) {\n                return Response.ofFailure(Code.ILLEGAL_PARAMETER, "less necessary parameters, such as uid, target and"\n                    + " action");\n            }\n            // \u6ce8\u9500status\n            return destroy(target, action);\n        }\n        return destroy(uid);\n    }\n')),(0,r.kt)("h3",{id:"\u5378\u8f7dagent"},"\u5378\u8f7dAgent"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./blade revoke 98e792c9a9a5dfea\n")),(0,r.kt)("p",null,"\u8be5\u547d\u4ee4\u4e0b\u53d1\u540e\uff0c\u89e6\u53d1SandboxModule unload()\u4e8b\u4ef6\uff0c\u540c\u662f\u63d2\u4ef6\u5378\u8f7d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public void onUnload() throws Throwable {\n    LOGGER.info("unload chaosblade module");\n    dispatchService.unload();\n    ManagerFactory.unload();\n    watchIds.clear();\n    LOGGER.info("unload chaosblade module successfully");\n}\n')))}s.isMDXComponent=!0},21567:function(e,t,n){t.Z=n.p+"assets/images/delay-design-f25365fb1ffd248dd37937f3bda9208d.jpg"}}]);