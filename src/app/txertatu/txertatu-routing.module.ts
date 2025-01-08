import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TxertatuPage } from './txertatu.page';

const routes: Routes = [
  {
    path: '',
    component: TxertatuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TxertatuPageRoutingModule {}
