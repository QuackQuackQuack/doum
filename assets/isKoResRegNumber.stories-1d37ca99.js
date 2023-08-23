import{M as m}from"./chunk-S4VUQJ4A-0f597789.js";import{j as r,a as n,F as R}from"./jsx-runtime-7a0bb3b1.js";import{u as t}from"./index-9d0b6a8a.js";import"./iframe-18368bdd.js";import"../sb-preview/runtime.js";import"./index-78739791.js";import"./_commonjsHelpers-de833af9.js";import"./chunk-6P7RB4HF-0bed2682.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function i(o){const e=Object.assign({h1:"h1",p:"p",br:"br",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong",em:"em"},t(),o.components);return n(R,{children:[r(m,{title:"validation/isKoResRegNumber"}),`
`,r(e.h1,{id:"iskoresregnumber",children:"isKoResRegNumber"}),`
`,n(e.p,{children:["Korean resident registration number is a 13-digit number issued to all residents of South Korea regardless of their nationality.",r(e.br,{}),`
`,"Validation of Korean resident registration number",r(e.br,{}),`
`,"한국 주민등록번호는 국적에 관계없이 한국의 모든 거주자에게 발급되는 13자리 숫자입니다.",r(e.br,{}),`
`,"한국 주민등록번호의 유효성을 검사합니다."]}),`
`,r(e.h3,{id:"example",children:"Example"}),`
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
`,r(e.h3,{id:"reference",children:"Reference"}),`
`,r(e.pre,{children:r(e.code,{className:"language-js",children:`function isKoResRegNumber(koResRegNumber: string): boolean {}
`})}),`
`,r(e.h3,{id:"importing",children:"Importing"}),`
`,r(e.pre,{children:r(e.code,{className:"language-js",children:`import { isKoResRegNumber } from 'doum';
`})}),`
`,r(e.h3,{id:"arguments",children:"Arguments"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[r(e.strong,{children:"koResRegNumber"})," ",r(e.em,{children:r(e.code,{children:"string"})})]}),`
`]}),`
`,r(e.h3,{id:"return",children:"Return"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[r(e.strong,{children:"True/False"})," ",r(e.em,{children:r(e.code,{children:"boolean"})})]}),`
`]})]})}function g(o={}){const{wrapper:e}=Object.assign({},t(),o.components);return e?r(e,{...o,children:r(i,{...o})}):i(o)}const u=()=>{throw new Error("Docs-only story")};u.parameters={docsOnly:!0};const s={title:"validation/isKoResRegNumber",tags:["stories-mdx"],includeStories:["__page"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:g};const _=["__page"];export{_ as __namedExportsOrder,u as __page,s as default};
//# sourceMappingURL=isKoResRegNumber.stories-1d37ca99.js.map
