var j=Object.defineProperty;var $=(e,r,n)=>r in e?j(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n;var g=(e,r,n)=>($(e,typeof r!="symbol"?r+"":r,n),n);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const R=new class{constructor(){g(this,"map",new WeakMap)}register(e,r){if(!this.map.get(e))this.map.set(e,r);else throw Error(`${e} is already registered service.`)}getService(e){const r=this.map.get(e);if(r)return r;throw Error(`${e} is not a registered provider.`)}removeService(e){this.map.delete(e)}clear(){this.map=new WeakMap}},L=(e,r,n)=>{if(r.length){const s=[];for(const t of r)t.prototype.__metadata__.name!=="RENDERER"?s.push(R.getService(t)):s.push(n);return new e(...s)}else return new e},E=new class{constructor(){g(this,"globalStyles");g(this,"style_registry");g(this,"isRootNodeSet");g(this,"globalStyleTag");g(this,"getComputedCss",(e="",r)=>{let n=[];const s=new CSSStyleSheet;if(s.insertRule(":host { display: block; }"),n=r?[s]:[this.globalStyles,s],e){const t=new CSSStyleSheet;t.replace(e),n.push(t)}return n});try{this.globalStyles=new CSSStyleSheet}catch{this.globalStyles=""}this.isRootNodeSet=!1,this.globalStyleTag=null}},{html:H,render:W}=(()=>{const e=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,r=/<[a-z][^>]+$/i,n="attr",s=/^attr([^ ]+)/,t="insertNode",o=/^insertNode([^ ]+)/;let u=[];const p=l=>{const i={"&":"&amp;","<":"&lt;",">":"&gt;","(":"%28",")":"%29"};let d=JSON.stringify(l);const a=c=>i[c]||c;return d=(c=>c.replace(/[&<>\(\)]/g,a))(d),JSON.parse(d)},b=(l,i)=>{const d=l.options,a=Array.isArray(i)?i:[i];let f,c,m=d.length;for(;m--;){c=d[m];const h=c.getAttribute("value")??(c.textContent.match(/[^\x20\t\r\n\f]+/g)||[]).join(" ");(c.selected=a.indexOf(h)>-1)&&(f=!0)}f||(l.selectedIndex=-1)},S=l=>{const i=document.createElement("template");return i.innerHTML=l,i.content},v=(l,i)=>{const d=document.createTreeWalker(l,NodeFilter.SHOW_ELEMENT,null);let a=d.nextNode();for(;a;){if(a.eventSubscriptions=[],a.hasAttributes()){const f=Array.from(a.attributes).filter(c=>s.test(c.nodeName));for(const{nodeName:c,nodeValue:m}of f){const h=s.exec(c)[1];switch(!0){case/^on+/.test(m):{const y=m.slice(2).toLowerCase();a.removeEventListener(y,i[h]),y!=="bindprops"?a.addEventListener(y,i[h]):a.addEventListener(y,_=>{_.detail.setProps(i[h]())});break}case/ref/.test(m):{const y=(_=>{const w=_;return()=>{w.isConnected&&i[h](w)}})(a);u.push(y);break}case/^data-+/.test(m):case/^aria-+/.test(m):{a.setAttribute(m,p(i[h]));break}case/class/.test(m):{i[h]?a.classList.add(...i[h].split(" ")):a.setAttribute("class","");break}case/value/.test(m):{a.nodeName.toLowerCase()==="select"?b(a,i[h]):a.value=p(i[h]);break}case/disabled/.test(m):case/checked/.test(m):{i[h]?a.setAttribute(m,i[h]):a.removeAttribute(m);break}default:a.setAttribute(m,p(i[h]))}a.removeAttribute(c)}}a=d.nextNode()}},D=(l,i)=>{const d=document.createTreeWalker(l,NodeFilter.SHOW_COMMENT,null);let a=d.nextNode(),f;for(;a;){if(f=o.exec(a.data)){const c=Array.isArray(i[f[1]])?i[f[1]]:[i[f[1]]];a.replaceWith(...c),d.currentNode=l}a=d.nextNode()}},I=(l,i)=>{if(!l||!i||l.nodeType!==1||i.nodeType!==1)return;const d=l.attributes,a=i.attributes;for(const{name:f,value:c}of d)(!a[f]||a[f]!==c)&&i.setAttribute(f,c);for(const{name:f}of a)d[f]||i.removeAttribute(f)},A=l=>l.nodeType===3?"text":l.nodeType===8?"comment":l.tagName.toLowerCase(),P=l=>l.childNodes&&l.childNodes.length>0?null:l.textContent,C=(l,i)=>{const d=i?Array.from(i.childNodes):[],a=l?Array.from(l.childNodes):[];let f=d.length-a.length;if(f>0)for(;f>0;f--)d[d.length-f].parentNode.removeChild(d[d.length-f]);a.forEach((c,m)=>{const h=d[m];if(I(c,h),!h){i&&i.appendChild(c);return}if(A(c)!==A(h)){h.replaceWith(c);return}const y=P(c);if(y&&y!==P(h)){h.textContent=y;return}if(h.childNodes.length>0&&c.childNodes.length<1){h.innerHTML="";return}if(h.childNodes.length<1&&c.childNodes.length>0){const _=document.createDocumentFragment();C(c,_),h.appendChild(_);return}if(c.childNodes.length>0){C(c,h);return}})};return{html:(l,...i)=>{let d="";const{length:a}=l;for(let c=1;c<a;c++){const m=i[c-1];let h=!1;d+=l[c-1],e.test(d)&&r.test(d)&&(d=d.replace(e,(y,_,w)=>`${n}${c-1}=${w||'"'}${_}${w?"":'"'}`),h=!0),h||(Array.isArray(m)||m instanceof DocumentFragment?d+=`<!--${t}${c-1}-->`:d+=m)}d+=l[a-1];const f=S(d.trim());return v(f,i),D(f,i),f},render:(l,i)=>{l.children.length?C(i,l):(l.innerHTML="",l.appendChild(i)),u.forEach(d=>{d()}),u=[]}}})();class F{constructor(r,n){g(this,"_hostElement");g(this,"_shadowRoot");g(this,"update");g(this,"emitEvent");this._hostElement=r,this._shadowRoot=n}get __metadata__(){return{name:"RENDERER"}}get hostElement(){return this._hostElement}get shadowRoot(){return this._shadowRoot}}const N=(()=>{try{return new CSSStyleSheet,!1}catch{return!0}})(),M=(e,r,n,s=!1)=>(e.addEventListener(r,n,s),()=>{e.removeEventListener(r,n,s)}),V=e=>{const r=()=>new DOMParser().parseFromString(e,"text/html").body||document.createElement("body"),n=p=>{const b=p.querySelectorAll("script");for(const S of b)S.remove()},s=(p,b)=>{if(b=b.replace(/\s+/g,"").toLowerCase(),["src","href","xlink:href"].includes(p)&&(b.includes("javascript:")||b.includes("data:"))||p.startsWith("on"))return!0},t=p=>{const b=p.attributes;for(const{name:S,value:v}of b)s(S,v)&&p.removeAttribute(S)},o=p=>{const b=p.children;for(const S of b)t(S),o(S)},u=r();return n(u),o(u),u.innerHTML},z=function(e){e.renderCount===1&&queueMicrotask(()=>{e.update(),e.renderCount=0})},U=(e,r)=>{const n=()=>({get(s,t){const o=Object.prototype.toString.call(s[t]);return["[object Object]","[object Array]"].indexOf(o)>-1&&!("__metadata__"in s[t])?new Proxy(s[t],n()):s[t]},set(s,t,o){return s[t]=o,++e.renderCount,z(e),!0}});return class extends r{constructor(...s){return super(...s),new Proxy(this,n())}}},q={selector:"",root:!1,styles:"",deps:[],standalone:!1},O=(e,r=null)=>{const n=document.createElement("style");return n.innerHTML=e,r&&r.appendChild(n),n},B=(e,r)=>{if(e={...q,...e},e.styles=e.styles.toString(),e.root&&!E.isRootNodeSet)E.isRootNodeSet=!0,e.styles&&(E.globalStyleTag=O(e.styles,document.head),E.globalStyles.replace(e.styles));else if(e.root&&E.isRootNodeSet)throw Error("Cannot register duplicate root component in "+e.selector+" component");window.customElements.define(e.selector,class extends HTMLElement{constructor(){super();g(this,"klass");g(this,"shadow");g(this,"componentStyleTag",null);g(this,"renderCount",0);g(this,"eventSubscriptions",[]);if(this.shadow=this.attachShadow({mode:"open"}),!N){const s=E.getComputedCss(e.styles,e.standalone);this.shadow.adoptedStyleSheets=s}this.createProxyInstance(),this.getInstance=this.getInstance.bind(this),this.update=this.update.bind(this)}static get observedAttributes(){return r.observedAttributes||[]}emulateComponent(){N&&e.styles&&(this.componentStyleTag=O(e.styles))}createProxyInstance(){const s=new F(this,this.shadow);s.update=()=>{this.update()},s.emitEvent=(t,o)=>{this.emitEvent(t,o)},this.klass=L(U(this,r),e.deps,s)}update(){const s=this.klass.render();typeof s=="string"?this.shadow.innerHTML=V(s):W(this.shadow,s),N&&(e.styles&&this.shadow.insertBefore(this.componentStyleTag,this.shadow.childNodes[0]),E.globalStyleTag&&!e.standalone&&this.shadow.insertBefore(document.importNode(E.globalStyleTag,!0),this.shadow.childNodes[0]))}emitEvent(s,t,o=!0){const u=new CustomEvent(s,{detail:t,bubbles:o});this.dispatchEvent(u)}setProps(s){var t,o;for(const[u,p]of Object.entries(s))this.klass[u]=p;(o=(t=this.klass).onPropertiesChanged)==null||o.call(t),this.update()}getInstance(){return this.klass}connectedCallback(){this.emulateComponent(),this.klass.beforeMount&&this.klass.beforeMount(),this.update(),this.klass.mount&&this.klass.mount(),this.emitEvent("bindprops",{setProps:s=>{this.setProps(s)}},!1),this.eventSubscriptions.push(M(window,"onLanguageChange",()=>{this.update()}))}attributeChangedCallback(s,t,o){var u,p;(p=(u=this.klass).onAttributesChanged)==null||p.call(u,s,t,o)}disconnectedCallback(){var s,t,o;if(this.renderCount=1,this.componentStyleTag&&this.componentStyleTag.remove(),(t=(s=this.klass).unmount)==null||t.call(s),(o=this.eventSubscriptions)!=null&&o.length)for(const u of this.eventSubscriptions)u()}})},J={deps:[]},K=e=>r=>{if(e.selector.indexOf("-")<=0)throw new Error("You need at least 1 dash in the custom element name!");window.customElements.get(e.selector)||(Object.defineProperty(r.prototype,"selector",{get(){return e.selector}}),B(e,r))},k=(e={})=>r=>{if(e={...J,...e},r.prototype.__metadata__={name:"SERVICE"},e.deps.some(s=>{var t;return((t=s.prototype.__metadata__)==null?void 0:t.name)==="RENDERER"}))throw Error("Renderer cannot be a dependency for a service. It should be used with component");const n=L(r,e.deps);R.register(r,n)};class G{constructor(){g(this,"transition","");this.whichTransitionEnd()}onTransitionEnd(r,n,s){let t=!1,o=null;const u=()=>{t||(t=!0,n&&n(),o(),o=null)};o=M(r,this.transition,()=>{u()}),setTimeout(u,s)}animationsComplete(r){return r.getAnimations?Promise.allSettled(r.getAnimations().map(n=>n.finished)):Promise.allSettled([!0])}whichTransitionEnd(){const n=document.createElement("div").style,s={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend"};for(const t in s)if(typeof n[t]<"u"){this.transition=s[t];break}}}k()(G);var Y=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,X=(e,r,n,s)=>{for(var t=s>1?void 0:s?Q(r,n):r,o=e.length-1,u;o>=0;o--)(u=e[o])&&(t=(s?u(r,n,t):u(t))||t);return s&&t&&Y(r,n,t),t};let T=class{constructor(){g(this,"envVariables");this.envVariables={...window.__RUNTIME_CONFIG__||{}}}get(e){return this.envVariables[e]}};T=X([k()],T);const Z="*{font-size:16px;font-family:Arial,Helvetica,sans-serif}.center{text-align:center}";var ee=Object.defineProperty,te=Object.getOwnPropertyDescriptor,se=(e,r,n,s)=>{for(var t=s>1?void 0:s?te(r,n):r,o=e.length-1,u;o>=0;o--)(u=e[o])&&(t=(s?u(r,n,t):u(t))||t);return s&&t&&ee(r,n,t),t};let x=class{constructor(e){this.configService=e}render(){return H`
      <main class="container center">
        <img src="./images/logo.jpg" />
        <h1>Welcome to PlumeJS</h1>
        <p>example env variable: ${this.configService.get("PLUME_SAMPLE_ENV_VARIABLE")}</p>
        <p>Please check <a href="https://github.com/KiranMantha/plumejs">here</a> for documentation</p>
      </main>
    `}};x=se([K({selector:"app-root",styles:Z,root:!0,deps:[T]})],x);