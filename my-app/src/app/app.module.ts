import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { PessoasListaComponent } from './pessoas-lista/pessoas-lista.component';
import { PessoasService } from './services/pessoas.service';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DepartamentosListaComponent } from './departamentos-lista/departamentos-lista.component';
import { DepartamentosDetalhesComponent } from './departamentos-detalhes/departamentos-detalhes.component';


@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    PessoasListaComponent,
    HomeComponent,
    NotfoundComponent,
    DepartamentosListaComponent,
    DepartamentosDetalhesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PessoasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
