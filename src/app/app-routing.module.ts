import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule',
  },
  {
    path: 'welcome',
    loadChildren: './welcome/welcome.module#WelcomePageModule',
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule',
  },
  {
    path: 'suggestions',
    loadChildren: './suggestions/suggestions.module#SuggestionsPageModule',
  },
  {
    path: 'forgot',
    loadChildren: './forgot/forgot.module#ForgotPageModule',
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfilePageModule',
  },
  {
    path: 'edit-profile',
    loadChildren: './edit-profile/edit-profile.module#EditProfilePageModule',
  },
  {
    path: 'hotels',
    loadChildren: './hotels/hotels.module#HotelsPageModule',
  },
  {
    path: 'history-art',
    loadChildren: './history-art/history-art.module#HistoryArtPageModule',
  },
  {
    path: 'museums',
    loadChildren: './museums/museums.module#MuseumsPageModule',
  },
  {
    path: 'greeting',
    loadChildren: './greeting/greeting.module#GreetingPageModule',
  },
  { 
    path: 'question', 
    loadChildren: './question/question.module#QuestionPageModule' 
  },
  { 
    path: 'news', 
    loadChildren: './news/news.module#NewsPageModule' 
  },
  { 
    path: 'news/:id', 
    loadChildren: './new-detail/new-detail.module#NewDetailPageModule'
  },
  { 
    path: 'art', 
    loadChildren: './art/art.module#ArtPageModule' 
  },
  { 
    path: 'resources', 
    loadChildren: './resources/resources.module#ResourcesPageModule' 
  },
  { 
    path: 'resources-detail', 
    loadChildren: './resources-detail/resources-detail.module#ResourcesDetailPageModule' 
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
