import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.page.html',
  styleUrls: ['./trending.page.scss'],
})
export class TrendingPage implements OnInit {

  resultBusiness: any;
  subscription: Subscription;

  //date
  currentDate: any = new Date();


  constructor(public router: Router, private newService: NewsService) { }

  ngOnInit() {
    this.subscription = this.newService.getDataBus().subscribe((data) => {
      this.resultBusiness = data;
      console.log(this.resultBusiness);
    });
  }

  gotoEverthing() {
    this.router.navigate(["/everything"]);
  }

  gotoHome() {
    this.router.navigate(["/home"]);
  }
}
