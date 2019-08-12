import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { MainToolbarModule } from '../components/main-toolbar/main-toolbar.module';
import { QuestionPage } from './question.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainToolbarModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuestionPage]
})
export class QuestionPageModule {}
