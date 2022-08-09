import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar-heroe',
  templateUrl: './agregar-heroe.component.html'
})
export class AgregarHeroeComponent {

  @Input() personajes: Personaje[] = [];

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregar() {
    if ( this.nuevo.nombre.trim().length == 0 ) { return };

    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }


    console.log(this.nuevo)
  }

}
