import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.page.html',
  styleUrls: ['./greeting.page.scss'],
})
export class GreetingPage implements OnInit {
  public slideOptions = {
    initialSlide: 0,
    speed: 400,
    autoplay: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      renderBullet: (index, className) => {
        return `<span 
          class="${className}" 
          style="width: 14px; height: 14px; border: 2px solid #fff; opacity: 1;"
          ></span>`;
      },
    },
  };

  constructor() {}

  ngOnInit() {}
}
