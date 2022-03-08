import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  countries = COUNTRIES;
  counterValue: number = 0;
  increment() {
    this.counterValue++;
  }
  decrement() {
    this.counterValue--;
  }
  constructor() {}

  ngOnInit(): void {}
}

interface Country {
  name: string;
  img: string;
  count: number;
  total: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    img: 'https://picsum.photos/100',
    count: 17075200,
    total: 150,
  },
  {
    name: 'Canada',
    img: 'https://picsum.photos/100',
    count: 9976140,
    total: 200,
  },
  {
    name: 'United States',
    img: 'https://picsum.photos/100',
    count: 9629091,
    total: 155,
  },
  {
    name: 'China',
    img: 'https://picsum.photos/100',
    count: 9596960,
    total: 255,
  },
];
