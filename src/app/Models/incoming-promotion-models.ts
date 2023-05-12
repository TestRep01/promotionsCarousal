export interface PromotionIncoming {
  PlayerKey:    PlayerKey;
  PlayerOffers: PlayerOffer[];
}

export interface PlayerKey {
  UserId:         number;
  GamingSystemId: number;
}

export interface PlayerOffer {
  PromoGuid:    string;
  OfferGuid:    string;
  Data:         Data;
  DisplayOrder: number;
}

export interface Data {
  _id:              string;
  ContentId:        string;
  UpdateTime:       Date;
  StartDate:        null;
  EndDate:          null;
  PromotionContent: PromotionContent;
}

export interface PromotionContent {
  Buttons:          Button[];
  BankingWidget:    BankingWidget | null;
  Calendar:         Calendar | null;
  Carousel:         Carousel;
  Tournament:       null;
  GaTag:            string;
  IsOptedIn:        boolean;
  Language:         string;
  Message:          Message | null;
  Pop:              null;
  OfferId:          number;
  GameId:           number;
  PromoName:        string;
  PromotionDetails: PromotionDetails;
  Rules:            Rules | null;
  Sports:           null;
  ThankYou:         null;
}

export interface BankingWidget {
  BankingWidgetText:                 string;
  BankingWidgetText2:                string;
  BankingWidgetBackgroundImgUrl:     string;
  BankingWidgetBackgroundImgUrlType: string;
  Buttons:                           Button[];
}

export interface Button {
  Id:           string;
  Name:         Name;
  Text:         string;
  Type:         string;
  Action:       Action;
  Translations: null;
}

export enum Action {
  LaunchGame = "LaunchGame",
  OptIn = "OptIn",
}

export enum Name {
  OptIn = "Opt In",
  PlayGame = "Play Game",
}

export interface Calendar {
  CalendarPromoText1: string;
  CalendarPromoText2: string;
  CalendarPromoText3: string;
  CalendarImageUrl:   string;
  Buttons:            Button[];
}

export interface Carousel {
  PrimaryText:                       string;
  SecondaryText:                     string;
  AlternativeText:                   string;
  BackgroundImageUrl:                string;
  BackgroundImageUrlType:            string;
  MobileBackgroundImageUrl:          string;
  MobileBackgroundImageUrlType:      string;
  BackgroundVideoUrl:                string;
  BackgroundVideoUrlType:            string;
  BackgroundVideoUrlAlternative:     string;
  BackgroundVideoUrlAlternativeType: string;
  CarouselFontSize:                  string;
  Buttons:                           Button[];
}

export interface Message {
  TextLines: TextLine[];
  Buttons:   Button[];
}

export interface TextLine {
  Caption:    string;
  LineNumber: number;
}

export interface PromotionDetails {
  ContentType:     string;
  EligibilityType: string;
  Operator:        string;
  GamingServerIds: number[];
  RewardType:      string;
  ProductType:     string;
  DealType:        string;
  LeaderboardType: null;
  MetaData:        MetaData;
}

export interface MetaData {
  minValueDeposit:      number;
  PlayerCountry?:       string;
  operator?:            null | string;
  productType?:         string;
  productIds?:          any[];
  bannerUrl:            string;
  ContentType:          string;
  StartDateTime:        Date;
  EndDateTime:          Date;
  rank:                 number | null;
  CalendarRankDisplay?: number;
}

export interface Rules {
  RulesHeadlineText: string;
  Rules:             string[];
  GeneralRulesName:  string;
}
