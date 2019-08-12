import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CardNewModule } from '../components/card-new/card-new.module';
import { MainToolbarModule } from '../components/main-toolbar/main-toolbar.module';
import { NewsPage } from './news.page';

const routes: Routes = [
  {
    path: '',
    component: NewsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainToolbarModule,
    TranslateModule,
    CardNewModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewsPage]
})
export class NewsPageModule {}
