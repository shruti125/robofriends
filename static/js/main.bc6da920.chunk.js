(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),a=r(8),s=r.n(a),o=(r(13),r(2)),i=r(3),h=r(5),l=r(4),b=r(0),j=function(e){return Object(b.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(b.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(e.id,"?200x200")}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:e.name}),Object(b.jsx)("p",{children:e.email})]})]})},d=function(e){return Object(b.jsx)("div",{children:e.robots.map((function(e,t){return Object(b.jsx)(j,{id:e.id,name:e.name,email:e.email},t)}))})},u=function(e){return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{className:"pa3 ba b-green bg-lightest-blue",type:"search",placeholder:"Search robots",onChange:e.searchChange})})})},f=(r(7),function(e){return Object(b.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:e.children})}),p=function(e){Object(h.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={hasError:!1},e}return Object(i.a)(r,[{key:"componentDidCatch",value:function(e){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(b.jsx)("h1",{children:"Error!"}):this.props.children}}]),r}(c.a.Component),O=function(e){Object(h.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={robots:[],searchfield:""},e.onSearchChange=function(t){e.setState({searchfield:t.target.value})},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,r=e.searchfield,n=t.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return t.length?Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{className:"f1",children:"Robofriends"}),Object(b.jsx)(u,{searchChange:this.onSearchChange}),Object(b.jsx)(f,{children:Object(b.jsx)(p,{children:Object(b.jsx)(d,{robots:n})})})]}):Object(b.jsx)("h1",{children:"Loading..."})}}]),r}(c.a.Component);s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.bc6da920.chunk.js.map