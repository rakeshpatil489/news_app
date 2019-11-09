import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports-details',
  templateUrl: './sports-details.page.html',
  styleUrls: ['./sports-details.page.scss'],
})
export class SportsDetailsPage implements OnInit {

  detailsSports: any;

  constructor(private newsService : NewsService) { }

  ngOnInit() {
    this.detailsSports = this.newsService.currentArticleSports;
  }

}
