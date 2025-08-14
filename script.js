console.log("AHADII FF Website Loaded ✅");

if(window.tsParticles || window.particlesJS){
  
}
document.addEventListener('DOMContentLoaded', () => {
  
  if(window.tsParticles){
    tsParticles.load("particles-root", {
      fullScreen:{enable:false,zIndex:0},
      particles:{
        number:{value:50, density:{enable:true, area:800}},
        color:{value:"#ff0816"},
        shape:{type:"circle"},
        opacity:{value:0.12},
        size:{value:{min:1,max:4}},
        move:{enable:true,speed:0.6}
      },
      interactivity:{events:{onhover:{enable:true,mode:"repulse"},onclick:{enable:true,mode:"push"}}}
    });
  }

  
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  if(localStorage.getItem('theme') === 'light') document.body.classList.add('light-theme');
  themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const now = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    localStorage.setItem('theme', now);
  });

  
  const cursor = document.getElementById('cursor');
  window.addEventListener('mousemove', (e) => {
    if(cursor) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    }
  });


  const statEls = document.querySelectorAll('.stat-num');
  statEls.forEach(el => {
    const target = parseInt(el.dataset.count || '0', 10);
    let current = 0;
    const step = Math.max(1, Math.floor(target / 80));
    const interval = setInterval(() => {
      current += step;
      if(current >= target){ current = target; clearInterval(interval); }
      el.textContent = current.toLocaleString();
    }, 20);
  });

  
  const thumbs = document.querySelectorAll('[data-thumb-id]');
  const thumbObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        const el = e.target;
        const id = el.getAttribute('data-thumb-id');
        el.style.backgroundImage = `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)`;
        thumbObserver.unobserve(el);
      }
    });
  }, {rootMargin: '200px'});
  thumbs.forEach(t => thumbObserver.observe(t));
});
