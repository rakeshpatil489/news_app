import { Component, OnInit} from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  newResult:any;
  subscription: Subscription;
  


  constructor(public newService: NewsService, private router: Router) {}

  ngOnInit() {
    this.subscription = this.newService.getData().subscribe((data)=>{
    this.newResult= data;
    console.log(this.newResult);
    });
  }

  getDetailNews(article)
  {
    this.newService.currentArticle = article;
    this.router.navigate(["/news-details"]);
  }

}
