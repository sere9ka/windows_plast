(()=>{"use strict";(()=>{const e=document.querySelector("body"),t=document.querySelector(".header-modal--opened"),o=document.querySelector(".services-modal--opened"),n=document.querySelector(".overlay"),r=(e,t)=>{n.classList.toggle("overlay-open"),t.classList.toggle(e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".callTel")||e.target.matches(".header-modal__close")?r("header-modal",t):(e.target.matches(".modalCall")||e.target.matches(".services-modal__close"))&&r("services-modal",o)}))})(),(e=>{const t=document.querySelector("div.count_1 span"),o=document.querySelector("div.count_2 span"),n=document.querySelector("div.count_3 span"),r=document.querySelector("div.count_4 span"),a=function(e){return e<10?"0"+e:e},c=()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,days:a(Math.floor(t/60/60/24)),hours:a(Math.floor(t/60/60)%24),minutes:a(Math.floor(t/60%60)),seconds:a(Math.floor(t%60))}},s=()=>{let e=c();e.timeRemaining<0?(t.textContent=a(0),o.textContent=a(0),n.textContent=a(0),r.textContent=a(0)):(t.textContent=e.days,o.textContent=e.hours,n.textContent=e.minutes,r.textContent=e.seconds)};c().timeRemaining>0&&setInterval(s,1e3),s()})("24 november 2021")})();