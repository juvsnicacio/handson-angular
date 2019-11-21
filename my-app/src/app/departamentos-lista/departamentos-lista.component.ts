import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../services/departamentos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departamentos-lista',
  templateUrl: './departamentos-lista.component.html',
  styleUrls: ['./departamentos-lista.component.css']
})
export class DepartamentosListaComponent implements OnInit {
  public departamentos = []
  constructor(private _departamentosService: DepartamentosService, private _router: Router) { }

  onSelect(departamento){
    this._router.navigate(['/departamentos', departamento.id])
  }

  ngOnInit() {
    this.departamentos = this._departamentosService.getDepartamentos()
  }

  
}