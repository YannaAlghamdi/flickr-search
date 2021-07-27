import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllPhotosPage } from './all-photos.page';

const routes: Routes = [
  {
    path: '',
    component: AllPhotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllPhotosPageRoutingModule {}
