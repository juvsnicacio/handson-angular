import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoasListaComponent } from './pessoas-lista/pessoas-lista.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DepartamentosListaComponent } from './departamentos-lista/departamentos-lista.component';
import { DepartamentosDetalhesComponent } from './departamentos-detalhes/departamentos-detalhes.component';

const routes: Routes = [
  {path: "",  redirectTo: '/home', pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "pessoas", component: PessoasListaComponent},
  {path: "carros", component: PrimeiroComponenteComponent},
  {path: "departamentos", component: DepartamentosListaComponent},
  {path: "departamentos/:id", component: DepartamentosDetalhesComponent},
  {path: "**", component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
