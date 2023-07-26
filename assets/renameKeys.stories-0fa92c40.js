import{M as s}from"./chunk-S4VUQJ4A-1034635d.js";import{j as n,a as o,F as a}from"./jsx-runtime-2fa7255e.js";import{u as c}from"./index-2c740fc7.js";import"./iframe-c56f5a3a.js";import"../sb-preview/runtime.js";import"./index-7696b2fb.js";import"./assert-034c52df.js";import"./chunk-H6ZRF7XV-873b55bd.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function i(r){const e=Object.assign({h1:"h1",p:"p",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong",em:"em"},c(),r.components);return o(a,{children:[n(s,{title:"object/renameKeys"}),`
`,n(e.h1,{id:"renamekeys",children:"renameKeys"}),`
`,n(e.p,{children:"Key Map Object를 받아 변경하고싶은 키를 변경한다."}),`
`,n(e.h3,{id:"example",children:"Example"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`import { renameKeys } from 'doum';

const originObject = {
  a: '에이',
  b: '비',
  c: '씨',
  d: '디',
};

console.log('example', renameKeys(originObject, { a: '에이', b: '비', c: '씨', d: '디' }))

// example
{
  에이: '에이',
  비: '비',
  씨: '씨',
  디: '디',
};
`})}),`
`,n(e.h3,{id:"reference",children:"Reference"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`function renameKeys(
  obj: Record<string, unknown>,
  keysMap: Record<string, string>
): Record<string, unknown> 
`})}),`
`,n(e.h3,{id:"importing",children:"Importing"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`import { renameKeys } from 'doum';
`})}),`
`,n(e.h3,{id:"arguments",children:"Arguments"}),`
`,o(e.ul,{children:[`
`,o(e.li,{children:[n(e.strong,{children:"obj"})," ",n(e.em,{children:n(e.code,{children:"Record<string, unknown>"})}),"  원본 오브젝트"]}),`
`,o(e.li,{children:[n(e.strong,{children:"keysMap"})," ",n(e.em,{children:n(e.code,{children:"Record<string, string>"})}),"  변경될 키 오브젝트"]}),`
`]}),`
`,n(e.h3,{id:"return",children:"Return"}),`
`,o(e.ul,{children:[`
`,o(e.li,{children:[n(e.strong,{children:"변경된 오브젝트"})," ",n(e.em,{children:n(e.code,{children:"Object"})})]}),`
`]})]})}function d(r={}){const{wrapper:e}=Object.assign({},c(),r.components);return e?n(e,{...r,children:n(i,{...r})}):i(r)}const m=()=>{throw new Error("Docs-only story")};m.parameters={docsOnly:!0};const t={title:"object/renameKeys",tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:d};const K=["__page"];export{K as __namedExportsOrder,m as __page,t as default};
//# sourceMappingURL=renameKeys.stories-0fa92c40.js.map
