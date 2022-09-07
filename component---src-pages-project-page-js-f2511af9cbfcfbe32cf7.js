"use strict";(self.webpackChunkmyweb3course=self.webpackChunkmyweb3course||[]).push([[355],{89802:function(e,t,r){var n=r(67294),a=r(16267),c=r.n(a);t.Z=function(e){var t,r,a=e.className,o=e.isBeingEdited,s=e.onChange,i=e.startContent,u=e.id,d=e.isInline,p=e.children;return o?t=i?c().decode(i):"":p?t=p:i&&(t=i?c().decode(i):""),r=a||"",o&&(r+=" index__card__content__description--is-being-edited"),d&&(r+=" index__card__content__description--is-inline"),n.createElement("div",{className:r,contentEditable:!!o,onInput:function(e){var t={};t[u]=e.currentTarget.textContent,s(t)},suppressContentEditableWarning:!0},t)}},3290:function(e,t,r){r.d(t,{X:function(){return m},a:function(){return f}});var n=r(4942),a=r(15861),c=r(87757),o=r.n(c),s=r(67294),i=r(20693),u=r(8709),d=r(70144);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var l=s.createContext([{},function(){},{},function(){},{},function(){},{},function(){}]),f=function(e){var t=e.children,r=(0,s.useState)(void 0),n=r[0],a=r[1],c=(0,s.useState)(void 0),o=c[0],i=c[1],u=(0,s.useState)(void 0),d=u[0],p=u[1],f=(0,s.useState)(!1),m=f[0],_=f[1];return s.createElement(l.Provider,{value:[n,a,o,i,d,p,m,_]},t)},m=function(){var e=(0,u.Fp)(),t=e.instance,r=e.accounts,c=(0,s.useContext)(l),f=c[0],m=c[1],_=c[2],v=c[3],x=c[4],h=c[5],b=c[6],j=c[7],E=function(){var e=(0,a.Z)(o().mark((function e(n){var a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.t)(r,t);case 3:return a=e.sent,e.next=6,(0,i.Z)("projectgroups/"+n,"get",a,void 0);case 6:return c=e.sent,m(c),e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(0),console.error("useProjectData:error:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,a.Z)(o().mark((function e(n){var a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.t)(r,t);case 3:return a=e.sent,e.next=6,(0,i.Z)("users/role/?projectgroupname="+n,"get",a,void 0);case 6:return c=e.sent,v(c),e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(0),console.error("useProjectData:updateUserData:error:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=(0,a.Z)(o().mark((function e(n){var a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.t)(r,t);case 3:return a=e.sent,j(!1),e.next=7,(0,i.Z)("projects/projectgroups/"+n,"get",a,void 0);case 7:return c=e.sent,h(c),j(!0),e.abrupt("return",c);case 13:e.prev=13,e.t0=e.catch(0),console.error("useProjectData:updateProjectDataerror:",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=(0,a.Z)(o().mark((function e(n){var a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.t)(r,t);case 3:return a=e.sent,e.next=6,(0,i.Z)("projects","post",a,{projectGroupName:n});case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.error("useProjectData:addOneProject:error:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=(0,a.Z)(o().mark((function e(n){var a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.t)(r,t);case 3:return a=e.sent,e.next=6,(0,i.Z)("projects/"+n._id,"DELETE",a,void 0);case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.error("useProjectData:deleteOneProject:error:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=(0,a.Z)(o().mark((function e(n){var a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.t)(r,t);case 3:return a=e.sent,e.next=6,(0,i.Z)("projects/"+n._id+"/member","POST",a,void 0);case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.error("useProjectData:addMemberToProject:error:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=(0,a.Z)(o().mark((function e(n){var a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.t)(r,t);case 3:return a=e.sent,e.next=6,(0,i.Z)("projects/"+n._id+"/member","DELETE",a,void 0);case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.error("useProjectData:deleteMemberFromProject:error:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=(0,a.Z)(o().mark((function e(n,a){var c,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.t)(r,t);case 3:return c=e.sent,e.next=6,(0,i.Z)("projects/"+a,"PATCH",c,n);case 6:return s=e.sent,e.abrupt("return",s);case 10:e.prev=10,e.t0=e.catch(0),console.error("useProjectData:updateProject:error:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,r){return e.apply(this,arguments)}}();return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},{projectGroupData:f,updateProjectGroupData:E,userData:_,updateUserData:g,projectData:x,updateProjectData:P,addOneProject:w,deleteOneProject:k,addMemberToProject:y,deleteMemberFromProject:N,updateProject:C,isLoaded:b,setIsLoaded:j})}},99896:function(e,t,r){var n=r(67294),a=r(33364),c=r(35514);t.Z=function(){return n.createElement("div",{className:"spinner"},n.createElement("div",{className:"spinner__overlay"}),n.createElement("div",{className:"spinner__animation"},n.createElement(a.G,{icon:c.LM3,className:"fa-3x fa-spin"})))}},18329:function(e,t,r){r.r(t),r.d(t,{default:function(){return P}});var n=r(67294),a=r(1597),c=r(69233),o=r(41066),s=r(3290),i=r(15861),u=r(87757),d=r.n(u),p=r(49256),l=r(4942),f=(r(16267),r(33364)),m=r(35514),_=r(43405),v=r(89802);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=function(e){var t=e.project,r=e.setFilteredContents,a=(0,n.useState)(!1),c=a[0],o=a[1],u=(0,n.useState)(t.isPublic),l=u[0],x=u[1],b=(0,n.useState)({}),j=b[0],E=b[1],g=(0,s.X)(),P=g.deleteOneProject,w=g.updateProjectData,k=g.addMemberToProject,y=g.deleteMemberFromProject,N=g.updateProject,C=g.userData,O=g.projectGroupData,D=g.projectData,Z=function(){var e=(0,i.Z)(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(t);case 2:return e.next=4,w(t.projectGroupName);case 4:r(void 0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=(0,i.Z)(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t);case 2:if(e.sent,!w){e.next=7;break}return e.next=6,w(t.projectGroupName);case 6:r(void 0);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=(0,i.Z)(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t);case 2:if(e.sent,!w){e.next=7;break}return e.next=6,w(t.projectGroupName);case 6:r(void 0);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=(0,i.Z)(d().mark((function e(){var n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!j){e.next=10;break}return e.next=3,N(j,t._id);case 3:if(n=e.sent,E({}),o(!1),!n){e.next=10;break}return e.next=9,w(t.projectGroupName);case 9:r(void 0);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(e){E((function(t){return h(h({},t),e)}))};return t?n.createElement("div",{className:"index__card"+(c?" index__card--is-being-edited":""),key:t.shortId,id:t.shortId},n.createElement("div",{className:"index__card__header"},n.createElement("span",null,"Projet N° "+t.shortId+" : "),n.createElement(v.Z,{isBeingEdited:c,id:"name",onChange:S,startContent:t.name,isInline:!0})),n.createElement("div",{className:"index__card__description"},C.isAdmin&&n.createElement(f.G,{icon:m.I7k,onClick:Z}),(C.isAdmin||t.projectMembers.includes(C.userName)&&"end"!==O.status)&&!c?n.createElement(f.G,{icon:m.Xcf,onClick:function(){o(!0)}}):"","init"===O.status&&!D.find((function(e){return e.projectMembers.includes(C.userName)}))&&t.projectMembers.length<O.maximumProjectMembers&&n.createElement(f.G,{icon:m.FKd,onClick:F}),"init"===O.status&&t.projectMembers.includes(C.userName)&&n.createElement(f.G,{icon:m.iC0,onClick:G}),c&&n.createElement(f.G,{icon:m.r6l,onClick:M}),c&&n.createElement(f.G,{icon:m.NBC,onClick:function(){o(!1),E({})}})),n.createElement("div",{className:"index__card__content"},void 0!==t.description?n.createElement(n.Fragment,null,n.createElement("div",{className:"index__card__content__title"},"Description"),n.createElement(v.Z,{className:"index__card__content__description",isBeingEdited:c,id:"description",startContent:t.description,onChange:S})):""),n.createElement("div",{className:"index__card__content"},void 0!==t.presentationUrl?n.createElement(n.Fragment,null,n.createElement("div",{className:"index__card__content__title"},"Vidéo de présentation"),n.createElement(v.Z,{className:"index__card__content__description",isBeingEdited:c,id:"presentationUrl",startContent:t.presentationUrl,onChange:S},n.createElement(p.Z,{src:t.presentationUrl}))):""),n.createElement("div",{className:"index__card__content"},void 0!==t.frontendProductionUrl?n.createElement(n.Fragment,null,n.createElement("div",{className:"index__card__content__title"},"URL du site"),n.createElement(v.Z,{className:"index__card__content__description",isBeingEdited:c,id:"frontendProductionUrl",startContent:t.frontendProductionUrl,onChange:S},n.createElement("a",{href:t.frontendProductionUrl,target:"_blank"},t.frontendProductionUrl))):""),n.createElement("div",{className:"index__card__content"},void 0!==t.frontendRepo?n.createElement(n.Fragment,null,n.createElement("div",{className:"index__card__content__title"},"Repo frontend"),n.createElement(v.Z,{className:"index__card__content__description",isBeingEdited:c,id:"frontendRepo",startContent:t.frontendRepo,onChange:S},n.createElement("a",{href:t.frontendRepo,target:"_blank"},t.frontendRepo))):""),n.createElement("div",{className:"index__card__content"},void 0!==t.backendRepo?n.createElement(n.Fragment,null,n.createElement("div",{className:"index__card__content__title"},"Repo backend"),n.createElement(v.Z,{className:"index__card__content__description",isBeingEdited:c,id:"backendRepo",startContent:t.backendRepo,onChange:S},n.createElement("a",{href:t.backendRepo,target:"_blank"},t.backendRepo))):""),n.createElement("div",{className:"index__card__content"},void 0!==t.projectMembers&&t.projectMembers.length>0?n.createElement(n.Fragment,null,n.createElement("div",{className:"index__card__content__title"},"Membres du projet"),n.createElement("div",{className:"index__card__content__description"},t.projectMembers.map((function(e){return(0,_.w)(e)})).join(", "))):""),n.createElement("div",{className:"index__card__content"},void 0!==t.isPublic?n.createElement(n.Fragment,null,n.createElement("div",{className:"index__card__content__title"},"Public ?"),n.createElement("div",{className:"index__card__content__description"},n.createElement("input",{type:"checkbox",checked:l,disabled:!c,onClick:function(e){x(!l),E(h(h({},j),{isPublic:!l}))}}))):"")):null},j=function(e){var t=e.projects,r=e.setFilteredContents;return!t||t.length<=0?null:n.createElement(n.Fragment,null,t.map((function(e){return n.createElement(b,{project:e,setFilteredContents:r})})))},E=r(99896),g=function(e){var t=e.associatedProjectGroupName,r=(0,s.X)(),a=r.projectGroupData,c=r.updateProjectGroupData,o=r.userData,u=r.updateUserData,p=r.isLoaded,l=r.projectData,f=r.addOneProject,m=r.updateProjectData,_=(0,n.useState)(void 0),v=_[0],x=_[1],h=(0,n.useState)(""),b=(h[0],h[1]),g=function(){var e=(0,i.Z)(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(a._id);case 2:return e.next=4,m(a._id);case 4:e.sent,x(void 0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,n.useEffect)((function(){P()}),[]);var P=function(){var e=(0,i.Z)(d().mark((function e(){var r;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c(t);case 3:return r=e.sent,e.next=6,u(t);case 6:return e.sent,e.next=9,m(r._id);case 9:e.sent,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error("getData:error",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return n.createElement(n.Fragment,null,!p&&n.createElement(E.Z,null),void 0===a?"":n.createElement("div",{className:"pl-3 pt-3 pb-3 pr-3"},n.createElement("h3",{className:""},"Projets des groupes de ",null==a?void 0:a._id),n.createElement("div",{className:"index"},n.createElement("input",{type:"text","aria-label":"Search",placeholder:"Filtrez les contenus...",onChange:function(e){var t=e.target.value;b(e.target.value);var r=l.filter((function(e){var r=e.shortId,n=e.name,a=e.description;return n.toLowerCase().includes(t.toLowerCase())||a.toLowerCase().includes(t.toLowerCase())||t.length>0&&parseInt(t)===r}));r&&r.length>0?x(r):x(void 0)},className:"index__search"}),v&&v.length>0?n.createElement(j,{projects:v,setFilteredContents:x}):n.createElement(j,{projects:l,setFilteredContents:x})),void 0!==o&&o.isAdmin?n.createElement("button",{className:"index__button",onClick:g},"Ajouter projet"):""))},P=(0,o.O)((function(){var e=(0,a.useStaticQuery)("758242238"),t=null==e?void 0:e.site.siteMetadata.defaultAssociatedProjectGroupName;return n.createElement(s.a,null,n.createElement(c.Z,null,n.createElement(g,{associatedProjectGroupName:t})))}))},20693:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(15861),a=r(87757),c=r.n(a);function o(e,t,r,n){return s.apply(this,arguments)}function s(){return(s=(0,n.Z)(c().mark((function e(t,r,n,a){var o,s,i,u,d,p,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===r&&(r="get"),o=new Headers,(s={}).method=r,n&&(i="Bearer "+n,o.append("Authorization",i)),a&&(s.body=JSON.stringify(a)),"post"!==r.toLowerCase()&&"patch"!==r.toLowerCase()&&"put"!==r.toLowerCase()||o.append("Content-Type","application/json"),s.headers=o,u="https://courses-api.azurewebsites.net/api/"+t,e.prev=9,e.next=12,fetch(u,s);case 12:if((d=e.sent).ok){e.next=22;break}return p=" Error code : "+d.status+" : "+d.statusText+"/nMessage : ",e.next=17,d.text();case 17:throw l=e.sent,p+=l,console.error("fetch() error",p),p.search("expired"),new Error(p);case 22:return e.next=24,d.json();case 24:return e.abrupt("return",e.sent);case 27:throw e.prev=27,e.t0=e.catch(9),e.t0;case 30:case"end":return e.stop()}}),e,null,[[9,27]])})))).apply(this,arguments)}},70144:function(e,t,r){r.d(t,{t:function(){return s}});var n=r(15861),a=r(87757),c=r.n(a),o=r(640);function s(e,t){return i.apply(this,arguments)}function i(){return(i=(0,n.Z)(c().mark((function e(t,r){var n,a,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length>0)){e.next=16;break}return n={scopes:["openid"],account:t[0]},e.prev=2,e.next=5,r.acquireTokenSilent(n);case 5:return a=e.sent,e.abrupt("return",a.idToken);case 9:if(e.prev=9,e.t0=e.catch(2),!(e.t0 instanceof o.Yo)){e.next=16;break}return e.next=14,r.acquireTokenRedirect(n);case 14:return s=e.sent,e.abrupt("return",s.idToken);case 16:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}},43405:function(e,t,r){r.d(t,{w:function(){return n}});var n=function(e){var t=e.substring(0,e.indexOf("@")),r=t.substring(0,t.indexOf(".")),n=t.substring(t.indexOf(".")+1);return r=r.charAt(0).toUpperCase()+r.slice(1),(n=n.charAt(0).toUpperCase()+n.slice(1)).indexOf(".")>=0&&(n=(n=n.substring(n.indexOf(".")+1)).charAt(0).toUpperCase()+n.slice(1)),r+" "+n}}}]);
//# sourceMappingURL=component---src-pages-project-page-js-f2511af9cbfcfbe32cf7.js.map