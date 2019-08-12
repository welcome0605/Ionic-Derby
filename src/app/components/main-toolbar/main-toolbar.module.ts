import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MainToolbarComponent } from './main-toolbar.component';

@NgModule({
  declarations: [MainToolbarComponent],
  exports: [MainToolbarComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainToolbarModule { }
