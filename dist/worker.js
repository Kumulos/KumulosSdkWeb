!function(n){var r={};function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=3)}([function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,s,u,a){return new(u=u||Promise)(function(n,t){function r(e){try{o(a.next(e))}catch(e){t(e)}}function i(e){try{o(a.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?n(e.value):((t=e.value)instanceof u?t:new u(function(e){e(t)})).then(r,i)}o((a=a.apply(e,s||[])).next())})},c=this&&this.__generator||function(n,r){var i,o,s,e,u={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(i)throw new TypeError("Generator is already executing.");for(;u;)try{if(i=1,o&&(s=2&t[0]?o.return:t[0]?o.throw||((s=o.return)&&s.call(o),0):o.next)&&!(s=s.call(o,t[1])).done)return s;switch(o=0,s&&(t=[2&t[0],s.value]),t[0]){case 0:case 1:s=t;break;case 4:return u.label++,{value:t[1],done:!1};case 5:u.label++,o=t[1],t=[0];continue;case 7:t=u.ops.pop(),u.trys.pop();continue;default:if(!(s=0<(s=u.trys).length&&s[s.length-1])&&(6===t[0]||2===t[0])){u=0;continue}if(3===t[0]&&(!s||t[1]>s[0]&&t[1]<s[3])){u.label=t[1];break}if(6===t[0]&&u.label<s[1]){u.label=s[1],s=t;break}if(s&&u.label<s[2]){u.label=s[2],u.ops.push(t);break}s[2]&&u.ops.pop(),u.trys.pop();continue}t=r.call(n,u)}catch(e){t=[6,e],o=0}finally{i=s=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}};t.__esModule=!0;var s,r,l=n(2),u=n(1),f="1.2.1",d=10,p="https://events.kumulos.com";t.PUSH_BASE_URL="https://push.kumulos.com",(r=s=t.EventType||(t.EventType={})).MESSAGE_DELIVERED="k.message.delivered",r.MESSAGE_OPENED="k.message.opened",r.PUSH_REGISTERED="k.push.deviceRegistered",r.INSTALL_TRACKED="k.stats.installTracked",r.USER_ASSOCIATED="k.stats.userAssociated",r.USER_ASSOCIATION_CLEARED="k.stats.userAssociationCleared",r.PAGE_VIEWED="k.pageViewed";var i=(o.prototype.subscribe=function(e,t){this.subscribers[e]||(this.subscribers[e]=[]),-1<this.subscribers[e].indexOf(t)||this.subscribers[e].push(t)},o.prototype.broadcast=function(e,t){if(this.subscribers[e])for(var n=0;n<this.subscribers[e].length;++n)this.subscribers[e][n]({type:e,data:t})},o);function o(e){var t,n,r;this.apiKey=e.apiKey,this.secretKey=e.secretKey,this.vapidPublicKey=e.vapidPublicKey,this.authHeader="Basic "+btoa(this.apiKey+":"+this.secretKey),this.serviceWorkerPath=null!=(t=e.serviceWorkerPath)?t:"/worker.js",this.pushPrompts=null!=(n=e.pushPrompts)?n:"auto",this.autoResubscribe=null==(r=e.autoResubscribe)||r,this.subscribers={}}t.Context=i,t.assertConfigValid=function(e){if("object"!=typeof e)throw"Config must be an object";for(var t=0,n=["apiKey","secretKey","vapidPublicKey"];t<n.length;t++){var r=n[t];if("string"!=typeof e[r]||0===e[r].length)throw"Required configuration key '"+r+"' must be non-empty string"}if(e.serviceWorkerPath&&"string"!=typeof e.serviceWorkerPath&&0===e.serviceWorkerPath.length)throw"Optional configuration key 'serviceWorkerPath' must be non-empty string (if supplied)"};var h=void 0;function v(){return h||(h=u.get("installId").then(function(e){return e||u.set("installId",l.uuidv4())}))}function b(){return u.get("userId").then(function(e){return null!=e?e:v()})}function g(o,s,u){return a(this,void 0,void 0,function(){var t,n,r,i;return c(this,function(e){switch(e.label){case 0:return[4,v()];case 1:return t=e.sent(),[4,b()];case 2:return n=e.sent(),r=[{type:s,uuid:l.uuidv4(),timestamp:Date.now(),data:u,userId:n}],i=p+"/v1/app-installs/"+t+"/events",o.broadcast("eventTracked",r),[2,l.authedFetch(o,i,{method:"POST",body:JSON.stringify(r)})]}})})}t.getInstallId=v,t.getUserId=b,t.associateUser=function(n,r,i){return a(this,void 0,void 0,function(){var t;return c(this,function(e){switch(e.label){case 0:return[4,u.set("userId",r)];case 1:return e.sent(),t={id:r,attributes:i},[2,g(n,s.USER_ASSOCIATED,t).then(function(e){})]}})})},t.clearUserAssociation=function(n){return a(this,void 0,void 0,function(){var t;return c(this,function(e){switch(e.label){case 0:return[4,b()];case 1:return t=e.sent(),g(n,s.USER_ASSOCIATION_CLEARED,{oldUserIdentifier:t}),[2,u.del("userId")]}})})},t.trackEvent=g,t.trackInstallDetails=function(o){return a(this,void 0,void 0,function(){var t,n,r,i;return c(this,function(e){switch(e.label){case 0:t={app:{bundle:location.host,version:"0.0.0",target:2},sdk:{id:d,version:f},runtime:{id:8,version:navigator.userAgent},os:{id:0,version:"0.0.0"},device:{name:navigator.userAgent,tz:"undefined"!=typeof Intl&&Intl.DateTimeFormat().resolvedOptions().timeZone||null,isSimulator:!1,locale:navigator.language}},n=[f,t.app.bundle,t.device.tz,t.device.locale,t.device.name],r=l.cyrb53(n.join("|")),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,u.get("detailsHash")];case 2:return e.sent()===r?[2,Promise.resolve()]:[3,4];case 3:return i=e.sent(),[2,Promise.reject(i)];case 4:return[2,g(o,s.INSTALL_TRACKED,t).then(function(){return u.set("detailsHash",r)}).then(function(){})]}})})}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),i=n(4),o=new i.Store("kumulos","default");function s(e){return i.get(e,o)}function u(e,t){return i.set(e,t,o).then(function(){return t})}t.get=s,t.set=u,t.del=function(e){return i.del(e,o)},t.persistConfig=function(e){return u("config",e)},t.getContextFromStoredConfig=function(){return s("config").then(function(e){return e?new r.Context(e):void 0})}},function(e,t,n){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};t.__esModule=!0,t.uuidv4=function(){return"undefined"==typeof crypto?"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}):(1e7.toString()+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(e){return(Number(e)^crypto.getRandomValues(new Uint8Array(1))[0]&15>>Number(e)/4).toString(16)})},t.isBrowserSupported=function(){return[typeof Promise,typeof fetch,typeof Notification,typeof indexedDB,typeof navigator.serviceWorker,typeof PushManager].reduce(function(e,t){return e&&"undefined"!==t},!0)};var s=Math.imul||function(e,t){var n=(4194303&e)*(t|=0);return 4290772992/*!== 0*/&e&&(n+=(4290772992&e)*t|0),0|n};function r(e,t,n){var r;void 0===n&&(n={method:"GET"});var i=null!=(r=n.headers)?r:{};return n.headers=o({"Content-Type":"application/json",Accept:"application/json",Authorization:e.authHeader},i),fetch(t,n)}t.cyrb53=function(e,t){void 0===t&&(t=0);for(var n=3735928559^t,r=1103547991^t,i=0,o=void 0;i<e.length;i++)o=e.charCodeAt(i),n=s(n^o,2654435761),r=s(r^o,1597334677);return n=s(n^n>>>16,2246822507)^s(r^r>>>13,3266489909),4294967296*(2097151&(r=s(r^r>>>16,2246822507)^s(n^n>>>13,3266489909)))+(n>>>0)},t.escapeRegExp=function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},t.authedFetch=r,t.authedFetchJson=function(e,t,n){return r(e,t,n).then(function(e){return e.json()})},t.base64UrlEncode=function(e){var t=new Uint8Array(e);return btoa(t.reduce(function(e,t){return e+String.fromCharCode(t)},"")).replace("+","-").replace("/","_").replace("=","")}},function(e,t,n){"use strict";t.__esModule=!0;var l=n(0),r=n(1),i=n(5);function o(t){return r.getContextFromStoredConfig().then(function(e){return e?t(e):void 0})}self.addEventListener("install",function(){self.skipWaiting()}),self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())}),self.addEventListener("push",function(a){var e=o(function(e){var t,n;if(a.data){var r=a.data.json();if(r){var i=r.data;if(i&&i["k.message"]){var o=i["k.message"],s=l.trackEvent(e,l.EventType.MESSAGE_DELIVERED,{type:o.type,id:o.data.id}),u=self.registration.showNotification(r.title,{body:r.msg,data:r,icon:null!=(t=r.icon)?t:void 0,image:null!=(n=r.image)?n:void 0,requireInteraction:!0});return Promise.all([s,u])}}}});a.waitUntil(e)}),self.addEventListener("notificationclick",function(c){var e=o(function(e){var t,n=c.notification,r=n.data;if(r){var i=r.data;if(i&&i["k.message"]){n.close();var o=i["k.message"],s=l.trackEvent(e,l.EventType.MESSAGE_OPENED,{type:o.type,id:o.data.id}),u=null!=(t=r.url)?t:"/",a=self.clients.openWindow(u);return Promise.all([s,a])}}});c.waitUntil(e)}),self.addEventListener("pushsubscriptionchange",function(e){if("granted"===Notification.permission){var t=o(function(e){return i.pushRegister(e,self.registration)});e.waitUntil(t)}})},function(e,t,n){"use strict";t.__esModule=!0;var r,i=(o.prototype._withIDBStore=function(i,o){var s=this;return this._dbp.then(function(r){return new Promise(function(e,t){var n=r.transaction(s.storeName,i);n.oncomplete=function(){return e()},n.onabort=n.onerror=function(){return t(n.error)},o(n.objectStore(s.storeName))})})},o);function o(r,i){void 0===r&&(r="keyval-store"),void 0===i&&(i="keyval"),this.storeName=i,this._dbp=new Promise(function(e,t){var n=indexedDB.open(r,1);n.onerror=function(){return t(n.error)},n.onsuccess=function(){return e(n.result)},n.onupgradeneeded=function(){n.result.createObjectStore(i)}})}function s(){return r=r||new i}t.Store=i,t.get=function(t,e){var n;return void 0===e&&(e=s()),e._withIDBStore("readonly",function(e){n=e.get(t)}).then(function(){return n.result})},t.set=function(t,n,e){return void 0===e&&(e=s()),e._withIDBStore("readwrite",function(e){e.put(n,t)})},t.del=function(t,e){return void 0===e&&(e=s()),e._withIDBStore("readwrite",function(e){e.delete(t)})},t.clear=function(e){return void 0===e&&(e=s()),e._withIDBStore("readwrite",function(e){e.clear()})},t.keys=function(e){void 0===e&&(e=s());var t=[];return e._withIDBStore("readonly",function(e){(e.openKeyCursor||e.openCursor).call(e).onsuccess=function(){this.result&&(t.push(this.result.key),this.result.continue())}}).then(function(){return t})}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,s,u,a){return new(u=u||Promise)(function(n,t){function r(e){try{o(a.next(e))}catch(e){t(e)}}function i(e){try{o(a.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?n(e.value):((t=e.value)instanceof u?t:new u(function(e){e(t)})).then(r,i)}o((a=a.apply(e,s||[])).next())})},f=this&&this.__generator||function(n,r){var i,o,s,e,u={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(i)throw new TypeError("Generator is already executing.");for(;u;)try{if(i=1,o&&(s=2&t[0]?o.return:t[0]?o.throw||((s=o.return)&&s.call(o),0):o.next)&&!(s=s.call(o,t[1])).done)return s;switch(o=0,s&&(t=[2&t[0],s.value]),t[0]){case 0:case 1:s=t;break;case 4:return u.label++,{value:t[1],done:!1};case 5:u.label++,o=t[1],t=[0];continue;case 7:t=u.ops.pop(),u.trys.pop();continue;default:if(!(s=0<(s=u.trys).length&&s[s.length-1])&&(6===t[0]||2===t[0])){u=0;continue}if(3===t[0]&&(!s||t[1]>s[0]&&t[1]<s[3])){u.label=t[1];break}if(6===t[0]&&u.label<s[1]){u.label=s[1],s=t;break}if(s&&u.label<s[2]){u.label=s[2],u.ops.push(t);break}s[2]&&u.ops.pop(),u.trys.pop();continue}t=r.call(n,u)}catch(e){t=[6,e],o=0}finally{i=s=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}};t.__esModule=!0;var d=n(0),p=n(2),h=n(1);function i(){return r(this,void 0,void 0,function(){var t;return f(this,function(e){switch(e.label){case 0:if("undefined"==typeof Notification)return[2,Promise.reject("Notifications are not supported in this browser, aborting...")];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,Notification.requestPermission()];case 2:return[2,e.sent()];case 3:return t=e.sent(),console.error(t),[2,Promise.reject(t)];case 4:return[2]}})})}function s(a,c){var l;return r(this,void 0,void 0,function(){var t,n,r,i,o,s,u;return f(this,function(e){switch(e.label){case 0:return"PushManager"in window?[4,c.pushManager.getSubscription()]:[2,Promise.reject("Push notifications are not supported in this browser")];case 1:return!(t=e.sent())||v(a.vapidPublicKey,t)?[3,3]:[4,null===(l=t)||void 0===l?void 0:l.unsubscribe()];case 2:e.sent(),e.label=3;case 3:return[4,c.pushManager.subscribe({applicationServerKey:a.vapidPublicKey,userVisibleOnly:!0})];case 4:return n=e.sent(),r=n.endpoint,i=p.cyrb53(r),o=n.expirationTime,[4,h.get("pushEndpointHash")];case 5:return s=e.sent(),[4,h.get("pushExpiresAt")];case 6:return u=e.sent(),s===i&&(!u||u>Date.now())?[2]:[4,d.trackEvent(a,d.EventType.PUSH_REGISTERED,{type:3,token:n})];case 7:return e.sent(),[4,h.set("pushEndpointHash",i)];case 8:return e.sent(),[4,h.set("pushExpiresAt",o)];case 9:return e.sent(),[2]}})})}function v(e,t){var n=t.options.applicationServerKey;return!!n&&p.base64UrlEncode(n)===e}t.registerServiceWorker=function(e){return"serviceWorker"in navigator?navigator.serviceWorker.register(e).then(function(){return navigator.serviceWorker.ready}):Promise.reject("ServiceWorker is not supported in this browser, aborting...")},t.requestNotificationPermission=i,t.pushRegister=s,t.requestPermissionAndRegisterForPush=function(n){return r(this,void 0,void 0,function(){var t;return f(this,function(e){switch(e.label){case 0:return[4,i()];case 1:switch(e.sent()){case"default":return[2,"unsubscribed"];case"denied":return[2,"blocked"]}return[4,navigator.serviceWorker.getRegistration()];case 2:if(!(t=e.sent()))return[2,Promise.reject()];e.label=3;case 3:return e.trys.push([3,5,,6]),[4,s(n,t)];case 4:return e.sent(),[2,"subscribed"];case 5:return e.sent(),[2,"unsubscribed"];case 6:return[2]}})})},t.getCurrentSubscriptionState=function(i){var o;return r(this,void 0,void 0,function(){var t,n,r;return f(this,function(e){switch(e.label){case 0:return"denied"===(t=Notification.permission)?[2,"blocked"]:[4,navigator.serviceWorker.getRegistration()];case 1:return n=e.sent(),[4,null===(o=n)||void 0===o?void 0:o.pushManager.getSubscription()];case 2:return(r=e.sent())&&"granted"===t&&v(i.vapidPublicKey,r)?[2,"subscribed"]:[2,"unsubscribed"]}})})},t.handleAutoResubscription=function(o){return r(this,void 0,void 0,function(){var t,n,r,i;return f(this,function(e){switch(e.label){case 0:return o.autoResubscribe?"granted"!==Notification.permission?[2]:[4,h.get("pushEndpointHash")]:[2];case 1:return t=e.sent(),[4,h.get("pushExpiresAt")];case 2:if(n=e.sent(),void 0!==t&&(null==n||n>Date.now()))return[2];e.label=3;case 3:return e.trys.push([3,5,,6]),[4,navigator.serviceWorker.getRegistration()];case 4:return(r=e.sent())?[2,s(o,r)]:(console.warn("No worker, aborting auto-resubscription"),[2]);case 5:return i=e.sent(),console.error(i),[3,6];case 6:return[2]}})})}}]);