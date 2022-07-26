import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heros: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan América'];
  deletedHero: string = '';

  borrarHero = () => {
     this.deletedHero = this.heros.pop() || '';
  }

}
