var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var l={id:e,exports:{}};return o[e]=l,t.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var l=t("iQIUW");const i={form:document.querySelector(".form"),valueDelay:document.querySelector('input[name="delay"]'),valueStep:document.querySelector('input[name="step"]'),valueAmount:document.querySelector('input[name="amount"]')};function u(e,o){return new Promise(((n,t)=>{const l=Math.random()>.3;setTimeout((()=>{l?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}function r(e,o){l.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)}function a(e,o){l.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)}i.form.addEventListener("submit",(e=>{e.preventDefault();let o=Number(i.valueDelay.value);for(let e=1;e<=i.valueAmount.value;e+=1)u(e,o).then((({position:e,delay:o})=>{a(e,o),console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{r(e,o),console.log(`❌ Rejected promise ${e} in ${o}ms`)})),o+=Number(i.valueStep.value);i.valueDelay.value}));
//# sourceMappingURL=03-promises.958210e2.js.map