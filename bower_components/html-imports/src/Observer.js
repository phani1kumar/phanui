window.HTMLImports.addModule(function(d){var e=function(d){this.addCallback=d,this.mo=new MutationObserver(this.handler.bind(this))};e.prototype={handler:function(d){for(var e,t=0,i=d.length;t<i&&(e=d[t]);t++)"childList"===e.type&&e.addedNodes.length&&this.addedNodes(e.addedNodes)},addedNodes:function(d){this.addCallback&&this.addCallback(d);for(var e,t=0,i=d.length;t<i&&(e=d[t]);t++)e.children&&e.children.length&&this.addedNodes(e.children)},observe:function(d){this.mo.observe(d,{childList:!0,subtree:!0})}},d.Observer=e});