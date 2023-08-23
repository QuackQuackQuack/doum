import{M as l}from"./chunk-S4VUQJ4A-0f597789.js";import{j as n,a as r,F as t}from"./jsx-runtime-7a0bb3b1.js";import{u as c}from"./index-9d0b6a8a.js";import"./iframe-18368bdd.js";import"../sb-preview/runtime.js";import"./index-78739791.js";import"./_commonjsHelpers-de833af9.js";import"./chunk-6P7RB4HF-0bed2682.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function o(i){const e=Object.assign({h1:"h1",p:"p",br:"br",ul:"ul",li:"li",h3:"h3",pre:"pre",code:"code",strong:"strong",em:"em"},c(),i.components);return r(t,{children:[n(l,{title:"validation/isKoDriverLicense"}),`
`,n(e.h1,{id:"iskodriverlicense",children:"isKoDriverLicense"}),`
`,r(e.p,{children:["a Korean Driver's License",n(e.br,{}),`
`,"한국 운전면허증 번호"]}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"AA-BB-CCCCCC-DE"}),`
`,r(e.li,{children:["AA: First issue area 최초 발급지역",`
`,r(e.ul,{children:[`
`,n(e.li,{children:"Seoul 서울(11), Busan 부산(12), Gyeonggi 경기(13), Gangwon 강원(14), North Chungcheong 충북(15),"}),`
`,n(e.li,{children:"South Chungcheong 충남(16), North Jeolla 전북(17), South Jeolla 전남(18), North Gyeongsang 경북(19),"}),`
`,n(e.li,{children:"South Gyeongsang 경남(20) Jeju 제주(21), Daegu 대구(22), Incheon 인천(23), Gwangju 광주(24) Daejeon 대전(25), Ulsan 울산(26) 경기북부(28)"}),`
`]}),`
`]}),`
`,r(e.li,{children:["BB: First issue year 최초 발급년도",`
`,r(e.ul,{children:[`
`,n(e.li,{children:"00 ~ 99"}),`
`]}),`
`]}),`
`,n(e.li,{children:"CC: Serial number 일련번호"}),`
`,n(e.li,{children:"D: Checksum"}),`
`,n(e.li,{children:"E: Issuance round 발급회차"}),`
`]}),`
`,n(e.h3,{id:"example",children:"Example"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`import { isKoDriverLicense } from 'doum';

const licensegNumber = '';
const licensegNumber2 = '11-12-1234567-89';
const licensegNumber3 = '27-22-1234567-89';
const licensegNumber4 = '20-99-12345687-89';
const licensegNumber5 = '111-12-1234567-89';
const licensegNumber6 = '25-56-1234567-89';
const licensegNumber7 = '1-12-1234567-89';
const licensegNumber8 = '11-12-124567-89';
const licensegNumber9 = '22-12-1234567-81';

console.log(isKoDriverLicense(licensegNumber)); // licensegNumber false
console.log(isKoDriverLicense(licensegNumber2)); // licensegNumber2
console.log(isKoDriverLicense(licensegNumber3)); // licensegNumber3 false
console.log(isKoDriverLicense(licensegNumber4)); // licensegNumber4 false
console.log(isKoDriverLicense(licensegNumber5)); // licensegNumber5 false
console.log(isKoDriverLicense(licensegNumber6)); // licensegNumber6 true
console.log(isKoDriverLicense(licensegNumber7)); // licensegNumber7 false
console.log(isKoDriverLicense(licensegNumber8)); // licensegNumber8 false
console.log(isKoDriverLicense(licensegNumber9)); // licensegNumber9 true
`})}),`
`,n(e.h3,{id:"reference",children:"Reference"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`function isKoDriverLicense(driverLicense: string): boolean {}
`})}),`
`,n(e.h3,{id:"importing",children:"Importing"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`import { isKoDriverLicense } from 'doum';
`})}),`
`,n(e.h3,{id:"arguments",children:"Arguments"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[n(e.strong,{children:"driverLicense"})," ",n(e.em,{children:n(e.code,{children:"string"})})]}),`
`]}),`
`,n(e.h3,{id:"return",children:"Return"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[n(e.strong,{children:"True/False"})," ",n(e.em,{children:n(e.code,{children:"boolean"})})]}),`
`]})]})}function a(i={}){const{wrapper:e}=Object.assign({},c(),i.components);return e?n(e,{...i,children:n(o,{...i})}):o(i)}const m=()=>{throw new Error("Docs-only story")};m.parameters={docsOnly:!0};const s={title:"validation/isKoDriverLicense",tags:["stories-mdx"],includeStories:["__page"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:a};const K=["__page"];export{K as __namedExportsOrder,m as __page,s as default};
//# sourceMappingURL=isKoDriverLicense.stories-d3da3b51.js.map
