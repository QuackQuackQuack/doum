import{M as i}from"./chunk-S4VUQJ4A-0f597789.js";import{j as t,a as o,F as a}from"./jsx-runtime-7a0bb3b1.js";import{u as r}from"./index-9d0b6a8a.js";import"./iframe-18368bdd.js";import"../sb-preview/runtime.js";import"./index-78739791.js";import"./_commonjsHelpers-de833af9.js";import"./chunk-6P7RB4HF-0bed2682.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function c(e){const n=Object.assign({h1:"h1",p:"p",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong",em:"em"},r(),e.components);return o(a,{children:[t(i,{title:"validation/isStraight"}),`
`,t(n.h1,{id:"isstraight",children:"isStraight"}),`
`,t(n.p,{children:`Check if there are two or more consecutive characters in the string.
문자열 안에 두 개 이상의 연속된 문자가 있는지 확인한다. (공백도 동일문자로 인식)`}),`
`,t(n.h3,{id:"example",children:"Example"}),`
`,t(n.pre,{children:t(n.code,{className:"language-js",children:`import { isSameAsBefore } from 'doum';

const contents = 'bcqqbcd';
const contents2 = 'te가가st';
const contents3 = 'te22st';
const contents4 = 'testpp';
const contents5 = '';
const contents6 = 'tesㅁㅁpp';
const contents7 = 'abcdefg';
const contents8 = '  ';
const contents9 = 'ab  cd';

console.log('contents', isStraight(contents)); // contents, true
console.log('contents2', isStraight(contents2)); // contents2, true
console.log('contents3', isStraight(contents3)); // contents3, true
console.log('contents4', isStraight(contents4)); // contents4, true
console.log('contents5', isStraight(contents5)); // contents5, false
console.log('contents6', isStraight(contents6)); // contents6, true
console.log('contents7', isStraight(contents7)); // contents7, false
console.log('contents8', isStraight(contents8)); // contents8, true
console.log('contents8-1', isStraight(contents8, false)); // contents8-1, false
console.log('contents9', isStraight(contents9)); // contents9-1, true
console.log('contents9-1', isStraight(contents9, false)); // contents8-1, false
`})}),`
`,t(n.h3,{id:"reference",children:"Reference"}),`
`,t(n.pre,{children:t(n.code,{className:"language-js",children:`function isStraight(string: string): boolean {}
`})}),`
`,t(n.h3,{id:"importing",children:"Importing"}),`
`,t(n.pre,{children:t(n.code,{className:"language-js",children:`import { isStraight } from 'doum';
`})}),`
`,t(n.h3,{id:"arguments",children:"Arguments"}),`
`,o(n.ul,{children:[`
`,o(n.li,{children:[t(n.strong,{children:"contents"})," ",t(n.em,{children:t(n.code,{children:"string"})})]}),`
`,o(n.li,{children:[t(n.strong,{children:"gap"})," _",t(n.code,{children:"[boolean=true]"})," ",t(n.em,{children:"- Include space characters"})," ",t(n.code,{children:"공백 문자 포함(기본 값: 포함)"})]}),`
`]}),`
`,t(n.h3,{id:"return",children:"Return"}),`
`,o(n.ul,{children:[`
`,o(n.li,{children:[t(n.strong,{children:"True/False"})," ",t(n.em,{children:t(n.code,{children:"boolean"})})]}),`
`]})]})}function l(e={}){const{wrapper:n}=Object.assign({},r(),e.components);return n?t(n,{...e,children:t(c,{...e})}):c(e)}const h=()=>{throw new Error("Docs-only story")};h.parameters={docsOnly:!0};const s={title:"validation/isStraight",tags:["stories-mdx"],includeStories:["__page"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:l};const M=["__page"];export{M as __namedExportsOrder,h as __page,s as default};
//# sourceMappingURL=isStraight.stories-ba38ad1f.js.map
