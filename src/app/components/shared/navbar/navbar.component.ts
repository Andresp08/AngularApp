import { Component, OnInit } from '@angular/core';

//importar el Router
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent{

    constructor(private _router:Router){
        
    }

    ngOnInit(): void {
        
    }

    //funcion buscar heroe
    buscarHeroe(valorABuscar:string){
        if(valorABuscar.length >=1){
            console.log(valorABuscar);
            //enviar ruta mas el nombre para el btn buscar
            this._router.navigate(['/buscar', valorABuscar]);
        }else{
            alert('el campo no puede estar vacio:(');
        }
    }
}