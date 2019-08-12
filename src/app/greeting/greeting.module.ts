import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { GreetingPage } from './greeting.page';
import { MainToolbarModule } from '../components/main-toolbar/main-toolbar.module';

const routes: Routes = [
  {
    path: '',
    component: GreetingPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainToolbarModule,
    TranslateModule,
    RouterModule.forChild(routes),
  ],
  declarations: [GreetingPage],
})
export class GreetingPageModule {}
