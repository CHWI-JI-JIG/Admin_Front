(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[143],{2841:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/verify",function(){return r(7179)}])},9683:function(e,t,r){"use strict";r.d(t,{C:function(){return n}});let n="http://192.168.0.133:5001"},8090:function(e,t,r){"use strict";r.d(t,{cn:function(){return a}});var n=r(512),s=r(8388);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,n.W)(t))}},7179:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(5893),s=r(7294),a=r(5121),o=r(1163),i=r(9683);r(9182);var l=r(9102),c=r(5139),d=r(8090);let u=(0,c.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),f=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(l.f,{ref:t,className:(0,d.cn)(u(),r),...s})});f.displayName=l.f.displayName;let p=s.forwardRef((e,t)=>{let{className:r,type:s,...a}=e;return(0,n.jsx)("input",{type:s,className:(0,d.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...a})});p.displayName="Input";var m=r(8426);let g=(0,c.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),x=s.forwardRef((e,t)=>{let{className:r,variant:s,size:a,asChild:o=!1,...i}=e,l=o?m.g7:"button";return(0,n.jsx)(l,{className:(0,d.cn)(g({variant:s,size:a,className:r})),ref:t,...i})});function h(){let e=(0,o.useRouter)(),[t,r]=(0,s.useState)(""),[l,c]=(0,s.useState)("");(0,s.useEffect)(()=>{(async()=>{let t=sessionStorage.getItem("key"),r=sessionStorage.getItem("email");if(t&&r){c(r);try{let e=await a.Z.post("".concat(i.C,"/api/send-otp"),{key:t,email:r});alert(e.data)}catch(e){console.error("OTP 전송 중 오류 발생:",e)}}else e.push("/404")})()},[e]);let d=async()=>{try{let r=sessionStorage.getItem("key");if(!r){alert("세션 키가 없습니다.");return}console.log("POST 요청 파라미터:",{otp:t,key:r});let n=await a.Z.post("".concat(i.C,"/api/verify-otp"),{otp:t,key:r});console.log("POST 요청 응답:",n);let{success:s,message:o,key:l,auth:c}=n.data;alert(o),s&&(sessionStorage.setItem("key",l),sessionStorage.setItem("auth",c),e.push("/admin"))}catch(e){console.error("POST 요청 오류:",e),alert(e)}},u=async e=>{e.preventDefault(),d()};return(0,n.jsx)("div",{className:"mx-auto max-w-[350px] space-y-6",children:(0,n.jsxs)("form",{onSubmit:u,children:[(0,n.jsxs)("div",{className:"space-y-2 text-center",children:[(0,n.jsx)("h1",{className:"text-3xl font-bold",children:"2차 인증"}),(0,n.jsx)("p",{className:"text-gray-500 dark:text-gray-400",children:"취지직 2FA."})]}),(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"space-y-4",children:(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)(f,{htmlFor:"id",children:"OTP 인증"}),(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(p,{id:"otp",required:!0,className:"w-64",value:t,onChange:e=>{/^[0-9]{0,6}$/.test(e.target.value)&&r(e.target.value)}}),(0,n.jsx)(x,{type:"submit",className:"ml-2 bg-gray-500 text-white py-2 px-6 rounded",children:"검증"})]})]})})})]})})}x.displayName="Button"},9182:function(){}},function(e){e.O(0,[709,956,303,888,774,179],function(){return e(e.s=2841)}),_N_E=e.O()}]);