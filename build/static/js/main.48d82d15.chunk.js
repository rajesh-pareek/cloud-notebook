(this.webpackJsonpinotebook=this.webpackJsonpinotebook||[]).push([[0],{144:function(e,t,a){},159:function(e,t){},164:function(e,t){},166:function(e,t){},177:function(e,t){},179:function(e,t){},206:function(e,t){},208:function(e,t){},209:function(e,t){},214:function(e,t){},216:function(e,t){},235:function(e,t){},247:function(e,t){},250:function(e,t){},254:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(39),o=a.n(n),l=(a(144),a(20)),r=a(7),i=a(6),d=a(24),b=a(21),j=Object(s.createContext)(),m=a(0),u=function(){var e=Object(s.useContext)(j).addNote,t=Object(s.useState)({title:"",description:"",tag:""}),a=Object(l.a)(t,2),c=a[0],n=a[1],o=function(e){n(Object(b.a)(Object(b.a)({},c),{},Object(d.a)({},e.target.name,e.target.value)))};return Object(m.jsxs)("div",{className:"container my-3",children:[Object(m.jsx)("h2",{className:"text",style:{color:"#20c997"},children:"Add a Note"}),Object(m.jsxs)("form",{className:"my-3",children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"title",className:"form-label",style:{fontWeight:"bold",color:"#777"},children:"Title"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"title",name:"title","aria-describedby":"emailHelp",value:c.title,onChange:o,minLength:5,required:!0})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"description",className:"form-label",style:{fontWeight:"bold",color:"#777"},children:"Description"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"description",name:"description",value:c.description,onChange:o,minLength:5,required:!0})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"tag",className:"form-label",style:{fontWeight:"bold",color:"#777"},children:"Tag"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"tag",name:"tag",value:c.tag,onChange:o,minLength:2})]}),Object(m.jsx)("button",{disabled:c.title.length<5||c.description.length<5,type:"submit",className:"btn btn-info",onClick:function(t){t.preventDefault(),e(c.title,c.description,c.tag),n({title:"",description:"",tag:""})},style:{color:"#fff"},children:"Add Note"})]})]})},h=a(135),p=a.n(h),O=a(270),x=a(136),g=a.n(x),f=function(e){var t=Object(s.useContext)(j).deleteNote,a=e.note,c=e.updateNote;return Object(m.jsx)("div",{className:"col-md-3",children:Object(m.jsx)("div",{className:"card bg-light my-3",children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("span",{style:{right:0,top:0,backgroundColor:"#20c997"},className:"position-absolute badge",children:a.tag.charAt(0).toUpperCase()+a.tag.slice(1)}),Object(m.jsx)("h5",{className:"card-title mt-3",style:{color:"#008080",fontWeight:"bold"},children:a.title}),Object(m.jsx)("p",{className:"card-text",style:{color:"#441",fontWeight:"bold"},children:a.description}),Object(m.jsx)(O.a,{size:"medium","aria-label":"add an alarm",onClick:function(){c(a)},children:Object(m.jsx)(p.a,{className:" icon",style:{color:"#20c997"}})}),Object(m.jsx)(O.a,{color:"secondary",size:"medium","aria-label":"add an alarm",onClick:function(){t(a._id),e.showAlert("Note Deleted Successfully","success")},children:Object(m.jsx)(g.a,{className:" icon",style:{color:"#008080"}})})]})})})},y=function(e){var t=Object(s.useContext)(j),a=Object(i.f)(),c=t.notes,n=void 0===c?[]:c,o=t.getNotes,r=t.editNote;Object(s.useEffect)((function(){localStorage.getItem("token")?o():a.push("/")}),[]);var h=Object(s.useRef)(null),p=Object(s.useRef)(null),O=Object(s.useState)({id:"",etitle:"",edescription:"",etag:"default"}),x=Object(l.a)(O,2),g=x[0],y=x[1],N=function(e){h.current.click(),y({id:e._id,etitle:e.title,edescription:e.description,etag:e.tag})},v=function(e){y(Object(b.a)(Object(b.a)({},g),{},Object(d.a)({},e.target.name,e.target.value)))};return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(u,{showAlert:e.showAlert}),Object(m.jsx)("button",{style:{display:"none"},type:"button",className:"btn btn-info",ref:h,"data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"Submit"}),Object(m.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(m.jsx)("div",{className:"modal-dialog",children:Object(m.jsxs)("div",{className:"modal-content",children:[Object(m.jsxs)("div",{className:"modal-header",children:[Object(m.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Edit Note"}),Object(m.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(m.jsx)("div",{className:"modal-body",children:Object(m.jsxs)("form",{className:"mb-5 mt-4",children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"etitle",className:"form-label",children:"Title"}),Object(m.jsx)("input",{value:g.etitle,type:"text",className:"form-control",id:"etitle",name:"etitle","aria-describedby":"emailHelp",onChange:v,minLength:5,required:!0})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"edescription",className:"form-label",children:"Description"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"edescription",value:g.edescription,name:"edescription",onChange:v,minLength:5,required:!0})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"etag",className:"form-label",children:"Tag"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"etag",value:g.etag,name:"etag",onChange:v,minLength:5})]})]})}),Object(m.jsxs)("div",{className:"modal-footer",children:[Object(m.jsx)("button",{ref:p,type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(m.jsx)("button",{disabled:g.etitle.length<5||g.edescription.length<5,onClick:function(t){r(g.id,g.etitle,g.edescription,g.etag),p.current.click(),e.showAlert("Note Updated Successfully","success")},type:"button",className:"btn btn-info",children:"Update Note"})]})]})})}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("h2",{className:"my-3 text",style:{color:"#20c997"},children:"Your Notes"}),Object(m.jsx)("div",{className:"container mx-1",children:0===n.length&&"No notes to display"}),n.map((function(t){return Object(m.jsx)(f,{updateNote:N,showAlert:e.showAlert,note:t},t._id)}))]})]})},N=function(e){var t=e.showAlert;return Object(m.jsx)("div",{children:Object(m.jsx)(y,{showAlert:t})})},v=function(){var e=Object(i.f)(),t=Object(i.g)();return Object(m.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsxs)(r.b,{className:"navbar-brand",to:(localStorage.getItem("token"),"/"),style:{color:"#FFFFF0",fontWeight:"bold"},children:[Object(m.jsx)("img",{src:"data:image/png;base64,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",alt:"",width:"30",height:"30",class:"mx-2 d-inline-block align-text-top"}),"iNotebook"]}),Object(m.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(m.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(r.b,{className:"nav-link ".concat("/home"===t.pathname?"active":""),"aria-current":"page",to:localStorage.getItem("token")?"/home":"/",style:{color:"#20c997"},children:"Home"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(r.b,{className:"nav-link ".concat("/about"===t.pathname?"active":""),to:"/about",style:{color:"#20c997"},children:"About"})})]}),localStorage.getItem("token")?Object(m.jsx)("div",{className:"d-flex",children:Object(m.jsx)("button",{onClick:function(){localStorage.removeItem("token"),e.push("/")},className:"btn",style:{fontWeight:"bold",color:"white",backgroundColor:"#20c997"},children:"Log Out"})}):Object(m.jsxs)("form",{className:"d-flex",children:[Object(m.jsx)(r.b,{className:"btn  mx-1",to:"/login",role:"button",style:{color:"#20c997"},children:"Login"}),Object(m.jsx)(r.b,{className:"btn mx-1",to:"/signup",role:"button",style:{color:"#FFFFF0"},children:"Sign Up"})]})]})]})})},S=function(){return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("main",{className:"p-5",children:[Object(m.jsx)("h1",{className:"text",style:{color:"#20c997"},children:"iNotebook - Manage your notes on the cloud"}),Object(m.jsx)("p",{class:"fs-6 col-md-8 my-3",style:{color:"#fffff0"},children:"Quickly and easily manage your personal notes on the cloud. Sign Up to iNotebook and easily take notes on the cloud for free. Your notes are always secured in our database and without worrying about security issues. We do not share your personal information with any third party."}),Object(m.jsx)("div",{class:"mb-5",children:Object(m.jsx)(r.b,{to:localStorage.getItem("token")?"/home":"/signup",class:"text-light btn px-4",style:{backgroundColor:"#008080"},children:localStorage.getItem("token")?"Your notes":"Sign Up Now"})}),Object(m.jsx)("hr",{class:"col-3 col-md-2 mb-5"}),Object(m.jsxs)("div",{class:"row g-5",children:[Object(m.jsxs)("div",{class:"col-md-6",children:[Object(m.jsx)("h2",{className:"text-info",children:"Free to Use"}),Object(m.jsx)("p",{style:{color:"#20c997"},children:"iNotebook is free to use, add free and open source platform to take notes on the cloud without worrying about security issues."}),Object(m.jsx)("ul",{class:"icon-list",children:Object(m.jsx)("li",{style:{listStyleType:"none"},children:Object(m.jsx)(r.b,{to:localStorage.getItem("token")?"/home":"/signup",style:{fontWeight:"bold",textDecoration:"none",color:"#fffff0"},children:"Get Started"})})})]}),Object(m.jsxs)("div",{class:"col-md-6",children:[Object(m.jsx)("h2",{class:"text-info",children:"Easy to Navigate"}),Object(m.jsx)("p",{style:{color:"#20c997"},children:"It is a lot easier to navigate through the site and manage your notes. You can create, edit, or delete your notes at any time."}),Object(m.jsxs)("ul",{class:"icon-list",children:[Object(m.jsx)("li",{class:"mt-1",style:{listStyleType:"none"},children:Object(m.jsx)(r.b,{to:localStorage.getItem("token")?"/home":"/login",style:{fontWeight:"bold",textDecoration:"none",color:"#fffff0"},children:localStorage.getItem("token")?"Home":"Login"})}),!localStorage.getItem("token")&&Object(m.jsx)("li",{class:"mt-2",style:{listStyleType:"none"},children:Object(m.jsx)(r.b,{to:"/signup",children:"Sign Up"})})]})]})]})]})})},w=a(11),k=a.n(w),A=a(28);a(155).config();var C=function(e){var t=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_HOST,a=Object(s.useState)([]),c=Object(l.a)(a,2),n=c[0],o=c[1],r=function(){var e=Object(A.a)(k.a.mark((function e(){var a,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/fetchallnotes"),{method:"GET",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}});case 2:return a=e.sent,e.next=5,a.json();case 5:s=e.sent,o(s);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(A.a)(k.a.mark((function e(a,s,c){var l,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/addnote"),{method:"POST",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")},body:JSON.stringify({title:a,description:s,tag:c})});case 2:return l=e.sent,e.next=5,l.json();case 5:r=e.sent,o(n.concat(r));case 7:case"end":return e.stop()}}),e)})));return function(t,a,s){return e.apply(this,arguments)}}(),d=function(){var e=Object(A.a)(k.a.mark((function e(a){var s,c,l;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/deletenote/").concat(a),{method:"DELETE",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}});case 2:s=e.sent,c=s.json(),console.log(c),l=n.filter((function(e){return e._id!==a})),o(l);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(A.a)(k.a.mark((function e(a,s,c,l){var r,i,d,b;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/updatenote/").concat(a),{method:"PUT",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")},body:JSON.stringify({title:s,description:c,tag:l})});case 2:return r=e.sent,e.next=5,r.json();case 5:i=e.sent,console.log(i),d=JSON.parse(JSON.stringify(n)),b=0;case 9:if(!(b<d.length)){e.next=19;break}if(d[b]._id!==a){e.next=16;break}return d[b].title=s,d[b].description=c,d[b].tag=l,e.abrupt("break",19);case 16:b++,e.next=9;break;case 19:o(d);case 20:case"end":return e.stop()}}),e)})));return function(t,a,s,c){return e.apply(this,arguments)}}();return Object(m.jsx)(j.Provider,{value:{notes:n,addNote:i,deleteNote:d,editNote:b,getNotes:r},children:e.children})},E=function(e){return Object(m.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(m.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(m.jsx)("strong",{children:function(e){"danger"===e&&(e="error");var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})})},D=function(e){var t=Object(s.useState)({email:"",password:""}),a=Object(l.a)(t,2),c=a[0],n=a[1],o=Object(i.f)(),r=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_HOST,j=function(){var t=Object(A.a)(k.a.mark((function t(a){var s,n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,fetch("".concat(r,"/api/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c.email,password:c.password})});case 3:return s=t.sent,t.next=6,s.json();case 6:n=t.sent,console.log(n),n.success?(localStorage.setItem("token",n.authtoken),o.push("/home"),e.showAlert("Login Successfull","success")):e.showAlert("Invalid Credentials","danger");case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=function(e){n(Object(b.a)(Object(b.a)({},c),{},Object(d.a)({},e.target.name,e.target.value)))};return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h2",{className:"text-warning my-2 mb-4",children:"Login to Continue to iNotebook"}),Object(m.jsxs)("form",{onSubmit:j,children:[Object(m.jsxs)("div",{className:"mb-3 form-floating",children:[Object(m.jsx)("input",{type:"email",className:"form-control",id:"email",value:c.email,onChange:u,name:"email",placeholder:"Email","aria-describedby":"emailHelp"}),Object(m.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email address"}),Object(m.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(m.jsxs)("div",{className:"mb-3 form-floating",children:[Object(m.jsx)("input",{type:"password",className:"form-control",id:"password",value:c.password,onChange:u,name:"password",placeholder:"Enter your password"}),Object(m.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})},I=function(e){var t=Object(s.useState)({name:"",email:"",password:"",cpassword:""}),a=Object(l.a)(t,2),c=a[0],n=a[1],o=Object(i.f)(),r=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_HOST,j=function(){var t=Object(A.a)(k.a.mark((function t(a){var s,n,l,i,d;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),s=c.name,n=c.email,l=c.password,t.next=4,fetch("".concat(r,"/api/auth/createuser"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,email:n,password:l})});case 4:return i=t.sent,t.next=7,i.json();case 7:d=t.sent,console.log(d),d.success?(localStorage.setItem("token",d.authtoken),o.push("/home"),e.showAlert("Account created Successfully","success")):e.showAlert("User already exists","danger");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=function(e){n(Object(b.a)(Object(b.a)({},c),{},Object(d.a)({},e.target.name,e.target.value)))};return Object(m.jsxs)("div",{className:"container mt-4",children:[Object(m.jsx)("h2",{className:"text-warning mb-4",children:"Sign Up to access iNotebook"}),Object(m.jsxs)("form",{onSubmit:j,children:[Object(m.jsxs)("div",{className:"mb-3 form-floating",children:[Object(m.jsx)("input",{name:"name",type:"text",className:"form-control",id:"name",onChange:u,required:!0,minLength:3}),Object(m.jsx)("label",{htmlFor:"name",className:"form-label",children:"Name"})]}),Object(m.jsxs)("div",{className:"mb-3 form-floating",children:[Object(m.jsx)("input",{name:"email",type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",onChange:u,required:!0,minLength:5}),Object(m.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email address"}),Object(m.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(m.jsxs)("div",{className:"mb-3 form-floating",children:[Object(m.jsx)("input",{name:"password",type:"password",className:"form-control",id:"password",onChange:u,required:!0,minLength:5}),Object(m.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(m.jsx)("div",{id:"passwordHelp",className:"form-text",children:Object(m.jsx)("strong",{children:"Note: ** You cannot reset your password again for security reasons **"})})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})},B=a.p+"static/media/banner1.d6e3c02a.jfif",L=(a.p,a.p+"static/media/banner3.4decb3f8.jfif"),T=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{id:"carouselExampleCaptions",className:"carousel slide","data-bs-ride":"carousel",children:[Object(m.jsxs)("div",{className:"carousel-indicators",children:[Object(m.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"0",className:"active","aria-current":"true","aria-label":"Slide 1"}),Object(m.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"1","aria-label":"Slide 2"}),Object(m.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"2","aria-label":"Slide 3"})]}),Object(m.jsxs)("div",{className:"carousel-inner",children:[Object(m.jsxs)("div",{className:"carousel-item active",children:[Object(m.jsx)("img",{src:L,className:"d-block w-100",alt:""}),Object(m.jsxs)("div",{className:"carousel-caption d-none my-auto d-md-block",children:[Object(m.jsx)("h1",{className:" text-xl",style:{color:"#20c997"},children:"Welcome To iNotebook"}),Object(m.jsx)("p",{children:"Take notes on the cloud and stay focused."})]})]}),Object(m.jsxs)("div",{className:"carousel-item ",children:[Object(m.jsx)("img",{src:B,className:"d-block w-100",alt:""}),Object(m.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(m.jsx)("h1",{className:" text-xl",style:{color:"#20c997"},children:"Security Guarantee"}),Object(m.jsx)("p",{children:"Your privacy and notes secured."})]})]}),Object(m.jsxs)("div",{className:"carousel-item",children:[Object(m.jsx)("img",{src:L,className:"d-block w-100",alt:""}),Object(m.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(m.jsx)("h1",{className:"text text-xl",style:{color:"#20c997"},children:"Free to use"}),Object(m.jsx)("p",{children:"iNotebook is a free platform to manage your notes."})]})]})]}),Object(m.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"prev",children:[Object(m.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(m.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(m.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"next",children:[Object(m.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(m.jsx)("span",{className:"visually-hidden",children:"Next"})]})]}),Object(m.jsxs)("div",{className:"container px-4 py-5",id:"featured-3",children:[Object(m.jsx)("h2",{className:"pb-2 border-bottom",style:{color:"#20c997"},children:"Features of iNotebook"}),Object(m.jsxs)("div",{className:"row g-4 py-5 row-cols-1 row-cols-lg-3",children:[Object(m.jsxs)("div",{className:"feature col mb-4",children:[Object(m.jsx)("h3",{className:"text-info",children:"Security Guarantee"}),Object(m.jsx)("p",{style:{color:"#008080"},children:"We ensure that your notes are highly secured in our database and you can safely access your account and notes."}),Object(m.jsx)(r.b,{to:"/login",className:"btn",style:{backgroundColor:"#20c997",color:"white",fontWeight:"bold"},children:"Login"})]}),Object(m.jsxs)("div",{className:"feature col mb-4",children:[Object(m.jsx)("h3",{className:"text-info",children:"Notes on the cloud"}),Object(m.jsx)("p",{style:{color:"#008080"},children:"Your notes will be highly secured on the cloud and will be able to access them easily via your account login credentials."}),Object(m.jsx)(r.b,{to:"/signup",className:"btn",style:{backgroundColor:"#20c997",color:"white",fontWeight:"bold"},children:"Sign Up"})]}),Object(m.jsxs)("div",{className:"feature col mb-4",children:[Object(m.jsx)("h3",{className:"text-info",children:"Free to use"}),Object(m.jsx)("p",{style:{color:"#008080"},children:"Create and Maintain notes without any charge. You can create any number of notes you want for free."}),Object(m.jsx)(r.b,{to:"/signup",className:"btn  icon-link",style:{backgroundColor:"#20c997",color:"white",fontWeight:"bold"},children:"Get Started"})]})]})]})]})},F=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("footer",{className:"footer mt-auto py-3 bg-dark",children:Object(m.jsxs)("div",{className:"container",style:{display:"flex",justifyContent:"space-between"},children:[Object(m.jsx)("span",{className:"text",style:{color:"#008080",fontWeight:"bold"},children:"Copyright \xa9 iNotebook- Rajesh. All rights reserved."}),Object(m.jsx)("span",{className:"text",style:{marginLeft:"100px",color:"#008080",fontWeight:"bold"},children:"Embrace Masculanity"})]})})})},U=function(){var e=Object(s.useState)(null),t=Object(l.a)(e,2),a=t[0],c=t[1],n=function(e,t){c({msg:e,type:t}),setTimeout((function(){c(null)}),2e3)};return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(C,{children:Object(m.jsxs)(r.a,{children:[Object(m.jsx)(v,{}),Object(m.jsxs)(i.c,{children:[Object(m.jsxs)(i.a,{exact:!0,path:"/",children:[Object(m.jsx)(T,{}),Object(m.jsx)(F,{})]}),Object(m.jsxs)(i.a,{exact:!0,path:"/home",children:[Object(m.jsx)(E,{alert:a}),Object(m.jsx)(N,{showAlert:n}),Object(m.jsx)(F,{})]}),Object(m.jsxs)(i.a,{exact:!0,path:"/about",children:[Object(m.jsx)(E,{alert:a}),Object(m.jsx)(S,{})]}),Object(m.jsxs)(i.a,{exact:!0,path:"/login",children:[Object(m.jsx)(E,{alert:a}),Object(m.jsx)(D,{showAlert:n})]}),Object(m.jsxs)(i.a,{exact:!0,path:"/signup",children:[Object(m.jsx)(E,{alert:a}),Object(m.jsx)(I,{showAlert:n})]})]})]})})})};o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(U,{})}),document.getElementById("root"))}},[[254,1,2]]]);
//# sourceMappingURL=main.48d82d15.chunk.js.map