'use strict';

class Carousel {
  slides = [
    {
      id: 0,
      title: 'BEST LAPTOP DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 1,
      title: 'BEST HEADPHONES DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 2,
      title: 'BEST SPEAKERS DEALS',
      img: './assets/images/default-slide-img.jpg'
    }
  ];

  constructor(element) {
    this.el = element;
    let divOut = document.createElement('div');
    divOut.setAttribute('id', 'mainCarousel');
    divOut.setAttribute('class', 'main-carousel carousel slide');	
    let ol = document.createElement('ol');
    ol.classList.add('carousel-indicators');
    let li = '';
    for (let i = 0; i < 3; i++) {
      li = document.createElement('li'); 
      li.setAttribute('data-target', '#mainCarousel');
      li.setAttribute('data-slide-to', i);
      li.classList.add('carousel-indicator');
      ol.appendChild(li);
    }
    divOut.appendChild(ol);
    let divIn = document.createElement('div');	
    divIn.classList.add('carousel-inner');
    divOut.appendChild(divIn);
    let button1 = document.createElement('button');
    button1.setAttribute('href', '#mainCarousel');
    button1.setAttribute('role', 'button');
    button1.setAttribute('data-slide', 'prev');	
    button1.classList.add('carousel-control-prev');
    button1.innerHTML = '<span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span>';
    divOut.appendChild(button1);	
    let button2 = document.createElement('button');
    button2.setAttribute('href', '#mainCarousel');
    button2.setAttribute('role', 'button');
    button2.setAttribute('data-slide', 'next');	
    button2.classList.add('carousel-control-next');
    button2.innerHTML = '<span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span>';
    divOut.appendChild(button2);	
    this.el.appendChild(divOut);
    
    this.slideNum = 0;
    let slideItem = this.el.querySelector('.carousel-inner');	
    let div1 = document.createElement('div'); 
    div1.setAttribute('class', 'carousel-item active');	
    let img = document.createElement('img'); 
    img.setAttribute('src', this.slides[this.slideNum].img);	
    img.setAttribute('alt', 'Activelide');
    div1.appendChild(img);
    let div2 = document.createElement('div'); 
    div2.classList.add('container');	
    let div3 = document.createElement('div'); 
    div3.classList.add('carousel-caption');
    let h3 = document.createElement('h3'); 
    h3.classList.add('h1');
    h3.innerHTML = this.slides[this.slideNum].title;
    div3.appendChild(h3);

    let div4 = document.createElement('div'); 
    let a = document.createElement('a'); 
    a.classList.add('btn');
    a.setAttribute('href', '#');
    a.setAttribute('role', 'button');
    a.innerHTML = 'View all DEALS <img src="assets/icons/icon-angle-white.svg" class="ml-3" alt="">';
    div4.appendChild(a);
    div3.appendChild(div4);
    div2.appendChild(div3);
    div1.appendChild(div2);
    slideItem.appendChild(div1);
    this.img = slideItem.querySelector('img');
    this.h3 = slideItem.querySelector('h3');	
    this.el.addEventListener('click', event => this.handler(event));  
    const nextActiveIndicator = this.el.querySelector(`*[data-slide-to="${this.slideNum}"]`);
    nextActiveIndicator.classList.add('active');
  }
  handler(event) {
    let target = event.target;
    if (target.getAttribute('data-target') === '#mainCarousel') {
      this.el.querySelector(`*[data-slide-to="${this.slideNum}"]`).classList.remove('active');
      this.slideNum = +target.getAttribute('data-slide-to');
    } else {	
      let button = target.closest('button');	
      if ((target.dataset.slide === 'next') || (button.dataset.slide === 'next')) {	
        this.el.querySelector(`*[data-slide-to="${this.slideNum}"]`).classList.remove('active');
        ++this.slideNum;
        if (this.slideNum === this.slides.length) {
          this.slideNum = 0;
        }	
      }
      if ((target.dataset.slide === 'prev') || (button.dataset.slide === 'prev')) {
        this.el.querySelector(`*[data-slide-to="${this.slideNum}"]`).classList.remove('active');
        --this.slideNum;
        if (this.slideNum < 0) {
          this.slideNum = this.slides.length - 1;
        }	
      }
    }  
    this.img.setAttribute('src', this.slides[this.slideNum].img);	
    this.h3.innerHTML = this.slides[this.slideNum].title;	
    this.el.querySelector(`*[data-slide-to="${this.slideNum}"]`).classList.add('active');	
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Carousel = Carousel;
