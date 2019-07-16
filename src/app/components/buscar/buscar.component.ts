import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
//importar el Router
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  //array
  heroes:any[] = []
  termino:string;

  constructor(private activatedRoute:ActivatedRoute, private heroesService:HeroesService, private _router:Router){ 
    
  }
  
  ngOnInit() {

    this.activatedRoute.params.subscribe(params =>{
      console.log(params['nombreHeroe']);

      //hacer la variable igual a lo que venga de la busqueda
      this.termino = params['nombreHeroe'];


      //invocar la funcion y enviarle el nombre del heroe
      this.heroes = this.heroesService.buscarHeroe(params['nombreHeroe']);
      console.log(this.heroes);
    });

  }

  //funcion para ir al heroe nuevamente
  verHeroe(indice:number){
    //recibe un array, que es la ruta con el slash para evitar cierto problema, y el index del heroe a mostrar
    this._router.navigate(['/heroe', indice]);
  }

}
