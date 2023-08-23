import{M as i}from"./chunk-S4VUQJ4A-0f597789.js";import{j as n,a as t,F as c}from"./jsx-runtime-7a0bb3b1.js";import{u as s}from"./index-9d0b6a8a.js";import"./iframe-18368bdd.js";import"../sb-preview/runtime.js";import"./index-78739791.js";import"./_commonjsHelpers-de833af9.js";import"./chunk-6P7RB4HF-0bed2682.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function o(e){const r=Object.assign({h1:"h1",p:"p",br:"br",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong",em:"em"},s(),e.components);return t(c,{children:[n(i,{title:"validation/isUrl"}),`
`,n(r.h1,{id:"isurl",children:"isUrl"}),`
`,t(r.p,{children:["Check whether the string is URL type or not and return it.",n(r.br,{}),`
`,"문자열이 URL 타입인지 아닌지를 확인 후 반환합니다."]}),`
`,n(r.h3,{id:"example",children:"Example"}),`
`,n(r.pre,{children:n(r.code,{className:"language-js",children:`import { isUrl } from 'doum';

const url = 'https://ttt';
const url2 = 'abc';
const url3 = 'https://한글도메인.com/';
const url4 =
  'https://www.test.com?prdNo=123&dispNo=312&NaPm=ct%3Djoh05t74%7Cci%3D71cf11951';
const url5 = 'https://192.0.1.1';

console.log('url', isUrl(url)); // url false
console.log('url2', isUrl(url2)); // url2 false
console.log('url3', isUrl(url3)); // url3 true
console.log('url4', isUrl(url4)); // url4 true
console.log('url5', isUrl(url5)); // url5 true
`})}),`
`,n(r.h3,{id:"reference",children:"Reference"}),`
`,n(r.pre,{children:n(r.code,{className:"language-js",children:`function isUrl(url: string): boolean {}
`})}),`
`,n(r.h3,{id:"importing",children:"Importing"}),`
`,n(r.pre,{children:n(r.code,{className:"language-js",children:`import { isUrl } from 'doum';
`})}),`
`,n(r.h3,{id:"arguments",children:"Arguments"}),`
`,t(r.ul,{children:[`
`,t(r.li,{children:[n(r.strong,{children:"url"})," ",n(r.em,{children:n(r.code,{children:"string"})})]}),`
`]}),`
`,n(r.h3,{id:"return",children:"Return"}),`
`,t(r.ul,{children:[`
`,t(r.li,{children:[n(r.strong,{children:"True/False"})," ",n(r.em,{children:n(r.code,{children:"boolean"})})]}),`
`]})]})}function a(e={}){const{wrapper:r}=Object.assign({},s(),e.components);return r?n(r,{...e,children:n(o,{...e})}):o(e)}const d=()=>{throw new Error("Docs-only story")};d.parameters={docsOnly:!0};const l={title:"validation/isUrl",tags:["stories-mdx"],includeStories:["__page"]};l.parameters=l.parameters||{};l.parameters.docs={...l.parameters.docs||{},page:a};const w=["__page"];export{w as __namedExportsOrder,d as __page,l as default};
//# sourceMappingURL=isUrl.stories-26b9c3eb.js.map
