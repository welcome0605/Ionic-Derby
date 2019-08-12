import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { ResourcesPage } from './resources.page';

import { MainToolbarModule } from '../components/main-toolbar/main-toolbar.module';

const routes: Routes = [
  {
    path: '',
    component: ResourcesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    MainToolbarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResourcesPage]
})
export class ResourcesPageModule {}
