function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function s(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(s)}function a(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(e,n,s){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}function i(t,e,s,r){return t[1]&&r?n(s.ctx.slice(),t[1](r(e))):s.ctx}function u(t,e,n,s,r,o,a){const c=function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(e,s,r,o);if(c){const r=i(e,n,s,a);t.p(r,c)}}function f(t){return null==t?"":t}const h="undefined"!=typeof window;let p=h?()=>window.performance.now():()=>Date.now(),d=h?t=>requestAnimationFrame(t):t;const g=new Set;function m(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),0!==g.size&&d(m)}function v(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function b(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function _(){return E(" ")}function k(){return E("")}function P(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function A(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function S(t){return Array.from(t.childNodes)}function L(t,e,n,s){for(let s=0;s<t.length;s+=1){const r=t[s];if(r.nodeName===e){let e=0;const o=[];for(;e<r.attributes.length;){const t=r.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)r.removeAttribute(o[t]);return t.splice(s,1)[0]}}return s?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):w(e)}function x(t,e){for(let n=0;n<t.length;n+=1){const s=t[n];if(3===s.nodeType)return s.data=""+e,t.splice(n,1)[0]}return E(e)}function R(t){return x(t," ")}function C(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function j(t,e=document.body){return Array.from(e.querySelectorAll(t))}const I=new Set;let D,N=0;function O(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-s.length;r&&(t.style.animation=s.join(", "),N-=r,N||d(()=>{N||(I.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),I.clear())}))}function V(t){D=t}function U(){if(!D)throw new Error("Function called outside component initialization");return D}function q(t){U().$$.on_destroy.push(t)}function H(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}const T=[],B=[],F=[],J=[],M=Promise.resolve();let W=!1;function z(t){F.push(t)}let G=!1;const K=new Set;function Y(){if(!G){G=!0;do{for(let t=0;t<T.length;t+=1){const e=T[t];V(e),X(e.$$)}for(T.length=0;B.length;)B.pop()();for(let t=0;t<F.length;t+=1){const e=F[t];K.has(e)||(K.add(e),e())}F.length=0}while(T.length);for(;J.length;)J.pop()();W=!1,G=!1,K.clear()}}function X(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}let Q;function Z(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const tt=new Set;let et;function nt(){et={r:0,c:[],p:et}}function st(){et.r||o(et.c),et=et.p}function rt(t,e){t&&t.i&&(tt.delete(t),t.i(e))}function ot(t,e,n,s){if(t&&t.o){if(tt.has(t))return;tt.add(t),et.c.push(()=>{tt.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const at={duration:0};function ct(n,s,r){let o,c,l=s(n,r),i=!1,u=0;function f(){o&&O(n,o)}function h(){const{delay:s=0,duration:r=300,easing:a=e,tick:h=t,css:v}=l||at;v&&(o=function(t,e,n,s,r,o,a,c=0){const l=16.666/s;let i="{\n";for(let t=0;t<=1;t+=l){const s=e+(n-e)*o(t);i+=100*t+`%{${a(s,1-s)}}\n`}const u=i+`100% {${a(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${c}`,h=t.ownerDocument;I.add(h);const p=h.__svelte_stylesheet||(h.__svelte_stylesheet=h.head.appendChild(w("style")).sheet),d=h.__svelte_rules||(h.__svelte_rules={});d[f]||(d[f]=!0,p.insertRule(`@keyframes ${f} ${u}`,p.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?g+", ":""}${f} ${s}ms linear ${r}ms 1 both`,N+=1,f}(n,0,1,r,s,a,v,u++)),h(0,1);const $=p()+s,y=$+r;c&&c.abort(),i=!0,z(()=>Z(n,!0,"start")),c=function(t){let e;return 0===g.size&&d(m),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}(t=>{if(i){if(t>=y)return h(1,0),Z(n,!0,"end"),f(),i=!1;if(t>=$){const e=a((t-$)/r);h(e,1-e)}}return i})}let v=!1;return{start(){v||(O(n),a(l)?(l=l(),(Q||(Q=Promise.resolve(),Q.then(()=>{Q=null})),Q).then(h)):h())},invalidate(){v=!1},end(){i&&(f(),i=!1)}}}function lt(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const a=t[o],c=e[o];if(c){for(const t in a)t in c||(s[t]=1);for(const t in c)r[t]||(n[t]=c[t],r[t]=1);t[o]=c}else for(const t in a)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function it(t){return"object"==typeof t&&null!==t?t:{}}function ut(t){t&&t.c()}function ft(t,e){t&&t.l(e)}function ht(t,e,n){const{fragment:r,on_mount:c,on_destroy:l,after_update:i}=t.$$;r&&r.m(e,n),z(()=>{const e=c.map(s).filter(a);l?l.push(...e):o(e),t.$$.on_mount=[]}),i.forEach(z)}function pt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function dt(t,e){-1===t.$$.dirty[0]&&(T.push(t),W||(W=!0,M.then(Y)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function gt(e,n,s,a,c,l,i=[-1]){const u=D;V(e);const f=n.props||{},h=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:i,skip_bound:!1};let p=!1;if(h.ctx=s?s(e,f,(t,n,...s)=>{const r=s.length?s[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),p&&dt(e,t)),n}):[],h.update(),p=!0,o(h.before_update),h.fragment=!!a&&a(h.ctx),n.target){if(n.hydrate){const t=S(n.target);h.fragment&&h.fragment.l(t),t.forEach(y)}else h.fragment&&h.fragment.c();n.intro&&rt(e.$$.fragment),ht(e,n.target,n.anchor),Y()}V(u)}class mt{$destroy(){pt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const vt=[];function $t(e,n=t){let s;const r=[];function o(t){if(c(e,t)&&(e=t,s)){const t=!vt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),vt.push(n,e)}if(t){for(let t=0;t<vt.length;t+=2)vt[t][0](vt[t+1]);vt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,c=t){const l=[a,c];return r.push(l),1===r.length&&(s=n(o)||t),a(e),()=>{const t=r.indexOf(l);-1!==t&&r.splice(t,1),0===r.length&&(s(),s=null)}}}}const yt={},bt=$t({activePage:""});function wt(e){let n,s,r,a,c,l,i,u,h,p,d,g,m,b,k,C,j,I,D,N,O,V,U,q,H,T,B,F,J,M,W,z,G,K,Y,X,Q,Z,tt,et,nt,st,rt,ot,at,ct,lt,it,ut,ft,ht,pt,dt,gt,mt,vt,$t,yt,bt,wt,_t,kt,Pt,At,St,Lt;return{c(){n=w("nav"),s=w("a"),r=w("img"),c=_(),l=w("div"),i=w("ul"),u=w("li"),h=w("a"),p=E("Home"),g=_(),m=w("li"),b=w("a"),k=E("About"),j=_(),I=w("li"),D=w("a"),N=E("Areas of Practice"),V=_(),U=w("li"),q=w("a"),H=E("Locations"),B=_(),F=w("a"),J=w("span"),M=_(),W=w("nav"),z=w("div"),G=w("span"),K=_(),Y=w("a"),X=w("img"),Z=_(),tt=w("div"),et=w("div"),nt=w("ul"),st=w("li"),rt=w("a"),ot=E("Home"),ct=_(),lt=w("li"),it=w("a"),ut=E("About"),ht=_(),pt=w("li"),dt=w("a"),gt=E("Areas of Practice"),vt=_(),$t=w("li"),yt=w("a"),bt=E("Locations"),_t=_(),kt=w("li"),Pt=w("a"),At=w("span"),this.h()},l(t){n=L(t,"NAV",{class:!0,"uk-navbar":!0});var e=S(n);s=L(e,"A",{class:!0,href:!0,title:!0});var o=S(s);r=L(o,"IMG",{class:!0,src:!0,alt:!0}),o.forEach(y),c=R(e),l=L(e,"DIV",{class:!0});var a=S(l);i=L(a,"UL",{class:!0});var f=S(i);u=L(f,"LI",{class:!0,title:!0});var d=S(u);h=L(d,"A",{href:!0,class:!0});var v=S(h);p=x(v,"Home"),v.forEach(y),d.forEach(y),g=R(f),m=L(f,"LI",{class:!0,title:!0});var $=S(m);b=L($,"A",{href:!0,class:!0});var w=S(b);k=x(w,"About"),w.forEach(y),$.forEach(y),j=R(f),I=L(f,"LI",{class:!0,title:!0});var E=S(I);D=L(E,"A",{href:!0,class:!0});var _=S(D);N=x(_,"Areas of Practice"),_.forEach(y),E.forEach(y),V=R(f),U=L(f,"LI",{class:!0,title:!0});var P=S(U);q=L(P,"A",{href:!0,class:!0});var A=S(q);H=x(A,"Locations"),A.forEach(y),P.forEach(y),f.forEach(y),a.forEach(y),B=R(e),F=L(e,"A",{class:!0,href:!0,target:!0,title:!0});var C=S(F);J=L(C,"SPAN",{"uk-icon":!0}),S(J).forEach(y),C.forEach(y),e.forEach(y),M=R(t),W=L(t,"NAV",{class:!0});var O=S(W);z=L(O,"DIV",{});var T=S(z);G=L(T,"SPAN",{"uk-icon":!0,"uk-toggle":!0,ratio:!0,class:!0}),S(G).forEach(y),K=R(T),Y=L(T,"A",{class:!0,href:!0,title:!0});var Q=S(Y);X=L(Q,"IMG",{class:!0,src:!0,alt:!0}),Q.forEach(y),T.forEach(y),Z=R(O),tt=L(O,"DIV",{id:!0,"uk-offcanvas":!0});var at=S(tt);et=L(at,"DIV",{class:!0});var ft=S(et);nt=L(ft,"UL",{class:!0});var mt=S(nt);st=L(mt,"LI",{class:!0,title:!0});var wt=S(st);rt=L(wt,"A",{href:!0,class:!0});var Et=S(rt);ot=x(Et,"Home"),Et.forEach(y),wt.forEach(y),ct=R(mt),lt=L(mt,"LI",{class:!0,title:!0});var St=S(lt);it=L(St,"A",{href:!0,class:!0});var Lt=S(it);ut=x(Lt,"About"),Lt.forEach(y),St.forEach(y),ht=R(mt),pt=L(mt,"LI",{class:!0,title:!0});var xt=S(pt);dt=L(xt,"A",{href:!0,class:!0});var Rt=S(dt);gt=x(Rt,"Areas of Practice"),Rt.forEach(y),xt.forEach(y),vt=R(mt),$t=L(mt,"LI",{class:!0,title:!0});var Ct=S($t);yt=L(Ct,"A",{href:!0,class:!0});var jt=S(yt);bt=x(jt,"Locations"),jt.forEach(y),Ct.forEach(y),_t=R(mt),kt=L(mt,"LI",{});var It=S(kt);Pt=L(It,"A",{href:!0,target:!0,title:!0,class:!0});var Dt=S(Pt);At=L(Dt,"SPAN",{"uk-icon":!0}),S(At).forEach(y),Dt.forEach(y),It.forEach(y),mt.forEach(y),ft.forEach(y),at.forEach(y),O.forEach(y),this.h()},h(){A(r,"class","nav-logo svelte-gulcyw"),r.src!==(a="./images/logos/dwsd-logo.jpg")&&A(r,"src","./images/logos/dwsd-logo.jpg"),A(r,"alt","DSWD Logo"),A(s,"class","uk-navbar-item uk-logo svelte-gulcyw"),A(s,"href","/"),A(s,"title","Home"),A(h,"href","/"),A(h,"class","svelte-gulcyw"),A(u,"class",d=f("home"==e[0].activePage?"uk-active":"")+" svelte-gulcyw"),A(u,"title","Home"),A(b,"href","about"),A(b,"class","svelte-gulcyw"),A(m,"class",C=f("about"==e[0].activePage?"uk-active":"")+" svelte-gulcyw"),A(m,"title","View our Team"),A(D,"href","practice"),A(D,"class","svelte-gulcyw"),A(I,"class",O=f("practice"==e[0].activePage?"uk-active":"")+" svelte-gulcyw"),A(I,"title","View our Areas of Practices"),A(q,"href","locations"),A(q,"class","svelte-gulcyw"),A(U,"class",T=f("locations"==e[0].activePage?"uk-active":"")+" svelte-gulcyw"),A(U,"title","View our Locations"),A(i,"class","uk-navbar-nav"),A(l,"class","uk-navbar-center"),A(J,"uk-icon","icon: facebook"),A(F,"class","facebook-logo svelte-gulcyw"),A(F,"href","https://www.facebook.com/DucanWalkerSchenkerDaakePCLLO/"),A(F,"target","_blank"),A(F,"title","Visit our Facebook page"),A(n,"class","uk-navbar-container main-nav svelte-gulcyw"),A(n,"uk-navbar",""),A(G,"uk-icon","icon: menu"),A(G,"uk-toggle","target: #mobile-sidenav"),A(G,"ratio","2"),A(G,"class","menu-icon svelte-gulcyw"),A(X,"class","nav-logo svelte-gulcyw"),X.src!==(Q="./images/logos/dwsd-logo.jpg")&&A(X,"src","./images/logos/dwsd-logo.jpg"),A(X,"alt","DSWD Logo"),A(Y,"class"," svelte-gulcyw"),A(Y,"href","/"),A(Y,"title","Home"),A(rt,"href","/"),A(rt,"class","svelte-gulcyw"),A(st,"class",at=f("home"==e[0].activePage?"uk-active":"")+" svelte-gulcyw"),A(st,"title","Home"),A(it,"href","about"),A(it,"class","svelte-gulcyw"),A(lt,"class",ft=f("about"==e[0].activePage?"uk-active":"")+" svelte-gulcyw"),A(lt,"title","View our Team"),A(dt,"href","practice"),A(dt,"class","svelte-gulcyw"),A(pt,"class",mt=f("practice"==e[0].activePage?"uk-active":"")+" svelte-gulcyw"),A(pt,"title","View our Areas of Practices"),A(yt,"href","locations"),A(yt,"class","svelte-gulcyw"),A($t,"class",wt=f("locations"==e[0].activePage?"uk-active":"")+" svelte-gulcyw"),A($t,"title","View our Locations"),A(At,"uk-icon","icon: facebook"),A(Pt,"href","https://www.facebook.com/DucanWalkerSchenkerDaakePCLLO/"),A(Pt,"target","_blank"),A(Pt,"title","Visit our Facebook page"),A(Pt,"class","svelte-gulcyw"),A(nt,"class","uk-nav uk-nav-default"),A(et,"class","uk-offcanvas-bar"),A(tt,"id","mobile-sidenav"),A(tt,"uk-offcanvas",""),A(W,"class","mobile-nav svelte-gulcyw")},m(t,e){$(t,n,e),v(n,s),v(s,r),v(n,c),v(n,l),v(l,i),v(i,u),v(u,h),v(h,p),v(i,g),v(i,m),v(m,b),v(b,k),v(i,j),v(i,I),v(I,D),v(D,N),v(i,V),v(i,U),v(U,q),v(q,H),v(n,B),v(n,F),v(F,J),$(t,M,e),$(t,W,e),v(W,z),v(z,G),v(z,K),v(z,Y),v(Y,X),v(W,Z),v(W,tt),v(tt,et),v(et,nt),v(nt,st),v(st,rt),v(rt,ot),v(nt,ct),v(nt,lt),v(lt,it),v(it,ut),v(nt,ht),v(nt,pt),v(pt,dt),v(dt,gt),v(nt,vt),v(nt,$t),v($t,yt),v(yt,bt),v(nt,_t),v(nt,kt),v(kt,Pt),v(Pt,At),St||(Lt=[P(rt,"click",Et),P(it,"click",Et),P(dt,"click",Et),P(yt,"click",Et),P(Pt,"click",Et)],St=!0)},p(t,[e]){1&e&&d!==(d=f("home"==t[0].activePage?"uk-active":"")+" svelte-gulcyw")&&A(u,"class",d),1&e&&C!==(C=f("about"==t[0].activePage?"uk-active":"")+" svelte-gulcyw")&&A(m,"class",C),1&e&&O!==(O=f("practice"==t[0].activePage?"uk-active":"")+" svelte-gulcyw")&&A(I,"class",O),1&e&&T!==(T=f("locations"==t[0].activePage?"uk-active":"")+" svelte-gulcyw")&&A(U,"class",T),1&e&&at!==(at=f("home"==t[0].activePage?"uk-active":"")+" svelte-gulcyw")&&A(st,"class",at),1&e&&ft!==(ft=f("about"==t[0].activePage?"uk-active":"")+" svelte-gulcyw")&&A(lt,"class",ft),1&e&&mt!==(mt=f("practice"==t[0].activePage?"uk-active":"")+" svelte-gulcyw")&&A(pt,"class",mt),1&e&&wt!==(wt=f("locations"==t[0].activePage?"uk-active":"")+" svelte-gulcyw")&&A($t,"class",wt)},i:t,o:t,d(t){t&&y(n),t&&y(M),t&&y(W),St=!1,o(Lt)}}}function Et(){UIkit.offcanvas("#mobile-sidenav").hide()}function _t(t,e,n){let s;const r=bt.subscribe(t=>{n(0,s=t)});return q(()=>{r&&r()}),[s]}class kt extends mt{constructor(t){super(),gt(this,t,_t,wt,c,{})}}function Pt(t){let e,n,s,r,o;n=new kt({});const a=t[1].default,c=function(t,e,n,s){if(t){const r=i(t,e,n,s);return t[0](r)}}(a,t,t[0],null);return{c(){e=w("div"),ut(n.$$.fragment),s=_(),r=w("main"),c&&c.c(),this.h()},l(t){e=L(t,"DIV",{class:!0});var o=S(e);ft(n.$$.fragment,o),s=R(o),r=L(o,"MAIN",{});var a=S(r);c&&c.l(a),a.forEach(y),o.forEach(y),this.h()},h(){A(e,"class","grid")},m(t,a){$(t,e,a),ht(n,e,null),v(e,s),v(e,r),c&&c.m(r,null),o=!0},p(t,[e]){c&&c.p&&1&e&&u(c,a,t,t[0],e,null,null)},i(t){o||(rt(n.$$.fragment,t),rt(c,t),o=!0)},o(t){ot(n.$$.fragment,t),ot(c,t),o=!1},d(t){t&&y(e),pt(n),c&&c.d(t)}}}function At(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$$set=t=>{"$$scope"in t&&n(0,r=t.$$scope)},[r,s]}class St extends mt{constructor(t){super(),gt(this,t,At,Pt,c,{})}}function Lt(t){let e,n,s=t[1].stack+"";return{c(){e=w("pre"),n=E(s)},l(t){e=L(t,"PRE",{});var r=S(e);n=x(r,s),r.forEach(y)},m(t,s){$(t,e,s),v(e,n)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&C(n,s)},d(t){t&&y(e)}}}function xt(e){let n,s,r,o,a,c,l,i,u,f=e[1].message+"";document.title=n=e[0];let h=e[2]&&e[1].stack&&Lt(e);return{c(){s=_(),r=w("h1"),o=E(e[0]),a=_(),c=w("p"),l=E(f),i=_(),h&&h.c(),u=k(),this.h()},l(t){j('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(y),s=R(t),r=L(t,"H1",{class:!0});var n=S(r);o=x(n,e[0]),n.forEach(y),a=R(t),c=L(t,"P",{class:!0});var p=S(c);l=x(p,f),p.forEach(y),i=R(t),h&&h.l(t),u=k(),this.h()},h(){A(r,"class","svelte-8od9u6"),A(c,"class","svelte-8od9u6")},m(t,e){$(t,s,e),$(t,r,e),v(r,o),$(t,a,e),$(t,c,e),v(c,l),$(t,i,e),h&&h.m(t,e),$(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&C(o,t[0]),2&e&&f!==(f=t[1].message+"")&&C(l,f),t[2]&&t[1].stack?h?h.p(t,e):(h=Lt(t),h.c(),h.m(u.parentNode,u)):h&&(h.d(1),h=null)},i:t,o:t,d(t){t&&y(s),t&&y(r),t&&y(a),t&&y(c),t&&y(i),h&&h.d(t),t&&y(u)}}}function Rt(t,e,n){let{status:s}=e,{error:r}=e;return t.$$set=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,r=t.error)},[s,r,!1]}class Ct extends mt{constructor(t){super(),gt(this,t,Rt,xt,c,{status:0,error:1})}}function jt(t){let e,s,r;const o=[t[4].props];var a=t[4].component;function c(t){let e={};for(let t=0;t<o.length;t+=1)e=n(e,o[t]);return{props:e}}return a&&(e=new a(c())),{c(){e&&ut(e.$$.fragment),s=k()},l(t){e&&ft(e.$$.fragment,t),s=k()},m(t,n){e&&ht(e,t,n),$(t,s,n),r=!0},p(t,n){const r=16&n?lt(o,[it(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){nt();const t=e;ot(t.$$.fragment,1,0,()=>{pt(t,1)}),st()}a?(e=new a(c()),ut(e.$$.fragment),rt(e.$$.fragment,1),ht(e,s.parentNode,s)):e=null}else a&&e.$set(r)},i(t){r||(e&&rt(e.$$.fragment,t),r=!0)},o(t){e&&ot(e.$$.fragment,t),r=!1},d(t){t&&y(s),e&&pt(e,t)}}}function It(t){let e,n;return e=new Ct({props:{error:t[0],status:t[1]}}),{c(){ut(e.$$.fragment)},l(t){ft(e.$$.fragment,t)},m(t,s){ht(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.error=t[0]),2&n&&(s.status=t[1]),e.$set(s)},i(t){n||(rt(e.$$.fragment,t),n=!0)},o(t){ot(e.$$.fragment,t),n=!1},d(t){pt(e,t)}}}function Dt(t){let e,n,s,r;const o=[It,jt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=o[e](t),{c(){n.c(),s=k()},l(t){n.l(t),s=k()},m(t,n){a[e].m(t,n),$(t,s,n),r=!0},p(t,r){let l=e;e=c(t),e===l?a[e].p(t,r):(nt(),ot(a[l],1,1,()=>{a[l]=null}),st(),n=a[e],n||(n=a[e]=o[e](t),n.c()),rt(n,1),n.m(s.parentNode,s))},i(t){r||(rt(n),r=!0)},o(t){ot(n),r=!1},d(t){a[e].d(t),t&&y(s)}}}function Nt(t){let e,s;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[Dt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=n(o,r[t]);return e=new St({props:o}),{c(){ut(e.$$.fragment)},l(t){ft(e.$$.fragment,t)},m(t,n){ht(e,t,n),s=!0},p(t,[n]){const s=12&n?lt(r,[4&n&&{segment:t[2][0]},8&n&&it(t[3].props)]):{};147&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){s||(rt(e.$$.fragment,t),s=!0)},o(t){ot(e.$$.fragment,t),s=!1},d(t){pt(e,t)}}}function Ot(t,e,n){let{stores:s}=e,{error:r}=e,{status:o}=e,{segments:a}=e,{level0:c}=e,{level1:l=null}=e,{notify:i}=e;var u,f,h;return u=i,U().$$.after_update.push(u),f=yt,h=s,U().$$.context.set(f,h),t.$$set=t=>{"stores"in t&&n(5,s=t.stores),"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,l=t.level1),"notify"in t&&n(6,i=t.notify)},[r,o,a,c,l,s,i]}class Vt extends mt{constructor(t){super(),gt(this,t,Ot,Nt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Ut=[],qt=[{js:()=>import("./index.4d0ff964.js"),css:["index.4d0ff964.css","client.b32163b1.css"]},{js:()=>import("./locations.798c8fe2.js"),css:["locations.798c8fe2.css","client.b32163b1.css"]},{js:()=>import("./practice.29332cf9.js"),css:["practice.29332cf9.css","client.b32163b1.css"]},{js:()=>import("./about.c2d765fd.js"),css:["about.c2d765fd.css","client.b32163b1.css"]}],Ht=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/locations\/?$/,parts:[{i:1}]},{pattern:/^\/practice\/?$/,parts:[{i:2}]},{pattern:/^\/about\/?$/,parts:[{i:3}]}];const Tt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Bt,Ft,Jt,Mt=!1,Wt=[],zt="{}";const Gt={page:function(t){const e=$t(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe(e=>{(void 0===s||n&&e!==s)&&t(s=e)})}}}({}),preloading:$t(null),session:$t(Tt&&Tt.session)};let Kt,Yt;Gt.session.subscribe(async t=>{if(Kt=t,!Mt)return;Yt=!0;const e=re(new URL(location.href)),n=Ft={},{redirect:s,props:r,branch:o}=await le(e);n===Ft&&await ce(s,o,r,e.page)});let Xt,Qt=null;let Zt,te=1;const ee="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},ne={};function se(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,s=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(s):e[n]=s}),e}function re(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Tt.baseUrl))return null;let e=t.pathname.slice(Tt.baseUrl.length);if(""===e&&(e="/"),!Ut.some(t=>t.test(e)))for(let n=0;n<Ht.length;n+=1){const s=Ht[n],r=s.pattern.exec(e);if(r){const n=se(t.search),o=s.parts[s.parts.length-1],a=o.params?o.params(r):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:s,match:r,page:c}}}}function oe(){return{x:pageXOffset,y:pageYOffset}}async function ae(t,e,n,s){if(e)Zt=e;else{const t=oe();ne[Zt]=t,e=Zt=++te,ne[Zt]=n?t:{x:0,y:0}}Zt=e,Bt&&Gt.preloading.set(!0);const r=Qt&&Qt.href===t.href?Qt.promise:le(t);Qt=null;const o=Ft={},{redirect:a,props:c,branch:l}=await r;if(o===Ft&&(await ce(a,l,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=ne[e];if(s){const e=document.getElementById(s.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}ne[Zt]=t,t&&scrollTo(t.x,t.y)}}async function ce(t,e,n,s){if(t)return function(t,e={noscroll:!1,replaceState:!1}){const n=re(new URL(t,document.baseURI));return n?(ee[e.replaceState?"replaceState":"pushState"]({id:Zt},"",t),ae(n,null,e.noscroll).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});Gt.page.set(s),Gt.preloading.set(!1),Bt?Bt.$set(n):(n.stores={page:{subscribe:Gt.page.subscribe},preloading:{subscribe:Gt.preloading.subscribe},session:Gt.session},n.level0={props:await Jt},n.notify=Gt.page.notify,Bt=new Vt({target:Xt,props:n,hydrate:!0})),Wt=e,zt=JSON.stringify(s.query),Mt=!0,Yt=!1}async function le(t){const{route:e,page:n}=t,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(r&&(r.statusCode!==t||r.location!==e))throw new Error("Conflicting redirects");r={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Jt){const t=()=>{};Jt=Tt.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Kt)}let c,l=1;try{const r=JSON.stringify(n.query),i=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=s[c];if(function(t,e,n,s){if(s!==zt)return!0;const r=Wt[t];return!!r&&(e!==r.segment||(!(!r.match||JSON.stringify(r.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,i,r)&&(u=!0),o.segments[l]=s[c+1],!e)return{segment:f};const h=l++;if(!Yt&&!u&&Wt[c]&&Wt[c].part===e.i)return Wt[c];u=!1;const{default:p,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(ie);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(qt[e.i]);let g;return g=Mt||!Tt.preloaded[c+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Kt):{}:Tt.preloaded[c+1],o["level"+h]={component:p,props:g,segment:f,match:i,part:e.i}}))}catch(t){o.error=t,o.status=500,c=[]}return{redirect:r,props:o,branch:c}}function ie(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const s=document.createElement("link");s.rel="stylesheet",s.href=e,s.onload=()=>t(),s.onerror=n,document.head.appendChild(s)})}function ue(t){const e=re(new URL(t,document.baseURI));if(e)return Qt&&t===Qt.href||function(t,e){Qt={href:t,promise:e}}(t,le(e)),Qt.promise}let fe;function he(t){clearTimeout(fe),fe=setTimeout(()=>{pe(t)},20)}function pe(t){const e=ge(t.target);e&&"prefetch"===e.rel&&ue(e.href)}function de(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=ge(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(n?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=re(r);if(o){ae(o,null,e.hasAttribute("sapper:noscroll"),r.hash),t.preventDefault(),ee.pushState({id:Zt},"",r.href)}}function ge(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function me(t){if(ne[Zt]=oe(),t.state){const e=re(new URL(location.href));e?ae(e,t.state.id):location.href=location.href}else te=te+1,function(t){Zt=t}(te),ee.replaceState({id:Zt},"",location.href)}var ve;ve={target:document.querySelector("#sapper")},"scrollRestoration"in ee&&(ee.scrollRestoration="manual"),addEventListener("beforeunload",()=>{ee.scrollRestoration="auto"}),addEventListener("load",()=>{ee.scrollRestoration="manual"}),function(t){Xt=t}(ve.target),addEventListener("click",de),addEventListener("popstate",me),addEventListener("touchstart",pe),addEventListener("mousemove",he),Promise.resolve().then(()=>{const{hash:t,href:e}=location;ee.replaceState({id:te},"",e);const n=new URL(location.href);if(Tt.error)return function(t){const{host:e,pathname:n,search:s}=location,{session:r,preloaded:o,status:a,error:c}=Tt;Jt||(Jt=o&&o[0]),ce(null,[],{error:c,status:a,session:r,level0:{props:Jt},level1:{props:{status:a,error:c},component:Ct},segments:o},{host:e,path:n,query:se(s),params:{}})}();const s=re(n);return s?ae(s,te,!0,t):void 0});export{ot as A,pt as B,st as C,b as D,l as E,nt as F,P as G,o as H,H as I,a as J,mt as S,_ as a,L as b,R as c,y as d,w as e,S as f,x as g,A as h,gt as i,$ as j,v as k,bt as l,z as m,t as n,q as o,ct as p,j as q,e as r,c as s,E as t,C as u,ut as v,$t as w,ft as x,ht as y,rt as z};
