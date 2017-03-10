function _addCookie(b,f,d,e){var c="";if(e){c=b+"="+escape(f)+"; Path=/;domain="+e+";"}else{c=b+"="+escape(f)+"; Path=/;"}if(d>0){var a=new Date();a.setTime(a.getTime()+d*3600000);c=c+" expires="+a.toGMTString()}document.cookie=c}function _getCookie(a){var c=new RegExp("(^|;)[ ]*"+a+"[ ]*=[ ]*[^;]+","i");if(document.cookie.match(c)){var b=document.cookie.match(c)[0];var e=b.indexOf("=");if(e>0){return b.substring(e+1).replace(/^\s+|\s+$/g,"")}}else{return""}}function _makeUID(){var d=[];var a="0123456789ABCDEF";for(var b=0;b<32;b++){d[b]=a.substr(Math.floor(Math.random()*16),1)}d[12]="4";d[16]=a.substr((d[16]&3)|8,1);var c=d.join("");return c}function getParentHost(){var newhost;var domain;var ArrDomain=new Array(".com.cn",".net.cn",".org.cn",".gov.cn",".com",".cn",".tel",".mobi",".net",".org",".asia",".me",".cc",".name",".info",".tv");var host=document.domain;for(k in ArrDomain){var re=eval("/\\"+ArrDomain[k]+"$/g");newhost=host.replace(re,"");if(newhost!=host){domain=ArrDomain[k];break}}var hostar=newhost.split(".");var s="";if(hostar.length>1){s=hostar[hostar.length-1]+domain}else{s=host}return s}var ca_server_js={};var _parentDm=getParentHost();var sessionCookieTimeOut=0;var cookieTimeOut=25920;if(!window._traker){var _traker=new _caTraker();if(_getCookie("ca_sessionid")==""){_traker.ca_session=1;var newuid=_makeUID();_addCookie("ca_sessionid",newuid,sessionCookieTimeOut,_parentDm)}if(_getCookie("ca_uid")==""){var uid=_makeUID();_addCookie("ca_uid",uid,cookieTimeOut,_parentDm)}}var ca_api="http://carev.cubead.cn/recv/trace.do";function _caMap(){var a=0;var b=new Object();this.put=function(c,d){if(c==null||d==null){return}b[c]=d;a++};this.append=function(c,e){if(c==null||e==null){return}if(b[c]==null){var d=new Array();d.push(e);b[c]=d;a++}else{var d=b[c];d.push(e);b[c]=d}};this.clear=function(){a=0;b=new Object()};this.get=function(c){if(b[c]==null){return null}else{return b[c]}};this.remove=function(c){if(b[c]==null){return}b[c]=null;a--};this.size=function(){return a};this.toString=function(){var d="[";for(var c in b){d+=c;d+=b[c];d+=","}if(d.charAt(d.length-1)===","){d=d.substring(0,d.length-1)}d+="]";return d}}function _caTraker(){var isInit=false;var monitor=true;var ca_touch="L";var ca_ptype="N";var ca_itime=null;var ca_session=0;var ca_visitor=0;var ca_tenantID="";var ca_domain=document.domain;var ca_preref=document.referrer;this._MaxTierNum=0;var last_query=null;var ca_trans=new _caMap();var ca_matcher=new _caMap();(function(){if(navigator.userAgent.indexOf("Firefox")>0){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead")}catch(err){}}if(window.addEventListener){window.addEventListener("click",_onEvent,false);window.addEventListener("unload",_onEvent,false)}else{if(window.attachEvent){document.attachEvent("onclick",_onEvent);window.attachEvent("onunload",_onEvent)}}ca_itime=new Date().getTime();var ca_ftime=_getCookie("ca_ftime");if(ca_ftime===""){ca_visitor=1;ca_ftime=ca_itime;_addCookie("ca_ftime",ca_ftime,cookieTimeOut,_parentDm)}else{if(new Date().getTime()-ca_ftime<1000*60*30){ca_visitor=1}}var ca_stime=_getCookie("ca_stime");if(ca_stime===""){ca_session=1;var ca_ltime=_getCookie("ca_ltime");if(ca_ltime===""){ca_ltime=ca_itime;_addCookie("ca_ltime",ca_ltime,cookieTimeOut,_parentDm)}_addCookie("ca_stime",ca_itime,sessionCookieTimeOut,_parentDm)}else{if(ca_itime-ca_stime>1000*30*60){ca_session=1}_addCookie("ca_stime",ca_itime,sessionCookieTimeOut,_parentDm)}})();this._init=function(domain,tenantID,ptype){if(isInit===true){return}isInit=true;ca_domain=trim(domain);ca_tenantID=trim(tenantID);ca_preref=document.referrer;this._checkDomain();this._setTouch("L");if((ca_ptype==="L")&&(ca_preref.indexOf("baidu.com")>=0||ca_preref.indexOf("google.com")>=0||ca_preref.indexOf("so.com")>=0||ca_preref.indexOf("haosou.com")>=0||ca_preref.indexOf("sogou.com")>=0||ca_preref.indexOf("x.adpro.cn")>=0||ca_preref.indexOf("fenxiang.i8.com.cn")>=0||ca_preref.indexOf("x.wifi6.cn")>=0||ca_preref.indexOf("58.com")>=0||ca_preref.indexOf("ganji.com")>=0||ca_preref.indexOf("baixing.com")>=0)){_addCookie("ca_trace","",cookieTimeOut,_parentDm);ca_session=1}if((ca_preref!="")&&(ca_preref.indexOf(ca_domain)<0)){ca_session=1}this._checkTraceCode();if(ca_ptype==="L"){this._tracePage("PAGE:LANDING")}else{if(ptype!=null&&ptype.length==1&&(ptype==="N"||ptype==="L"||ptype==="C"||ptype==="T")){ca_ptype=ptype}else{ca_ptype="N"}if(ca_ptype==="N"){this._tracePage("PAGE:INSIDE")}}};function trim(str){return str.replace(/(^\s+)|(\s+$)/g,"")}this.setMaxTierNum=function(value){this._MaxTierNum=value};this._setTouch=function(t){ca_touch=t.toUpperCase();var ca_se=_getCookie("ca_se");var tmp_se=(ca_preref.length==0?"DIRECT":ca_preref);if(ca_se===""){_addCookie("ca_se",tmp_se,cookieTimeOut,_parentDm);ca_ptype="L"}else{if(tmp_se.indexOf(ca_domain)<0){ca_ptype="L";if(ca_touch==="L"){_addCookie("ca_se",tmp_se,cookieTimeOut,_parentDm)}else{if(ca_touch==="S"){if(tmp_se.search(/.baidu./i)>=0||tmp_se.search(/.google./i)>=0||tmp_se.search(/.sogou./i)>=0||tmp_se.search(/.bing./i)>=0||tmp_se.search(/.yahoo./i)>=0||tmp_se.search(/.woso./i)>=0||tmp_se.search(/.soso./i)>=0||tmp_se.search(/.youdao./i)>=0){_addCookie("ca_se",ca_preref,cookieTimeOut,_parentDm)}}}}}};this._useGACookie=function(){var ga_utmz=_getCookie("__utmz");if(ga_utmz===""||ga_utmz.indexOf("utmcsr")<0){return}var ca_source="";var ca_keyword="";var ga_params=ga_utmz.substring(ga_utmz.indexOf("utmcsr")).split("|");for(var i=0;i<ga_params.length;i++){var item=ga_params[i].split("=");if(item[0].search(/^utmcsr/i)>=0){ca_source="ca_source="+(item[1].search(/^bdpinpai/i)>=0?"baidu":item[1].toLowerCase())}if(item[0].search(/^utmctr/i)>=0){ca_keyword="ca_keyword="+item[1]}}if(ca_source==""||ca_keyword==""){return}var ca_trace=_getCookie("ca_trace");if(ca_trace===""){_addCookie("ca_trace",ca_source+"&"+ca_keyword,cookieTimeOut,_parentDm)}else{ca_trace=unescape(ca_trace);var ca_params=ca_trace.split("&");for(var i=0;i<ca_params.length;i++){if(ca_params[i].search(/ca_source/)>=0||ca_params[i].search(/utm_source/)>=0){ca_params[i]=ca_source}else{if(ca_params[i].search(/ca_keyword/)>=0||ca_params[i].search(/utm_term/)>=0){ca_params[i]=ca_source}}}_addCookie("ca_trace",ca_params.join("&"),cookieTimeOut,_parentDm)}};this._checkTraceCode=function(){var ca_trace="";var urlStr=document.location+"";if(location.search!==""){var params=location.search.substring(1).split("&");for(var i=0;i<params.length;i++){if(params[i].search(/^ca_/i)>=0||params[i].search(/^utm_/i)>=0){ca_trace+=params[i]+"&"}}if(ca_trace.length>0){ca_ptype="L";ca_trace=ca_trace.substring(0,ca_trace.lastIndexOf("&"));_addCookie("ca_trace",ca_trace,cookieTimeOut,_parentDm)}}else{if(urlStr.indexOf("?")){var params=urlStr.substring(urlStr.indexOf("?",0)+1,urlStr.length).split("&");for(var i=0;i<params.length;i++){if(params[i].search(/^ca_/i)>=0||params[i].search(/^utm_/i)>=0){ca_trace+=params[i]+"&"}}if(ca_trace.length>0){ca_ptype="L";ca_trace=ca_trace.substring(0,ca_trace.lastIndexOf("&"));_addCookie("ca_trace",ca_trace,cookieTimeOut,_parentDm)}}}};this._onEvent=function(e){try{var target,type,x,y;if(window.event){x=e.x;y=e.y;type=e.type;if(navigator.userAgent.indexOf("Firefox")>0){target=e.target}else{target=e.srcElement}}else{x=e.pageX;y=e.pageY;type=e.type;target=e.target}if(type.search(/unload/i)>=0){if(this.last_query!=null){ElementInterval=setInterval(function(){_doGet(ca_api,query.join("&"));clearInterval(ElementInterval)},10)}this._tracePage("PAGE:UNLOAD")}else{if(monitor){this._traceEvent(target,type,x,y)}}}catch(exp){}};this._monitorEvent=function(tagType,propName,propValue,ptype,action){var jsonStr='{"name":"'+propName+'","value":"'+propValue+'","ptype":"'+(ptype==null?"":ptype)+'","action":"'+(action==null?"":action)+'"}';ca_matcher.append(tagType,jsonStr)};this.attachMonitorCallBack=function(func){this._MonitorCallBack=func};this._tracePage=function(act){this._checkDomain();_addJoinKey();var query=new Array();query.push("ca_dm="+ca_domain);query.push("ca_tenant="+ca_tenantID);query.push("ca_ptype="+ca_ptype);query.push("ca_curl="+escape(document.location));query.push("ca_vtime="+(new Date().getTime()-ca_itime)+"-"+ca_visitor+"-"+ca_session);query.push("ca_preref="+escape(ca_preref));query.push("ca_action="+escape(act==null?"0-0-PAGE:NORMAL":("0-0-PAGE:NORMAL("+act+")")));query.push("ca_cookie="+escape(filterCaParams(document.cookie)));query.push("ca_sessionid="+_getCookie("ca_sessionid"));query.push("ca_uid="+_getCookie("ca_uid"));query.push("ca_join="+window.join_key);this.last_query=query;ElementInterval=setInterval(function(){_doGet(ca_api,query.join("&"));clearInterval(ElementInterval)},10)};this._getAttr=function(dom,name){};this._hasClass=function(dom,classname){var obj_class=dom.attributes.getNamedItem("class").value;var obj_class_lst=obj_class.split(/\s+/);for(var i=0;i<obj_class_lst.length;i++){if(obj_class_lst[i]==classname){return true}}return false};this.matchTarget=function(nodeValue,value){var sNodeValue=nodeValue||"";var sValue=value||"";try{if(sValue.indexOf("*")<0){if(sNodeValue==sValue){return true}else{return false}}var valueAry=sValue.split("*");for(var i=0;i<=valueAry.length-1;i++){if(valueAry[i]==""){continue}if(sNodeValue.indexOf(valueAry[i])>=0){continue}else{return false}}return true}catch(e){return false}};this._searchParentNodeTraceEvent=function(target,type,x,y,parentNum){parentNum++;if(parentNum>this._MaxTierNum){return}target=target.parentNode;if(!target){return}this._traceEvent(target,type,x,y,parentNum)};this._traceEvent=function(target,type,x,y,parentNum){ca_itime=new Date().getTime();ca_session=0;var ca_stime=_getCookie("ca_stime");if(ca_stime===""){ca_session=1;_addCookie("ca_stime",ca_itime,sessionCookieTimeOut,_parentDm)}else{if(ca_itime-ca_stime>1000*30*60){ca_session=1}}ca_preref=document.referrer;var cutime=new Date().getTime();var tags=ca_matcher.get(target.tagName);parentNum=(!parentNum)?0:parentNum;var loginCode="";if(tags==null){this._searchParentNodeTraceEvent(target,type,x,y,parentNum);return}else{if(document.getElementById("logincode")!=null){loginCode=document.getElementById("logincode").value}}for(var i=0;i<tags.length;i++){var tag=eval("("+tags[i]+")");if(tag.name==""||tag.value==""){continue}if(target.attributes.getNamedItem(tag.name)!=null&&((tag.name=="class"&&this._hasClass(target,tag.value))||(tag.name!="class"&&this.matchTarget(target.attributes.getNamedItem(tag.name).nodeValue,tag.value)))){if(this._MonitorCallBack){this._MonitorCallBack(target)}this._checkDomain();var query=new Array();query.push("ca_dm="+ca_domain);query.push("ca_tenant="+ca_tenantID);query.push("ca_ptype="+(tag.ptype==""?ca_ptype:tag.ptype));query.push("ca_curl="+escape(document.location));query.push("ca_vtime="+(cutime-ca_itime)+"-"+ca_visitor+"-"+ca_session);query.push("ca_preref="+escape(ca_preref));query.push("ca_action="+escape(x+"-"+y+"-PAGE:EVENT("+(tag.action==""?(target.tagName+" "+tag.value):tag.action)+")"));query.push("ca_cookie="+escape(filterCaParams(document.cookie)));query.push("ca_sessionid="+_getCookie("ca_sessionid"));query.push("ca_uid="+_getCookie("ca_uid"));query.push("ca_join="+window.join_key);query.push("loginCode="+loginCode);this.last_query=query;_doGet(ca_api,query.join("&"));return}}if(i==tags.length){this._searchParentNodeTraceEvent(target,type,x,y,parentNum);return}};this._traceClick=function(ca_domain,ca_tenantID,action){ca_preref=document.referrer;var cutime=new Date().getTime();this._checkDomain();var query=new Array();query.push("ca_dm="+ca_domain);query.push("ca_tenant="+ca_tenantID);query.push("ca_ptype=C");query.push("ca_curl="+escape(document.location));query.push("ca_vtime="+(cutime-ca_itime)+"-"+ca_visitor+"-"+ca_session);query.push("ca_preref="+escape(ca_preref));query.push("ca_action="+escape("0-0-PAGE:EVENT("+action+")"));query.push("ca_cookie="+escape(filterCaParams(document.cookie)));query.push("ca_sessionid="+_getCookie("ca_sessionid"));query.push("ca_uid="+_getCookie("ca_uid"));query.push("ca_join="+window.join_key);this.last_query=query;ElementInterval=setInterval(function(){_doGet(ca_api,query.join("&"));clearInterval(ElementInterval)},10)};this._traceConversion=function(action,jsonStr){ca_preref=document.referrer;var cutime=new Date().getTime();this._checkDomain();var query=new Array();query.push("ca_dm="+ca_domain);query.push("ca_tenant="+ca_tenantID);query.push("ca_ptype=C");query.push("ca_curl="+escape(document.location));query.push("ca_vtime="+(cutime-ca_itime)+"-"+ca_visitor+"-"+ca_session);query.push("ca_preref="+escape(ca_preref));query.push("ca_cookie="+escape(filterCaParams(document.cookie)));query.push("ca_action="+escape(action==null?"0-0-PAGE:CONVERT":("0-0-PAGE:CONVERT("+action+")")));query.push("ca_sessionid="+_getCookie("ca_sessionid"));query.push("ca_uid="+_getCookie("ca_uid"));query.push("ca_join="+window.join_key);query.push("ca_conversion="+escape(jsonStr));this.last_query=query;ElementInterval=setInterval(function(){_doGet(ca_api,query.join("&"));clearInterval(ElementInterval)},10)};this._traceConvert=function(ca_track_domain,ca_track_tenant,sbtType,act){ca_preref=document.referrer;var cutime=new Date().getTime();this._checkDomain();var query=new Array();query.push("ca_dm="+ca_track_domain);query.push("ca_tenant="+ca_track_tenant);query.push("ca_ptype=C");query.push("ca_curl="+escape(document.location));query.push("ca_vtime="+(cutime-ca_itime)+"-"+ca_visitor+"-"+ca_session);query.push("ca_preref="+escape(ca_preref));query.push("ca_sbttype="+sbtType);query.push("ca_cookie="+escape(filterCaParams(document.cookie)));query.push("ca_action="+escape(act==null?"0-0-PAGE:CONVERT":("0-0-PAGE:CONVERT("+act+")")));query.push("ca_sessionid="+_getCookie("ca_sessionid"));query.push("ca_uid="+_getCookie("ca_uid"));query.push("ca_join="+window.join_key);this.last_query=query;ElementInterval=setInterval(function(){_doGet(ca_api,query.join("&"));clearInterval(ElementInterval)},10)};this._addTrans=function(item){if(item==null){return}var id="order_"+ca_trans.size();try{var jsonStr="{";for(var i=0;i<item.length;i++){if(item[i].length>=2){jsonStr+='"'+item[i][0]+'":"'+item[i][1]+'"';if(i+1<item.length){jsonStr+=","}}}jsonStr+="}";ca_trans.put(id,jsonStr)}catch(e){}};this._addTransItem=function(item){if(item==null){return}var id="orderItem_"+ca_trans.size();try{var jsonStr="{";for(var i=0;i<item.length;i++){if(item[i].length>=2){jsonStr+='"'+item[i][0]+'":"'+item[i][1]+'"';if(i+1<item.length){jsonStr+=","}}}jsonStr+="}";ca_trans.put(id,jsonStr)}catch(e){}};this._clearTrans=function(){ca_trans.clear()};this._traceTrans=function(act){this._checkDomain();var query=new Array();query.push("ca_dm="+ca_domain);query.push("ca_tenant="+ca_tenantID);query.push("ca_ptype=T");query.push("ca_curl="+escape(document.location));query.push("ca_vtime="+(new Date().getTime()-ca_itime)+"-"+ca_visitor+"-"+ca_session);query.push("ca_preref="+escape(ca_preref));query.push("ca_action="+escape(act==null?"0-0-PAGE:TRANS":("0-0-PAGE:TRANS("+act+")")));query.push("ca_cookie="+escape(filterCaParams(document.cookie)));this.last_query=query;_doPost(ca_api+"?"+query.join("&"),escape(ca_trans.toString()))};this._enableMonitor=function(flag){if(flag===true){monitor=true}else{monitor=false}};this._checkDomain=function(){if(ca_domain==null||ca_domain==""){ca_domain=document.domain}}}function _onEvent(a){_traker._onEvent(a)}function _checkDOM(a){if(a==="get"){if(_traker.ca_img!=undefined){return}if(_traker.ca_img2!=undefined){return}_traker.ca_img=document.createElement("img");_traker.ca_img.src="";_traker.ca_img2=document.createElement("img");_traker.ca_img2.src=""}else{if(a==="post"){if(_traker.ca_frame!=undefined){return}if(navigator.userAgent.indexOf("MSIE")>0){_traker.ca_frame=document.createElement("<iframe name='ca_postiframe'>");_traker.ca_form=document.createElement("<form name='ca_portform'>");_traker.ca_input=document.createElement("<input name='ca_transcontent'>");_traker.ca_input.type="hidden"}else{_traker.ca_frame=document.createElement("iframe");_traker.ca_frame.name="ca_postiframe";_traker.ca_form=document.createElement("form");_traker.ca_form.name="ca_postform";_traker.ca_input=document.createElement("input");_traker.ca_input.type="hidden";_traker.ca_input.name="ca_transcontent"}_traker.ca_frame.id="ca_postiframe";_traker.ca_frame.style.display="none";_traker.ca_form.id="ca_postform";_traker.ca_form.method="post";_traker.ca_form.target="ca_postiframe";_traker.ca_form.onsubmit="document.charset='utf-8';";_traker.ca_input.id="ca_transcontent";_traker.ca_form.appendChild(_traker.ca_input);document.body.appendChild(_traker.ca_frame);document.body.appendChild(_traker.ca_form)}}}function _addJoinKey(){var a=new Date().getTime();if(window.join_key===undefined){window.join_key=_getCookie("ca_uid")+"_"+_getCookie("ca_sessionid")+"_"+a}window.reseveKey="#params:userId,"+window.join_key;_addCookie("_DOYOO_RESEVE_KEY",window.reseveKey,sessionCookieTimeOut,_parentDm)}function _onAbort(b,a,c){c.push("ca_abort=true");_traker.ca_img2.src=a+"?"+c}function _doGet(a,c){try{_checkDOM("get");_traker.ca_visitor=0;_traker.ca_session=0;_traker.ca_img.src=a+"?"+c;_traker.last_query=null}catch(b){_onAbort(_traker,a,c)}}function _doPost(a,c){try{_checkDOM("post");_traker.ca_visitor=0;_traker.ca_session=0;_traker.ca_form.action=a;_traker.ca_input.value=c;_traker.ca_form.submit();_traker.last_query=null}catch(b){}}function _getCaStatus(){if(window._traker){return true}else{return false}}function filterCaParams(b){var d=b.split(";");var a=new Array();for(var c=0;c<d.length;c++){var f=d[c].split("=");var e=f[0].indexOf("ca_");if(e>-1){a.push(d[c])}}return a.join(";")};