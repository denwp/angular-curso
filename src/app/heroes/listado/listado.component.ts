import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Hulk', 'SpiderMan', 'IronMan','Capitán America']
  heroeBorrado: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  borrarHeroe(): void{
    let heroeBorrar: string = "SpiderMan";
    console.log("Borrando");
    //this.heroes = this.heroes.filter( x => x != heroeBorrar);
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }
}
