(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(19),l=t.n(s),r=(t(64),t(32)),i=t(26),o=t(27),y=t(30),u=t(28),p=t(31),m=(t(33),t(29)),k=t.n(m),d=t(39),v=t.n(d),E=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(y.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(c)))).prevLine=function(){return void 0!==t.props.result?t.textExpression()+" =":"Ans = "+t.props.ans},t.textExpression=function(){return 0===t.props.userExpression.length?"0":t.props.userExpression.join("")},t.mainLine=function(){return void 0!==t.props.result?isNaN(t.props.result)?"Error":t.props.result:t.textExpression()},t.implParens=function(){if(void 0===t.props.result&&t.props.openParens)return" "+")".repeat(t.props.openParens)},t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(k.a,{className:"calc-display"},c.a.createElement(v.a,{className:"display-prev-line"},this.prevLine()),c.a.createElement(v.a,{variant:"h3",className:"display-main-line"},this.mainLine(),c.a.createElement("span",{className:"implied-parens"},this.implParens())))}}]),a}(n.Component),b=t(2),f=t.n(b),h=t(57),x=t.n(h),N=function(e){return c.a.createElement(n.Fragment,null,c.a.createElement(f.a,{variant:"contained",classes:{label:"calc-key-text"},className:"calc-ans-key calc-key-medium",onClick:e.typeKey("Ans")},"Ans"),c.a.createElement(f.a,{variant:"contained",classes:{label:"calc-key-text"},className:"calc-back-key calc-key-dark",onClick:e.backKey},c.a.createElement(x.a,{fontSize:"inherit"},"backspace")),c.a.createElement(f.a,{variant:"contained",color:"primary",classes:{label:"calc-key-text"},className:"calc-clear-key",onClick:e.clearKey},"Clear"),c.a.createElement(f.a,{variant:"contained",classes:{label:"calc-key-paren"},className:"calc-left-paren-key calc-key-medium",onClick:e.typeKey("(")},"("),c.a.createElement(f.a,{variant:"contained",classes:{label:"calc-key-paren"},className:"calc-right-paren-key calc-key-medium",onClick:e.typeKey(")")},")"),c.a.createElement(f.a,{variant:"contained",classes:{label:"calc-key-symbol"},className:"calc-div-key calc-key-medium",onClick:e.typeKey(" \xf7 ")},"\xf7"),c.a.createElement(f.a,{variant:"contained",classes:{label:"calc-key-symbol"},className:"calc-mult-key calc-key-medium",onClick:e.typeKey(" \xd7 ")},"\xd7"),c.a.createElement(f.a,{variant:"contained",classes:{label:"calc-key-symbol"},className:"calc-sub-key calc-key-medium",onClick:e.typeKey(" \u2212 ")},"\u2212"),c.a.createElement(f.a,{variant:"contained",classes:{label:"calc-key-symbol"},className:"calc-add-key calc-key-medium",onClick:e.typeKey(" + ")},"+"),c.a.createElement("div",{className:"calc-numpad"},c.a.createElement(f.a,{variant:"contained",classes:{label:"calc-key-text"},className:"calc-7-key calc-key-light",onClick:e.typeKey(7)},"7"),c.a.createElement(f.a,{variant:"contained",classes:{label:"calc-key-text"},className:"calc-8-key calc-key-light",onClick:e.typeKey(8)},"8"),c.a.createElement(f.a,{variant:"contained",classes:{label:"calc-key-text"},className:"calc-9-key calc-key-light",onClick:e.typeKey(9)},"9"),c.a.createElement(f.a,{variant:"contained",classes:{label:"calc-key-text"},className:"calc-4-key calc-key-light",onClick:e.typeKey(4)},"4"),c.a.createElement(f.a,{variant:"contained",classes:{label:"calc-key-text"},className:"calc-5-key calc-key-light",onClick:e.typeKey(5)},"5"),c.a.createElement(f.a,{variant:"contained",classes:{label:"calc-key-text"},className:"calc-6-key calc-key-light",onClick:e.typeKey(6)},"6"),c.a.createElement(f.a,{variant:"contained",classes:{label:"calc-key-text"},className:"calc-1-key calc-key-light",onClick:e.typeKey(1)},"1"),c.a.createElement(f.a,{variant:"contained",classes:{label:"calc-key-text"},className:"calc-2-key calc-key-light",onClick:e.typeKey(2)},"2"),c.a.createElement(f.a,{variant:"contained",classes:{label:"calc-key-text"},className:"calc-3-key calc-key-light",onClick:e.typeKey(3)},"3"),c.a.createElement(f.a,{variant:"contained",classes:{label:"calc-key-text"},className:"calc-0-key calc-key-light",onClick:e.typeKey(0)},"0"),c.a.createElement(f.a,{variant:"contained",classes:{label:"calc-key-text"},className:"calc-period-key calc-key-light",onClick:e.typeKey(".")},".")),c.a.createElement(f.a,{variant:"contained",color:"primary",classes:{label:"calc-key-symbol"},className:"calc-equal-key",onClick:e.equalKey},"="))},K=t(58),g=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(y.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(c)))).state={result:void 0,userExpression:[],openParens:0,ans:0},t.clearKey=function(){t.setState({result:void 0,userExpression:[],openParens:0})},t.backKey=function(){if(void 0===t.state.result){var e=Object(r.a)(t.state.userExpression),a=t.state.openParens,n=e.pop();")"===n?a+=1:"("===n&&(a-=1),t.setState({userExpression:e,openParens:a})}else t.clearKey()},t.typeKey=function(e){return function(){var a=Object(r.a)(t.state.userExpression),n=t.state.openParens,c=a[a.length-1];if(void 0!==t.state.result&&(a=-1!==[" + "," \u2212 "," \xd7 "," \xf7 "].indexOf(e)?[t.state.ans]:[]),-1!==[" + "," \xd7 "," \xf7 "].indexOf(e)){if(0===a.length)a=[0];else if(-1!==["("," + "," \u2212 "," \xd7 "," \xf7 "].indexOf(c))return}else if(" \u2212 "===e){if(-1!==[" + "," \u2212 "," \xd7 "," \xf7 "].indexOf(c))return}else if(")"===e){if(n<=0||-1!==["("," + "," \u2212 "," \xd7 "," \xf7 "].indexOf(c))return;n-=1}else if("("===e)n+=1;else if("."===e){if("."===c)return;if(Number.isInteger(c)){for(var s=2;Number.isInteger(a[a.length-s]);)s+=1;if("."===a[a.length-s])return}}a.push(e),t.setState({result:void 0,userExpression:a,openParens:n})}},t.equalKey=function(){for(var e=Object(r.a)(t.state.userExpression),a=t.state.openParens,n=t.state.ans;a>0;)e.push(")"),a-=1;var c=Object(K.a)(e,t.state.ans);isNaN(c)||(n=c),t.setState({result:c,userExpression:e,openParens:a,ans:n})},t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"calc-frame"},c.a.createElement(k.a,{className:"calc-paper"},c.a.createElement("div",{className:"calc-label"},c.a.createElement("span",null,"Calculator ",c.a.createElement("span",null,"by Kurtis Jantzen"))),c.a.createElement(E,this.state),c.a.createElement(N,{clearKey:this.clearKey,backKey:this.backKey,typeKey:this.typeKey,equalKey:this.equalKey})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},33:function(e,a,t){},58:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return resolveExpression});var resolveExpression=function resolveExpression(userExpression,ans){var result;if(0===userExpression.length)return 0;userExpression=condenseFloats(userExpression),userExpression=translateSymbols(userExpression,ans),userExpression=implicitMultiplication(userExpression),userExpression=userExpression.join("");try{result=eval(userExpression),void 0===result&&(result=NaN)}catch(error){result=NaN}return result},condenseFloats=function(e){var a=[],t=[],n=!0,c=!1,s=void 0;try{for(var l,r=e[Symbol.iterator]();!(n=(l=r.next()).done);n=!0){var i=l.value;Number.isInteger(i)||"."===i?t.push(i):(0!==t.length&&(a.push(Number.parseFloat(t.join(""))),t=[]),a.push(i))}}catch(o){c=!0,s=o}finally{try{n||null==r.return||r.return()}finally{if(c)throw s}}return 0!==t.length&&(a.push(Number.parseFloat(t.join(""))),t=[]),a},translateSymbols=function(e,a){for(var t=0;t<e.length;t++)" \u2212 "===e[t]?e[t]=" - ":" \xd7 "===e[t]?e[t]=" * ":" \xf7 "===e[t]?e[t]=" / ":"Ans"===e[t]&&(e[t]=a);return e},implicitMultiplication=function(e){for(var a=[],t=0;t<e.length;t++)a.push(e[t]),isNaN(e[t])&&")"!==e[t]&&"Ans"!==e[t]||isNaN(e[t+1])&&"("!==e[t+1]&&"Ans"!==e[t+1]||a.push(" * ");return a}},59:function(e,a,t){e.exports=t(149)},64:function(e,a,t){}},[[59,1,2]]]);
//# sourceMappingURL=main.5ab71814.chunk.js.map