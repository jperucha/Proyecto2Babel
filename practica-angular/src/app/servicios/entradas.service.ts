import { Injectable } from '@angular/core';
import { Entradas } from '../modelos/entradas';
import { HttpClient } from '@angular/common/http';

const URLAPI = 'http://localhost:3000/entradas';
@Injectable()
export class EntradasService {
  private sURL: string;
  private listaEntradas: Array<Entradas>;

  constructor(public http: HttpClient) {
    this.sURL = URLAPI;
    this.listaEntradas = [];
  }

  getContactos() {
    // const aLibros: Array<string>  = [];
    return this.http.get(this.sURL).toPromise()
    .then((response: any) => {
      this.listaEntradas = response;
      return this.listaEntradas;
    });
}

setContactos(oContacto) {
    console.log('Enviando datos');
    console.log(oContacto);
    return this.http.post(this.sURL, oContacto).toPromise();
}

deleteContacto (i) {
    i++;
    return this.http.delete(this.sURL + '/' + i).toPromise();
    // this.aContactos.splice(i, 1);
  }

}
