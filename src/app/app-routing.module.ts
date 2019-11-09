import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'news', pathMatch: 'full' },
  { path: 'news', loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)},
  { path: 'news-details', loadChildren: './news-details/news-details.module#NewsDetailsPageModule' },
  { path: 'business', loadChildren: './business/business.module#BusinessPageModule' },
  { path: 'sports', loadChildren: './sports/sports.module#SportsPageModule' },
  { path: 'business-details', loadChildren: './business-details/business-details.module#BusinessDetailsPageModule' },
  { path: 'sports-details', loadChildren: './sports-details/sports-details.module#SportsDetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
