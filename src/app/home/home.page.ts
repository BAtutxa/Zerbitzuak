import { Component } from '@angular/core';

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

  pertsonak:IPertsona[]=[
    { id: "ba",
      izena:"borja",
      abizena:"atutxa"
    },
    {
      id:"jb",
      izena:"jon",
      abizena:"barrutia"
    }
  ]
  constructor() {}

}
