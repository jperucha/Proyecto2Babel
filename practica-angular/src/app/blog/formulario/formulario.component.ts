import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { EntradasService } from '../../servicios/entradas.service';
import { Entradas } from '../../modelos/entradas';
import { Router } from '@angular/router';

@Component({
  selector: 'bbl-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @ViewChild('formEntradas') formUser: any;
  entrada: Entradas;
  validado: Object;
  palabrasClave: string;
  @Output() outAddEntrada: EventEmitter<Entradas>;
  constructor(public entradasService: EntradasService, private router: Router) {
    this.outAddEntrada = new EventEmitter();
   }

  ngOnInit() {
    this.resetEntrada();
    this.validado = {'was-validated': true};
    console.log(this.formUser);
  }
  enviar() {
    console.log(this.entrada);
    this.entrada.palabrasClave = this.palabrasClave.split(' ');
    this.entrada.id = this.entradasService.getNextId();
    this.entradasService.setEntrada(this.entrada);
    console.log(this.entrada);
    this.outAddEntrada.emit(this.entrada);
    this.resetEntrada();
    this.formUser.reset();
  }
  btnBorrar() {
      this.formUser.reset();
  }

  private resetEntrada() {
      this.entrada = {id: undefined, autor: '', email: '', titulo: '', texto: '', palabrasClave: []};
  }
  autosize(element) {
      element.style.cssText = 'height:auto; padding:0';
      element.style.cssText = 'height:' + element.scrollHeight + 'px';
  }
  respuestaHijo(event) {
      this.entrada = event;
  }
}
