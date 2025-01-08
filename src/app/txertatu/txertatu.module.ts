import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TxertatuPageRoutingModule } from './txertatu-routing.module';

import { TxertatuPage } from './txertatu.page';
import { NiremoduluakModule } from '../konponenteak/niremoduluak.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TxertatuPageRoutingModule,
    NiremoduluakModule,
    RouterModule
  ],
  declarations: [TxertatuPage]
})
export class TxertatuPageModule {}
