import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
})

export class ContadorComponent {
    title: string = 'Contador App';
    number: number = 0;

    base: number = 5;

    AddOrSubtract = (value: number) => {
        this.number = this.number + (value * this.base);
    }
}