var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequire7bc7;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequire7bc7=n);var i=n("iQIUW");i.Notify.init({useIcon:!1});function r(e,t){return new Promise(((o,n)=>{const i=Math.random()>.3;setTimeout((()=>{i&&o({position:e,delay:t}),n({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const t=Number(e.target.delay.value),o=Number(e.target.step.value),n=Number(e.target.amount.value);let l=t;for(let e=0;e<n;e+=1)r(e+1,l).then((({position:e,delay:t})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),l+=o}));
//# sourceMappingURL=03-promises.ebf2c9b4.js.map