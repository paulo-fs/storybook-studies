var a=Object.defineProperty;var o=(r,n)=>a(r,"name",{value:n,configurable:!0});import{a as s,j as e}from"./jsx-runtime.18e1fbc6.js";function t({tokens:r,hasRemvalue:n=!1}){return s("table",{className:"tokens-grid",children:[e("thead",{children:s("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Value"}),n&&e("th",{children:"Pixels"})]})}),e("tbody",{children:Object.entries(r).map(([d,i])=>s("tr",{children:[e("td",{children:d}),e("td",{children:i}),n&&s("td",{children:[Number(i.replace("rem",""))*16,"px"]})]},d))})]})}o(t,"TokensGrid");try{t.displayName="TokensGrid",t.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemvalue:{defaultValue:{value:"false"},description:"",name:"hasRemvalue",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/pages/components/TokensGrid.tsx#TokensGrid"]={docgenInfo:t.__docgenInfo,name:"TokensGrid",path:"src/pages/components/TokensGrid.tsx#TokensGrid"})}catch{}export{t as T};
//# sourceMappingURL=TokensGrid.da869ae1.js.map