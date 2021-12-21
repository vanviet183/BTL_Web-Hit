const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const sectionAll = $$('.section-item');

function load(section) {
  section.classList.add('section--visible')
}

function ready() {
  let observe = new IntersectionObserver(revealSection, 
  {
    root: null,
    threshold: 0.15,
  });

  sectionAll.forEach(section => {
    observe.observe(section);
  })
}

// observe: sd viewport quan sat doi tuong co xuat hien hay k...

const revealSection = (entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      load(entry.target);
    }
  })
};

// entries: phan tu quan sat...

document.addEventListener('DOMContentLoaded', ready)
