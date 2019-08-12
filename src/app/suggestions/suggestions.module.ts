import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MainToolbarModule } from '../components/main-toolbar/main-toolbar.module';
import { SuggestionsPage } from './suggestions.page';

const routes: Routes = [
  {
    path: '',
    component: SuggestionsPage,
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
  declarations: [SuggestionsPage],
})
export class SuggestionsPageModule {}
