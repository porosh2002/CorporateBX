const bars = document.querySelector(".bars");
const first_bar = document.querySelector(".bar_one")
const middle_bar = document.querySelector(".bar_two")
bars.addEventListener("click", () => {
    middle_bar.classList.toggle('br_mdl');
    first_bar.classList.toggle('br_fst');
    document.querySelector(".navigation_nav").classList.toggle("nav_on_click")
});
const footer_span = document.querySelector(".footer_span");
var year = (new Date).getFullYear();
footer_span.innerHTML = year;
$('.navLinks').click(function(){
    const e = document.querySelector(".navigation_nav")
    e.classList.remove('nav_on_click')
    t = document.querySelector(".bar_one");
    o = document.querySelector(".bar_two");
    t.classList.remove("br_fst");
    o.classList.remove("br_mdl");
  });
  window.addEventListener("scroll", () => {
    const e = document.querySelector(".nav_sec");
    window.scrollY > 90 && (e.style.backgroundColor = "#fff");
    if(window.scrollY >120){
      e.classList.add('nav_shadow')
    }
    if(window.scrollY <120){
      e.classList.remove('nav_shadow')
    }
  });