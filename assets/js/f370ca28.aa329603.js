"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[362],{3905:function(e,n,t){t.d(n,{Zo:function(){return o},kt:function(){return m}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},o=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),s=u(t),m=l,g=s["".concat(p,".").concat(m)]||s[m]||d[m]||r;return t?a.createElement(g,i(i({ref:n},o),{},{components:t})):a.createElement(g,i({ref:n},o))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=s;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:l,i[1]=c;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},34735:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return u}});var a=t(87462),l=(t(67294),t(3905));const r={},i="\u5f00\u53d1\u5b9e\u6218",c={unversionedId:"community/java-dev-guide/practise",id:"community/java-dev-guide/practise",title:"\u5f00\u53d1\u5b9e\u6218",description:"\u672c\u7bc7\u4ecb\u7ecd chaosblade-exec-jvm \u5982\u4f55\u4ece\u96f6\u5f00\u59cb\u5982\u4f55\u5f00\u53d1\u4e00\u4e2a\u7ec4\u4ef6\u6545\u969c\u573a\u666f\u3002",source:"@site/docs/community/java-dev-guide/practise.md",sourceDirName:"community/java-dev-guide",slug:"/community/java-dev-guide/practise",permalink:"/docs/next/community/java-dev-guide/practise",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/docs/community/java-dev-guide/practise.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u534f\u8bae\u7bc7",permalink:"/docs/next/community/java-dev-guide/protocol"},next:{title:"\u6a21\u62dfCPU\u8d1f\u8f7d\u5b9e\u9a8c",permalink:"/docs/next/experiment-types/host/blade create cpu load"}},p={},u=[{value:"\u6784\u601d\u6b65\u9aa4",id:"\u6784\u601d\u6b65\u9aa4",level:2},{value:"Lettuce\u6545\u969c\u573a\u666f",id:"lettuce\u6545\u969c\u573a\u666f",level:2},{value:"\u65b0\u5efa\u5de5\u7a0b",id:"\u65b0\u5efa\u5de5\u7a0b",level:4},{value:"\u5b9a\u4e49\u6a21\u578b",id:"\u5b9a\u4e49\u6a21\u578b",level:4},{value:"\u5b9a\u4e49\u5207\u70b9",id:"\u5b9a\u4e49\u5207\u70b9",level:4},{value:"\u5b9a\u4e49<code>Enhancer</code>",id:"\u5b9a\u4e49enhancer",level:4},{value:"\u5b9a\u4e49<code>ActionExecutor</code>",id:"\u5b9a\u4e49actionexecutor",level:4},{value:"\u5b9a\u4e49<code>plugin</code>",id:"\u5b9a\u4e49plugin",level:4},{value:"\u6253\u5305\u548c\u6267\u884c",id:"\u6253\u5305\u548c\u6267\u884c",level:2},{value:"\u51c6\u5907",id:"\u51c6\u5907",level:3},{value:"\u65b9\u5f0f\u4e00",id:"\u65b9\u5f0f\u4e00",level:4},{value:"\u65b9\u5f0f\u4e8c",id:"\u65b9\u5f0f\u4e8c",level:4},{value:"\u6df7\u6c8c\u5b9e\u9a8c",id:"\u6df7\u6c8c\u5b9e\u9a8c",level:3},{value:"\u5378\u8f7dagent",id:"\u5378\u8f7dagent",level:3}],o={toc:u};function d(e){let{components:n,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},o,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5f00\u53d1\u5b9e\u6218"},"\u5f00\u53d1\u5b9e\u6218"),(0,l.kt)("p",null,"\u672c\u7bc7\u4ecb\u7ecd ",(0,l.kt)("inlineCode",{parentName:"p"},"chaosblade-exec-jvm")," \u5982\u4f55\u4ece\u96f6\u5f00\u59cb\u5982\u4f55\u5f00\u53d1\u4e00\u4e2a\u7ec4\u4ef6\u6545\u969c\u573a\u666f\u3002"),(0,l.kt)("h2",{id:"\u6784\u601d\u6b65\u9aa4"},"\u6784\u601d\u6b65\u9aa4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65b0\u5efa\u5de5\u7a0b"),(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u6a21\u578b"),(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u5408\u9002\u7684\u5207\u70b9"),(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u4e49",(0,l.kt)("inlineCode",{parentName:"li"},"Enhancer"),"\u589e\u5f3a\u7c7b"),(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u4e49",(0,l.kt)("inlineCode",{parentName:"li"},"ActionExecutor")),(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u4e49",(0,l.kt)("inlineCode",{parentName:"li"},"plugin"))),(0,l.kt)("h2",{id:"lettuce\u6545\u969c\u573a\u666f"},"Lettuce\u6545\u969c\u573a\u666f"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Lettuce"),"\u662f\u4e00\u4e2a\u57fa\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"netty"),"\u5f02\u6b65\u901a\u4fe1\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"redis"),"\u5ba2\u6237\u7aef\uff0c\u672c\u7bc7\u5f00\u53d1",(0,l.kt)("inlineCode",{parentName:"p"},"lettuce plugin"),"\uff0c\u5bf9\u81ea\u5b9a\u4e49\u8f93\u5165\u5339\u914d\u7684key\u5b9e\u73b0\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\u503c\u7c7b\u578b\u7684\u503c\u7be1\u6539")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5ef6\u8fdf")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u81ea\u5b9a\u4e49\u5f02\u5e38\u629b\u51fa"))),(0,l.kt)("h4",{id:"\u65b0\u5efa\u5de5\u7a0b"},"\u65b0\u5efa\u5de5\u7a0b"),(0,l.kt)("p",null,"\u6309\u63d2\u4ef6\u7684\u89c4\u8303\uff0c\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"chaosblade-exec-plugin"),"\u6a21\u5757\u4e0b\u65b0\u5efa\u5de5\u7a0b",(0,l.kt)("inlineCode",{parentName:"p"},"chaosblade-exec-plugin-lettuce"),"\u3002"),(0,l.kt)("h4",{id:"\u5b9a\u4e49\u6a21\u578b"},"\u5b9a\u4e49\u6a21\u578b"),(0,l.kt)("p",null,"\u8fd9\u91cc\u7ee7\u627f\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"FrameworkModelSpec"),"\u7c7b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"FrameworkModelSpec"),"\u7c7b\u9ed8\u8ba4\u5305\u542b\u4e86\u5ef6\u8fdf\u548c\u81ea\u5b9a\u4e49\u5f02\u5e38\u7684\u6545\u969c\u80fd\u529b\uff0c\u4e0b\u9762\u4ecb\u7ecd\u5982\u4f55\u7be1\u6539\u503c\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"getTarget()"),"\u5b9e\u73b0\u7684\u9776\u70b9\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"getShortDesc() "),"\u63cf\u8ff0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"getLongDesc()"),"\u63cf\u8ff0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"getExample()"),"\u4f8b\u5b50")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class LettuceModeSpec extends FrameworkModelSpec {\n\n    @Override\n    protected List<MatcherSpec> createNewMatcherSpecs() {\n        // todo\n        return null;\n    }\n\n    @Override\n    public String getTarget() {\n        return "lettuce";\n    }\n\n    @Override\n    public String getShortDesc() {\n        return "redis client lettuce experiment";\n    }\n\n    @Override\n    public String getLongDesc() {\n        return "redis client lettuce experiment";\n    }\n\n    @Override\n    public String getExample() {\n        return "lettuce --key=name update --value=meepo";\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"lettuce --key=name update --value=meepo")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"lettuce"),"\u4f5c\u4e3a\u5b9e\u9a8c\u7684\u9776\u70b9\uff0c ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"update"),"\u662f\u5b9e\u9a8c\u7684\u52a8\u4f5c\uff0c\u5177\u4f53\u53ef\u53c2\u6570\u6a21\u578b\u7bc7\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"--key")," \u6a21\u578b\u4e2d\u7684 matchers\uff0c\u5b9e\u9a8c\u89c4\u5219\u5339\u914d\u5668\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"KeyMatcherSpec"),"\u7ee7\u627f",(0,l.kt)("inlineCode",{parentName:"p"},"BasePredicateMatcherSpec"),"\uff0c\u4f1a",(0,l.kt)("inlineCode",{parentName:"p"},"required()"),"\u5224\u65ad\u662f\u662f\u5426\u662f\u5fc5\u8f93\u5b57\u6bb5\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"--value"),"\u6a21\u578b\u4e2d action \u53c2\u6570\uff0c\u6307",(0,l.kt)("inlineCode",{parentName:"p"},"update"),"\u9700\u8981\u66f4\u65b0\u6210\u8fd9\u4e2a\u503c\u3002"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class KeyMatcherSpec extends BasePredicateMatcherSpec {\n\n    @Override\n    public String getName() {\n        // --key\n        return "key";\n    }\n\n    @Override\n    public String getDesc() {\n        return "key matcher";\n    }\n\n    @Override\n    public boolean noArgs() {\n        return false;\n    }\n\n    @Override\n    public boolean required() {\n        // \u662f\u5426\u5fc5\u8f93\n        return true;\n    }\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class ValueFlagSpec implements FlagSpec {\n\n    @Override\n    public String getName() {\n        return "value";\n    }\n\n    @Override\n    public String getDesc() {\n        return "value set";\n    }\n\n    @Override\n    public boolean noArgs() {\n        return false;\n    }\n\n    @Override\n    public boolean required() {\n        return false;\n    }\n}\n')),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"UpdateAction"),"\u91cc\u9762\u6dfb\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"ValueFlagSpec")," \u548c",(0,l.kt)("inlineCode",{parentName:"p"},"LettuceActionExecutor"),",",(0,l.kt)("inlineCode",{parentName:"p"},"LettuceActionExecutor"),"\u662f\u5b9e\u9a8c",(0,l.kt)("inlineCode",{parentName:"p"},"upadte"),"\u7684\u6267\u884c\u9636\u6bb5\uff0c\u540e\u9762\u4ecb\u7ecd\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class UpdateActionSpec extends BaseActionSpec {\n\n    private static ValueFlagSpec valueFlagSpec = new ValueFlagSpec();\n\n    public UpdateActionSpec() {\n        super(new LettuceActionExecutor(valueFlagSpec));\n    }\n\n    @Override\n    public String getName() {\n        return "update";\n    }\n\n    @Override\n    public String[] getAliases() {\n        return new String[0];\n    }\n\n    @Override\n    public String getShortDesc() {\n        return "update action spec";\n    }\n\n    @Override\n    public String getLongDesc() {\n        return "update action spec";\n    }\n\n    @Override\n    public List<FlagSpec> getActionFlags() {\n        List<FlagSpec> flagSpecs = new ArrayList<FlagSpec>();\n        flagSpecs.add(valueFlagSpec);\n        return flagSpecs;\n    }\n\n    @Override\n    public PredicateResult predicate(ActionModel actionModel) {\n        if (StringUtil.isBlank(actionModel.getFlag(valueFlagSpec.getName()))) {\n            return PredicateResult.fail("less value argument");\n        }\n        return PredicateResult.success();\n    }\n}\n')),(0,l.kt)("p",null,"\u7136\u540e\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"LettuceModeSpec"),"\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"createNewMatcherSpecs()"),"\u65b9\u6cd5\u4e2d\u6dfb\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"UpdateActionSpec"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"ValueMatcherSpec"),"\u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"    @Override\n    public List<MatcherSpec> createNewMatcherSpecs() {\n        addActionSpec(new UpdateActionSpec());\n        List<MatcherSpec> matchers = new ArrayList<MatcherSpec>();\n        matchers.add(new KeyMatcherSpec());\n        return matchers;\n    }\n")),(0,l.kt)("h4",{id:"\u5b9a\u4e49\u5207\u70b9"},"\u5b9a\u4e49\u5207\u70b9"),(0,l.kt)("p",null,"\u5b9a\u4e49\u5207\u70b9\u9700\u8981\u627e\u5230\u5408\u9002\u7684\u5207\u70b9\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Lettuce"),"\u57fa\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"netty"),"\u5f02\u6b65\u901a\u4fe1\uff0c\u6240\u6709\u7684\u547d\u4ee4\u90fd\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"io.lettuce.core.protocol.CommandHandler#write")),(0,l.kt)("p",null,"\u65b9\u6cd5\u4e2d\u53d1\u51fa\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"ClassMatcher"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"MethodMatcher"),"\u8fd8\u6709\u66f4\u591a\u7684\u5339\u914d\u65b9\u5f0f\u53ef\u53c2\u8003\u63d2\u4ef6\u7bc7"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class LettucePointCut implements PointCut {\n\n    @Override\n    public ClassMatcher getClassMatcher() {\n        NameClassMatcher nameClassMatcher = new NameClassMatcher("io.lettuce.core.protocol.CommandHandler");\n        return nameClassMatcher;\n    }\n\n    @Override\n    public MethodMatcher getMethodMatcher() {\n        NameMethodMatcher nameMethodMatcher = new NameMethodMatcher("write");\n        return nameMethodMatcher;\n    }\n}\n')),(0,l.kt)("h4",{id:"\u5b9a\u4e49enhancer"},"\u5b9a\u4e49",(0,l.kt)("inlineCode",{parentName:"h4"},"Enhancer")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Enhancer"),"\u83b7\u53d6",(0,l.kt)("inlineCode",{parentName:"p"},"io.lettuce.core.protocol.CommandHandler#write()"),"\u65b9\u6cd5\u7b2c\u4e8c\u4e2a\u53c2\u6570\u7684\u503c\uff0c\u8fd9\u91cc\u4e3a\u4e86\u6f14\u793a\uff0c\u5148\u53ea\u652f\u6301\u51e0\u4e2a\u7b80\u5355\u547d\u4ee4\uff0c\u5148\u83b7\u53d6\u547d\u4ee4\u7684\u7c7b\u578b\uff0c\u5982\u679c\u4e0d\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"SET"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"SETNX"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"HSET"),"\u7c7b\u578b",(0,l.kt)("inlineCode",{parentName:"p"},"return null"),"\u6545\u969c\u80fd\u529b\u5c31\u4e2d\u65ad\u4e86\uff0c\u7136\u540e\u83b7\u53d6",(0,l.kt)("inlineCode",{parentName:"p"},"key"),"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"Inject"),"\u9636\u6bb5\u5339\u914d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class LettuceEnhancer extends BeforeEnhancer {\n\n    private static final Logger logger = LoggerFactory.getLogger(LettuceEnhancer.class);\n\n    private static final  List<String> SUPPORTS_COMMANDS = new ArrayList<String>();\n\n    static {\n        SUPPORTS_COMMANDS.add("SET");\n        SUPPORTS_COMMANDS.add("SETNX");\n        SUPPORTS_COMMANDS.add("HSET");\n    }\n\n    @Override\n    public EnhancerModel doBeforeAdvice(ClassLoader classLoader,\n                                        String className,\n                                        Object object,\n                                        Method method,\n                                        Object[] methodArguments) throws Exception {\n\n        Object command = methodArguments[1];\n        Object args = ReflectUtil.getFieldValue(command, "command", false);\n\n        Object commandType = ReflectUtil.getFieldValue(args, "type", false);\n        if (!SUPPORTS_COMMANDS.contains(String.valueOf(commandType))) {\n            return null;\n        }\n\n        Object commandArgs = ReflectUtil.getFieldValue(args, "args", false);\n        List singularArguments = ReflectUtil.getFieldValue(commandArgs, "singularArguments", false);\n        Object keyArgument = singularArguments.get(0);\n\n        MatcherModel matcherModel = new MatcherModel();\n        if (keyArgument == null) {\n            return null;\n        }\n        Object key = ReflectUtil.getFieldValue(keyArgument, "key", false);\n        matcherModel.add("key", key);\n        logger.debug("lettuce matchers: {}", JSON.toJSONString(matcherModel));\n        return new EnhancerModel(classLoader, matcherModel);\n    }\n}\n')),(0,l.kt)("h4",{id:"\u5b9a\u4e49actionexecutor"},"\u5b9a\u4e49",(0,l.kt)("inlineCode",{parentName:"h4"},"ActionExecutor")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"LettuceActionExecutor"),"\u6267\u884c\u66f4\u65b0\u503c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class LettuceActionExecutor implements ActionExecutor {\n\n    private static final Logger logger = LoggerFactory.getLogger(LettuceEnhancer.class);\n\n    private ValueFlagSpec valueFlagSpec;\n\n    public LettuceActionExecutor(ValueFlagSpec valueFlagSpec) {\n        this.valueFlagSpec = valueFlagSpec;\n    }\n\n    @Override\n    public void run(EnhancerModel enhancerModel) throws Exception {\n        Object command = enhancerModel.getMethodArguments()[1];\n        Object args = ReflectUtil.getFieldValue(command, "command", false);\n        Object commandArgs = ReflectUtil.getFieldValue(args, "args", false);\n        List singularArguments = ReflectUtil.getFieldValue(commandArgs, "singularArguments", false);\n\n        Object valArgument = singularArguments.get(1);\n        Object originVal = ReflectUtil.getFieldValue(valArgument, "val", false);\n        if (!(originVal instanceof String)) {\n            logger.info("not support value, value type: {}", originVal.getClass());\n            return;\n        }\n\n        Object codec = ReflectUtil.getFieldValue(valArgument, "codec", false);\n\n        String value = enhancerModel.getActionFlag(valueFlagSpec.getName());\n        Object[] arguments = new Object[]{value, codec};\n        Object valueArgument = ReflectUtil.invokeStaticMethod(valArgument.getClass(), "of", arguments, false);\n\n        if (valueArgument != null) {\n            logger.info("update value success. origin value: {}, update value: {}", originVal, value);\n            // \u66f4\u65b0\u539f\u6765\u7684\u503c\n            singularArguments.set(1, valueArgument);\n        }\n    }\n}\n')),(0,l.kt)("h4",{id:"\u5b9a\u4e49plugin"},"\u5b9a\u4e49",(0,l.kt)("inlineCode",{parentName:"h4"},"plugin")),(0,l.kt)("p",null,"\u5b9a\u4e49",(0,l.kt)("inlineCode",{parentName:"p"},"plugin"),"\u6dfb\u52a0\u6a21\u578b\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"PointCut"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Enhancer"),"\uff0c\u5e76\u4e14\u5728\u5f53\u524d\u5de5\u7a0b",(0,l.kt)("inlineCode",{parentName:"p"},"resources"),"\u65b0\u5efa\u6587\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"resources/META-INF/services/com.alibaba.chaosblade.exec.common.aop.Plugin"),"\uff0c\u628a\u81ea\u5b9a\u4e49",(0,l.kt)("inlineCode",{parentName:"p"},"plugin"),"\u7684\u5168\u9650\u5b9a\u540d\u590d\u5236\u5230\u6587\u4ef6\u91cc\u9762",(0,l.kt)("inlineCode",{parentName:"p"},"com.alibaba.chaosblade.exec.plugin.lettuce.LettucePlugin"),"\u5373\u53ef\uff0c\u6b64\u65f6\u4e00\u4e2a\u63d2\u4ef6\u5c31\u5f00\u53d1\u5b8c\u6210\u4e86\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class LettucePlugin implements Plugin {\n\n    @Override\n    public String getName() {\n        return "lettuce plugin";\n    }\n\n    @Override\n    public ModelSpec getModelSpec() {\n        return new LettuceModeSpec();\n    }\n\n    @Override\n    public PointCut getPointCut() {\n        return new LettucePointCut();\n    }\n\n    @Override\n    public Enhancer getEnhancer() {\n        return new LettuceEnhancer();\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Lettuce command"),"\u652f\u6301\u5f88\u591a\u4e0d\u540c\u7684\u7c7b\u578b",(0,l.kt)("inlineCode",{parentName:"p"},"codec"),"\uff0c\u672c\u6b21\u5f00\u53d1\u5b9e\u6218\u4e3a\u4e86\u6f14\u793a\uff0c\u53ea\u652f\u6301",(0,l.kt)("inlineCode",{parentName:"p"},"RedisCommands<String, String>"),"\uff0c\u5426\u5219\u4e0d\u652f\u6301\u7be1\u6539\u3002\u4e5f\u4e0d\u652f\u6301",(0,l.kt)("inlineCode",{parentName:"p"},"batch command"),"\u6a21\u5f0f\u3002"),(0,l.kt)("h2",{id:"\u6253\u5305\u548c\u6267\u884c"},"\u6253\u5305\u548c\u6267\u884c"),(0,l.kt)("h3",{id:"\u51c6\u5907"},"\u51c6\u5907"),(0,l.kt)("h4",{id:"\u65b9\u5f0f\u4e00"},"\u65b9\u5f0f\u4e00"),(0,l.kt)("p",null,"\u9996\u5148\u63d0\u4ea4\u4ee3\u7801push\u5230\u81ea\u5df1\u7684\u4ed3\u5e93\u3001\u9700\u8981",(0,l.kt)("inlineCode",{parentName:"p"},"go"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"java_home")," \u3001",(0,l.kt)("inlineCode",{parentName:"p"},"maven")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"clone ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"git clone https://github.com/chaosblade-io/chaosblade\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4fee\u6539Makefile")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"cd chaosblade\nvi Makefile\n")),(0,l.kt)("p",null,"\u628a",(0,l.kt)("inlineCode",{parentName:"p"},"Makefile"),"\u91cc\u9762\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"BLADE_EXEC_JVM_PROJECT"),"\u6539\u6210\u4fee\u6539\u6210\u4f60fork\u7684\u4ed3\u5e93\u5730\u5740\uff0c\u4fdd\u5b58\u9000\u51fa\n",(0,l.kt)("img",{src:t(11140).Z,width:"1412",height:"816"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7f16\u8bd1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"// linux\nmake build_linux\n// macos\nmake build_darwin\n")),(0,l.kt)("h4",{id:"\u65b9\u5f0f\u4e8c"},"\u65b9\u5f0f\u4e8c"),(0,l.kt)("p",null,"\u5982\u679c\u5df2\u7ecf\u4e0b\u8f7d\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"chaosblade"),"relase\u5305\u53ef\u4ee5\u4f7f\u7528\u6b64\u65b9\u5f0f\uff0c\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"chaosblade-exec-jvm"),"\u76ee\u5f55\u4e0b\u7f16\u8bd1\u6253\u5305\uff0c\u9700\u8981",(0,l.kt)("inlineCode",{parentName:"p"},"java_home")," \u3001",(0,l.kt)("inlineCode",{parentName:"p"},"maven")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"make build\n")),(0,l.kt)("p",null,"\u7f16\u8bd1\u6210\u529f\u540e\uff0c\u5728\u5f53\u524d\u76ee\u5f55\u751f\u6210\u5982\u4e0b",(0,l.kt)("inlineCode",{parentName:"p"},"yml"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"jar")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"plugins/chaosblade-jvm-spec-0.6.0.yaml")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build-target/chaosblade-0.6.0/lib/sandbox/module/chaosblade-java-agent-0.6.0.jar"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5206\u522b\u5c06",(0,l.kt)("inlineCode",{parentName:"strong"},"yml"),"\u548c",(0,l.kt)("inlineCode",{parentName:"strong"},"jar"),"\u66ff\u6362\u5230\u5982\u4e0b\u56fe\u7684",(0,l.kt)("inlineCode",{parentName:"strong"},"chaosblade"),"\u76ee\u5f55\u4e0b\uff1a"),"\n",(0,l.kt)("img",{src:t(65e3).Z,width:"1112",height:"1104"})),(0,l.kt)("h3",{id:"\u6df7\u6c8c\u5b9e\u9a8c"},"\u6df7\u6c8c\u5b9e\u9a8c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6302\u8f7d",(0,l.kt)("inlineCode",{parentName:"li"},"agent"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"--pid 3356")," \u662f\u88ab\u653b\u51fb\u5e94\u7528\u7684jvm\u8fdb\u7a0b\u53f7\uff0c\u6bcf\u6b21\u6302\u8f7d\u5bf9\u5e94\u4e00\u4e2a uid\uff0c\u5378\u8f7dagent\u7684\u65f6\u5019\u9700\u8981uid")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"./blade prepare jvm --pid 3356\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6df7\u6c8c\u5b9e\u9a8c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"./blade c lettuce --key=name update --value=tiny\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u6f14\u793a",src:t(83264).Z,width:"1924",height:"1120"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9500\u6bc1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"./blade create destroy 863c8c5a2c2c3deb\n")),(0,l.kt)("h3",{id:"\u5378\u8f7dagent"},"\u5378\u8f7dagent"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"./blade destroy 6a0863a4f0da8a38\n")))}d.isMDXComponent=!0},65e3:function(e,n,t){n.Z=t.p+"assets/images/chaos-blade-path-7699fc67ec69ae19c1190e5cf1b49d92.png"},11140:function(e,n,t){n.Z=t.p+"assets/images/edit-chaosblade-exec-jvm-b1805a06e07d00e0465a91d80adb89ca.png"},83264:function(e,n,t){n.Z=t.p+"assets/images/lettuce-experiment-7be5af751b79df24dd7419ed949422e1.gif"}}]);