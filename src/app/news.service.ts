import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  currentArticle: any;

  apiUrl: string = "https://newsapi.org/v2/top-headlines?country=in&category=business";
  // apiKey: string = "dd40b5134cfa413d89a0965a6fe7b11f";

  constructor( private http: HttpClient) { }


  getData()
  {
    return this.http.get(this.apiUrl+"&apiKey="+this.apiKey);
  }
}
