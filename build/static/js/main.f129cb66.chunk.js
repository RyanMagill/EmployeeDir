(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{22:function(e,t,n){e.exports=n(51)},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},32:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(19),c=n.n(r),u=(n(27),n(9));n(28);var m=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Employee Director"))},o=n(52),i=(n(29),function(e){return l.a.createElement(o.a,null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Last Name"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Phone Number"))),l.a.createElement("tbody",null,e.employees.map((function(e){return l.a.createElement("tr",{key:e.id.value},l.a.createElement("td",null,l.a.createElement("img",{src:e.picture.thumbnail,alt:"employee"})," "),l.a.createElement("td",null,e.name.first),l.a.createElement("td",null,e.name.last),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.cell))}))))}),s=n(53),E=n(54),f=n(55),d=n(56);n(32);var p=function(e){return l.a.createElement(s.a,null,l.a.createElement(E.a,null,l.a.createElement(f.a,{for:"exampleEmail"}),l.a.createElement(d.a,{onChange:function(t){return e.setFilterText(t.target.value)},type:"text",placeholder:"Filter by First Name"})))},h=n(20),y=n.n(h);n(50);var b=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(u.a)(c,2),s=o[0],E=o[1],f=n.filter((function(e){return!!e.name.first.toLowerCase().includes(s.toLowerCase())||(!!e.name.last.toLowerCase().includes(s.toLowerCase())||(!!e.email.toLowerCase().includes(s.toLowerCase())||!!e.cell.includes(s)))}));return Object(a.useEffect)((function(){y.a.get("https://randomuser.me/api/?results=50&nat=us").then((function(e){r(e.data.results)})).catch((function(e){})).then((function(){}))}),[]),l.a.createElement("div",{className:"App"},l.a.createElement(m,null),l.a.createElement(p,{setFilterText:E}),l.a.createElement(i,{employees:f}))};c.a.render(l.a.createElement(a.Fragment,null,l.a.createElement(b,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.f129cb66.chunk.js.map