import { CommonModule } from '@angular/common';
import { ImageCropperModule } from 'ngx-image-cropper';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { MainToolbarModule } from '../components/main-toolbar/main-toolbar.module';
import { EditProfilePage } from './edit-profile.page';
import { reducers, metaReducers } from '../reducers';

const routes: Routes = [
  {
    path: '',
    component: EditProfilePage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    MainToolbarModule,
    ImageCropperModule,
    RouterModule.forChild(routes),
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  declarations: [EditProfilePage],
})
export class EditProfilePageModule {}
