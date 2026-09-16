(function(){
  document.getElementById('year').textContent = new Date().getFullYear();

  var toggle = document.getElementById('menuToggle');
  var nav = document.querySelector('.main-nav');
  if(toggle && nav){
    toggle.addEventListener('click', function(){
      var isOpen = nav.style.display === 'flex';
      if(isOpen){
        nav.style.display = '';
      } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = '#fff';
        nav.style.padding = '10px 28px 18px';
        nav.style.borderBottom = '1px solid #DCE3EE';
        nav.style.gap = '14px';
      }
    });
    document.querySelectorAll('nav.main-nav a').forEach(function(a){
      a.addEventListener('click', function(){ nav.style.display = ''; });
    });
  }

  var waFloat = document.getElementById('waFloat');
  var contactSection = document.getElementById('contacto');
  if('IntersectionObserver' in window && waFloat && contactSection){
    var waShown = false;
    var waObs = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting && !waShown){
          waFloat.classList.add('show');
          waShown = true;
        }
      });
    }, {threshold:0});
    setTimeout(function(){
      window.addEventListener('scroll', function onScroll(){
        if(window.scrollY > 200 && !waShown){
          waFloat.classList.add('show');
          waShown = true;
          window.removeEventListener('scroll', onScroll);
        }
      });
    }, 100);
  } else if(waFloat){
    waFloat.classList.add('show');
  }

  if('IntersectionObserver' in window){
    var revealObserver = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {threshold:0.15});
    document.querySelectorAll('.reveal').forEach(function(el){
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
  }
})();