import { Injectable } from '@angular/core';

export interface IPertsona {
  id:string;
  izena:string;
  abizena:string;
}

@Injectable({
  providedIn: 'root'
})
export class PertsonakzerbitzuakService {

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
  constructor() { }

  getPertsonak(){
    return this.pertsonak;
  }

  ezabatu(id:string){
    let pertsonaTopatuta = this.pertsonak.find(pertsona => pertsona.id == id);
    if (pertsonaTopatuta){
      let posizioa = this.pertsonak.indexOf(pertsonaTopatuta);
      if (posizioa!=-1){
        this.pertsonak.splice(posizioa,1);
      }
    }
  }
  gehitu(id:string, abizena:string, izena:string){
    let pertsona:IPertsona={
      id:id,
      izena:izena,
      abizena:abizena
    }
    this.pertsonak.push(pertsona);
  }

  aldatu(id:string, abizena:string, izena:string){
    console.log(id+" "+abizena+" "+izena);
    let pertsonaTopatuta = this.pertsonak.find(pertsona => pertsona.id == id);
    if (pertsonaTopatuta){
      console.log(pertsonaTopatuta);
      let posizioa = this.pertsonak.indexOf(pertsonaTopatuta);
      if (posizioa!=-1){
        console.log("entra");
        this.pertsonak[posizioa].izena=izena;
        this.pertsonak[posizioa].abizena=abizena;
      }
    }
  }

}
