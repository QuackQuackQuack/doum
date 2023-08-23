import{M as t}from"./chunk-S4VUQJ4A-0f597789.js";import{j as n,a as o,F as d}from"./jsx-runtime-7a0bb3b1.js";import{u as s}from"./index-9d0b6a8a.js";import"./iframe-18368bdd.js";import"../sb-preview/runtime.js";import"./index-78739791.js";import"./_commonjsHelpers-de833af9.js";import"./chunk-6P7RB4HF-0bed2682.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function a(r){const e=Object.assign({h1:"h1",p:"p",br:"br",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong",em:"em"},s(),r.components);return o(d,{children:[n(t,{title:"string/addCommas"}),`
`,n(e.h1,{id:"addcommas",children:"addCommas"}),`
`,o(e.p,{children:["Write the numbers in commas in thousand units.",n(e.br,{}),`
`,"숫자를 천단위씩 콤마로 표기한다."]}),`
`,n(e.h3,{id:"example",children:"Example"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`import { addCommas } from 'doum';

console.log('example1', addCommas(1)); // example1 1
console.log('example2', addCommas(10)); // example2 10
console.log('example3', addCommas(0.123456)); // example3 0.123,456
console.log('example4', addCommas(1000)); // example4 1,000
console.log('example5', addCommas(1000)); // example5 1,000
console.log('example6', addCommas(1000000)); // example6 1,000,000
console.log('example7', addCommas(1000000000)); // example7 1,000,000,000
console.log('example8', addCommas(0)); // example8 0
`})}),`
`,n(e.h3,{id:"reference",children:"Reference"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`export function addCommas(num: string | number): string {}
`})}),`
`,n(e.h3,{id:"importing",children:"Importing"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`import { addCommas } from 'doum';
`})}),`
`,n(e.h3,{id:"arguments",children:"Arguments"}),`
`,o(e.ul,{children:[`
`,o(e.li,{children:[n(e.strong,{children:"num"})," ",n(e.em,{children:n(e.code,{children:"string | number"})}),"  숫자 문자(numeric characters) | 숫자(number)"]}),`
`]}),`
`,n(e.h3,{id:"return",children:"Return"}),`
`,o(e.ul,{children:[`
`,o(e.li,{children:[n(e.strong,{children:"콤마표기 숫자 문자(Write numeric characters in commas)"})," ",n(e.em,{children:n(e.code,{children:"stirng"})})]}),`
`]})]})}function l(r={}){const{wrapper:e}=Object.assign({},s(),r.components);return e?n(e,{...r,children:n(a,{...r})}):a(r)}const i=()=>{throw new Error("Docs-only story")};i.parameters={docsOnly:!0};const m={title:"string/addCommas",tags:["stories-mdx"],includeStories:["__page"]};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:l};const M=["__page"];export{M as __namedExportsOrder,i as __page,m as default};
//# sourceMappingURL=addCommas.stories-8404ec8e.js.map
