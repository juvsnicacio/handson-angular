import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor() { }

  public getPessoas() {
    return [
      { "id": 1, "age": 29, "name": "Elisabeth Sullivan", "gender": "female" },
      { "id": 2, "age": 36, "name": "Byers Potter", "gender": "male" },
      { "id": 3, "age": 22, "name": "Juana Acosta", "gender": "female" },
    ];
  }
}
 