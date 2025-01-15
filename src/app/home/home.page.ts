import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PertsonakzerbitzuakService } from '../zerbitzuak/pertsonakzerbitzuak.service';

export interface IPertsona {
  id:string;
  izena:string;
  abizena:string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})


export class HomePage {

  constructor(public pertsonakZerbitzuak:PertsonakzerbitzuakService, private alertController:AlertController) {}

  async ezabatu(id:string, izena:string, abizena:string) {
    const alert = await this.alertController.create({
      header: 'Ezabatu nahi?',
      subHeader: izena+" "+abizena,
      message: 'Sakatu bai ezabatzeko',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Alert canceled');
          },
        },
        {
          text: 'BAI',
          role: 'confirm',
          handler: () => {
            this.pertsonakZerbitzuak.ezabatu(id);
          },
        },
      ]
    });

    await alert.present();
  }

  async gehitu(){
    const alert = await this.alertController.create({
      header: 'Pertsona berria sortu nahi?',
      message: 'Sakatu bai sortzeko',
      inputs: [
        {
          name:'Id',
          placeholder:"Id",
          type:'text'
        },
        {
          name:'Izena',
          placeholder:'Izena',
          type:'text'
        },
        {
          name:'Abizena',
          placeholder:'Abizena',
          type:'text'
        }
      ],
      buttons: [
        {
          text: 'EZ',
          role: 'cancel',
          handler: () => {
            console.log('Alert canceled');
          },
        },
        {
          text: 'BAI',
          role: 'confirm',
          handler: (data) => {
            this.pertsonakZerbitzuak.gehitu(data.Id, data.Abizena, data.Izena);
          },
        },
      ]
    });

    await alert.present();
  }

  async aldatu(id:string){
    const alert = await this.alertController.create({
      header: 'Pertsona aldatu nahi?',
      message: 'Sakatu bai aldatzeko',
      inputs: [
        {
          name:'I',
          value:id,
          type:'text',
          disabled:true,
        },
        {
          name:'Izena',
          placeholder:'Izena',
          type:'text'
        },
        {
          name:'Abizena',
          placeholder:'Abizena',
          type:'text'
        }
      ],
      buttons: [
        {
          text: 'EZ',
          role: 'cancel',
          handler: () => {
            console.log('Alert canceled');
          },
        },
        {
          text: 'BAI',
          role: 'confirm',
          handler: (data) => {
            this.pertsonakZerbitzuak.aldatu(data.I, data.Abizena, data.Izena);
          },
        },
      ]
    });

    await alert.present();
  }
}
