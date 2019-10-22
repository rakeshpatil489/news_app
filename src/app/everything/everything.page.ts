import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-everything',
  templateUrl: './everything.page.html',
  styleUrls: ['./everything.page.scss'],
})
export class EverythingPage implements OnInit {

  resultSports: any;

  constructor(public router: Router, private newService: NewsService) { }

  ngOnInit() {
    this.newService.getDataSport().subscribe((data) => {
      this.resultSports = data;
      console.log(this.newService);
    })
  }

  gotoTrending() {
    this.router.navigate(["/trending"]);
  }

  gotoHome() {
    this.router.navigate(["/home"]);
  }

}
