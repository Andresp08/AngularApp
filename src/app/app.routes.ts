//ng-router-appmodule

//importaciones
import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarComponent } from './components/buscar/buscar.component';

//array constante que maneja las rutas
const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    //recibe un id para saber cual heroe va a mostrar
    { path: 'heroe/:id', component: HeroeComponent},
    { path: 'buscar/:nombreHeroe', component: BuscarComponent},
    { path: '**',  pathMatch:'full', redirectTo: 'home'},
    //{ path: '**', component: HomeComponent }, //si no encuentra la ruta, va por acá
];

//usehash permite usar hastagh en la ruta
@NgModule({
    imports: [RouterModule.forRoot(ROUTES, {useHash:true })],
    exports: [RouterModule]
})

//clase a importar en app.component.ts
export class AppRoutingModule {}
