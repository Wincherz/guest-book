(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),s=a.n(c),u=(a(14),a(8)),m=a(4),l=a.n(m),o=a(7),i=a(2),p=(a(16),function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),m=Object(i.a)(s,2),p=m[0],h=m[1],f=Object(n.useState)(""),b=Object(i.a)(f,2),d=b[0],v=b[1],E=Object(n.useState)(!0),y=Object(i.a)(E,2),g=y[0],j=y[1],O=function(){h(""),v("")},N=function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),p.trim().length&&d.trim().length){e.next=5;break}return alert("\u041d\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b"),O(),e.abrupt("return");case 5:return e.next=7,fetch("https://test-api-yevhenbychkov.herokuapp.com/api/messages",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:p,text:d})});case 7:O(),j(!g);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){fetch("https://test-api-yevhenbychkov.herokuapp.com/api/messages").then((function(e){return e.json()})).then((function(e){return c(e)}))};Object(n.useEffect)((function(){_()}),[g]);var x=Object(n.useMemo)((function(){return Object(u.a)(a).reverse()}),[a]);return r.a.createElement("div",{className:"wrapper"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__title"},"Send your message"),r.a.createElement("form",{onSubmit:N,className:"header-form"},r.a.createElement("label",{className:"header-form__label"},"Name: ",r.a.createElement("input",{type:"text",value:p,onChange:function(e){return h(e.target.value)},className:"header-form__name"})),r.a.createElement("label",{className:"header-form__label"},"Message: ",r.a.createElement("input",{type:"text",value:d,onChange:function(e){return v(e.target.value)},className:"header-form__text"})),r.a.createElement("input",{type:"submit",value:"send",className:"header-form__submit"}))),r.a.createElement("main",{className:"main"},!!a.length&&x.map((function(e){return r.a.createElement("article",{key:e.text,className:"message"},r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.text))}))))});s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.dcefcecc.chunk.js.map