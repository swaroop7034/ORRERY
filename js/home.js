
 function isSectionVisible(section) {
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return (
    rect.top <= windowHeight && rect.bottom >= 0
  );
}


function checkVisibility() {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    if (isSectionVisible(section)) {
      section.classList.add('visible'); 
    }
  });
}


window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility); 