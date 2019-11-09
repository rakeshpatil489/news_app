import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.page.html',
  styleUrls: ['./business-details.page.scss'],
})
export class BusinessDetailsPage implements OnInit {

  businessArticle:any;

  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.businessArticle = this.newsService.currentArticleBusiness
  }

}
