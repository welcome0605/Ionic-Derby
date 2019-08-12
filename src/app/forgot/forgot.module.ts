import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ForgotPage } from './forgot.page';
import { MainToolbarModule } from '../components/main-toolbar/main-toolbar.module';

const routes: Routes = [
  {
    path: '',
    component: ForgotPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    MainToolbarModule,
    TranslateModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ForgotPage],
})
export class ForgotPageModule {}
