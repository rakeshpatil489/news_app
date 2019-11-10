import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {
    path: 'news',
    loadChildren: './news/news.module#NewsPageModule'
  },
  {
     path: 'news-details', 
     loadChildren: './news-details/news-details.module#NewsDetailsPageModule' 
    },
  {  
    path: 'business', 
    loadChildren: './business/business.module#BusinessPageModule' 
  },
  { 
    path: 'business-details', 
    loadChildren: './business-details/business-details.module#BusinessDetailsPageModule' 
  },
  { 
    path: 'sports', 
    loadChildren: './sports/sports.module#SportsPageModule' 
  },
  
  { 
    path: 'sports-details', 
    loadChildren: './sports-details/sports-details.module#SportsDetailsPageModule' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
