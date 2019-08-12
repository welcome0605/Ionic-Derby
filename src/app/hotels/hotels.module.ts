import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelsPage } from './hotels.page';
import { MainToolbarModule } from '../components/main-toolbar/main-toolbar.module';
import { CardComponent } from '../components/card/card.component';

const routes: Routes = [
  {
    path: '',
    component: HotelsPage
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
  declarations: [HotelsPage, CardComponent]
})
export class HotelsPageModule {}
