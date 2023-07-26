import{M as r}from"./chunk-S4VUQJ4A-928f0cab.js";import{j as i,a as l,F as m}from"./jsx-runtime-2fa7255e.js";import{u as o}from"./index-2c740fc7.js";import"./iframe-531c24ed.js";import"../sb-preview/runtime.js";import"./index-7696b2fb.js";import"./assert-034c52df.js";import"./chunk-H6ZRF7XV-873b55bd.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function t(n){const e=Object.assign({h1:"h1",p:"p",br:"br",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong",em:"em"},o(),n.components);return l(m,{children:[i(r,{title:"validation/isEmail"}),`
`,i(e.h1,{id:"isemail",children:"isEmail"}),`
`,l(e.p,{children:["Check whether the string is Email type or not and return it.",i(e.br,{}),`
`,"문자열이 Email 타입인지 아닌지를 확인 후 반환합니다."]}),`
`,i(e.h3,{id:"example",children:"Example"}),`
`,i(e.pre,{children:i(e.code,{className:"language-js",children:`import { isEmail } from 'doum';

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
`,i(e.h3,{id:"reference",children:"Reference"}),`
`,i(e.pre,{children:i(e.code,{className:"language-js",children:`function isEmail(email: string): boolean {}
`})}),`
`,i(e.h3,{id:"importing",children:"Importing"}),`
`,i(e.pre,{children:i(e.code,{className:"language-js",children:`import { isEmail } from 'doum';
`})}),`
`,i(e.h3,{id:"arguments",children:"Arguments"}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:[i(e.strong,{children:"email"})," ",i(e.em,{children:i(e.code,{children:"string"})})]}),`
`]})]})}function s(n={}){const{wrapper:e}=Object.assign({},o(),n.components);return e?i(e,{...n,children:i(t,{...n})}):t(n)}const c=()=>{throw new Error("Docs-only story")};c.parameters={docsOnly:!0};const a={title:"validation/isEmail",tags:["stories-mdx"],includeStories:["__page"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:s};const y=["__page"];export{y as __namedExportsOrder,c as __page,a as default};
//# sourceMappingURL=isEmail.stories-e470d593.js.map
