import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  nombre: string = 'IronMan';
  edad: number= 45;

  constructor() { }

  ngOnInit(): void {
  }
  obtenerNombre(): string {

    return `${this.nombre} - ${this.edad}`;
  }
  get nombreCapitalizado(): string{
    return this.nombre.toUpperCase();
  }

  cambiarNombre(): void {
    this.nombre = 'SpiderMan';
  }

  cambiarEdad(): void {
    this.edad = 30;
  }
}
