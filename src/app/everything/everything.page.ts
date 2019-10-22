import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-everything',
  templateUrl: './everything.page.html',
  styleUrls: ['./everything.page.scss'],
})
export class EverythingPage implements OnInit {

  resultSports: any;
  subscription: Subscription;

  //date
  currentDate: any = new Date();

  constructor(public router: Router, private newService: NewsService) { }

  ngOnInit() {
    this.subscription = this.newService.getDataSport().subscribe((data) => {
      this.resultSports = data;
      console.log(this.resultSports);
    })
  }

  gotoTrending() {
    this.router.navigate(["/trending"]);
  }

  gotoHome() {
    this.router.navigate(["/home"]);
  }

}
