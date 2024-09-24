
  // buat scroll smooth
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
//  Buat animasi Text
  var typed = new Typed('.typing', {
    strings: ['','Frontend Developer'],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})