import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-promotions-carousal',
  templateUrl: './promotions-carousal.component.html',
  styleUrls: ['./promotions-carousal.component.css']
})
export class PromotionsCarousalComponent {
  constructor(){};
}
