import { Component, OnInit} from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-news',
  templateUrl: 'news.page.html',
  styleUrls: ['news.page.scss'],
})
export class NewsPage implements OnInit {

  newResult:any;
  subscription: Subscription;

  //date
  currentDate: any = new Date();


  constructor(public newService: NewsService, public router: Router) {}

  ngOnInit() {
    this.subscription = this.newService.getData().subscribe((data)=>{
    this.newResult= data;
    console.log(this.newResult);
    });
    console.log(this.currentDate);
  }

  getDetailNews(article:any)
  {
    this.newService.currentArticle = article;
    this.router.navigate(["/news-details"]);
  }


}
