import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'news',
        loadChildren: '../news/news.module#NewsPageModule'
      },
      {
         path: 'news-details', 
         loadChildren: '../news-details/news-details.module#NewsDetailsPageModule' 
        },
      {  
        path: 'business', 
        loadChildren: '../business/business.module#BusinessPageModule' 
      },
      { 
        path: 'business-details', 
        loadChildren: '../business-details/business-details.module#BusinessDetailsPageModule' 
      },
      { 
        path: 'sports', 
        loadChildren: '../sports/sports.module#SportsPageModule' 
      },
      
      { 
        path: 'sports-details', 
        loadChildren: '../sports-details/sports-details.module#SportsDetailsPageModule' 
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/news',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
