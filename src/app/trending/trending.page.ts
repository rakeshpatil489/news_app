import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-trending',
  templateUrl: './trending.page.html',
  styleUrls: ['./trending.page.scss'],
})
export class TrendingPage implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }

  gotoEverthing()
  {
   this.router.navigate(["/everything"]);
  }

  gotoHome()
  {
   this.router.navigate(["/home"]);
  }
}