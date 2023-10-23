const hero = document.getElementById('hero');
const navbar = document.querySelector('.nav__container');
let navMobileContainer = document.querySelector(".nav_content_mobile");
let boton = document.querySelector(".bx-menu");
let enlaceAncla= document.querySelectorAll(".navbar_mobile a");


function revealElement(selector, options) {
  ScrollReveal().reveal(selector,
  {
    origin: options.origin,
    distance: options.distance,
    duration: options.duration ,
    reset: false,
    delay: options.delay
  });
}

revealElement('.general_img_container', { origin: 'right', distance: '80px', duration:1500 , delay: 100 });
revealElement('.general_img_containerDos', { origin: 'left', distance: '80px', duration:1500 , delay: 100 });
revealElement('.popular__content', { origin: 'top', distance: '80px', duration:1500 , delay: 100 });
revealElement('.img_about_container', { origin: 'right', distance: '80px', duration:1500 , delay: 100 });

revealElement('.general-txt_content', { origin: 'top', distance: '80px', duration:1500 , delay: 100 });
revealElement('.txt_about_container', { origin: 'top', distance: '80px', duration:1500 , delay: 100 });
revealElement('.footer_content', { origin: 'left', distance: '80px', duration:1500 , delay: 100 });


function handleScroll() 
{
  const heroBottom = hero.getBoundingClientRect().bottom;

    if (window.scrollY > heroBottom) 
    {
      navbar.classList.add('sticky');
    } 
    else 
    {
      navbar.classList.remove('sticky');
    }
}

boton.addEventListener("click",()=>
{
  navMobileContainer.classList.toggle("show");
})

enlaceAncla.forEach(enlace =>
  {
    enlace.addEventListener("click",()=>
    {
      navMobileContainer.classList.remove("show");

    })
  })


// Llama a handleScroll una vez al cargar la página
window.addEventListener('load', handleScroll);

// Agrega un evento de desplazamiento al documento
document.addEventListener('scroll', handleScroll);


