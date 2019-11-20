import { Component, OnInit } from '@angular/core';
import { Carro } from './carro';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  
  carros = [
    new Carro(1, "Fiat", "Uno"),
    new Carro(2, "Ford", "Focus"),
    new Carro(3, "Nissan", "Sentra")

  ]

  titulo(){
    return "Listagem de Carros"
  }

}
