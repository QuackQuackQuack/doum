import{M as s}from"./chunk-S4VUQJ4A-0f597789.js";import{j as n,a as r,F as a}from"./jsx-runtime-7a0bb3b1.js";import{u as i}from"./index-9d0b6a8a.js";import"./iframe-18368bdd.js";import"../sb-preview/runtime.js";import"./index-78739791.js";import"./_commonjsHelpers-de833af9.js";import"./chunk-6P7RB4HF-0bed2682.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function c(t){const e=Object.assign({h1:"h1",p:"p",br:"br",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong",em:"em"},i(),t.components);return r(a,{children:[n(s,{title:"object/renameKeys"}),`
`,n(e.h1,{id:"renamekeys",children:"renameKeys"}),`
`,r(e.p,{children:["Change the key you want to change after receiving the Key Map Object.",n(e.br,{}),`
`,"Key Map Object를 받아 변경하고싶은 키를 변경한다."]}),`
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
): Record<string, unknown> {}
`})}),`
`,n(e.h3,{id:"importing",children:"Importing"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`import { renameKeys } from 'doum';
`})}),`
`,n(e.h3,{id:"arguments",children:"Arguments"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[n(e.strong,{children:"obj"})," ",n(e.em,{children:n(e.code,{children:"Record<string, any>"})}),"  원본 오브젝트"]}),`
`,r(e.li,{children:[n(e.strong,{children:"keysMap"})," ",n(e.em,{children:n(e.code,{children:"Record<string, string>"})}),"  변경될 키 오브젝트"]}),`
`]}),`
`,n(e.h3,{id:"return",children:"Return"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[n(e.strong,{children:"변경된 오브젝트"})," ",n(e.em,{children:n(e.code,{children:"Object"})})]}),`
`]})]})}function d(t={}){const{wrapper:e}=Object.assign({},i(),t.components);return e?n(e,{...t,children:n(c,{...t})}):c(t)}const m=()=>{throw new Error("Docs-only story")};m.parameters={docsOnly:!0};const o={title:"object/renameKeys",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:d};const _=["__page"];export{_ as __namedExportsOrder,m as __page,o as default};
//# sourceMappingURL=renameKeys.stories-e938b27c.js.map
