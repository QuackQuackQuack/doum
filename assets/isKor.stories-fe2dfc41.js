import{M as i}from"./chunk-S4VUQJ4A-1034635d.js";import{j as e,a as o,F as a}from"./jsx-runtime-2fa7255e.js";import{u as c}from"./index-2c740fc7.js";import"./iframe-c56f5a3a.js";import"../sb-preview/runtime.js";import"./index-7696b2fb.js";import"./assert-034c52df.js";import"./chunk-H6ZRF7XV-873b55bd.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function r(t){const n=Object.assign({h1:"h1",p:"p",br:"br",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong",em:"em"},c(),t.components);return o(a,{children:[e(i,{title:"validation/isKor"}),`
`,e(n.h1,{id:"iskor",children:"isKor"}),`
`,o(n.p,{children:["Check if the string is in Korean only and return it",e(n.br,{}),`
`,"문자열이 한글로만 되있는지 확인 후 반환합니다."]}),`
`,e(n.h3,{id:"example",children:"Example"}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`import { isKor } from 'doum';

const contents = '';
const contents2 = '123456';
const contents3 = '나이키코카콜라맥도날드베스킨라빈스삼십일';
const contents4 = 'ㄱㄴ';
const contents5 = '1ab나이키cdef1';
const contents6 = 'ㄴㅏㅇㅣㅋㅣ';

console.log('contents', isKor(contents)); // contents false
console.log('contents2', isKor(contents2)); // contents2 false
console.log('contents3', isKor(contents3)); // contents3 true
console.log('contents4', isKor(contents4)); // contents4 true
console.log('contents5', isKor(contents5)); // contents5 false
console.log('contents6', isKor(contents6)); // contents6 false
`})}),`
`,e(n.h3,{id:"reference",children:"Reference"}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function isKor(contents: string): boolean {}
`})}),`
`,e(n.h3,{id:"importing",children:"Importing"}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`import { isKor } from 'doum';
`})}),`
`,e(n.h3,{id:"arguments",children:"Arguments"}),`
`,o(n.ul,{children:[`
`,o(n.li,{children:[e(n.strong,{children:"contents"})," ",e(n.em,{children:e(n.code,{children:"string"})})]}),`
`]})]})}function l(t={}){const{wrapper:n}=Object.assign({},c(),t.components);return n?e(n,{...t,children:e(r,{...t})}):r(t)}const m=()=>{throw new Error("Docs-only story")};m.parameters={docsOnly:!0};const s={title:"validation/isKor",tags:["stories-mdx"],includeStories:["__page"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:l};const y=["__page"];export{y as __namedExportsOrder,m as __page,s as default};
//# sourceMappingURL=isKor.stories-fe2dfc41.js.map
