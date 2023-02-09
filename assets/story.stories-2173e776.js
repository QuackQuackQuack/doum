import{M as R}from"./chunk-MA2MUXQN-f803407b.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{j as r,a as o,F as g}from"./jsx-runtime-670450c2.js";import{u as i}from"./index-9ec211f2.js";import"./preload-helper-41c905a7.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-4b8a78e3.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-d460ff2e.js";import"./chunk-XHUUYXNA-29433977.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-Y5O7ZP4P-ee2f7c9c.js";import"./_getTag-6acf5a83.js";import"./_baseIsEqual-0821e666.js";import"./index-b1d1948e.js";import"./index-356e4a49.js";function u(n={}){const{wrapper:t}=Object.assign({},i(),n.components);return t?r(t,{...n,children:r(m,{})}):m();function m(){const e=Object.assign({h1:"h1",p:"p",br:"br",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong",em:"em"},i(),n.components);return o(g,{children:[r(R,{title:"User/isKoResRegNumber"}),`
`,r(e.h1,{children:"isKoResRegNumber"}),`
`,o(e.p,{children:["Korean resident registration number is a 13-digit number issued to all residents of South Korea regardless of their nationality.",r(e.br,{}),`
`,"Validation of Korean resident registration number",r(e.br,{}),`
`,"한국 주민등록번호는 국적에 관계없이 한국의 모든 거주자에게 발급되는 13자리 숫자입니다.",r(e.br,{}),`
`,"한국 주민등록번호의 유효성을 검사합니다."]}),`
`,r(e.h3,{children:"Example"}),`
`,r(e.pre,{children:r(e.code,{className:"language-js",children:`import { isKoResRegNumber } from 'doum';

const koResRegNumber = '991111-1234567';
const koResRegNumber2 = '0011111234567';
const koResRegNumber3 = '8812123234567';
const koResRegNumber4 = '001111-1234567';
const koResRegNumber5 = '001242-1234567';
const koResRegNumber6 = '001231-5234567';
const koResRegNumber7 = '001231-123456A';

console.log('koResRegNumber', isKoResRegNumber(koResRegNumber)); // koResRegNumber true
console.log('koResRegNumber2', isKoResRegNumber(koResRegNumber2)); // koResRegNumber2 true
console.log('koResRegNumber3', isKoResRegNumber(koResRegNumber3)); // koResRegNumber3 true
console.log('koResRegNumber4', isKoResRegNumber(koResRegNumber4)); // koResRegNumber4 true
console.log('koResRegNumber5', isKoResRegNumber(koResRegNumber5)); // koResRegNumber5 false
console.log('koResRegNumber6', isKoResRegNumber(koResRegNumber6)); // koResRegNumber6 false
console.log('koResRegNumber7', isKoResRegNumber(koResRegNumber7)); // koResRegNumber7 false
`})}),`
`,r(e.h3,{children:"Reference"}),`
`,r(e.pre,{children:r(e.code,{className:"language-js",children:`function isKoResRegNumber(koResRegNumber: string): boolean {}
`})}),`
`,r(e.h3,{children:"Importing"}),`
`,r(e.pre,{children:r(e.code,{className:"language-js",children:`import { isKoResRegNumber } from 'doum';
`})}),`
`,r(e.h3,{children:"Arguments"}),`
`,o(e.ul,{children:[`
`,o(e.li,{children:[r(e.strong,{children:"koResRegNumber"})," ",r(e.em,{children:r(e.code,{children:"string"})})]}),`
`]})]})}}const c=()=>{throw new Error("Docs-only story")};c.parameters={docsOnly:!0};const s={title:"User/isKoResRegNumber",tags:["stories-mdx"],includeStories:["__page"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:u};const A=["__page"];export{A as __namedExportsOrder,c as __page,s as default};
//# sourceMappingURL=story.stories-2173e776.js.map
