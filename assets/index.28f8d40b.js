import{s,R as e,r as p,T as x,a as h}from"./vendor.a3b42e18.js";const b=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}};b();const g=s.source``,d=({src:r,mediaMaxWidth:a,mediaMinWidth:n})=>window.innerWidth>n&&window.innerWidth<a?e.createElement(g,{src:r}):e.createElement(e.Fragment,null);function v(r,a,n){if(r){if(Array.isArray(r))r.forEach(i=>{if(i.type.name!==n)throw Error(m(a,n,i.type.name))});else if(r.type.name!==n)throw Error(m(a,n,r.type.name))}}function m(r,a,n){return`Component <${r}> can accept only <${a}> elements, but instead got <${n}>`}const E=s.video`
	width: 100vw;
	height: 100vh;
	object-fit: cover;
`,f=({children:r})=>(p.exports.useEffect(()=>{v(r,f.name,d.name)},[]),e.createElement(E,{autoPlay:!0,muted:!0,loop:!0},r));var w="./assets/keyboard-sound.2985eba1.mp3",S="./assets/big-video-black.5e7dcfe0.mp4",k="./assets/small-video-black.c5d10b2a.mp4";const C=s.div`
	position: absolute;
	width: fit-content;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 90px;
	font-family: 'BioRhyme', serif;
	font-family: 'Stint Ultra Expanded', cursive;
	font-weight: bold;
	text-transform: uppercase;
	color: white;
	z-index: 3;
`,M=s.section`
	position: fixed;
	z-index: 2;
	top: 0;
	left: 0;
`,T=s.div`
	position: relative;
	height: 100vh;
	width: 100vw;
`,B=s.section`
	width: 100vw;
	height: 100vh;
`,$=s.button`
	font-size: 20px;
	color: white;
	font-family: 'BioRhyme', serif;
	font-family: 'Stint Ultra Expanded', cursive;
	font-weight: bold;
	text-transform: uppercase;
	position: absolute;
	width: 180px;
	height: 180px;
	cursor: pointer;
	background-color: rgba(0, 0, 0, 0.2);
	top: 50%;
	left: 50%;
	border-radius: 50%;
	transform: translate(-50%, -50%);
	z-index: 3;
	transition: 0.4s;
	animation: ripple 2600ms infinite;
	border: none;
	transform-origin: center;

	&:hover {
		background-color: rgba(0, 0, 0, 0.6);
		transform: translate(-50%, -50%) scale(1.2);
	}

	@keyframes ripple {
		0% {
			box-shadow: 0 0 0 0px transparent, 0 0 0 0px rgba(255, 255, 255, 0.1),
				0 0 0 0px transparent, 0 0 0 0px rgba(255, 255, 255, 0.2),
				0 0 0 0px transparent, 0 0 0 0px rgba(255, 255, 255, 0.4),
				0 0 0 0px transparent, 0 0 0 0px rgba(255, 255, 255, 0.6);
		}
		100% {
			box-shadow: 0 0 0 15px transparent, 0 0 0 17px rgba(255, 255, 255, 0),
				0 0 0 40px transparent, 0 0 0 42px rgba(255, 255, 255, 0),
				0 0 0 90px transparent, 0 0 0 92px rgba(255, 255, 255, 0),
				0 0 0 125px transparent, 0 0 0 127px rgba(255, 255, 255, 0);
		}
	}
`,A=()=>{const[r,a]=p.exports.useState(!1),[n]=p.exports.useState(new Audio(w)),[i,t]=p.exports.useState(4);function o(){setTimeout(()=>{n.pause(),setTimeout(()=>{n.play()},2e3)},5350),a(!0),n.loop=!0,n.play()}function l(u){if(i===0)return;const c=u.target;c&&(c.style.transition="0",c.style.top=10+Math.random()*80+"%",c.style.left=10+Math.random()*80+"%",c.style.transition="0.4s",t(y=>y-1))}return p.exports.useEffect(()=>{},[]),e.createElement(e.Fragment,null,e.createElement(B,null),e.createElement(M,{tabIndex:0},e.createElement(T,null,e.createElement(f,null,e.createElement(d,{src:S,mediaMaxWidth:3e3,mediaMinWidth:1201}),e.createElement(d,{src:k,mediaMaxWidth:1200,mediaMinWidth:300})),!r&&e.createElement($,{onMouseEnter:l,onClick:o},"Click me"),e.createElement(C,null,r&&e.createElement(x,{getBeforeInit:u=>(u.type("Hi! Kixill").pause(350).move(-3).pause(250).delete(1).pause(400).type("r").pause(450).move(3).pause(250).type(" Here.").pause(2100).delete(20).type("Ni to").pause(100).type(" feet you!").pause(250).move(-13).type("ce").move(5).pause(250).delete(1).type("m").move(15),u),options:{afterComplete:()=>{n.pause()},waitUntilVisible:!0}})))))},H=s.div`
	min-height: 500vh;
`,I=()=>e.createElement(H,null,e.createElement(A,null));h.render(e.createElement(e.StrictMode,null,e.createElement(I,null)),document.getElementById("root"));
