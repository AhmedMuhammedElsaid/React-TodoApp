(this.webpackJsonpapp1=this.webpackJsonpapp1||[]).push([[0],{10:function(e,t,a){e.exports=a(15)},15:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),c=a.n(r),m=(a(7),a(1)),l=a(2),o=a(4),s=a(3),u=a(5),d=function(e){var t=e.items,a=e.deletItem,n=t.length?t.map((function(e){return i.a.createElement("div",{key:e.id},i.a.createElement("span",{className:"name"}," ",e.name," "),i.a.createElement("span",{className:"age"},"  ",e.age," "),i.a.createElement("span",{className:"action icon",onClick:function(){return a(e.id)}},"\xd7"))})):i.a.createElement("p",null,"There Is no Item to show :( ");return i.a.createElement("div",{className:"ListItems"},i.a.createElement("div",{className:"list--Items"},i.a.createElement("span",{className:"name title"},"Name"),i.a.createElement("span",{className:"age title"},"Age"),i.a.createElement("span",{className:"action title"},"Action")),n)},h=a(9),p=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).state={name:"",age:""},a.handleChange=function(e){a.setState(Object(h.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){if(e.preventDefault(),""===e.target.name.value)return!1;a.props.addItem(a.state),a.setState({name:"",age:""})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("input",{type:"text",placeholder:"Enter name....",id:"name",onChange:this.handleChange,value:this.state.name}),i.a.createElement("input",{type:"number",placeholder:"Enter age....",id:"age",onChange:this.handleChange,value:this.state.age,min:"0"}),i.a.createElement("input",{type:"submit",value:"Add"})))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).state={item:[{name:"Jon Doe",id:100,age:25},{name:"Jon Doe",id:99,age:22},{name:"Jon Doe",id:98,age:30},{name:"Jon Doe",id:80,age:40}]},a.DelItem=function(e){var t=a.state.item.filter((function(t){return t.id!==e}));a.setState({item:t})},a.addItem=function(e){e.id=10*Math.random();var t=a.state.item;t.push(e),a.setState({item:t})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:" container"},i.a.createElement("h1",{className:"text-center"},"Todo List"),i.a.createElement(d,{items:this.state.item,deletItem:this.DelItem}),i.a.createElement(p,{addItem:this.addItem}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.261bf566.chunk.js.map