import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GoiburukoaComponent } from './goiburukoa/goiburukoa.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [GoiburukoaComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports:[GoiburukoaComponent]
})
export class NiremoduluakModule { }
