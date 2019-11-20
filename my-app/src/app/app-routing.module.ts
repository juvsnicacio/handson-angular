import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoasListaComponent } from './pessoas-lista/pessoas-lista.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path: "",  redirectTo: '/home', pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "pessoas", component: PessoasListaComponent},
  {path: "carros", component: PrimeiroComponenteComponent},
  {path: "**", component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
