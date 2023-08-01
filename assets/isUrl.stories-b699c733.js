import{M as s}from"./chunk-S4VUQJ4A-fa8e158a.js";import{j as n,a as t,F as c}from"./jsx-runtime-2fa7255e.js";import{u as i}from"./index-2c740fc7.js";import"./iframe-45f313de.js";import"../sb-preview/runtime.js";import"./index-7696b2fb.js";import"./assert-034c52df.js";import"./chunk-H6ZRF7XV-873b55bd.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function o(e){const r=Object.assign({h1:"h1",p:"p",br:"br",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong",em:"em"},i(),e.components);return t(c,{children:[n(s,{title:"validation/isUrl"}),`
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
`]})]})}function a(e={}){const{wrapper:r}=Object.assign({},i(),e.components);return r?n(r,{...e,children:n(o,{...e})}):o(e)}const d=()=>{throw new Error("Docs-only story")};d.parameters={docsOnly:!0};const l={title:"validation/isUrl",tags:["stories-mdx"],includeStories:["__page"]};l.parameters=l.parameters||{};l.parameters.docs={...l.parameters.docs||{},page:a};const M=["__page"];export{M as __namedExportsOrder,d as __page,l as default};
//# sourceMappingURL=isUrl.stories-b699c733.js.map