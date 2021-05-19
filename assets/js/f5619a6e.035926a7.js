(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[625],{9861:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),r={title:"Contribute documents"},s={unversionedId:"community/docs",id:"community/docs",isDocsHomePage:!1,title:"Contribute documents",description:"Requirements",source:"@site/docs/community/docs.md",sourceDirName:"community",slug:"/community/docs",permalink:"/docs/community/docs",editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/website/docs/community/docs.md",version:"current",frontMatter:{title:"Contribute documents"},sidebar:"docs",previous:{title:"Quick Start",permalink:"/docs/getting-started/quick-start"}},l=[{value:"Requirements",id:"requirements",children:[]},{value:"Clone Website Project",id:"clone-website-project",children:[]},{value:"Local Development",id:"local-development",children:[]},{value:"Preview",id:"preview",children:[]},{value:"Create a doc",id:"create-a-doc",children:[]},{value:"Pull Request",id:"pull-request",children:[]}],c={toc:l};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GItHub ID: You'll need a GitHub account first"),(0,i.kt)("li",{parentName:"ul"},"fork repo",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"fork ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/chaosblade-io/chaosblade-website.git"},"chaosblade-website")," repo\uff0cand ",(0,i.kt)("inlineCode",{parentName:"li"},"git remote add upstream https://github.com/chaosblade-io/chaosblade-website.git")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version >= 12.13.0 or above (which can be checked by running ",(0,i.kt)("inlineCode",{parentName:"li"},"node -v"),"). You can use ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"nvm")," for managing multiple Node versions on a single machine installed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://yarnpkg.com/en/"},"Yarn")," version >= 1.5 (which can be checked by running ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn --version"),"). Yarn is a performant package manager for JavaScript and replaces the ",(0,i.kt)("inlineCode",{parentName:"li"},"npm")," client. It is not strictly necessary but highly encouraged.")),(0,i.kt)("h2",{id:"clone-website-project"},"Clone Website Project"),(0,i.kt)("p",null,"Clone project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/<your-fork-repo>/chaosblade-website.git\n")),(0,i.kt)("h2",{id:"local-development"},"Local Development"),(0,i.kt)("p",null,"Installing dependencies."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'cd chaosblade-website\nyarn install\nyarn install v1.22.10\nwarning ../../package.json: No license field\n[1/4] \ud83d\udd0d  Resolving packages...\n[2/4] \ud83d\ude9a  Fetching packages...\n[3/4] \ud83d\udd17  Linking dependencies...\nwarning "@docusaurus/preset-classic > @docusaurus/theme-search-algolia > @docsearch/react@3.0.0-alpha.36" has unmet peer dependency "@types/react@>= 16.8.0 < 18.0.0".\nwarning "@docusaurus/preset-classic > @docusaurus/theme-search-algolia > @docsearch/react > @algolia/autocomplete-preset-algolia@1.0.0-alpha.44" has unmet peer dependency "@algolia/client-search@^4.5.1".\n[4/4] \ud83d\udd28  Building fresh packages...\n\u2728  Done in 11.02s.\n')),(0,i.kt)("h2",{id:"preview"},"Preview"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn start\nyarn run v1.22.10\nwarning ../../package.json: No license field\n$ docusaurus start\nStarting the development server...\nDocusaurus website is running at: http://localhost:3000/\n\n\u2714 Client\n  Compiled successfully in 7.54s\n\n\u2139 \uff62wds\uff63: Project is running at http://localhost:3000/\n\u2139 \uff62wds\uff63: webpack output is served from /\n\u2139 \uff62wds\uff63: Content not from webpack is served from /Users/saybot/own/chaosblade-website\n\u2139 \uff62wds\uff63: 404s will fallback to /index.html\n")),(0,i.kt)("h2",{id:"create-a-doc"},"Create a doc"),(0,i.kt)("p",null,"Create a markdown file, ",(0,i.kt)("inlineCode",{parentName:"p"},"xxx.md"),", and place it under the ",(0,i.kt)("inlineCode",{parentName:"p"},"docs")," directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"chaosblade-website # root directory of chaosblade-website\n\u251c\u2500\u2500 docs\n\u2502\xa0\xa0 \u2514\u2500\u2500 xxx.md\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u2514\u2500\u2500 pages\n\u251c\u2500\u2500 docusaurus.config.js\n\u251c\u2500\u2500 ...\n")),(0,i.kt)("p",null,"At the top of the file, specify ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," in the front matter, so that Docusaurus will pick them up correctly when generating your site."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"---\nid: greeting\ntitle: Hello\n---\n\n## Hello from Docusaurus\n\nAre you ready to create the documentation site for your open source project?\n\n### Headers\n\nwill show up on the table of contents on the upper right\n\nSo that your users will know what this page is all about without scrolling down or even without reading too much.\n\n### Only h2 and h3 will be in the toc\n\nThe headers are well-spaced so that the hierarchy is clear.\n\n- lists will help you\n- present the key points\n- that you want your users to remember\n  - and you may nest them\n    - multiple times\n\n### Custom id headers {#custom-id}\n\nWith `{#custom-id}` syntax you can set your own header id.\n")),(0,i.kt)("p",null,"Once you save the file, the development server will automatically reload the changes. Now open ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/docs/xxx"),", you will see the new page you just created."),(0,i.kt)("h2",{id:"pull-request"},"Pull Request"),(0,i.kt)("p",null,"Once the document is updated, it is ready for PR submission."))}u.isMDXComponent=!0}}]);