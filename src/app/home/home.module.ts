import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HomePage } from './home.page';
import { MainToolbarModule } from '../components/main-toolbar/main-toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainToolbarModule,
    TranslateModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
  ]
})
export class HomePageModule {}