import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar-heroe',
  templateUrl: './agregar-heroe.component.html'
})
export class AgregarHeroeComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if ( this.nuevo.nombre.trim().length == 0 ) { return };

    console.log(this.nuevo)

    this.onNuevoPersonaje.emit( this.nuevo )
    
    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }

}
