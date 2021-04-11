import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{title}}</h1>
        <h3>La base es: <strong>55</strong></h3>
        <button (click)="numero = numero + 1;"> + 1</button>
        <button (click)="acumular(base)"> + {{base}}</button>
        <span> {{ numero }} </span>
        <button (click)="numero = numero - 1;"> - 1</button>
        <button (click)="acumular(-base)"> - {{base}}</button>
    `
    
})
export class ContadorComponent{
    title: string = 'Contador App';
    numero: number = 0;
    base: number = 5;
  
    acumular( valor: number): void{
      this.numero += valor;
    }
}