import { Component, OnInit } from '@angular/core';
import { NiremoduluakModule } from "../konponenteak/niremoduluak.module";

@Component({
  selector: 'app-txertatu',
  templateUrl: './txertatu.page.html',
  styleUrls: ['./txertatu.page.scss'],
  standalone:false,
})
export class TxertatuPage implements OnInit {

  id!:string;
  izena!:string;
  abizena!:string;
  
  constructor() { }

  onClick(){

  }

  ngOnInit() {
  }

}
