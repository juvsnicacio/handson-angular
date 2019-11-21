import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departamentos-detalhes',
  templateUrl: './departamentos-detalhes.component.html',
  styleUrls: ['./departamentos-detalhes.component.css']
})
export class DepartamentosDetalhesComponent implements OnInit {

  constructor(private _router: ActivatedRoute) { }

  public departamentoId
  ngOnInit() {
    this.departamentoId = (this._router.snapshot.paramMap.get('id'))
  }

}
