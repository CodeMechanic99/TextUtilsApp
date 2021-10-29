(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(4),l=a.n(s),o=(a(9),a(2)),r=(a(10),a(0));function i(e){return e.alert&&Object(r.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(r.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg,Object(r.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})}function b(e){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("a",{className:"navbar-brand",href:"",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link active","aria-current":"page",href:"",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link",href:"",children:e.aboutText})})]}),Object(r.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,role:"switch",id:"flexSwitchCheckDefault"}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable DarkMode"})]})]})]})})}function d(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],s=a[1];return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("h1",{children:e.heading}),Object(r.jsx)("label",{htmlFor:"textBox",className:"form-label",children:"Example textarea"}),Object(r.jsx)("textarea",{className:"form-control",value:c,onChange:function(e){console.log("Onchange event"),s(e.target.value)},id:"textBox",rows:"3",placeholder:c})]}),Object(r.jsx)("button",{className:"btn btn-sm btn-primary mx-1",onClick:function(){console.log("Convert Upper case button is clicked : "+c);var t=c.toUpperCase();s(t),e.showAlert("Converted to Upper Case!","success")},children:"Convert to UpperCase"}),Object(r.jsx)("button",{className:"btn btn-sm btn-warning mx-1",onClick:function(){console.log("Convert Lower case button is clicked : "+c);var t=c.toLowerCase();s(t),e.showAlert("Converted to Lower Case!","success")},children:"Convert to LowerCase"}),Object(r.jsx)("button",{className:"btn btn-sm btn-danger mx-1",onClick:function(){s(""),e.showAlert("Text has been cleared!","success")},children:"Clear Text"}),Object(r.jsx)("button",{className:"btn btn-sm btn-info mx-1",onClick:function(t){navigator.clipboard.writeText(c),e.showAlert("Copied to clipboard!","success")},children:"Copy to Clipboard"}),Object(r.jsx)("h2",{children:"Your Text Summary:"}),Object(r.jsxs)("p",{children:[c.split(" ").length," words and ",c.length," characters."]}),Object(r.jsxs)("p",{children:[.008*c.split(" ").length," Minuits reading time."]}),Object(r.jsx)("h2",{children:"Preview:"}),Object(r.jsx)("p",{children:c.length>0?c:"Enter Text in above box to preview it here"})]})}var h=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),l=Object(o.a)(s,2),h=l[0],j=l[1],u=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),3e3)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(b,{title:"TextUtils",aboutText:"About Us",mode:a,toggleMode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor="black",document.body.style.color="white",document.title="TextUtils - Dark",u("Dark Mode has been enabled","success")):(c("light"),document.body.style.backgroundColor="white",document.body.style.color="black",document.title="TextUtils - Light",u("Light Mode has been enabled","success"))}}),Object(r.jsx)(i,{alert:h}),Object(r.jsx)(d,{showAlert:u,heading:"Enter the text to analyze"})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),s(e),l(e)}))};l.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.2323a4b2.chunk.js.map