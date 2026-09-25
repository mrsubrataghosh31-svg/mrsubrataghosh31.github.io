const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');
menu?.addEventListener('click',()=>nav?.classList.toggle('mobile-open'));
document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('mobile-open')));
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
const progress=document.querySelector('.scroll-progress');
const updateProgress=()=>{const h=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(h>0?(window.scrollY/h)*100:0)+'%'};
window.addEventListener('scroll',updateProgress,{passive:true});updateProgress();
const sections=[...document.querySelectorAll('main section[id]')];
const navLinks=[...document.querySelectorAll('.nav nav a')];
const activeObs=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id))}}),{rootMargin:'-35% 0px -55% 0px',threshold:0});
sections.forEach(s=>activeObs.observe(s));
const stage=document.querySelector('.profile-stage');
if(stage && matchMedia('(pointer:fine)').matches){document.querySelector('.hero-card')?.addEventListener('mousemove',e=>{const r=e.currentTarget.getBoundingClientRect();const x=(e.clientX-r.left-r.width/2)/r.width;const y=(e.clientY-r.top-r.height/2)/r.height;stage.style.transform=`translate(${x*12}px,${y*10}px)`});document.querySelector('.hero-card')?.addEventListener('mouseleave',()=>stage.style.transform='translateZ(0)')}
