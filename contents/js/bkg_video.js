"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),Bideo=function(){function e(t){_classCallCheck(this,e),this.videoEl=t.videoEl,this.resize=t.resize||!1,this.isMobile=t.isMobile||!1,this.autoplay=t.autoplay||!1,this.onLoad=t.onLoad,this.src=t.src,this.container=t.container,this._addSources(),this._addEventListeners=this._addEventListeners.bind(this),this._resize=this._resize.bind(this),this._canPlay=this._canPlay.bind(this),this._addEventListeners()}return _createClass(e,[{key:"_addEventListeners",value:function(){this.videoEl.addEventListener("canplay",this._canPlay),this.resize===!0&&window.addEventListener("resize",this._resize,!1)}},{key:"_addSources",value:function(){var e=document.createElement("source"),t=!0,i=!1,o=void 0;try{for(var a,n=this.src[Symbol.iterator]();!(t=(a=n.next()).done);t=!0){var r=a.value;for(var s in r)e.setAttribute(s,r[s])}}catch(l){i=!0,o=l}finally{try{!t&&n["return"]&&n["return"]()}finally{if(i)throw o}}this.videoEl.appendChild(e)}},{key:"_canPlay",value:function(){console.log("called canPlay"),this.isMobile===!1&&(this.onLoad(),this.autoplay===!0&&this.videoEl.play())}},{key:"_resize",value:function(){if(!("object-fit"in document.body.style)){console.log("object-fit not supported");var e=this.videoEl.videoWidth,t=this.videoEl.videoHeight,i=(e/t).toFixed(4),o=this.container,a=window.getComputedStyle(o),n=parseFloat(a.getPropertyValue("width")),r=parseFloat(a.getPropertyValue("height"));if("border-box"!==a.getPropertyValue("box-sizing")){var s=parseFloat(a.getPropertyValue("padding-top")),l=parseFloat(a.getPropertyValue("padding-bottom")),d=parseFloat(a.getPropertyValue("padding-left")),c=parseFloat(a.getPropertyValue("padding-right"));n+=d+c,r+=s+l}var u,h,p=n/e,y=r/t;p>y?(u=n,h=Math.ceil(u/i)):(h=r,u=Math.ceil(h*i)),this.videoEl.style.width=u+"px",this.videoEl.style.height=h+"px"}}}]),e}();!function(){var e={videoEl:document.querySelector("#background-video"),container:document.querySelector("#Oculus-addon-cup-video-container"),resize:!0,autoplay:!0,isMobile:window.matchMedia("(max-width: 768px)").matches,playButton:document.querySelector("#play"),pauseButton:document.querySelector("#pause"),src:[{src:"../media/videos/oculus_addon_cup.mp4",type:"video/mp4"}],onLoad:function(){document.querySelector("#video_cover").style.display="none"}};new Bideo(e)}();