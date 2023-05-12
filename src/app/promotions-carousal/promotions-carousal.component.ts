import { Component, Input, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { PromoService } from './promo.service';
// register Swiper custom elements
register();

@Component({
  selector: 'app-promotions-carousal',
  templateUrl: './promotions-carousal.component.html',
  styleUrls: ['./promotions-carousal.component.css']
})

export class PromotionsCarousalComponent implements OnInit {
  @Input() PromotionIncoming:any ="";
  constructor(private promotionsService :PromoService){};

  ngOnInit():void {
    this.PromotionIncoming = this.promotionsService.getPromotionsFromJson();
    console.log('Pulling promos from Json',this.PromotionIncoming);
  }
}
