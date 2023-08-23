import{M as i}from"./chunk-S4VUQJ4A-0f597789.js";import{j as e,a as o,F as l}from"./jsx-runtime-7a0bb3b1.js";import{u as c}from"./index-9d0b6a8a.js";import"./iframe-18368bdd.js";import"../sb-preview/runtime.js";import"./index-78739791.js";import"./_commonjsHelpers-de833af9.js";import"./chunk-6P7RB4HF-0bed2682.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function s(t){const n=Object.assign({h1:"h1",p:"p",br:"br",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong",em:"em"},c(),t.components);return o(l,{children:[e(i,{title:"validation/isKor"}),`
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
`]}),`
`,e(n.h3,{id:"return",children:"Return"}),`
`,o(n.ul,{children:[`
`,o(n.li,{children:[e(n.strong,{children:"True/False"})," ",e(n.em,{children:e(n.code,{children:"boolean"})})]}),`
`]})]})}function a(t={}){const{wrapper:n}=Object.assign({},c(),t.components);return n?e(n,{...t,children:e(s,{...t})}):s(t)}const d=()=>{throw new Error("Docs-only story")};d.parameters={docsOnly:!0};const r={title:"validation/isKor",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:a};const M=["__page"];export{M as __namedExportsOrder,d as __page,r as default};
//# sourceMappingURL=isKor.stories-21f83429.js.map
