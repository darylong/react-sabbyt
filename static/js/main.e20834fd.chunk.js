(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},40:function(e,t,a){e.exports=a(72)},46:function(e,t,a){},47:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),o=a.n(i),l=(a(46),a(12)),c=a(13),s=a(17),u=a(14),p=a(18),d=a(35),m=a.n(d),h=(a(47),a(74)),b=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{onClick:function(){e.props.onClick()},style:{width:200,margin:10},variant:this.props.variant},this.props.title)}}]),t}(r.a.PureComponent);b.defaultProps={variant:"primary",title:"Button",onClick:function(){return-1}};var f=b,v=a(73),E=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,Object.assign({style:this.props.title&&{backgroundColor:this.props.title}},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(v.a.Header,{closeButton:!0},r.a.createElement(v.a.Title,{id:"contained-modal-title-vcenter"},this.props.title)),r.a.createElement(v.a.Body,null,r.a.createElement("p",null,"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.")),r.a.createElement(v.a.Footer,null,r.a.createElement(h.a,{onClick:this.props.onHide},"Close")))}}]),t}(r.a.PureComponent);E.defaultProps={title:"Default Modal Title"};var j=E,g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={modalVisible:!1,title:""},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"openModal",value:function(e){this.setState({modalVisible:!0,title:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload."),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React with Sabbyt"),r.a.createElement(f,{title:"Blue",variant:"primary",onClick:function(){e.openModal("Blue")}}),r.a.createElement(f,{title:"Red",variant:"danger",onClick:function(){e.openModal("Red")}}),r.a.createElement(j,{title:this.state.title,show:this.state.modalVisible,onHide:function(){e.setState({modalVisible:!1})}})))}}]),t}(r.a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.e20834fd.chunk.js.map