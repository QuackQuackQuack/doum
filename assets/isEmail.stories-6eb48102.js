import{M as o}from"./chunk-S4VUQJ4A-0f597789.js";import{j as n,a as l,F as s}from"./jsx-runtime-7a0bb3b1.js";import{u as t}from"./index-9d0b6a8a.js";import"./iframe-18368bdd.js";import"../sb-preview/runtime.js";import"./index-78739791.js";import"./_commonjsHelpers-de833af9.js";import"./chunk-6P7RB4HF-0bed2682.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function r(i){const e=Object.assign({h1:"h1",p:"p",br:"br",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong",em:"em"},t(),i.components);return l(s,{children:[n(o,{title:"validation/isEmail"}),`
`,n(e.h1,{id:"isemail",children:"isEmail"}),`
`,l(e.p,{children:["Check whether the string is Email type or not and return it.",n(e.br,{}),`
`,"문자열이 Email 타입인지 아닌지를 확인 후 반환합니다."]}),`
`,n(e.h3,{id:"example",children:"Example"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`import { isEmail } from 'doum';

const email = '';
const email2 = '123456';
const email3 = 'abcdefg';
const email4 = 'test@test.co.jp';
const email5 = 'test-test@test.co.kr';
const email6 = 'test@test.com';
const email7 = 'a-b.c@t-e-s-t.co.kr.uk';

console.log('email', isEmail(email)); // email false
console.log('email2', isEmail(email2)); // email2 false
console.log('email3', isEmail(email3)); // email3 false
console.log('email4', isEmail(email4)); // email4 true
console.log('email5', isEmail(email5)); // email5 true
console.log('email6', isEmail(email6)); // email6 true
console.log('email7', isEmail(email7)); // email7 true
`})}),`
`,n(e.h3,{id:"reference",children:"Reference"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`function isEmail(email: string): boolean {}
`})}),`
`,n(e.h3,{id:"importing",children:"Importing"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`import { isEmail } from 'doum';
`})}),`
`,n(e.h3,{id:"arguments",children:"Arguments"}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:[n(e.strong,{children:"email"})," ",n(e.em,{children:n(e.code,{children:"string"})})]}),`
`]}),`
`,n(e.h3,{id:"return",children:"Return"}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:[n(e.strong,{children:"True/False"})," ",n(e.em,{children:n(e.code,{children:"boolean"})})]}),`
`]})]})}function m(i={}){const{wrapper:e}=Object.assign({},t(),i.components);return e?n(e,{...i,children:n(r,{...i})}):r(i)}const c=()=>{throw new Error("Docs-only story")};c.parameters={docsOnly:!0};const a={title:"validation/isEmail",tags:["stories-mdx"],includeStories:["__page"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:m};const M=["__page"];export{M as __namedExportsOrder,c as __page,a as default};
//# sourceMappingURL=isEmail.stories-6eb48102.js.map
