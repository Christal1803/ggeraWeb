import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-card-carousal',
  templateUrl: './card-carousal.component.html',
  styleUrls: ['./card-carousal.component.css']
})
export class CardCarousalComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
