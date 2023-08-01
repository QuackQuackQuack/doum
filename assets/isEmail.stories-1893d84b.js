import{M as o}from"./chunk-S4VUQJ4A-fa8e158a.js";import{j as n,a as l,F as m}from"./jsx-runtime-2fa7255e.js";import{u as t}from"./index-2c740fc7.js";import"./iframe-45f313de.js";import"../sb-preview/runtime.js";import"./index-7696b2fb.js";import"./assert-034c52df.js";import"./chunk-H6ZRF7XV-873b55bd.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function a(i){const e=Object.assign({h1:"h1",p:"p",br:"br",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong",em:"em"},t(),i.components);return l(m,{children:[n(o,{title:"validation/isEmail"}),`
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
`]})]})}function s(i={}){const{wrapper:e}=Object.assign({},t(),i.components);return e?n(e,{...i,children:n(a,{...i})}):a(i)}const c=()=>{throw new Error("Docs-only story")};c.parameters={docsOnly:!0};const r={title:"validation/isEmail",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:s};const y=["__page"];export{y as __namedExportsOrder,c as __page,r as default};
//# sourceMappingURL=isEmail.stories-1893d84b.js.map
