import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.page.html',
  styleUrls: ['./news-details.page.scss'],
})
export class NewsDetailsPage implements OnInit {
 
  article:any;

  constructor(private newsService:NewsService) { }

  ngOnInit() {
    console.log(this.newsService.currentArticle);
    this.article=this.newsService.currentArticle;
  }

}
