import { Component, OnInit } from '@angular/core';

//importar el servicio de herores, //importar la interface
import { HeroesService, HeroesValidation } from '../../servicios/heroes.service';
//importar el Router
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  //arreglo vacio, de tipo interface en (heroes.service)
  heroes:HeroesValidation[] = [];
  

  //pasarle como parametro al constructor el servicio de tipo:HeroesService
  //al pasale el _heroesService de tipo HeroesService, inmediatamente dispara el constructor de heroes.service y se muestra el msj en consola
  constructor( private _heroesService:HeroesService, private _router:Router) {
    // console.log('aqui que?');
  }

  //inicializacion del componente, utilizado cuando la pagina está renderizada
  ngOnInit() {
    //getHeroes() es una funcion creada en el heroes.service
    this.heroes = this._heroesService.getHeroes();
    // console.log(this.heroes);
  }

  verHeroe(index:number){
    //recibe un array, que es la ruta con el slash para evitar cierto problema, y el index del heroe a mostrar
    this._router.navigate(['/heroe', index]);
  }

}
