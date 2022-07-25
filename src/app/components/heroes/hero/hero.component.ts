import { Component } from '@angular/core';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
})

export class HeroComponent {
    name: string = "Ironman";
    edad: number = 45;

    get mayusName(): string {
        return this.name.toUpperCase();
    }

    getName = (): string => `${ this.name } - ${this.edad}`;

    changeName = (): void => {
        this.name = 'Spiderman'
    }

    changeAge = (): void => {
        this.edad = 30;
    }

}