(window["webpackJsonpdmscreen.io"]=window["webpackJsonpdmscreen.io"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(3),o=n.n(r),l=(n(14),n(4)),u=n(5),s=n(7),m=n(6),c=n(1),d=n(8),v=(n(15),function(e){var t=e.label,n=e.type,i=e.value,r=e.onChange;return a.a.createElement("label",null,t,":",a.a.createElement("input",{type:n,value:i,onChange:r}))}),h=function(){return Math.floor(1e5*Math.random())},p=function(e){var t=e.id,n=e.name,i=e.initiative,r=e.hitpoints,o=e.onNameChange,l=e.onInitiativeChange,u=e.onHitpointsChange,s=e.onRemove;return a.a.createElement("div",{className:"card"},a.a.createElement(v,{label:"Name",type:"text",value:n,onChange:function(e){return o(t,e)}}),a.a.createElement(v,{label:"Initiative",type:"number",value:i,onChange:function(e){return l(t,e)}}),a.a.createElement("button",{onClick:function(){return l(t,{target:{value:Math.floor(20*Math.random())+1}})}},"roll d20"),a.a.createElement(v,{label:"Hitpoints",type:"number",value:r,onChange:function(e){return u(t,e)}}),a.a.createElement("button",{onClick:function(){return s(t)}},"X"))},f=[{id:h(),name:"Player 1",initiative:20,hitpoints:10},{id:h(),name:"Player 2",initiative:19,hitpoints:16},{id:h(),name:"Player 3",initiative:18,hitpoints:20},{id:h(),name:"Player 4",initiative:17,hitpoints:32}],b=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={elements:f},n.updateName=n.updateName.bind(Object(c.a)(n)),n.updateInitiative=n.updateInitiative.bind(Object(c.a)(n)),n.updateHitpoints=n.updateHitpoints.bind(Object(c.a)(n)),n.addCard=n.addCard.bind(Object(c.a)(n)),n.removeElement=n.removeElement.bind(Object(c.a)(n)),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"updateName",value:function(e,t){var n=t.target.value,i=this.state.elements,a=i.findIndex((function(t){return t.id===e}));i[a].name=n,this.setState({elements:i})}},{key:"updateHitpoints",value:function(e,t){var n=t.target.value,i=this.state.elements,a=i.findIndex((function(t){return t.id===e}));i[a].hitpoints=Number(n),this.setState({elements:i})}},{key:"updateInitiative",value:function(e,t){var n=this;clearTimeout(this.timeout_);var i=t.target.value,a=this.state.elements,r=a.findIndex((function(t){return t.id===e}));a[r].initiative=Number(i),this.setState({elements:a}),this.timeout_=setTimeout((function(){return n.sortElements()}),500)}},{key:"sortElements",value:function(){var e=this.state.elements;this.setState({elements:e.sort((function(e,t){return t.initiative-e.initiative}))})}},{key:"addCard",value:function(){var e=this.state.elements;e[e.length]={id:h(),name:"Player ".concat(e.length+1),initiative:-100,hitpoints:12},this.setState({elements:e.sort((function(e,t){return t.initiative-e.initiative}))})}},{key:"removeElement",value:function(e){var t=this.state.elements;t=t.filter((function(t){return t.id!==e})),this.setState({elements:t})}},{key:"render",value:function(){var e=this,t=this.state.elements;return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("p1",null,"DM SCREEN"),a.a.createElement("div",null,a.a.createElement("button",{className:"add",onClick:this.addCard},"Add New Card"),t.map((function(t){return a.a.createElement(p,{key:t.id,name:t.name,initiative:t.initiative,hitpoints:t.hitpoints,id:t.id,onNameChange:e.updateName,onInitiativeChange:e.updateInitiative,onHitpointsChange:e.updateHitpoints,onRemove:e.removeElement})})))))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.4de53fb7.chunk.js.map