"use strict";(self.webpackChunkmyweb3course=self.webpackChunkmyweb3course||[]).push([[773],{3892:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var a=r(7294),n=r(1082),s=r(5583),o=r(5772),i=r(3290),c=r(5540),u=r(9896),l=r(4942),d=r(5443);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=e=>{let{projects:t,setFilteredContents:r,allReviews:n}=e;const s=null==t?void 0:t.map((e=>{const t=n.find((t=>e.convertedProjectId===t._id));return m(m({},e),{},{countExpected:t.countExpected,countLiked:t.countLiked,countReviews:t.countReviews,projectReviews:t.projectReviews})}));return!t||t.length<=0?null:a.createElement(a.Fragment,null,null==s?void 0:s.map(((e,t)=>a.createElement(d.Z,{key:t,project:e,setFilteredContents:r}))))},w=r(1427);var y=e=>{let{associatedProjectGroupName:t}=e;const{projectGroupData:r,updateProjectGroupData:n,userData:s,updateUserData:o}=(0,i.X)(),{myReviewSummaryData:l,updateMyReviewSummaryData:d,myReviewsData:p,updateMyReviewsData:m,allReviewsData:y,updateAllReviewsData:f,isLoaded:j}=(0,c.i)(),{0:g,1:b}=(0,a.useState)(void 0),{0:E,1:h}=(0,a.useState)("");(0,a.useEffect)((()=>{D()}),[]);const D=async()=>{try{const e=await n(t),r=await o(t);await d(r.userName,e._id),await m(r.userName,e._id),await f(e._id)}catch(e){console.error("getData:error",e)}};let O;if(r){const e={weekday:"long",year:"numeric",month:"long",day:"numeric"};O=new Date(r.reviewStartingDate),O=O.toLocaleDateString("fr-FR",e)}return a.createElement(a.Fragment,null,!j&&a.createElement(u.Z,null),void 0===r?"":a.createElement("div",{className:"pl-3 pt-3 pb-3 pr-3"},a.createElement("h3",{className:""},"Mes revues des groupes de ",null==r?void 0:r._id),y&&r&&"init"!==r.status&&"dev"!==r.status&&(s&&s.isAdmin||l&&l.isProjectMember)?a.createElement("div",null,a.createElement("div",{className:"summary"},a.createElement("div",{className:"summary__card-wrapper"},a.createElement(w.Z,{myReviewsSummary:l}))),a.createElement("div",{className:"index"},a.createElement("input",{type:"text","aria-label":"Search",placeholder:"Filtrez les contenus...",onChange:e=>{const t=e.target.value;h(e.target.value);const r=p.filter((e=>{const{shortId:r,name:a,description:n}=e;return a.toLowerCase().includes(t.toLowerCase())||n.toLowerCase().includes(t.toLowerCase())||t.length>0&&parseInt(t)===r}));r&&r.length>0?b(r):b(void 0)},className:"index__search"}),a.createElement(v,{projects:g&&g.length>0?g:p,setFilteredContents:b,allReviews:y}))):r&&"init"!==r.status&&"dev"!==r.status?"Vous n'avez pas encore le privilège de voir les revues des projets des groupes de "+r._id+". Si nécessaire, n'hésitez pas à faire une demande à l'administrateur du site.":`La saison de revues des projets n'a pas encore été ouverte.\n      Nous nous réjouissons de vous revoir tout bientôt pour évaluer les projets de différents groupes.\n      Une annonce sera faite une fois la saison ouverte ; )\n      Date d'ouverture estimée : ${O}`))};var f=(0,o.O)((()=>{const e=(0,n.useStaticQuery)("758242238"),t=null==e?void 0:e.site.siteMetadata.defaultAssociatedProjectGroupName;return a.createElement(i.a,null,a.createElement(c.w,null,a.createElement(s.Z,null,a.createElement(y,{associatedProjectGroupName:t}))))}))}}]);
//# sourceMappingURL=component---src-pages-my-reviews-page-js-c66e61d9471799075b50.js.map