(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[20],{505:function(t,n,e){"use strict";e.r(n);var c=e(3),i=e.n(c),u=e(6),o=e(0),a=e(8),r=e(5);n.default=function(t){var n=t.children,e=Object(a.f)();return Object(o.useEffect)((function(){null===localStorage.getItem("user")&&e.push("/login")})),Object(o.useEffect)((function(){function t(){return(t=Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/v1/auth/token",{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){return t.json()})).then((function(t){!1===t.auth&&e.push("/login")}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(r.jsx)("div",{children:n})}}}]);
//# sourceMappingURL=20.3cf34ba5.chunk.js.map