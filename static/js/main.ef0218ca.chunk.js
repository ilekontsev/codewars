(this.webpackJsonpcodewars=this.webpackJsonpcodewars||[]).push([[0],{110:function(e,t,n){},111:function(e,t,n){},144:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(37),s=n.n(c),u=(n(110),n(111),n(20)),i=n(59),l=n(35),o=n.n(l),d=n(56),f=n(57),m=n.n(f),b={users:[{username:"just_n1ck",name:"\u041a\u043e\u043b\u044f"},{username:"exeedTeamSmirnov",name:"\u0421\u0435\u0440\u0433\u0435\u0439"},{username:"DmitriyKulbed",name:"\u0414\u0438\u043c\u0430"},{username:"eugene-bobkov",name:"\u0416\u0435\u043d\u044f"},{username:"Denis Shupletsov",name:"\u0414\u0435\u043d\u0438\u0441"},{username:"kleputin.exceed",name:"\u041c\u0438\u0448\u0430"},{username:"amrashrv",name:"\u0410\u043c\u0438\u0440"},{username:"ilekontsev",name:"\u0412\u0430\u043d\u044f"},{username:"Viktor Fenev",name:"\u0412\u0438\u043a\u0442\u043e\u0440"},{username:"axkatee",name:"\u041a\u0430\u0442\u044f"}],usersEndpoint:"https://www.codewars.com/api/v1/users/",challengesPrefix:"/code-challenges/completed?page=0",challengesEndpoint:"https://www.codewars.com/api/v1/code-challenges/"},j=function(e){return m.a.get(b.usersEndpoint+e)},p=function(e){return m.a.get(b.usersEndpoint+e+b.challengesPrefix)},h=Object(u.b)("users/fetchUsers",Object(d.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b.users.length){e.next=2;break}return e.abrupt("return",[]);case 2:return t=[],b.users.forEach((function(e){t.push(j(e.username))})),e.prev=4,e.next=7,Promise.all(t);case 7:return n=e.sent,a=n.map((function(e){return e.data})),e.abrupt("return",a);case 12:return e.prev=12,e.t0=e.catch(4),console.log("ERRRR ",e.t0),e.abrupt("return",[]);case 16:case"end":return e.stop()}}),e,null,[[4,12]])})))),v=Object(u.b)("users/fetchChallenges",Object(d.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b.users.length){e.next=2;break}return e.abrupt("return",[]);case 2:return t=[],b.users.forEach((function(e){t.push(p(e.username))})),e.prev=4,e.next=7,Promise.all(t);case 7:return n=e.sent,a=n.map((function(e,t){return Object(i.a)(Object(i.a)({},e.data),{},{username:b.users[t].username})})),e.abrupt("return",a);case 12:return e.prev=12,e.t0=e.catch(4),console.log("ERRRR ",e.t0),e.abrupt("return",[]);case 16:case"end":return e.stop()}}),e,null,[[4,12]])})))),g=Object(u.b)("users/fetchChallengesDetails",function(){var e=Object(d.a)(o.a.mark((function e(t){var n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b.users.length&&t&&t.length){e.next=2;break}return e.abrupt("return",[]);case 2:return n=[],t.forEach((function(e){var t;n.push((t=e,m.a.get(b.challengesEndpoint+t)))})),e.prev=4,e.next=7,Promise.all(n);case 7:return a=e.sent,r=a.map((function(e){return Object(i.a)({},e.data)})),e.abrupt("return",r);case 12:return e.prev=12,e.t0=e.catch(4),console.log("ERRRR ",e.t0),e.abrupt("return",[]);case 16:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}()),O={status:"idle",error:void 0},k=Object(u.c)({name:"appState",initialState:O,reducers:{},extraReducers:function(e){e.addCase(h.pending,(function(e){e.status="loading"})).addCase(h.fulfilled,(function(e){e.status="idle"})).addCase(h.rejected,(function(e,t){e.status="error",e.error=t.error.message})).addCase(v.pending,(function(e){e.status="loading"})).addCase(v.fulfilled,(function(e){e.status="idle"})).addCase(v.rejected,(function(e,t){e.status="error",e.error=t.error.message}))}}),x=function(e){return e.appState.status},y=k.reducer,C=n(22),S={users:[],selectedUser:void 0},w=Object(u.c)({name:"users",initialState:S,reducers:{resetUsers:function(e){e.users=[]},selectUser:function(e,t){e.selectedUser=e.users.find((function(e){var n;return e.username===(null===(n=t.payload)||void 0===n?void 0:n.username)}))},clearSelectedUser:function(e){e.selectedUser=void 0}},extraReducers:function(e){e.addCase(h.fulfilled,(function(e,t){e.users=Object(C.a)(t.payload)})).addCase(h.rejected,(function(e,t){e.users=[]}))}}),E=w.actions,R=(E.resetUsers,E.selectUser),D=(E.clearSelectedUser,function(e){return e.users.users}),U=function(e){return e.users.selectedUser},P=w.reducer,L=Object(u.c)({name:"challenges",initialState:{challenges:[],userChallengesDetails:[]},reducers:{},extraReducers:function(e){e.addCase(v.fulfilled,(function(e,t){e.challenges=Object(C.a)(t.payload)})).addCase(v.rejected,(function(e){e.challenges=[]})).addCase(g.fulfilled,(function(e,t){e.challenges=Object(C.a)(e.challenges),e.userChallengesDetails=Object(C.a)(t.payload)})).addCase(g.rejected,(function(e){e.userChallengesDetails=[]}))}}),N=function(e){return e.challenges.challenges},A=function(e){return e.challenges.userChallengesDetails},K=L.reducer,F=Object(u.a)({reducer:{appState:y,users:P,challenges:K}}),I=n(11),T=n(23),W=n(195),M=n(4),B=n(8),J=[{links:[{name:"Ranks",url:"",key:"ranks"},{name:"Details",url:"",key:"chart",disabled:!0}]}];function V(){var e=Object(a.useState)(J),t=Object(T.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("ranks"),s=Object(T.a)(c,2),u=s[0],i=s[1],l=Object(M.f)(),o=Object(I.c)(U),d=Object(a.useCallback)((function(){r((function(e){return e[0].links[1].disabled=!o,Object(C.a)(e)}))}),[o]);Object(a.useEffect)((function(){d()}),[o,d]);return Object(B.jsx)("div",{children:Object(B.jsx)(W.a,{selectedKey:u,ariaLabel:"Nav example with custom group headers",groups:n,onLinkClick:function(e,t){switch(i((null===t||void 0===t?void 0:t.key)||"/"),null===t||void 0===t?void 0:t.key){case"ranks":l("/");break;case"chart":l("/chart");break;default:l("/")}}})})}var _=n(89),z=(n(144),{"8 kyu":2,"7 kyu":3,"6 kyu":8,"5 kyu":21,"4 kyu":55,"3 kyu":149,"2 kyu":404,"1 kyu":1097});var H=function(){var e,t=Object(I.c)(U),n=Object(I.c)((e=null===t||void 0===t?void 0:t.username,function(t){return t.challenges.challenges.filter((function(t){return t.username===e}))})),r=Object(I.c)(A),c=n.flatMap((function(e){return e.data})),s=Object(a.useState)([]),u=Object(T.a)(s,2),i=u[0],l=u[1],o=Object(a.useState)([]),d=Object(T.a)(o,2),f=d[0],m=d[1],b=Object(I.b)();Object(a.useEffect)((function(){var e=c.map((function(e){return e.id}));b(g(e))}),[b]);var j=Object(a.useCallback)((function(){if(n&&n[0]){var e=Object(C.a)(n[0].data.filter((function(e){return e.completedLanguages.includes("javascript")||e.completedLanguages.includes("typescript")})));e=(e=e.sort((function(e,t){return new Date(t.completedAt).getTime()-new Date(e.completedAt).getTime()>0?-1:1}))).reduce((function(e,t){var n,a=z[(null===(n=r.find((function(e){return e.name===t.name})))||void 0===n?void 0:n.rank.name)||"8 kyu"],c=new Date(t.completedAt).toLocaleString();return e[c]?e[c].score+=a:e[c]={score:a},e}),{});var t=Object.values(e).map((function(e){return e.score})),a=Object.keys(e);l(Object(C.a)(t)),m(Object(C.a)(a))}}),[r]);return Object(a.useEffect)((function(){j()}),[j]),Object(B.jsx)("div",{className:"chart-container",children:Object(B.jsx)(_.a,{option:{grid:{top:8,right:8,bottom:24,left:36},xAxis:{type:"category",data:f},yAxis:{type:"value"},series:[{data:i,type:"line",smooth:!0}],tooltip:{trigger:"axis"}},notMerge:!0,lazyUpdate:!1,theme:"theme_name",onChartReady:function(){console.log(999,"charts are ready")}})})},q=n(193),G=n(194),Q=n(5),X=n(25),Y=(n(145),new q.a({canSelectItem:function(e){return!0},getKey:function(e){return e.username}}));var Z=function(){var e=Object(I.c)(x),t=Object(I.c)(D),n=Object(I.c)(U),r=Object(I.c)(N),c=Object(I.b)();Object(a.useEffect)((function(){c(h())}),[c]),Object(a.useEffect)((function(){t.length&&c(v())}),[t,c]);var s=function(e){var t;return(null===(t=b.users.find((function(t){return t.username===e})))||void 0===t?void 0:t.name)||e};return Object(B.jsx)("div",{className:"table-container",children:Object(B.jsx)(G.a,{checkboxVisibility:Q.a.hidden,items:t.map((function(e){var t,n,a,c,u,i,l,o=(null===(t=e.ranks)||void 0===t||null===(n=t.languages.typescript)||void 0===n?void 0:n.score)||0,d=(null===(a=e.ranks)||void 0===a||null===(c=a.languages.javascript)||void 0===c?void 0:c.score)||0,f=null===(u=r.find((function(t){var n;return null===(n=t.username)||void 0===n?void 0:n.match(e.username)})))||void 0===u?void 0:u.data,m=(null===(l=f=null===(i=f)||void 0===i?void 0:i.filter((function(e){return e.completedLanguages.includes("javascript")||e.completedLanguages.includes("typescript")})))||void 0===l?void 0:l.length)||0;return{username:e.username,name:s(e.username),score:o+d,challengeCount:m}})).sort((function(e,t){return t.score-e.score})),enableShimmer:"loading"===e,columns:[{key:"name",name:"Hacker",fieldName:"name",minWidth:10,maxWidth:100},{key:"score",name:"Score",fieldName:"score",minWidth:50,maxWidth:100,data:"string",isPadded:!0},{key:"challenge",name:"Completed tasks",fieldName:"challengeCount",minWidth:300,data:"string",isPadded:!0}],selectionMode:X.b.single,onActiveItemChanged:function(e){console.log(444443,Y.getSelection(),Y.getSelectedIndices(),Y.isKeySelected("1")),c(R({username:null===e||void 0===e?void 0:e.username}))},selectionPreservedOnEmptyClick:!0,selection:Y,onDidUpdate:function(e){n&&!Y.isKeySelected(n.username)&&Y.setKeySelected(n.username,!0,!0)}})})};function $(){var e=Object(I.c)(U),t=Object(M.f)();return Object(a.useEffect)((function(){e||t("/")}),[e,t]),Object(B.jsxs)(M.c,{children:[Object(B.jsx)(M.a,{index:!0,element:Object(B.jsx)(Z,{})}),Object(B.jsx)(M.a,{path:"chart",element:Object(B.jsx)(H,{})})]})}var ee=n(47);var te=function(){return Object(B.jsx)(I.a,{store:F,children:Object(B.jsx)(ee.a,{children:Object(B.jsxs)("div",{className:"main-container",children:[Object(B.jsx)("div",{className:"nav",children:Object(B.jsx)(V,{})}),Object(B.jsx)("div",{className:"content",children:Object(B.jsx)($,{})})]})})})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,205)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(B.jsx)(r.a.StrictMode,{children:Object(B.jsx)(te,{})}),document.getElementById("root")),ne()}},[[146,1,2]]]);
//# sourceMappingURL=main.ef0218ca.chunk.js.map