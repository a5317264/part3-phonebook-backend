(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{14:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),o=t.n(c),u=t(2),i=function(e){var n=e.persons,t=e.deletePerson;return n.map((function(e){return r.a.createElement("p",{key:e.id},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return t(e.id)}},"delete"))}))},l=function(e){return r.a.createElement("form",{onSubmit:e.addPerson},r.a.createElement("div",null,"name:",r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),r.a.createElement("div",null,"number:",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},m=function(e){var n=e.notification;return null===n?null:r.a.createElement("div",{className:n.type},n.message)},d=function(e){return r.a.createElement("input",{value:e.value,onChange:e.onChange})},f=t(3),s=t.n(f),h=function(){return s.a.get("/persons").then((function(e){return e.data}))},b=function(e){return s.a.post("/persons",e).then((function(e){return e.data}))},p=function(e,n){return s.a.put("".concat("/persons","/").concat(e),n).then((function(e){return e.data}))},v=function(e){return s.a.delete("".concat("/persons","/").concat(e)).then((function(e){return e.data}))},E=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),f=Object(u.a)(o,2),s=f[0],E=f[1],g=Object(a.useState)(""),w=Object(u.a)(g,2),C=w[0],O=w[1],j=Object(a.useState)(""),N=Object(u.a)(j,2),y=N[0],k=N[1],S=Object(a.useState)(null),P=Object(u.a)(S,2),D=P[0],x=P[1];Object(a.useEffect)((function(){h().then((function(e){c(e)}))}),[]);var J=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";x({message:e,type:n}),setTimeout((function(){x(null)}),5e3)},L=0===y.length?t:t.filter((function(e){return e.name.toLowerCase().indexOf(y.toLowerCase())>0}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(m,{notification:D}),"filter shown with:",r.a.createElement(d,{value:y,onChange:function(e){k(e.target.value)}}),r.a.createElement("h3",null,"add a new"),r.a.createElement(l,{handleNameChange:function(e){E(e.target.value)},handleNumberChange:function(e){O(e.target.value)},newNumber:C,newName:s,addPerson:function(e){e.preventDefault();var n=t.find((function(e){return e.name===s}));n?window.confirm("".concat(n.name," already in phonebook, replace the old number with new one?"))&&p(n.id,{name:n.name,number:C}).then((function(e){c(t.map((function(t){return t.id!==n.id?t:e}))),J("Changed number of  ".concat(n.name)),E(""),O("")})):b({name:s,number:C}).then((function(e){c(t.concat(e)),J("Added ".concat(s)),E(""),O("")})).catch((function(e){console.log(e.response.data.error),J("".concat(e.response.data.error," "),"error")}))}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(i,{persons:L,deletePerson:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name))&&v(e).then((function(a){c(t.filter((function(n){return n.id!==e}))),J("Deleted ".concat(n.name))})).catch((function(){c(t.filter((function(n){return n.id!==e}))),J("".concat(n.name," had already been removed"),"error")}))}}))};t(37);o.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a3d077a0.chunk.js.map