//el Input le dice a angular que una propiedad que yo quiero especificar, va a ser decidida desde afuera

// el Output va de la mano con el EventEmitter
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  //para manejar los heroes
  //esto quiere decir que la propiedad heroe puede venir de afuera 

  //al haberle puesto el input significa que yo puedo enviarle argumentos acá, desde el padre que está en el heroe.component.html usando el nombre del objeto (heroe)
  @Input() heroe:any = {};
  @Input() indice:number;

  //se le pone el nombre del evento que quiero que el padre este escuchando
  //le digo que va a emitir un tipo <number>
  @Output() heroeSeleccionado: EventEmitter<number>;//el heroeSeleccionado es un observable

  //inyectar el router en el constructor
  constructor(private _router:Router) { 
    //inicializar el EventEmitter
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe(){
    console.log(this.indice);
    //recordar que como el indice tiene el decorador @input(), su valor esta inicializado desde afuera, en este caso desde el heroes.component.html
    this._router.navigate(['/heroe', this.indice]);
    //recibio la ruta donde va a estar (/heroe) + el indice del heroe a mostrar

    //le decimos que emita el indice, este indice tambien viene de afuera
    //this.heroeSeleccionado.emit(this.indice);
  }

}
