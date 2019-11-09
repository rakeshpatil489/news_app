import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage implements OnInit {

  resultBusiness: any;
  subscription: Subscription;

  //date
  currentDate: any = new Date();

  constructor(public router: Router, private newService: NewsService) { }

  ngOnInit() {
    this.subscription = this.newService.getDataSport().subscribe((data) => {
      this.resultBusiness = data;
      console.log(this.resultBusiness);
    })
  }

  getDetailSports(article:number)
  {
    this.newService.currentArticleSports = article;
    this.router.navigate(["tabs/sports-details"]);
  }

}
