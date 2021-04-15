import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar-componente',
  templateUrl: './agregar-componente.component.html',
  styleUrls: ['./agregar-componente.component.css']
})
export class AgregarComponenteComponent {

  
  @Input() nuevo : Personaje = {
    nombre: '',
    poder: 0
  }
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  agregar():void {
    if(this.nuevo.nombre?.trim().length === 0){return;}
    console.log(this.nuevo);
    this.onNuevoPersonaje.emit(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
    
  }
  cambiarNombre(event: any):void{
    console.log(event.target.value);
  }
  cambiarPoder(event: any):void{
    console.log(event);
  }
}
