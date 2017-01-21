window.testRunner&&testRunner.dumpAsText(),function(){function t(t,e){return e==document.body?void document.body.appendChild(t):void(e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t))}function e(t){for(var e=t.parentNode;"static"==getComputedStyle(e).position;)e=e.parentNode;return e}function o(t,e){var a=i(t,e);return Array.prototype.forEach.call(t.childNodes,function(t){a|=o(t,e)}),a}function a(t,e,o){var a=e.getAttribute&&e.getAttribute(o);return t.checked|=!!a,a}function i(t,o){var i={checked:!1},r=a(i,t,"data-expected-width");r&&(isNaN(r)||Math.abs(t.offsetWidth-r)>=1)&&o.push("Expected "+r+" for width, but got "+t.offsetWidth+". ");var d=a(i,t,"data-expected-height");d&&(isNaN(d)||Math.abs(t.offsetHeight-d)>=1)&&o.push("Expected "+d+" for height, but got "+t.offsetHeight+". ");var n=a(i,t,"data-offset-x");n&&(isNaN(n)||Math.abs(t.offsetLeft-n)>=1)&&o.push("Expected "+n+" for offsetLeft, but got "+t.offsetLeft+". ");var n=a(i,t,"data-offset-y");n&&(isNaN(n)||Math.abs(t.offsetTop-n)>=1)&&o.push("Expected "+n+" for offsetTop, but got "+t.offsetTop+". ");var n=a(i,t,"data-positioned-offset-x");if(n){var p=t.getBoundingClientRect().left-e(t).getBoundingClientRect().left;(isNaN(n)||Math.abs(p-n)>=1)&&o.push("Expected "+n+" for getBoundingClientRect().left offset, but got "+p+". ")}var n=a(i,t,"data-positioned-offset-y");if(n){var p=t.getBoundingClientRect().top-e(t).getBoundingClientRect().top;(isNaN(n)||Math.abs(p-n)>=1)&&o.push("Expected "+n+" for getBoundingClientRect().top offset, but got "+p+". ")}var r=a(i,t,"data-expected-client-width");r&&(isNaN(r)||Math.abs(t.clientWidth-r)>=1)&&o.push("Expected "+r+" for clientWidth, but got "+t.clientWidth+". ");var d=a(i,t,"data-expected-client-height");d&&(isNaN(d)||Math.abs(t.clientHeight-d)>=1)&&o.push("Expected "+d+" for clientHeight, but got "+t.clientHeight+". ");var r=a(i,t,"data-expected-scroll-width");r&&(isNaN(r)||Math.abs(t.scrollWidth-r)>=1)&&o.push("Expected "+r+" for scrollWidth, but got "+t.scrollWidth+". ");var d=a(i,t,"data-expected-scroll-height");d&&(isNaN(d)||Math.abs(t.scrollHeight-d)>=1)&&o.push("Expected "+d+" for scrollHeight, but got "+t.scrollHeight+". ");var n=a(i,t,"data-total-x");if(n){var s=t.clientLeft+t.offsetLeft;(isNaN(n)||Math.abs(s-n)>=1)&&o.push("Expected "+n+" for clientLeft+offsetLeft, but got "+s+", clientLeft: "+t.clientLeft+", offsetLeft: "+t.offsetLeft+". ")}var n=a(i,t,"data-total-y");if(n){var f=t.clientTop+t.offsetTop;(isNaN(n)||Math.abs(f-n)>=1)&&o.push("Expected "+n+" for clientTop+offsetTop, but got "+f+", clientTop: "+t.clientTop+", + offsetTop: "+t.offsetTop+". ")}var c=a(i,t,"data-expected-display");if(c){var g=getComputedStyle(t).display;g!=c&&o.push("Expected "+c+" for display, but got "+g+". ")}var u=a(i,t,"data-expected-padding-top");if(u){var l=getComputedStyle(t).paddingTop;l=l.substring(0,l.length-2),l!=u&&o.push("Expected "+u+" for padding-top, but got "+l+". ")}var h=a(i,t,"data-expected-padding-bottom");if(h){var b=getComputedStyle(t).paddingBottom;b=b.substring(0,b.length-2),b!=h&&o.push("Expected "+h+" for padding-bottom, but got "+b+". ")}var v=a(i,t,"data-expected-padding-left");if(v){var x=getComputedStyle(t).paddingLeft;x=x.substring(0,x.length-2),x!=v&&o.push("Expected "+v+" for padding-left, but got "+x+". ")}var m=a(i,t,"data-expected-padding-right");if(m){var N=getComputedStyle(t).paddingRight;N=N.substring(0,N.length-2),N!=m&&o.push("Expected "+m+" for padding-right, but got "+N+". ")}var y=a(i,t,"data-expected-margin-top");if(y){var E=getComputedStyle(t).marginTop;E=E.substring(0,E.length-2),E!=y&&o.push("Expected "+y+" for margin-top, but got "+E+". ")}var C=a(i,t,"data-expected-margin-bottom");if(C){var L=getComputedStyle(t).marginBottom;L=L.substring(0,L.length-2),L!=C&&o.push("Expected "+C+" for margin-bottom, but got "+L+". ")}var S=a(i,t,"data-expected-margin-left");if(S){var T=getComputedStyle(t).marginLeft;T=T.substring(0,T.length-2),T!=S&&o.push("Expected "+S+" for margin-left, but got "+T+". ")}var M=a(i,t,"data-expected-margin-right");if(M){var A=getComputedStyle(t).marginRight;A=A.substring(0,A.length-2),A!=M&&o.push("Expected "+M+" for margin-right, but got "+A+". ")}return i.checked}window.checkLayout=function(e,a){var r=!0;if(!e)return void console.error("You must provide a CSS selector of nodes to check.");var d=document.querySelectorAll(e);d=Array.prototype.slice.call(d),d.reverse();var n=!1;if(Array.prototype.forEach.call(d,function(e){var d=[];n|=i(e.parentNode,d),n|=o(e,d);var p="container"==e.parentNode.className?e.parentNode:e,s=document.createElement("pre");d.length&&(s.className="FAIL",r=!1),s.appendChild(document.createTextNode(d.length?"FAIL:\n"+d.join("\n")+"\n\n"+p.outerHTML:"PASS"));var f=p;a&&(a.lastChild||(a.textContent=" "),f=a.lastChild),t(s,f)}),!n)return document.body.innerHTML="FAIL: No valid data-* attributes found in selector list : "+e,!1;var p=document.querySelector(".FAIL");return p&&setTimeout(function(){p.previousSibling.scrollIntoView()},0),r}}();