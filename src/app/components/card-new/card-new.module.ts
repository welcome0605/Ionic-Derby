import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardNewComponent } from './card-new.component';

@NgModule({
  declarations: [CardNewComponent],
  exports: [CardNewComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CardNewModule { }