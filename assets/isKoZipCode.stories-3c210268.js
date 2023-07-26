import{M as s}from"./chunk-S4VUQJ4A-1034635d.js";import{j as o,a as i,F as p}from"./jsx-runtime-2fa7255e.js";import{u as d}from"./index-2c740fc7.js";import"./iframe-c56f5a3a.js";import"../sb-preview/runtime.js";import"./index-7696b2fb.js";import"./assert-034c52df.js";import"./chunk-H6ZRF7XV-873b55bd.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function t(n){const e=Object.assign({h1:"h1",p:"p",br:"br",a:"a",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong",em:"em"},d(),n.components);return i(p,{children:[o(s,{title:"validation/isKoZipCode"}),`
`,o(e.h1,{id:"iskozipcode",children:"isKoZipCode"}),`
`,i(e.p,{children:["Korean Road Name Address Zip Code(Postal Code)",o(e.br,{}),`
`,"Verify that the first 2 digits are national basic zone numbers and check only if the remaining 3 digits are numbers.",o(e.br,{}),`
`,"한국 도로명주소 우편번호 - 앞에 2자리가 ",o(e.a,{href:"https://ko.wikipedia.org/wiki/%EA%B5%AD%EA%B0%80%EA%B8%B0%EC%B4%88%EA%B5%AC%EC%97%AD%EB%B2%88%ED%98%B8",target:"_blank",rel:"nofollow noopener noreferrer",children:"국가기초구역번호"}),"인지 검증하고 나머지 3자리는 숫자인지만 체크합니다."]}),`
`,o(e.h3,{id:"example",children:"Example"}),`
`,o(e.pre,{children:o(e.code,{className:"language-js",children:`import { isKoZipCode } from 'doum';

const zipCode = '';
const zipCode2 = '30062';
const zipCode3 = '00001';
const zipCode4 = '64123';
const zipCode5 = '63086';

console.log('zipCode', isKoZipCode(zipCode)); // zipCode false
console.log('zipCode2', isKoZipCode(zipCode2)); // zipCode2 true
console.log('zipCode3', isKoZipCode(zipCode3)); // zipCode3 false
console.log('zipCode4', isKoZipCode(zipCode4)); // zipCode4 false
console.log('zipCode5', isKoZipCode(zipCode5)); // zipCode5 true
`})}),`
`,o(e.h3,{id:"reference",children:"Reference"}),`
`,o(e.pre,{children:o(e.code,{className:"language-js",children:`function isKoZipCode(koZipCode: string): boolean {}
`})}),`
`,o(e.h3,{id:"importing",children:"Importing"}),`
`,o(e.pre,{children:o(e.code,{className:"language-js",children:`import { isKoZipCode } from 'doum';
`})}),`
`,o(e.h3,{id:"arguments",children:"Arguments"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[o(e.strong,{children:"zipcode"})," ",o(e.em,{children:o(e.code,{children:"string"})})]}),`
`]})]})}function a(n={}){const{wrapper:e}=Object.assign({},d(),n.components);return e?o(e,{...n,children:o(t,{...n})}):t(n)}const c=()=>{throw new Error("Docs-only story")};c.parameters={docsOnly:!0};const r={title:"validation/isKoZipCode",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:a};const _=["__page"];export{_ as __namedExportsOrder,c as __page,r as default};
//# sourceMappingURL=isKoZipCode.stories-3c210268.js.map
