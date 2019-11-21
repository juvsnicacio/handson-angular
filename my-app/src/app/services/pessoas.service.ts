import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor() { }

  public getPessoas() {
    return [
      { "id": 1, "age": 29, "name": "Elisabeth Sullivan", "gender": "female", "cpf": 11111111111 },
      { "id": 2, "age": 36, "name": "Byers Potter", "gender": "male" , "cpf": 22222222222},
      { "id": 3, "age": 22, "name": "Juana Acosta", "gender": "female", "cpf": 33333333333 },
    ];
  }
}
 