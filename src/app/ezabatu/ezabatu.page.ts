import { Component, OnInit } from '@angular/core';
import { NiremoduluakModule } from "../konponenteak/niremoduluak.module";

@Component({
  selector: 'app-ezabatu',
  templateUrl: './ezabatu.page.html',
  styleUrls: ['./ezabatu.page.scss'],
  standalone:false,  
})
export class EzabatuPage implements OnInit {

  id!:string;

  constructor() { }

  onClick(){

  }

  ngOnInit() {
  }

}
