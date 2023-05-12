import { Injectable } from '@angular/core';
// import { HttpClient } from "@angular/common";
// import { Observable } from 'rxjs';
import { PromotionIncoming } from "../Models/incoming-promotion-models";
import  promoData  from './promoData/data.json';

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  constructor() { }

  getPromotionsFromJson(){
    return  promoData as unknown as PromotionIncoming;
  }
}
