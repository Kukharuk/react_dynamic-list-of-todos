(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(2),l=c(1),i=(c(10),c(11),c(5)),d=c.n(i),r=c(0),o=function(e){var t=e.todos,c=e.selectedTodo,s=e.setSelected;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsx)("tr",{"data-cy":"todo",className:d()({"has-background-info-light":e.id===(null===c||void 0===c?void 0:c.id)}),children:e.completed?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:"has-text-success",children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:e.id===(null===c||void 0===c?void 0:c.id)?"far fa-eye-slash":"far fa-eye"})})})})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered"}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:"has-text-danger",children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:e.id===(null===c||void 0===c?void 0:c.id)?"far fa-eye-slash":"far fa-eye"})})})})]})},e.id)}))})]})},j=function(e){var t=e.filter,c=e.setFilter,s=e.search,a=e.setSearch;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){c(e.target.value)},children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){a(e.target.value.toLowerCase().trim())}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),!!s&&Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})},b=(c(13),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})});function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var u=function(e){var t=e.selectedTodo,c=e.setSelected,s=Object(l.useState)(!1),a=Object(n.a)(s,2),i=a[0],d=a[1],o=Object(l.useState)(null),j=Object(n.a)(o,2),u=j[0],m=j[1];return Object(l.useEffect)((function(){var e;d(!0),(e=t.userId,h("/users/".concat(e))).then(m).finally((function(){return d(!1)}))}),[t.userId]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),i?Object(r.jsx)(b,{}):Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(null===u||void 0===u?void 0:u.email),children:null===u||void 0===u?void 0:u.name})]})]})]})]})},m=function(){var e=Object(l.useState)("all"),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(""),i=Object(n.a)(a,2),d=i[0],m=i[1],O=Object(l.useState)(!1),x=Object(n.a)(O,2),f=x[0],v=x[1],N=Object(l.useState)([]),p=Object(n.a)(N,2),y=p[0],g=p[1],S=Object(l.useState)(null),k=Object(n.a)(S,2),C=k[0],w=k[1],T=y.filter((function(e){switch(c){case"all":default:return e;case"active":return!e.completed;case"completed":return e.completed}})).filter((function(e){return e.title.toLowerCase().includes(d)}));return Object(l.useEffect)((function(){v(!0),h("/todos").then(g).finally((function(){return v(!1)}))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(j,{filter:c,setFilter:function(e){return s(e)},search:d,setSearch:function(e){return m(e)}})}),Object(r.jsxs)("div",{className:"block",children:[f&&Object(r.jsx)(b,{}),!f&&Object(r.jsx)(o,{todos:T,selectedTodo:C,setSelected:function(e){return w(e)}})]})]})})}),C&&Object(r.jsx)(u,{selectedTodo:C,setSelected:w})]})};a.a.render(Object(r.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.411f8ae6.chunk.js.map