import{_ as e}from"./content-utils-BSlq_OeJ.js";import{g as t,r as n}from"./antd-vendor-BY85-Fxa.js";import{p as r}from"./index-B-KY6ufw.js";function s(e,t){for(var n=0;n<t.length;n++){const r=t[n];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i=Object.create,o=Object.defineProperty,a=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,p=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,h=(e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of l(t))u.call(e,s)||s===n||o(e,s,{get:()=>t[s],enumerable:!(r=a(t,s))||r.enumerable});return e},d=(e,t,n)=>(((e,t,n)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n),c={};((e,t)=>{for(var n in t)o(e,n,{get:t[n],enumerable:!0})})(c,{default:()=>P});var y,m=(y=c,h(o({},"__esModule",{value:!0}),y)),v=((e,t,n)=>(n=null!=e?i(p(e)):{},h(e&&e.__esModule?n:o(n,"default",{value:e,enumerable:!0}),e)))(n),f=r;class P extends v.Component{constructor(){super(...arguments),d(this,"onReady",((...e)=>this.props.onReady(...e))),d(this,"onPlay",((...e)=>this.props.onPlay(...e))),d(this,"onBuffer",((...e)=>this.props.onBuffer(...e))),d(this,"onBufferEnd",((...e)=>this.props.onBufferEnd(...e))),d(this,"onPause",((...e)=>this.props.onPause(...e))),d(this,"onEnded",((...e)=>this.props.onEnded(...e))),d(this,"onError",((...e)=>this.props.onError(...e))),d(this,"onPlayBackRateChange",(e=>this.props.onPlaybackRateChange(e.target.playbackRate))),d(this,"onEnablePIP",((...e)=>this.props.onEnablePIP(...e))),d(this,"onSeek",(e=>{this.props.onSeek(e.target.currentTime)})),d(this,"onDurationChange",(()=>{const e=this.getDuration();this.props.onDuration(e)})),d(this,"mute",(()=>{this.player.muted=!0})),d(this,"unmute",(()=>{this.player.muted=!1})),d(this,"ref",(e=>{this.player=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);const e=this.getPlaybackId(this.props.url);e&&(this.player.playbackId=e)}componentWillUnmount(){this.player.playbackId=null,this.removeListeners(this.player)}addListeners(e){const{playsinline:t}=this.props;e.addEventListener("play",this.onPlay),e.addEventListener("waiting",this.onBuffer),e.addEventListener("playing",this.onBufferEnd),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeek),e.addEventListener("ended",this.onEnded),e.addEventListener("error",this.onError),e.addEventListener("ratechange",this.onPlayBackRateChange),e.addEventListener("enterpictureinpicture",this.onEnablePIP),e.addEventListener("leavepictureinpicture",this.onDisablePIP),e.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),e.addEventListener("canplay",this.onReady),t&&e.setAttribute("playsinline","")}removeListeners(e){e.removeEventListener("canplay",this.onReady),e.removeEventListener("play",this.onPlay),e.removeEventListener("waiting",this.onBuffer),e.removeEventListener("playing",this.onBufferEnd),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeek),e.removeEventListener("ended",this.onEnded),e.removeEventListener("error",this.onError),e.removeEventListener("ratechange",this.onPlayBackRateChange),e.removeEventListener("enterpictureinpicture",this.onEnablePIP),e.removeEventListener("leavepictureinpicture",this.onDisablePIP),e.removeEventListener("canplay",this.onReady)}async load(t){var n;const{onError:r,config:s}=this.props;if(!(null==(n=globalThis.customElements)?void 0:n.get("mux-player")))try{const t="https://cdn.jsdelivr.net/npm/@mux/mux-player@VERSION/dist/mux-player.mjs".replace("VERSION",s.version);await e((()=>import(`${t}`)),[]),this.props.onLoaded()}catch(o){r(o)}const[,i]=t.match(f.MATCH_URL_MUX);this.player.playbackId=i}play(){const e=this.player.play();e&&e.catch(this.props.onError)}pause(){this.player.pause()}stop(){this.player.playbackId=null}seekTo(e,t=!0){this.player.currentTime=e,t||this.pause()}setVolume(e){this.player.volume=e}enablePIP(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player&&this.player.requestPictureInPicture()}disablePIP(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player&&document.exitPictureInPicture()}setPlaybackRate(e){try{this.player.playbackRate=e}catch(t){this.props.onError(t)}}getDuration(){if(!this.player)return null;const{duration:e,seekable:t}=this.player;return e===1/0&&t.length>0?t.end(t.length-1):e}getCurrentTime(){return this.player?this.player.currentTime:null}getSecondsLoaded(){if(!this.player)return null;const{buffered:e}=this.player;if(0===e.length)return 0;const t=e.end(e.length-1),n=this.getDuration();return t>n?n:t}getPlaybackId(e){const[,t]=e.match(f.MATCH_URL_MUX);return t}render(){const{url:e,playing:t,loop:n,controls:r,muted:s,config:i,width:o,height:a}=this.props,l={width:"auto"===o?o:"100%",height:"auto"===a?a:"100%"};return!1===r&&(l["--controls"]="none"),v.default.createElement("mux-player",{ref:this.ref,"playback-id":this.getPlaybackId(e),style:l,preload:"auto",autoPlay:t||void 0,muted:s?"":void 0,loop:n?"":void 0,...i.attributes})}}d(P,"displayName","Mux"),d(P,"canPlay",f.canPlay.mux);const E=s({__proto__:null,default:t(m)},[m]);export{E as M};
