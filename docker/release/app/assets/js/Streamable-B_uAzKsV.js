import{g as e,r as t}from"./antd-vendor-BY85-Fxa.js";import{u as r,p as s}from"./index-B-KY6ufw.js";function o(e,t){for(var r=0;r<t.length;r++){const s=t[r];if("string"!=typeof s&&!Array.isArray(s))for(const t in s)if("default"!==t&&!(t in e)){const r=Object.getOwnPropertyDescriptor(s,t);r&&Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:()=>s[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a=Object.create,n=Object.defineProperty,l=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,p=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,h=(e,t,r,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of i(t))u.call(e,o)||o===r||n(e,o,{get:()=>t[o],enumerable:!(s=l(t,o))||s.enumerable});return e},c=(e,t,r)=>(((e,t,r)=>{t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>g});var y,m=(y=d,h(n({},"__esModule",{value:!0}),y)),f=((e,t,r)=>(r=null!=e?a(p(e)):{},h(e&&e.__esModule?r:n(r,"default",{value:e,enumerable:!0}),e)))(t),b=r,P=s;class g extends f.Component{constructor(){super(...arguments),c(this,"callPlayer",b.callPlayer),c(this,"duration",null),c(this,"currentTime",null),c(this,"secondsLoaded",null),c(this,"mute",(()=>{this.callPlayer("mute")})),c(this,"unmute",(()=>{this.callPlayer("unmute")})),c(this,"ref",(e=>{this.iframe=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,b.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js","playerjs").then((e=>{this.iframe&&(this.player=new e.Player(this.iframe),this.player.setLoop(this.props.loop),this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seeked",this.props.onSeek),this.player.on("ended",this.props.onEnded),this.player.on("error",this.props.onError),this.player.on("timeupdate",(({duration:e,seconds:t})=>{this.duration=e,this.currentTime=t})),this.player.on("buffered",(({percent:e})=>{this.duration&&(this.secondsLoaded=this.duration*e)})),this.props.muted&&this.player.mute())}),this.props.onError)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){const e=this.props.url.match(P.MATCH_URL_STREAMABLE)[1];return f.default.createElement("iframe",{ref:this.ref,src:`https://streamable.com/o/${e}`,frameBorder:"0",scrolling:"no",style:{width:"100%",height:"100%"},allow:"encrypted-media; autoplay; fullscreen;"})}}c(g,"displayName","Streamable"),c(g,"canPlay",P.canPlay.streamable);const j=o({__proto__:null,default:e(m)},[m]);export{j as S};
