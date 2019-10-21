import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-everything',
  templateUrl: './everything.page.html',
  styleUrls: ['./everything.page.scss'],
})
export class EverythingPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  gotoTrending()
  {
   this.router.navigate(["/trending"]);
  }

  gotoHome()
  {
   this.router.navigate(["/home"]);
  }

}
