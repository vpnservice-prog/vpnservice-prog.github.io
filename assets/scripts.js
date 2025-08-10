
// Simple JS: smooth scroll, search, intersection reveal, theme toggle
document.addEventListener('DOMContentLoaded', function(){
  // Reveal effect for cards
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add('visible');
    });
  }, {threshold:0.12});
  document.querySelectorAll('.card').forEach(c=> io.observe(c));
  // Smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth'});
    });
  });
  // Search: filter cards by text
  const searchInput = document.getElementById('search-input');
  if(searchInput){
    searchInput.addEventListener('input', function(){
      const q = this.value.toLowerCase();
      document.querySelectorAll('.card').forEach(card=>{
        const t = card.dataset.title.toLowerCase() + ' ' + card.dataset-excerpt;
      });
    });
  }
});
