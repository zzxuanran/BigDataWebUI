function ckReload(e){if(ckRefreshIsAvailable!==!1){ckRefreshIsAvailable=!1;var t={},o={},n=0,i={ckrstyl:function(e){function n(e){var t=document.location,o=new RegExp("^\\.|^/(?!/)|^[\\w]((?!://).)*$|"+t.host+"|"+ckrislocal1+"|"+ckrislocal2);return e.match(o)}var i=document.getElementsByTagName("head")[0];if(e===!0){if(!document.getElementById("LPCodeKitLiveTransitionRule")){var c=document.createElement("style"),r="transition: all .3s ease-out;",l=[".lpcodekit-loading * { ",r," -webkit-",r,"-moz-",r,"-o-",r,"}"].join("");c.setAttribute("type","text/css"),c.setAttribute("id","LPCodeKitLiveTransitionRule"),i.appendChild(c),c.styleSheet?c.styleSheet.cssText=l:c.appendChild(document.createTextNode(l))}}else{var a=document.getElementById("LPCodeKitLiveTransitionRule");a&&i.removeChild(a)}for(var s=document.styleSheets,d=document.styleSheets.length,u=0;d>u;u++){var p=s[u];if(p){var k=p.media.mediaText,f=k.search(/print/i);if(-1===f){var m=p.href;if(m&&n(m)){var h=m.search(/ckMarkedForRemoval/i);if(-1===h){var v=m.split("?"),w=v[0],g=v.length>1?v[1]:"";g=g.replace(/(&)?now=[0-9]*/gi,""),g=g.length>0?"?"+g+"&now="+1*new Date:"?now="+1*new Date;var b=p.ownerNode,y=b.id,x=document.body.parentNode,C=b.nextSibling,A=document.createElement("link");x.className=x.className.replace(/\s*lpcodekit\-loading/gi,"")+" lpcodekit-loading",A.setAttribute("type","text/css"),A.setAttribute("rel","stylesheet"),A.setAttribute("href",w+g),y&&A.setAttribute("id",y),C?i.insertBefore(A,C):i.appendChild(A),t[w]=A,o[w]=b,/firefox/i.test(navigator.userAgent)&&b.setAttribute("href","ckMarkedForRemoval"+m)}}}}}},ckrllcn:function(){var e=document.body.parentNode;e.className=e.className.replace(/\s*lpcodekit\-loading/gi,"")},ckrole:function(){if(n>130)for(var e in o){var c=o[e];c.parentNode.removeChild(c),delete o[e]}else for(var e in o){var r=t[e],c=o[e];try{var l=r.sheet||r.styleSheet,a=l.rules||l.cssRules;if(!a)return n++,void setTimeout(i.ckrole,50);a.length>=0?(n=0,c.parentNode.removeChild(c),delete o[e],setTimeout(i.ckrllcn,100)):(n++,setTimeout(i.ckrole,100))}catch(s){return console.log("Exception in CKROLE: "+s),n++,void setTimeout(i.ckrole,100)}}},ckroleicwfurl:function(){for(var e in o){var t=o[e];t.parentNode.removeChild(t),delete o[e],setTimeout(i.ckrllcn,100)}},ckcup:function(){var e=navigator.userAgent.toLowerCase().indexOf("chrome")>-1,t=document.URL.indexOf("file://")>-1;e&&t?setTimeout(i.ckroleicwfurl,400):i.ckrole()}};switch("undefined"!=typeof ckinjectionnotpossible&&(20==e||30==e)&&(e=40),e){case 20:i.ckrstyl(!0),setTimeout(i.ckcup,70);break;case 30:i.ckrstyl(!1),setTimeout(i.ckcup,70);break;case 40:var c=Math.round(+new Date/1e3),r=updateQueryString(window.location,"ckcachecontrol",c);window.location.assign(r);break;case 50:var l=window.location.host;window.location.assign(null==previewPathAddition?"http://"+l:"http://"+l+"/"+previewPathAddition)}setTimeout(function(){ckRefreshIsAvailable=!0},2e3)}}function updateQueryString(e,t,o){var n=new RegExp("(\\?|\\&)"+t+"=.*?(?=(&|$))"),i=e.toString().split("#"),e=i[0],c=i[1];return qstring=/\?.+$/,newURL=e,newURL=n.test(e)?e.replace(n,"$1"+t+"="+o):qstring.test(e)?e+"&"+t+"="+o:e+"?"+t+"="+o,c&&(newURL+="#"+c),newURL}function lpckSetCookie(e,t,o,n,i,c){o||(o=new Date),document.cookie=e+"="+escape(t)+(null==o?"":"; expires="+o.toGMTString())+(null==n?"":"; path="+n)+(null==i?"":"; domain="+i)+(null==c?"":"; secure")}function lpckGetCookie(e){for(var t=e+"=",o=t.length,n=document.cookie.length,i=0;n>i;){var c=i+o;if(document.cookie.substring(i,c)==t)return lpckGetCookieVal(c);if(i=document.cookie.indexOf(" ",i)+1,0==i)break}return null}function lpckGetCookieVal(e){var t=document.cookie.indexOf(";",e);return-1==t&&(t=document.cookie.length),unescape(document.cookie.substring(e,t))}function lpckss(){var e=new Date;e.setTime(e.getTime()+864e5);var t=document.pageXOffset?document.pageXOffset:document.body.scrollLeft,o=document.pageYOffset?document.pageYOffset:document.body.scrollTop;Data=t+"_"+o,lpckSetCookie("ckrp_ypos",Data,e)}function lpckls(){if(inf=lpckGetCookie("ckrp_ypos")){var e=inf.split("_");2==e.length&&window.scrollTo(parseInt(e[0]),parseInt(e[1]))}}function lphwoc(e){ckReload(40)}function establishckrp(e){function t(){return n.onclose=function(){},n.close(),lpckss(),null}window.WebSocket=window.WebSocket||window.MozWebSocket;var o=!1,n;e===!0?(ckSocketConnectionAttempts++,n=new WebSocket(ckrphnba,"ckrp")):(ckSocketConnectionAttempts++,n=new WebSocket(ckrphna,"ckrp")),n.onopen=function(){ckSocketConnectionAttempts=0},n.onerror=function(e){alert("Failed to establish a connection to CodeKit. Live refreshes will not work.")},n.onclose=function(e){var t=e.wasClean;if(!t&&1==o&&5>ckSocketConnectionAttempts)return void setTimeout(establishckrp(!0),40);if(!document.getElementById("lpckWarningOverlay")){var n=document.createElement("div");n.id="lpckWarningOverlay",n.setAttribute("style","display:block; position:fixed; top:0px; left:0px; width:100%; background-color:red; border-bottom: 1px solid #980000; padding: 20px 0px; z-index:99999999; cursor:pointer; box-shadow: 0px 1px 5px 0px black;"),n.setAttribute("onclick","lphwoc()"),n.innerHTML='<p style="margin: 0 15px; color:white; font-size:20px; font-weight: medium; line-height:1.4em; font-family:sans-serif; text-align:center;">This page has lost its connection to CodeKit and will no longer auto-refresh.</p><p style="margin: 5px 20px; color:white; font-size:11px; line-height:1.0em; font-family:sans-serif; text-align:center;">(Click to try reconnecting.)</p>',document.body.firstChild?document.body.insertBefore(n,document.body.firstChild):document.body.appendChild(n)}},n.onmessage=function(e){var t=e.data.split(/[;]{3}/);switch(t[0]){case"ia":ckReload(20);break;case"ina":ckReload(30);break;case"r":ckReload(40);break;case"rtr":previewPathAddition=null!=t[1]?t[1]:null,ckReload(50)}},window.addEventListener("beforeunload",t,!1),window.addEventListener("load",lpckls,!1)}var ckRefreshIsAvailable=!0,ckSocketConnectionAttempts=0,previewPathAddition=null;establishckrp(!1);