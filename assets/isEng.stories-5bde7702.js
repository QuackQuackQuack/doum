import{M as i}from"./chunk-S4VUQJ4A-fa8e158a.js";import{j as e,a as o,F as l}from"./jsx-runtime-2fa7255e.js";import{u as c}from"./index-2c740fc7.js";import"./iframe-45f313de.js";import"../sb-preview/runtime.js";import"./index-7696b2fb.js";import"./assert-034c52df.js";import"./chunk-H6ZRF7XV-873b55bd.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function r(t){const n=Object.assign({h1:"h1",p:"p",br:"br",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong",em:"em"},c(),t.components);return o(l,{children:[e(i,{title:"validation/isEng"}),`
`,e(n.h1,{id:"iseng",children:"isEng"}),`
`,o(n.p,{children:["Check if the string is in English only and return it",e(n.br,{}),`
`,"문자열이 영어로만 되있는지 확인 후 반환합니다."]}),`
`,e(n.h3,{id:"example",children:"Example"}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`import { isEng } from 'doum';

const contents = '';
const contents2 = '123456';
const contents3 = 'abcdefg';
const contents4 = 'AbcdefG';
const contents5 = '1abcdef1';
const contents6 = 'ㅁabcdㅂ';

console.log('contents', isEng(contents)); // contents false
console.log('contents2', isEng(contents2)); // contents2 false
console.log('contents3', isEng(contents3)); // contents3 true
console.log('contents4', isEng(contents4)); // contents4 true
console.log('contents5', isEng(contents5)); // contents5 false
console.log('contents6', isEng(contents6)); // contents6 false
`})}),`
`,e(n.h3,{id:"reference",children:"Reference"}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`function isEng(contents: string): boolean {}
`})}),`
`,e(n.h3,{id:"importing",children:"Importing"}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`import { isEng } from 'doum';
`})}),`
`,e(n.h3,{id:"arguments",children:"Arguments"}),`
`,o(n.ul,{children:[`
`,o(n.li,{children:[e(n.strong,{children:"contents"})," ",e(n.em,{children:e(n.code,{children:"string"})})]}),`
`]}),`
`,e(n.h3,{id:"return",children:"Return"}),`
`,o(n.ul,{children:[`
`,o(n.li,{children:[e(n.strong,{children:"True/False"})," ",e(n.em,{children:e(n.code,{children:"boolean"})})]}),`
`]})]})}function a(t={}){const{wrapper:n}=Object.assign({},c(),t.components);return n?e(n,{...t,children:e(r,{...t})}):r(t)}const d=()=>{throw new Error("Docs-only story")};d.parameters={docsOnly:!0};const s={title:"validation/isEng",tags:["stories-mdx"],includeStories:["__page"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:a};const y=["__page"];export{y as __namedExportsOrder,d as __page,s as default};
//# sourceMappingURL=isEng.stories-5bde7702.js.map
