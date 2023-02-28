"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[3357],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,h=s["".concat(o,".").concat(m)]||s[m]||d[m]||l;return n?a.createElement(h,c(c({ref:t},u),{},{components:n})):a.createElement(h,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<l;p++)c[p]=n[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},47561:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p}});var a=n(87462),r=(n(67294),n(3905));const l={},c=void 0,i={unversionedId:"community/java-dev-guide/plugin",id:"version-1.7.1/community/java-dev-guide/plugin",title:"plugin",description:"\u63d2\u4ef6\u7bc7",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7.1/community/java-dev-guide/plugin.md",sourceDirName:"community/java-dev-guide",slug:"/community/java-dev-guide/plugin",permalink:"/docs/community/java-dev-guide/plugin",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.1/community/java-dev-guide/plugin.md",tags:[],version:"1.7.1",frontMatter:{},sidebar:"docs",previous:{title:"\u6a21\u578b\u7bc7",permalink:"/docs/community/java-dev-guide/model"},next:{title:"\u5b57\u8282\u7801\u7bc7",permalink:"/docs/community/java-dev-guide/bytecode"}},o={},p=[{value:"\u63d2\u4ef6\u7bc7",id:"\u63d2\u4ef6\u7bc7",level:2},{value:"\u63d2\u4ef6\u7684\u4ecb\u7ecd",id:"\u63d2\u4ef6\u7684\u4ecb\u7ecd",level:2},{value:"\u8c03\u7528\u63d2\u4ef6\u7684\u65f6\u5e8f\u56fe",id:"\u8c03\u7528\u63d2\u4ef6\u7684\u65f6\u5e8f\u56fe",level:2},{value:"\u63d2\u4ef6\u6269\u5c55\u7684\u6b65\u9aa4",id:"\u63d2\u4ef6\u6269\u5c55\u7684\u6b65\u9aa4",level:2},{value:"1\u3001\u65b0\u5efa\u4e00\u4e2a\u5de5\u7a0b",id:"1\u65b0\u5efa\u4e00\u4e2a\u5de5\u7a0b",level:3},{value:"2\u3001\u81ea\u5b9a\u4e49Enhancer",id:"2\u81ea\u5b9a\u4e49enhancer",level:3},{value:"3\u3001\u81ea\u5b9a\u4e49PointCut",id:"3\u81ea\u5b9a\u4e49pointcut",level:3},{value:"4\u3001\u81ea\u5b9a\u4e49Spec",id:"4\u81ea\u5b9a\u4e49spec",level:3},{value:"ModelSpec",id:"modelspec",level:4},{value:"ActionSpec",id:"actionspec",level:4},{value:"FlagSpec",id:"flagspec",level:4},{value:"ActionExecutor",id:"actionexecutor",level:4},{value:"5\u3001\u81ea\u5b9a\u4e49Plugin",id:"5\u81ea\u5b9a\u4e49plugin",level:3},{value:"\u6253\u5305\u548c\u6267\u884c",id:"\u6253\u5305\u548c\u6267\u884c",level:2},{value:"\u51c6\u5907",id:"\u51c6\u5907",level:3},{value:"\u6df7\u6c8c\u5b9e\u9a8c",id:"\u6df7\u6c8c\u5b9e\u9a8c",level:3},{value:"\u5378\u8f7dagent",id:"\u5378\u8f7dagent",level:3}],u={toc:p};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63d2\u4ef6\u7bc7"},"\u63d2\u4ef6\u7bc7"),(0,r.kt)("p",null,"\u672c\u7bc7\u4ecb\u7ecd ",(0,r.kt)("inlineCode",{parentName:"p"},"chaosblade-exec-jvm")," \u63d2\u4ef6\u7684\u6269\u5c55\u548c\u4f7f\u7528\u3002"),(0,r.kt)("h2",{id:"\u63d2\u4ef6\u7684\u4ecb\u7ecd"},"\u63d2\u4ef6\u7684\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u4e00\u4e2a\u7b80\u5355\u7684\u63d2\u4ef6\u5305\u542b",(0,r.kt)("inlineCode",{parentName:"p"},"Plugin"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"PointCut"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Enhancer"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"ModelSpec"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"ActionSpec"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"ActionExecutor")),(0,r.kt)("h2",{id:"\u8c03\u7528\u63d2\u4ef6\u7684\u65f6\u5e8f\u56fe"},"\u8c03\u7528\u63d2\u4ef6\u7684\u65f6\u5e8f\u56fe"),(0,r.kt)("p",null,"\u4e00\u4e2a\u7b80\u5355\u7684\u63d2\u4ef6\u8c03\u7528\u7684\u987a\u5e8f\u56fe\uff0c\u975e",(0,r.kt)("inlineCode",{parentName:"p"},"DirectlyInjectionAction"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"ActionFlag"),"\u3002\n",(0,r.kt)("img",{alt:"\u65f6\u5e8f\u56fe",src:n(62270).Z,width:"1521",height:"793"})),(0,r.kt)("h2",{id:"\u63d2\u4ef6\u6269\u5c55\u7684\u6b65\u9aa4"},"\u63d2\u4ef6\u6269\u5c55\u7684\u6b65\u9aa4"),(0,r.kt)("p",null,"\u9996\u5148 fork\t ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade-exec-jvm"},"chaosblade-exec-jvm")),(0,r.kt)("h3",{id:"1\u65b0\u5efa\u4e00\u4e2a\u5de5\u7a0b"},"1\u3001\u65b0\u5efa\u4e00\u4e2a\u5de5\u7a0b"),(0,r.kt)("p",null,"\u5728chaosblade-exec-plugin\u6a21\u5757\u4e0b\u65b0\u5efa\u5b50\u6a21\u5757\uff0c\u5982chaosblade-exec-plugin-servlet"),(0,r.kt)("h3",{id:"2\u81ea\u5b9a\u4e49enhancer"},"2\u3001\u81ea\u5b9a\u4e49Enhancer"),(0,r.kt)("p",null,"\u4f8b\u5982ServletEnhancer\uff0c\u83b7\u53d6ContextPath\u3001RequestURI\u3001Method\u7b49\uff0c\u5c06\u83b7\u53d6\u5230\u7684\u53c2\u6570\u653e\u5230MatcherModel\uff0c\u8fd4\u56deEnhancerModel\uff0cInject\u9636\u6bb5\u4f1a\u4e0e\u8f93\u5165\u7684\u53c2\u6570\u505a\u6bd4\u5bf9\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class ServletEnhancer extends BeforeEnhancer {\n\n    @Override\n    public EnhancerModel doBeforeAdvice(ClassLoader classLoader, \n                                        String className, \n                                        Object object,\n                                        Method method, \n                                        Object[] methodArguments\n                                        ) throws Exception {\n        Object request = methodArguments[0];\n        // \u6267\u884c\u88ab\u589e\u5f3a\u7c7b\u7684\u65b9\u6cd5\uff0c\u83b7\u53d6\u4e00\u4e9b\u9700\u8981\u7684\u503c\n        String queryString = ReflectUtil.invokeMethod(request, "getQueryString", new Object[] {}, false);\n        String contextPath = ReflectUtil.invokeMethod(request, "getContextPath", new Object[] {}, false);\n        String requestURI = ReflectUtil.invokeMethod(request, "getRequestURI", new Object[] {}, false);\n        String requestMethod = ReflectUtil.invokeMethod(request, "getMethod", new Object[] {}, false);\n\n        String requestPath = StringUtils.isBlank(contextPath) ? requestURI : requestURI.replaceFirst(contextPath, "");\n\n        MatcherModel matcherModel = new MatcherModel();\n        matcherModel.add(ServletConstant.QUERY_STRING_KEY, queryString);\n        matcherModel.add(ServletConstant.METHOD_KEY, requestMethod);\n        matcherModel.add(ServletConstant.REQUEST_PATH_KEY, requestPath);\n\n        return new EnhancerModel(classLoader, matcherModel);\n    }\n}\n')),(0,r.kt)("p",null,"\u9700\u4e0d\u540c\u7684\u901a\u77e5\u53ef\u7ee7\u627f\u4e0d\u540c\u7684\u7c7b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"beforeAdvice\uff1a\u7ee7\u627fcom.alibaba.chaosblade.exec.common.aop.BeforeEnhancer"),(0,r.kt)("li",{parentName:"ul"},"afterAdvice\uff1a\u7ee7\u627fcom.alibaba.chaosblade.exec.common.aop.AfterEnhancer")),(0,r.kt)("h3",{id:"3\u81ea\u5b9a\u4e49pointcut"},"3\u3001\u81ea\u5b9a\u4e49PointCut"),(0,r.kt)("p",null,"\u4f8b\u5982ServletPointCut\u62e6\u622a\u7c7b\uff1aspring\u7684FrameworkServlet\u3001webx\u7684WebxFrameworkFilter\u3001\u53ca\u7236\u7c7b\u4e3aHttpServletBean\u6216HttpServlet\u7684\u5b50\u7c7b\u3002"),(0,r.kt)("p",null,"\u62e6\u622a\u65b9\u6cd5\uff1adoGet\u3001doPost\u3001doDelete\u3001doPut\u3001doFilter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class ServletPointCut implements PointCut {\n\n    public static final String SPRING_FRAMEWORK_SERVLET = "org.springframework.web.servlet.FrameworkServlet";\n    public static final String ALIBABA_WEBX_FRAMEWORK_FILTER = "com.alibaba.citrus.webx.servlet.WebxFrameworkFilter";\n    public static final String SPRING_HTTP_SERVLET_BEAN = "org.springframework.web.servlet.HttpServletBean";\n    public static final String HTTP_SERVLET = "javax.servlet.http.HttpServlet";\n\n    public static Set<String> enhanceMethodSet = new HashSet<String>();\n    public static Set<String> enhanceMethodFilterSet = new HashSet<String>();\n\n    static {\n        enhanceMethodSet.add("doGet");\n        enhanceMethodSet.add("doPost");\n        enhanceMethodSet.add("doDelete");\n        enhanceMethodSet.add("doPut");\n        enhanceMethodFilterSet.add("doFilter");\n    }\n\n    @Override\n    public ClassMatcher getClassMatcher() {\n        OrClassMatcher orClassMatcher = new OrClassMatcher();\n        orClassMatcher.or(new NameClassMatcher(SPRING_FRAMEWORK_SERVLET)).or(\n            new NameClassMatcher(ALIBABA_WEBX_FRAMEWORK_FILTER)).or(\n            new SuperClassMatcher(SPRING_HTTP_SERVLET_BEAN, HTTP_SERVLET));\n        return orClassMatcher;\n    }\n\n    @Override\n    public MethodMatcher getMethodMatcher() {\n        AndMethodMatcher andMethodMatcher = new AndMethodMatcher();\n        OrMethodMatcher orMethodMatcher = new OrMethodMatcher();\n        orMethodMatcher.or(new ManyNameMethodMatcher(enhanceMethodSet)).or(new ManyNameMethodMatcher\n            (enhanceMethodFilterSet));\n        andMethodMatcher.and(orMethodMatcher).and(new ParameterMethodMatcher(1, ParameterMethodMatcher.GREAT_THAN));\n        return andMethodMatcher;\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7ee7\u627fcom.alibaba.chaosblade.exec.common.aop.PointCut"),(0,r.kt)("li",{parentName:"ul"},"getClassMatcher\uff1a\u7c7b\u5339\u914d",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"SuperClassMatcher\uff1a\u7236\u7c7b\u540d\u79f0\u5339\u914d"),(0,r.kt)("li",{parentName:"ul"},"OrClassMatcher\uff1a\u591a\u4e2a\u5339\u914d"),(0,r.kt)("li",{parentName:"ul"},"NameClassMatcher\uff1a\u7c7b\u540d\u5339\u914d"))),(0,r.kt)("li",{parentName:"ul"},"getMethodMatcher\uff1a\u7c7b\u65b9\u6cd5\u5339\u914d",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ManyNameMethodMatcher\uff1a\u65b9\u6cd5\u540d\u96c6\u5408"),(0,r.kt)("li",{parentName:"ul"},"NameMethodMatcher\uff1a\u65b9\u6cd5\u540d\u79f0\u5339\u914d"),(0,r.kt)("li",{parentName:"ul"},"OrMethodMatcher\uff1a\u591a\u4e2a\u65b9\u6cd5\u5339\u914d"),(0,r.kt)("li",{parentName:"ul"},"AndMethodMatcher\uff1a\u591a\u6761\u4ef6\u5339\u914d"),(0,r.kt)("li",{parentName:"ul"},"ParameterMethodMatcher\uff1a\u53c2\u6570\u5339\u914d")))),(0,r.kt)("h3",{id:"4\u81ea\u5b9a\u4e49spec"},"4\u3001\u81ea\u5b9a\u4e49Spec"),(0,r.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff1a\u547d\u4ee4","[./blade create servlet delay --time=3000]"," \u5bf9\u4e8e\u547d\u4ee4\u800c\u8a00\u4e3b\u8981\u5206\u4e3aphases\u3001target\u3001action\u3001flag\uff0cphases\u76f8\u5bf9\u63d2\u4ef6\u800c\u8a00\u4e0d\u9700\u8981\u5f88\u5f3a\u7684\u7075\u6d3b\u6027\uff0c\u56e0\u6b64\u7531chaosblade-exec-service\u6a21\u5757\u7ba1\u7406\uff0c\u5bf9\u4e8e\u81ea\u5b9a\u4e49\u63d2\u4ef6\u53ea\u9700\u8981\u6269\u5c55ModelSpec(target)\u3001action\u3001 flag\u3002\n",(0,r.kt)("img",{src:n(69126).Z,width:"1596",height:"438"})),(0,r.kt)("h4",{id:"modelspec"},"ModelSpec"),(0,r.kt)("p",null,"ModelSpec\u7684getTarget()\u65b9\u6cd5\u5bf9\u4e8e\u547d\u4ee4\u4e2dtarget\u90e8\u5206\u7684\u540d\u79f0\uff0c\u5982servlet\u3001dubbo\u7b49\uff0ccreateNewMatcherSpecs()\u65b9\u6cd5\u6dfb\u52a0ModelSpec\u4e0b\u7684FlagSpec\uff0c\u4f8b\u5982ServletModelSpec\u7684getTarget()\u8fd4\u56deservlet\uff0ccreateNewMatcherSpecs()\u5305\u542b\u5f88\u591aflagSpec\uff0c\u90a3\u4e48ModelSpec\u652f\u6301\u7684\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,"./blade create servlet --method=post --requestpath=/index --contextpath=/shop "),(0,r.kt)("p",null,"--\u53c2\u6570\u53ef\u4efb\u610f\u7ec4\u5408\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class ServletModelSpec extends FrameworkModelSpec {\n\n    @Override\n    public String getTarget() {\n        return "servlet";\n    }\n\n    @Override\n    public String getShortDesc() {\n        return "java servlet experiment";\n    }\n\n    @Override\n    public String getLongDesc() {\n        return "Java servlet experiment, support path, query string, context path and request method matcher";\n    }\n\n    @Override\n    public String getExample() {\n        return "servlet --requestpath /hello --method post";\n    }\n\n    @Override\n    protected List<MatcherSpec> createNewMatcherSpecs() {\n        ArrayList<MatcherSpec> matcherSpecs = new ArrayList<MatcherSpec>();\n        matcherSpecs.add(new ServletContextPathMatcherSpec());\n        matcherSpecs.add(new ServletQueryStringMatcherSpec());\n        matcherSpecs.add(new ServletMethodMatcherSpec());\n        matcherSpecs.add(new ServletRequestPathMatcherSpec());\n        return matcherSpecs;\n    }\n}\n')),(0,r.kt)("p",null," ModelSpec\u7684\u5b9e\u73b0\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u73b0com.alibaba.chaosblade.exec.common.model.ModelSpec"),(0,r.kt)("li",{parentName:"ul"},"\u7ee7\u627fBaseModelSpec\uff0c\u5b9e\u73b0\u4e86\u5bf9CreateHandler\u9636\u6bb5\u7684\u8f93\u5165\u53c2\u6570\u7684\u6821\u9a8c"),(0,r.kt)("li",{parentName:"ul"},"\u7ee7\u627fFrameworkModelSpec\u5305\u542bDelayActionSpec\u3001ThrowCustomExceptionActionSpec\uff0c\u9ed8\u8ba4\u5b9e\u73b0\u4e86\u4e0d\u540ctarget\u7684\u5ef6\u8fdf\u4fb5\u5165\u548c\u5f02\u5e38\u4fb5\u5165\u3002")),(0,r.kt)("h4",{id:"actionspec"},"ActionSpec"),(0,r.kt)("p",null,"\u4f8b\u5982DelayActionSpec\uff0c\u652f\u6301\u53c2\u6570 --time=xx --offset=xx "),(0,r.kt)("p",null,"./blade create servlet --method=post delay --time=3000 ----offset=10"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class DelayActionSpec extends BaseActionSpec {\n\n    private static TimeFlagSpec timeFlag = new TimeFlagSpec();\n    private static TimeOffsetFlagSpec offsetFlag = new TimeOffsetFlagSpec();\n\n    public DelayActionSpec() {\n        //\u6dfb\u52a0 actionExecutor\n        super(new DefaultDelayExecutor(timeFlag, offsetFlag));\n    }\n\n    @Override\n    public String getName() {\n        return "delay";\n    }\n\n    @Override\n    public String[] getAliases() {\n        return new String[0];\n    }\n\n    @Override\n    public String getShortDesc() {\n        return "delay time";\n    }\n\n    @Override\n    public String getLongDesc() {\n        return "delay time...";\n    }\n\n    @Override\n    public List<FlagSpec> getActionFlags() {\n        return Arrays.asList(timeFlag, offsetFlag);\n    }\n\n    @Override\n    public PredicateResult predicate(ActionModel actionModel) {\n        if (StringUtil.isBlank(actionModel.getFlag(timeFlag.getName()))){\n            return PredicateResult.fail("less time argument");\n        }\n        return PredicateResult.success();\n    }\n}\n')),(0,r.kt)("p",null,"ActionSpec\u7684getName()\u65b9\u6cd5\u5bf9\u5e94\u547d\u4ee4\u4e2daction\u90e8\u5206\u7684\u540d\u79f0\uff0c\u5982delay\u3001throwCustomExceptionde\u7b49\uff0cActionSpec\u7531ModelSpec\u7684addActionSpec()\u65b9\u6cd5\u6dfb\u52a0\uff0c\u53ef\u4ee5\u6709\u4ee5\u4e0b\u65b9\u5f0f\u5b9e\u73b0\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b9e\u73b0com.alibaba.chaosblade.exec.common.model.action.ActionSpec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7ee7\u627fBaseActionSpec\uff0c\u5b9e\u73b0\u4e86\u5bf9CreateHandler\u9636\u6bb5\u7684\u8f93\u5165\u53c2\u6570\u7684\u6821\u9a8c"))),(0,r.kt)("h4",{id:"flagspec"},"FlagSpec"),(0,r.kt)("p",null,"\u4f8b\u5982TimeOffsetFlagSpec\uff0c \u652f\u6301--offset=10 \u7684\u53c2\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class TimeOffsetFlagSpec implements FlagSpec {\n    @Override\n    public String getName() {\n        return "offset";\n    }\n\n    @Override\n    public String getDesc() {\n        return "delay offset for the time";\n    }\n\n    @Override\n    public boolean noArgs() {\n        return false;\n    }\n\n    @Override\n    public boolean required() {\n        return false;\n    }\n}\n')),(0,r.kt)("p",null,"FlagSpec\u7684getName()\u65b9\u6cd5\u5bf9\u5e94\u547d\u4ee4\u4e2dflag\u90e8\u5206\u7684\u540d\u79f0\uff0c\u5982--time\u7b49"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b9e\u73b0com.alibaba.chaosblade.exec.common.model.FlagSpec\uff0c\u7531ActionSpec\u7684getFlagSpec\u65b9\u6cd5\u6dfb\u52a0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7ee7\u627fcom.alibaba.chaosblade.exec.common.model.matcher.MatcherSpec\uff0c\u7531ActionSpec\u7684addActionSpec\u6dfb\u52a0\uff0cCreateHandler\u9636\u6bb5\u4f1a\u505a\u53c2\u6570\u6821\u9a8c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7ee7\u627fcom.alibaba.chaosblade.exec.common.model.matcher.BasePredicateMatcherSpec"))),(0,r.kt)("h4",{id:"actionexecutor"},"ActionExecutor"),(0,r.kt)("p",null,"ActionExecutor\u6267\u884c\u5668\u4f5c\u4e3aBaseActionSpec\u7684\u6784\u9020\u53c2\u6570\uff0cActionExecutor\u53ef\u4ee5\u81ea\u5b9a\u4e49\u4e00\u4e9b\u589e\u5f3a\u4e1a\u52a1\u7684\u64cd\u4f5c\uff0c\u5982\u4fee\u6539\u65b9\u6cd5\u7684\u53c2\u6570\u3001\u7be1\u6539\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u7b49\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface ActionExecutor {\n\n    /**\n     * Run executor\n     *\n     * @param enhancerModel\n     * @throws Exception\n     */\n    void run(EnhancerModel enhancerModel) throws Exception;\n}\n")),(0,r.kt)("p",null,"\u5b9e\u73b0ActionExecutor\u7684\u63a5\u53e3\uff0cEnhancerModel\u91cc\u9762\u53ef\u4ee5\u62ff\u5230\u547d\u4ee4\u884c\u8f93\u5165\u7684\u53c2\u6570\u4ee5\u53ca\u539f\u59cb\u65b9\u6cd5\u7684\u53c2\u6570\uff0c\u7c7b\u578b\uff0c\u8fd4\u56de\u503c\u3001\u5f02\u5e38\uff0c\u505a\u4e00\u4e9b\u589e\u5f3a\u4e1a\u52a1\u64cd\u4f5c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u5ef6\u8fdf\u591a\u5c11\u6beb\u79d2\nLong time = Long.valueOf(enhancerModel.getActionFlag("time"));\nTimeUnit.MILLISECONDS.sleep(time);\n')),(0,r.kt)("h3",{id:"5\u81ea\u5b9a\u4e49plugin"},"5\u3001\u81ea\u5b9a\u4e49Plugin"),(0,r.kt)("p",null,"\u7ee7\u627fcom.alibaba.chaosblade.exec.common.aop.Plugin\uff0c\u81ea\u5b9a\u4e49target\u540d\u79f0\uff0c\u6dfb\u52a0Enhancer\u3001PointCut\u3001ModelSpec\u5373\u53ef\uff0c\u5b9e\u73b0\u7c7b\u9700\u8981\u5168\u8def\u5f84\u540d\u590d\u5236\u5230 :\nresources/META-INF/services/com.alibaba.chaosblade.exec.common.aop.Plugin\n\u6302\u8f7dAgent\uff0c\u6a21\u5757\u6fc0\u6d3b\u540eplugin\u81ea\u52a8\u52a0\u8f7d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class ServletPlugin implements Plugin {\n\n    @Override\n    public String getName() {\n        return "servlet";\n    }\n\n    @Override\n    public ModelSpec getModelSpec() {\n        return new ServletModelSpec();\n    }\n\n    @Override\n    public PointCut getPointCut() {\n        return new ServletPointCut();\n    }\n\n    @Override\n    public Enhancer getEnhancer() {\n        return new ServletEnhancer();\n    }\n}\n')),(0,r.kt)("h2",{id:"\u6253\u5305\u548c\u6267\u884c"},"\u6253\u5305\u548c\u6267\u884c"),(0,r.kt)("p",null,"\u9996\u5148\u63d0\u4ea4\u4ee3\u7801push\u5230\u81ea\u5df1\u7684\u4ed3\u5e93"),(0,r.kt)("h3",{id:"\u51c6\u5907"},"\u51c6\u5907"),(0,r.kt)("p",null,"\u9700\u8981go\u73af\u5883\u3001java_home \u3001maven"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"clone ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"git clone https://github.com/chaosblade-io/chaosblade\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4fee\u6539Makefile")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"cd chaosblade\nvi Makefile\n")),(0,r.kt)("p",null,"\u628aMakefile\u91cc\u9762\u7684BLADE_EXEC_JVM_PROJECT\u6539\u6210\u4fee\u6539\u6210\u4f60fork\u7684\u4ed3\u5e93\u5730\u5740\uff0c\u4fdd\u5b58\u9000\u51fa\n",(0,r.kt)("img",{src:n(40284).Z,width:"1412",height:"816"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7f16\u8bd1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"make build_linux\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6302\u8f7dagent\uff1a--pid 3356 \u662f\u88ab\u653b\u51fb\u5e94\u7528\u7684jvm\u8fdb\u7a0b\u53f7\n\u6bcf\u6b21\u6302\u8f7d\u5bf9\u5e94\u4e00\u4e2a uid\uff0c\u5378\u8f7dagent\u7684\u65f6\u5019\u9700\u8981uid")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"cd target/chaosblade-0.6.0/\n./blade prepare jvm --pid 3356\n")),(0,r.kt)("h3",{id:"\u6df7\u6c8c\u5b9e\u9a8c"},"\u6df7\u6c8c\u5b9e\u9a8c"),(0,r.kt)("p",null,"\u6bcf\u4e2a\u5b9e\u9a8c\u5bf9\u5e94\u4e00\u4e2a uid\uff0c\u540e\u7eed\u7684\u67e5\u8be2\u3001\u9500\u6bc1\u5b9e\u9a8c\u90fd\u8981\u7528\u5230\u6b64 uid\uff0c\u5982\u679c\u9057\u5fd8\u4e86 uid\uff0c\u53ef\u4ee5\u901a\u8fc7 blade status --type create \u547d\u4ee4\u8fdb\u884c\u67e5\u8be2\u3002 create \u53ef\u4ee5\u7b80\u5199\u4e3a c\uff0c\u5373 blade create \u53ef\u4ee5\u7b80\u5199\u4e3a blade c\u3002\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\uff0c\u5bf9servlet\u5bb9\u5668\uff0capi\u63a5\u53e3\u5ef6\u8fdf3\u79d2\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6df7\u6c8c\u5b9e\u9a8c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"./blade create servlet delay --time=3000 --requestpath=/index\n")),(0,r.kt)("p",null,"\u6b64\u65f6\u8bbf\u95eeJava\u5e94\u7528/index\u5e94\u7528\u5c06\u5ef6\u8fdf3\u79d2\u540e\u54cd\u5e94\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9500\u6bc1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"./blade create destroy 863c8c5a2c2c3deb\n")),(0,r.kt)("h3",{id:"\u5378\u8f7dagent"},"\u5378\u8f7dagent"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"./blade destroy 6a0863a4f0da8a38\n")))}d.isMDXComponent=!0},69126:function(e,t,n){t.Z=n.p+"assets/images/command-680c7a7b25b48f0c4e8bdd6e39bf5023.png"},40284:function(e,t,n){t.Z=n.p+"assets/images/edit-chaosblade-exec-jvm-b1805a06e07d00e0465a91d80adb89ca.png"},62270:function(e,t,n){t.Z=n.p+"assets/images/plugin-01bce86f430475e40d6a3c0efdb3c7a1.jpg"}}]);