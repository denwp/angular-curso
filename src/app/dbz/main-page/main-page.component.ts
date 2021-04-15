import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { AgregarComponenteComponent } from '../agregar-componente/agregar-componente.component';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  nuevo : Personaje = {
    nombre: '',
    poder: 0
  }
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  ngOnInit(): void {
  }

  agregarNuevoPersonaje(argumento: Personaje): void{
    this.personajes.push(argumento);
    console.log("asdf");
  }

  constructor(private dbzService: DbzService) {}
}
