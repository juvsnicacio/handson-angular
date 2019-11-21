import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  constructor() { }

  public getDepartamentos(){
    return [
      { "id": 1, "funcionarios": 8, "name": "Administrativo"},
      { "id": 2, "funcionarios": 5, "name": "Financeiro"},
      { "id": 3, "funcionarios": 7, "name": "Recursos Humanos"},
      { "id": 4, "funcionarios": 12, "name": "Comercial"}
    ];
  }

}
