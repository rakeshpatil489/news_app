import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  currentArticle: number;
  currentArticleBusiness: number;
  currentArticleSports:number;

  apiUrl: string = "https://newsapi.org/v2/top-headlines?";
  apiKey: string = "dd40b5134cfa413d89a0965a6fe7b11f";

  constructor(private http: HttpClient) { }


  getData() {
    let countryParam = new HttpParams().set("country", "in");
    return this.http.get(this.apiUrl + countryParam + "&apiKey=" + this.apiKey);
  }

  getDataBus() {
    let countryParam = new HttpParams().set("country", "in");
    let businessParam = new HttpParams().set("category", "business");
    return this.http.get(this.apiUrl + countryParam + "&" + businessParam + "&apiKey=" + this.apiKey);
  }

  getDataSport() {
    let countryParam = new HttpParams().set("country", "in");
    let sportParam = new HttpParams().set("category", "sports");
    return this.http.get(this.apiUrl + countryParam + "&" + sportParam + "&apiKey=" + this.apiKey);
  }
}
