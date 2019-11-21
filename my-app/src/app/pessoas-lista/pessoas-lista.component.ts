import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../services/pessoas.service';

@Component({
  selector: 'app-pessoas-lista',
  templateUrl: './pessoas-lista.component.html',
  styleUrls: ['./pessoas-lista.component.css']
})
export class PessoasListaComponent implements OnInit {

  public pessoas = []
  constructor(private _pessoasService: PessoasService) { }

  ngOnInit() {
    this.pessoas = this._pessoasService.getPessoas()
  }

}
