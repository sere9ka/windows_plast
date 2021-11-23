(()=>{"use strict";const e=({formId:e,someElem:t=[]})=>{const o=document.getElementById(e),n=o.querySelector(".status"),l=()=>{let e;const t=o.querySelector('[name="fio"]'),l=o.querySelector('[name="phone"]');return""===t.value||t.value.length<3?n.textContent="Введите имя, не меньше 3 БУКВ!":l.value.length<11||l.value.length>16?n.textContent="Введите правильный номер из 11 цифр! Формат ввода: 8 000 000 00 00":e=!0,e},a=()=>{n.textContent="",n.style.display="none"};try{if(!o)throw new Error("Верните форму на место! =)");(o=>{const r=o.querySelectorAll("input"),s=new FormData(o),c={};var d;"form3"===e&&(n.style.color="#19b5fe"),n.style.display="block",n.textContent="Загрузка...",s.forEach(((e,t)=>{c[t]=e})),0!=t.length&&t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?c[e.id]=t.textContent:"input"===e.type&&(c[e.id]=t.value)})),l()&&(d=c,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(d),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((e=>{a(),n.style.display="block",n.style.width="",n.style.height="",n.textContent="Спасибо! Наш менеджер свяжется с Вами!",setTimeout(a,8e3),r.forEach((e=>{e.value=""}))})).catch((e=>{"Failed to fetch"===e.message&&(e.message="Данные не отправились, ошибка подключения"),n.textContent=e.message}))})(o),setTimeout(a,5e3)}catch(e){}};(()=>{const e=document.querySelector("body"),t=document.querySelector(".header-modal--opened"),o=document.querySelector(".services-modal--opened"),n=document.querySelector(".overlay"),l=(e,t)=>{n.classList.toggle("overlay-open"),t.classList.toggle(e),n.style.transform="translateX(-100%)",t.style.transform="translate(-100%)";!function({timing:e,draw:t,duration:o}){let n=performance.now();requestAnimationFrame((function l(a){let r=(a-n)/o;r>1&&(r=1);let s=e(r);t(s),r<1&&requestAnimationFrame(l)}))}({duration:500,timing:e=>e,draw(e){t.style.transform=`translate(${(1e3*e-1e3)/2-50}%, ${(1e3*e-1e3)/2-50}%)`,n.style.transform=`translateX(${100*e-100}%)`}})};e.addEventListener("click",(e=>{e.target.matches(".callTel")||e.target.matches(".header-modal__close")?(e.preventDefault(),l("header-modal",t)):(e.target.matches(".modalCall")||e.target.matches(".services-modal__close"))&&(e.preventDefault(),l("services-modal",o))}))})(),(e=>{const t=document.querySelectorAll(".order"),o=function(e){return e<10?"0"+e:e},n=()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,days:o(Math.floor(t/60/60/24)),hours:o(Math.floor(t/60/60)%24),minutes:o(Math.floor(t/60%60)),seconds:o(Math.floor(t%60))}},l=()=>{let e=n();t.forEach((t=>{const n=t.querySelector("div.count_1 span"),l=t.querySelector("div.count_2 span"),a=t.querySelector("div.count_3 span"),r=t.querySelector("div.count_4 span");e.timeRemaining<0?(n.textContent=o(0),l.textContent=o(0),a.textContent=o(0),r.textContent=o(0)):(n.textContent=e.days,l.textContent=e.hours,a.textContent=e.minutes,r.textContent=e.seconds)}))};n().timeRemaining>0&&setInterval(l,1e3),l()})("24 november 2021"),(()=>{const e=document.querySelector(".smooth-scroll__img");document.getElementById("offer"),e.style.cursor="pointer",e.style.display="none";const t=()=>{let t=window.pageYOffset;t>2&&(e.style.display="block"),t||(e.style.display="none")},o=()=>{window.pageYOffset>0&&(window.scrollBy(0,-30),setTimeout(o,0))};document.addEventListener("DOMContentLoaded",(()=>{window.pageYOffset<300&&window.addEventListener("scroll",t)})),e.addEventListener("click",o)})(),(()=>{if("balkony"==document.body.className){const e=document.getElementById("calc"),t=e.querySelector("#calc-type"),o=e.querySelector("#calc-type-material"),n=e.querySelector("#calc-input"),l=e.querySelector("#calc-total"),a=()=>{const e=+t.options[t.selectedIndex].value,l=+o.options[o.selectedIndex].value;let a=n.value;return 0==n.value&&(a=1),{calcTypeValue:e,calcMaterialValue:l,calcInputValue:a}},r=()=>{let e=a();return{sum:e.calcInputValue*e.calcTypeValue*e.calcMaterialValue}},s=()=>{let e=r();l.value=e.sum};e.addEventListener("input",(e=>{"--"!=t.options[t.selectedIndex].value&&"--"!=o.options[o.selectedIndex].value&&s()}))}})(),(()=>{const e=document.querySelectorAll('[name="phone"]'),t=document.querySelectorAll('[name="fio"]'),o=/(^0-9)/,n=/([^0-9\+])/,l=/[^А-Я-а-яё\s][^A-Z-a-z\s]+$/i;"balkony"==document.body.className&&document.querySelector("#calc-input").addEventListener("input",(e=>{e.target.value=e.target.value.replace(o,"")})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(l,"")}))})),e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(n,"")}))}))})(),document.querySelectorAll(".slider").forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();let o=(e=>{const t=document.querySelectorAll(`.${e.id}__item`);let o=[],n=[],l=[];return t.forEach((e=>{e.classList.contains("not-active")?l.push(e):n.push(e)})),o.push(n),o.push(l),{slides:o}})(e).slides,n=0;t.target.closest(".arrow")&&(((e,t,o)=>{e[t].forEach((e=>{e.classList.add("not-active")}))})(o,n),t.target.closest(".benefits__arrow--right")||t.target.closest(".services__arrow--right")?n++:(t.target.closest(".benefits__arrow--left")||t.target.closest(".services__arrow--left"))&&n--,n>=o.length&&(n=0),n<0&&(n=o.length-1),((e,t,o)=>{e[t].forEach((e=>{e.classList.remove("not-active")}))})(o,n))}))})),(()=>{const e=document.getElementById("documents").querySelectorAll(".text-center > div"),t=document.querySelector(".overlay");e.forEach(((e,o)=>{let n=e.querySelector("a");n.addEventListener("click",(e=>{e.preventDefault(),(e=>{const o=document.createElement("div"),n=document.createElement("img"),l=document.createElement("span");l.classList.add("sert-modal__close"),l.textContent="x",n.classList.add("sert-img__modal"),n.src=e,o.append(n),o.append(l),o.classList.toggle("modal-sert"),t.append(o),t.classList.toggle("overlay-open"),t.addEventListener("click",(e=>{e.target!==t&&e.target!==l||(e=>{e.remove(),t.classList.toggle("overlay-open")})(o)}))})(n)}))}))})(),document.querySelector(".comments-container").querySelectorAll(".row"),fetch("./comments.json",{method:"GET"}).then((e=>e.json())).then((e=>{e.comments.forEach(((e,t)=>{console.log(e)}))})).catch((e=>{"Failed to fetch"===e.message&&(e.message="Данные не получены, ошибка подключения")})),document.querySelectorAll("form").forEach(((t,o)=>{const n=document.createElement("div");n.classList.add("status"),t.append(n),t.addEventListener("submit",(t=>{t.preventDefault(),e({formId:`form${o+1}`,someElem:[{type:"block",id:"calc-total"}]})}))}))})();