import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MainToolbarModule } from '../components/main-toolbar/main-toolbar.module';
import { MuseumsPage } from './museums.page';

const routes: Routes = [
  {
    path: '',
    component: MuseumsPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    MainToolbarModule,
    RouterModule.forChild(routes),
  ],
  declarations: [MuseumsPage],
})
export class MuseumsPageModule {}
