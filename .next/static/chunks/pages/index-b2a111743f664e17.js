(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3572)}])},9683:function(e,t,r){"use strict";r.d(t,{C:function(){return n}});let n="http://127.0.0.1:5001"},8090:function(e,t,r){"use strict";r.d(t,{cn:function(){return i}});var n=r(512),s=r(8388);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,n.W)(t))}},3572:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(5893),s=r(756);function i(){return(0,n.jsx)(s.default,{})}},756:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(5893),s=r(7294),i=r(5121),a=r(9102),o=r(5139),d=r(8090);let l=(0,o.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(a.f,{ref:t,className:(0,d.cn)(l(),r),...s})});c.displayName=a.f.displayName;let u=s.forwardRef((e,t)=>{let{className:r,type:s,...i}=e;return(0,n.jsx)("input",{type:s,className:(0,d.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...i})});u.displayName="Input";var f=r(8426);let p=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),m=s.forwardRef((e,t)=>{let{className:r,variant:s,size:i,asChild:a=!1,...o}=e,l=a?f.g7:"button";return(0,n.jsx)(l,{className:(0,d.cn)(p({variant:s,size:i,className:r})),ref:t,...o})});m.displayName="Button";var g=r(1163);r(9182);var x=r(9683);function v(){(0,g.useRouter)();let[e,t]=(0,s.useState)(""),[r,a]=(0,s.useState)(""),o=async t=>{t.preventDefault();try{let t=await i.Z.post("".concat(x.C,"/api/Adminlogin"),{userId:e,userPassword:r}),{success:n,message:s,key:a,email:o}=t.data;t.data.success?(alert("로그인에 성공하였습니다."),sessionStorage.setItem("key",a),sessionStorage.setItem("email",o),window.location.href="/verify"):(alert(s),window.location.reload())}catch(e){console.error(e),alert("로그인 처리중 오류가 발생했습니다."),window.location.reload()}};return(0,n.jsx)("div",{className:"w-full flex items-center justify-center py-12",children:(0,n.jsxs)("div",{className:"mx-auto space-y-6 max-w-[400px]",children:[(0,n.jsxs)("div",{className:"space-y-2 text-center",children:[(0,n.jsx)("h1",{className:"text-3xl font-bold",children:"취지직 관리자"}),(0,n.jsx)("p",{className:"text-gray-500 dark:text-gray-400",children:"취지직 관리자만 접근 가능합니다."})]}),(0,n.jsxs)("div",{className:"space-y-4",children:[(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)(c,{htmlFor:"id",children:"아이디"}),(0,n.jsx)(u,{id:"id",placeholder:"",required:!0,value:e,onChange:e=>t(e.target.value)})]}),(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)("div",{className:"flex items-center",children:(0,n.jsx)(c,{htmlFor:"password",children:"패스워드"})}),(0,n.jsx)(u,{id:"password",required:!0,type:"password",value:r,onChange:e=>a(e.target.value)})]}),(0,n.jsx)(m,{className:"w-full",type:"submit",onClick:o,children:"로그인"})]})]})})}},9182:function(){}},function(e){e.O(0,[709,956,303,888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);