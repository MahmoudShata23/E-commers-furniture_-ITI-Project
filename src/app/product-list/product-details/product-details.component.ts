import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SwiperOptions } from 'swiper';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  arr = [1, 2, 3, 4];
  array = [1, 2, 3, 4];

  images = [944, 1011, 984].map(
    (n) => `https://picsum.photos/id/${n}/1200/500`
  );

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  slidesStore = [
    { id: 1, img: 'https://picsum.photos/350/150' },
    { id: 2, img: 'https://picsum.photos/350/150' },
    { id: 3, img: 'https://picsum.photos/350/150' },
    { id: 4, img: 'https://picsum.photos/350/150' },
    { id: 5, img: 'https://picsum.photos/350/150' },
    { id: 6, img: 'https://picsum.photos/350/150' },
    { id: 7, img: 'https://picsum.photos/350/150' },
  ];

  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 50,
  };
  public form: FormGroup;
  rating3: number;

  constructor(private fb: FormBuilder) {
    this.rating3 = 0;
    this.form = this.fb.group({
      rating: ['', Validators.required],
    });
  }
  ngOnInit() {}
}