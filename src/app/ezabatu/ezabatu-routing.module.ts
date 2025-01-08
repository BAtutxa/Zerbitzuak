import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EzabatuPage } from './ezabatu.page';

const routes: Routes = [
  {
    path: '',
    component: EzabatuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EzabatuPageRoutingModule {}
