import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllPhotosPageRoutingModule } from './all-photos-routing.module';

import { AllPhotosPage } from './all-photos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllPhotosPageRoutingModule
  ],
  declarations: [AllPhotosPage]
})
export class AllPhotosPageModule {}
