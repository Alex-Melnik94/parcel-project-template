parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wzuc":[function(require,module,exports) {
"use strict";var t=function(t,e){var n,i,o=document.querySelector(t),r=o.querySelector(".slider__items"),a=o.querySelectorAll(".slider__item"),s=o.querySelectorAll(".slider__control"),l=0,c=0,u=[],d=0,m=a.length-1,f={isAutoplay:!1,directionAutoplay:"next",delayAutoplay:5e3,isPauseOnHover:!0};for(var v in e)v in f&&(f[v]=e[v]);for(var p=0,g=a.length;p<g;p++)u.push({item:a[p],position:p,transform:0});var y={getItemIndex:function(t){for(var e=0,n=0,i=u.length;n<i;n++)(u[n].position<u[e].position&&"min"===t||u[n].position>u[e].position&&"max"===t)&&(e=n);return e},getItemPosition:function(t){return u[y.getItemIndex(t)].position}},h=function(t){var e,n=d;"next"===t?(++l>y.getItemPosition("max")&&(e=y.getItemIndex("min"),u[e].position=y.getItemPosition("max")+1,u[e].transform+=100*u.length,u[e].item.style.transform="translateX("+u[e].transform+"%)"),c-=100,(d+=1)>m&&(d=0)):(--l<y.getItemPosition("min")&&(e=y.getItemIndex("max"),u[e].position=y.getItemPosition("min")-1,u[e].transform-=100*u.length,u[e].item.style.transform="translateX("+u[e].transform+"%)"),c+=100,(d-=1)<0&&(d=m)),r.style.transform="translateX("+c+"%)",i[n].classList.remove("active"),i[d].classList.add("active")},_=function(){f.isAutoplay&&(x(),n=setInterval(function(){h(f.directionAutoplay)},f.delayAutoplay))},x=function(){clearInterval(n)},A=function(){return!!("ontouchstart"in window||navigator.maxTouchPoints)};return function(){var t=document.createElement("ol");t.classList.add("slider__indicators");for(var e=0,n=a.length;e<n;e++){var r=document.createElement("li");0===e&&r.classList.add("active"),r.setAttribute("data-slide-to",e),t.appendChild(r)}o.appendChild(t),i=o.querySelectorAll(".slider__indicators > li")}(),function(){var t=0;if(A())o.addEventListener("touchstart",function(e){t=e.changedTouches[0].clientX,_()}),o.addEventListener("touchend",function(e){var n=e.changedTouches[0].clientX-t;n>50?h("prev"):n<-50&&h("next"),_()});else for(var e=0,n=s.length;e<n;e++)s[e].classList.add("slider__control_show");o.addEventListener("click",function(t){t.target.classList.contains("slider__control")?(t.preventDefault(),h(t.target.classList.contains("slider__control_next")?"next":"prev"),_()):t.target.getAttribute("data-slide-to")&&(t.preventDefault(),function(t){for(var e=0,n=t>d?"next":"prev";t!==d&&e<=m;)h(n),e++}(parseInt(t.target.getAttribute("data-slide-to"))),_())}),document.addEventListener("visibilitychange",function(){"hidden"===document.visibilityState?x():_()},!1),f.isPauseOnHover&&f.isAutoplay&&(o.addEventListener("mouseenter",function(){x()}),o.addEventListener("mouseleave",function(){_()}))}(),_(),{next:function(){h("next")},left:function(){h("prev")},stop:function(){f.isAutoplay=!1,x()},cycle:function(){f.isAutoplay=!0,_()}}};t(".slider",{isAutoplay:!0});
},{}]},{},["wzuc"], null)
//# sourceMappingURL=/IceCream-by-Njeen/slider.e52a8504.js.map