!function(t){"use strict";function e(t){return void 0!==_[t]}function s(){n.call(this),this._isInvalid=!0}function i(t){return""==t&&s.call(this),t.toLowerCase()}function a(t){var e=t.charCodeAt(0);return e>32&&e<127&&[34,35,60,62,63,96].indexOf(e)==-1?t:encodeURIComponent(t)}function h(t){var e=t.charCodeAt(0);return e>32&&e<127&&[34,35,60,62,96].indexOf(e)==-1?t:encodeURIComponent(t)}function r(t,r,n){function o(t){g.push(t)}var c=r||"scheme start",l=0,m="",d=!1,b=!1,g=[];t:for(;(t[l-1]!=f||0==l)&&!this._isInvalid;){var j=t[l];switch(c){case"scheme start":if(!j||!p.test(j)){if(r){o("Invalid scheme.");break t}m="",c="no scheme";continue}m+=j.toLowerCase(),c="scheme";break;case"scheme":if(j&&v.test(j))m+=j.toLowerCase();else{if(":"!=j){if(r){if(f==j)break t;o("Code point not allowed in scheme: "+j);break t}m="",l=0,c="no scheme";continue}if(this._scheme=m,m="",r)break t;e(this._scheme)&&(this._isRelative=!0),c="file"==this._scheme?"relative":this._isRelative&&n&&n._scheme==this._scheme?"relative or authority":this._isRelative?"authority first slash":"scheme data"}break;case"scheme data":"?"==j?(this._query="?",c="query"):"#"==j?(this._fragment="#",c="fragment"):f!=j&&"\t"!=j&&"\n"!=j&&"\r"!=j&&(this._schemeData+=a(j));break;case"no scheme":if(n&&e(n._scheme)){c="relative";continue}o("Missing scheme."),s.call(this);break;case"relative or authority":if("/"!=j||"/"!=t[l+1]){o("Expected /, got: "+j),c="relative";continue}c="authority ignore slashes";break;case"relative":if(this._isRelative=!0,"file"!=this._scheme&&(this._scheme=n._scheme),f==j){this._host=n._host,this._port=n._port,this._path=n._path.slice(),this._query=n._query,this._username=n._username,this._password=n._password;break t}if("/"==j||"\\"==j)"\\"==j&&o("\\ is an invalid code point."),c="relative slash";else if("?"==j)this._host=n._host,this._port=n._port,this._path=n._path.slice(),this._query="?",this._username=n._username,this._password=n._password,c="query";else{if("#"!=j){var y=t[l+1],w=t[l+2];("file"!=this._scheme||!p.test(j)||":"!=y&&"|"!=y||f!=w&&"/"!=w&&"\\"!=w&&"?"!=w&&"#"!=w)&&(this._host=n._host,this._port=n._port,this._username=n._username,this._password=n._password,this._path=n._path.slice(),this._path.pop()),c="relative path";continue}this._host=n._host,this._port=n._port,this._path=n._path.slice(),this._query=n._query,this._fragment="#",this._username=n._username,this._password=n._password,c="fragment"}break;case"relative slash":if("/"!=j&&"\\"!=j){"file"!=this._scheme&&(this._host=n._host,this._port=n._port,this._username=n._username,this._password=n._password),c="relative path";continue}"\\"==j&&o("\\ is an invalid code point."),c="file"==this._scheme?"file host":"authority ignore slashes";break;case"authority first slash":if("/"!=j){o("Expected '/', got: "+j),c="authority ignore slashes";continue}c="authority second slash";break;case"authority second slash":if(c="authority ignore slashes","/"!=j){o("Expected '/', got: "+j);continue}break;case"authority ignore slashes":if("/"!=j&&"\\"!=j){c="authority";continue}o("Expected authority, got: "+j);break;case"authority":if("@"==j){d&&(o("@ already seen."),m+="%40"),d=!0;for(var k=0;k<m.length;k++){var O=m[k];if("\t"!=O&&"\n"!=O&&"\r"!=O)if(":"!=O||null!==this._password){var I=a(O);null!==this._password?this._password+=I:this._username+=I}else this._password="";else o("Invalid whitespace in authority.")}m=""}else{if(f==j||"/"==j||"\\"==j||"?"==j||"#"==j){l-=m.length,m="",c="host";continue}m+=j}break;case"file host":if(f==j||"/"==j||"\\"==j||"?"==j||"#"==j){2!=m.length||!p.test(m[0])||":"!=m[1]&&"|"!=m[1]?0==m.length?c="relative path start":(this._host=i.call(this,m),m="",c="relative path start"):c="relative path";continue}"\t"==j||"\n"==j||"\r"==j?o("Invalid whitespace in file host."):m+=j;break;case"host":case"hostname":if(":"!=j||b){if(f==j||"/"==j||"\\"==j||"?"==j||"#"==j){if(this._host=i.call(this,m),m="",c="relative path start",r)break t;continue}"\t"!=j&&"\n"!=j&&"\r"!=j?("["==j?b=!0:"]"==j&&(b=!1),m+=j):o("Invalid code point in host/hostname: "+j)}else if(this._host=i.call(this,m),m="",c="port","hostname"==r)break t;break;case"port":if(/[0-9]/.test(j))m+=j;else{if(f==j||"/"==j||"\\"==j||"?"==j||"#"==j||r){if(""!=m){var R=parseInt(m,10);R!=_[this._scheme]&&(this._port=R+""),m=""}if(r)break t;c="relative path start";continue}"\t"==j||"\n"==j||"\r"==j?o("Invalid code point in port: "+j):s.call(this)}break;case"relative path start":if("\\"==j&&o("'\\' not allowed in path."),c="relative path","/"!=j&&"\\"!=j)continue;break;case"relative path":if(f!=j&&"/"!=j&&"\\"!=j&&(r||"?"!=j&&"#"!=j))"\t"!=j&&"\n"!=j&&"\r"!=j&&(m+=a(j));else{"\\"==j&&o("\\ not allowed in relative path.");var q;(q=u[m.toLowerCase()])&&(m=q),".."==m?(this._path.pop(),"/"!=j&&"\\"!=j&&this._path.push("")):"."==m&&"/"!=j&&"\\"!=j?this._path.push(""):"."!=m&&("file"==this._scheme&&0==this._path.length&&2==m.length&&p.test(m[0])&&"|"==m[1]&&(m=m[0]+":"),this._path.push(m)),m="","?"==j?(this._query="?",c="query"):"#"==j&&(this._fragment="#",c="fragment")}break;case"query":r||"#"!=j?f!=j&&"\t"!=j&&"\n"!=j&&"\r"!=j&&(this._query+=h(j)):(this._fragment="#",c="fragment");break;case"fragment":f!=j&&"\t"!=j&&"\n"!=j&&"\r"!=j&&(this._fragment+=j)}l++}}function n(){this._scheme="",this._schemeData="",this._username="",this._password=null,this._host="",this._port="",this._path=[],this._query="",this._fragment="",this._isInvalid=!1,this._isRelative=!1}function o(t,e){void 0===e||e instanceof o||(e=new o(String(e))),this._url=t,n.call(this);var s=t.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,"");r.call(this,s,null,e)}var c=!1;if(!t.forceJURL)try{var l=new URL("b","http://a");l.pathname="c%20d",c="http://a/c%20d"===l.href}catch(t){}if(!c){var _=Object.create(null);_.ftp=21,_.file=0,_.gopher=70,_.http=80,_.https=443,_.ws=80,_.wss=443;var u=Object.create(null);u["%2e"]=".",u[".%2e"]="..",u["%2e."]="..",u["%2e%2e"]="..";var f=void 0,p=/[a-zA-Z]/,v=/[a-zA-Z0-9\+\-\.]/;o.prototype={toString:function(){return this.href},get href(){if(this._isInvalid)return this._url;var t="";return""==this._username&&null==this._password||(t=this._username+(null!=this._password?":"+this._password:"")+"@"),this.protocol+(this._isRelative?"//"+t+this.host:"")+this.pathname+this._query+this._fragment},set href(t){n.call(this),r.call(this,t)},get protocol(){return this._scheme+":"},set protocol(t){this._isInvalid||r.call(this,t+":","scheme start")},get host(){return this._isInvalid?"":this._port?this._host+":"+this._port:this._host},set host(t){!this._isInvalid&&this._isRelative&&r.call(this,t,"host")},get hostname(){return this._host},set hostname(t){!this._isInvalid&&this._isRelative&&r.call(this,t,"hostname")},get port(){return this._port},set port(t){!this._isInvalid&&this._isRelative&&r.call(this,t,"port")},get pathname(){return this._isInvalid?"":this._isRelative?"/"+this._path.join("/"):this._schemeData},set pathname(t){!this._isInvalid&&this._isRelative&&(this._path=[],r.call(this,t,"relative path start"))},get search(){return this._isInvalid||!this._query||"?"==this._query?"":this._query},set search(t){!this._isInvalid&&this._isRelative&&(this._query="?","?"==t[0]&&(t=t.slice(1)),r.call(this,t,"query"))},get hash(){return this._isInvalid||!this._fragment||"#"==this._fragment?"":this._fragment},set hash(t){this._isInvalid||(this._fragment="#","#"==t[0]&&(t=t.slice(1)),r.call(this,t,"fragment"))},get origin(){var t;if(this._isInvalid||!this._scheme)return"";switch(this._scheme){case"data":case"file":case"javascript":case"mailto":return"null"}return t=this.host,t?this._scheme+"://"+t:""}};var m=t.URL;m&&(o.createObjectURL=function(t){return m.createObjectURL.apply(m,arguments)},o.revokeObjectURL=function(t){m.revokeObjectURL(t)}),t.URL=o}}(window);