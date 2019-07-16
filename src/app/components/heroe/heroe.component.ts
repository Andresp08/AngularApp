//clase para recibir el heroe por url (0, 1, 2 etc)
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
    selector:'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent{
    
    //variable local
    heroe:any = {};
    verificarImg:boolean;
    
    //recibe como parametro un objeto de tipo ActivatedRoute, y otro de tipo HeroesService
    constructor(private activatedRoute:ActivatedRoute, private heroesService:HeroesService, private _router:Router){

        //con esto ya tenemos el id o index del heroe
        this.activatedRoute.params.subscribe(params =>{
            //el id, aparece porque en el app.route le pusimos (/id)
            console.log(params['id']);

            //aqui hacer referencia al servicio creado para obtener el heroe despues de importarlo, y luego llamamos el metodo creado en servicios y le pasamos el id
            this.heroe = this.heroesService.getHeroe(params['id']);
            console.log(this.heroe);

            //verificacion con una variable bandera para poner la img de si es marvel o DC
            if(this.heroe.casa==='DC'){
                console.log('true');
                this.verificarImg = true;
            } else if(this.heroe.casa==='Marvel'){
                console.log('false');
                this.verificarImg = false;
            }
        });
    }

    //funcion para navegar a heroes sin hacer refresh
    RegresarAHeroes(){
        this._router.navigate(['/heroes']);
    }
}