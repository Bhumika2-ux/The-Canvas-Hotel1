document.addEventListener('DOMContentLoaded',function(){
  // mobile nav
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('main-nav');
  if(navToggle && mainNav){
    navToggle.addEventListener('click',function(){
      var expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      mainNav.classList.toggle('open');
    });
  }
  // close mobile nav when a link is clicked
  if(mainNav){
    mainNav.addEventListener('click', function(e){
      if(e.target.tagName === 'A' && mainNav.classList.contains('open')){
        mainNav.classList.remove('open');
      }
    });
  }

  // gallery modal
  var gallery = document.getElementById('gallery');
  var modal = document.getElementById('modal');
  var modalImg = document.getElementById('modalImg');
  var modalClose = document.getElementById('modalClose');
  if(gallery && modal && modalImg){
    gallery.addEventListener('click',function(e){
      var t = e.target;
      if(t.tagName === 'IMG'){
        var full = t.getAttribute('data-full') || t.src;
        modalImg.src = full;
        modal.classList.add('open');
        modal.setAttribute('aria-hidden','false');
      }
    });
    modalClose && modalClose.addEventListener('click',function(){
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden','true');
      modalImg.src = '';
    });
    // close modal on Escape key
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape' && modal.classList.contains('open')){
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden','true');
        modalImg.src = '';
      }
    });
    modal.addEventListener('click',function(e){ if(e.target === modal){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); modalImg.src=''; } });
  }

  // smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var href = a.getAttribute('href');
      if(href.length > 1){
        var target = document.querySelector(href);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth',block:'start'});
        }
      }
    });
  });

  // hero image fallback: if external image fails to load, replace with inline SVG placeholder
  (function(){
    var heroImg = document.querySelector('.hero-visual img');
    if(!heroImg) return;
    // ensure block-level for layout
    heroImg.style.display = 'block';
    heroImg.addEventListener('error', function(){
      console.warn('Hero image failed to load — applying fallback.');
      var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="800" viewBox="0 0 1000 800">'
        + '<defs><linearGradient id="g" x1="0" x2="1"><stop stop-color="#1fa08f" offset="0"/><stop stop-color="#0f5660" offset="1"/></linearGradient></defs>'
        + '<rect width="100%" height="100%" fill="url(#g)" />'
        + '<g fill="#fff" font-family="Montserrat, Arial, sans-serif" font-size="34" text-anchor="middle">'
        + '<text x="50%" y="46%">The Canvas Hotel</text>'
        + '<text x="50%" y="56%" font-size="18">Lavish interior — image unavailable</text>'
        + '</g></svg>';
      heroImg.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
    });
  })();

  // booking form (client-side only)
  var bookingForm = document.getElementById('bookingForm');
  if(bookingForm){
    bookingForm.addEventListener('submit',function(e){
      e.preventDefault();
      // simple validation
      var name = bookingForm.querySelector('[name="name"]').value.trim();
      var email = bookingForm.querySelector('[name="email"]').value.trim();
      if(!name || !email){
        alert('Please fill name and email');
        return;
      }
      // Show success message (in real site submit to backend)
      var msg = document.getElementById('formMsg');
      if(msg){ msg.hidden = false; }
      bookingForm.reset();
      console.log('Booking requested:',{name:name,email:email});
    });
  }

  // contact form
  var contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit',function(e){
      e.preventDefault();
      var msg = document.getElementById('contactMsg');
      if(msg){ msg.hidden = false; }
      contactForm.reset();
      console.log('Contact form submitted');
    });
  }
});
