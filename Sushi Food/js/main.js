/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY > 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*= " + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration : 2500,
  Delay: 400,
})
sr.reveal(`.home__image,.newletter__container,.footer__logo,.footer__description,.footer__content, .footer__information`)
sr.reveal(`.home__data`, {origin:'bottom'})
sr.reveal(`.about__data, .recently__data`, {origin:'left'})
sr.reveal(`.about__img, .recently__img`, {origin:'right'})
sr.reveal(`.popular__card`, {interval:100})


/*===============   SMOOTH SCROLL ANIMATION ===============*/
window.onload = function() {

  const easeInCubic = function (t) { return t*t*t } 
  const scrollElems = document.getElementsByClassName('scroll');
  
  
  //console.log(scrollElems);
  const scrollToElem = (start, stamp, duration, scrollEndElemTop, startScrollOffset) => {
      //debugger;
      const runtime = stamp - start;
      let progress = runtime / duration;
      const ease = easeInCubic(progress);
      
      progress = Math.min(progress, 1);
      console.log(startScrollOffset,startScrollOffset + (scrollEndElemTop * ease));
      
      const newScrollOffset = startScrollOffset + (scrollEndElemTop * ease);
      window.scroll(0, startScrollOffset + (scrollEndElemTop * ease));
  
      if(runtime < duration){
        requestAnimationFrame((timestamp) => {
          const stamp = new Date().getTime();
          scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
        })
      }
    }
  
  for(let i=0; i<scrollElems.length; i++){
    const elem = scrollElems[i];
    
    elem.addEventListener('click',function(e) {
      e.preventDefault();
      const scrollElemId = e.target.href.split('#')[1];
      const scrollEndElem = document.getElementById(scrollElemId);
      
      const anim = requestAnimationFrame(() => {
        const stamp = new Date().getTime();
        const duration = 600;
        const start = stamp;
            
        const startScrollOffset = window.pageYOffset;
  
        const scrollEndElemTop = scrollEndElem.getBoundingClientRect().top;
              
        scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
        // scrollToElem(scrollEndElemTop);
        })
      })
    }
  }