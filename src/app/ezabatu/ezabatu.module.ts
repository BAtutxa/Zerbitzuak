import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EzabatuPageRoutingModule } from './ezabatu-routing.module';

import { EzabatuPage } from './ezabatu.page';
import { NiremoduluakModule } from '../konponenteak/niremoduluak.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EzabatuPageRoutingModule,
    NiremoduluakModule,
  ],
  declarations: [EzabatuPage]
})
export class EzabatuPageModule {}
