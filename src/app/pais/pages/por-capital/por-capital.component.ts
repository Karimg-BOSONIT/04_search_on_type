import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService){}

  buscar(termino: string){
    this.termino = termino;
    //buscarPais() al retornar un observable necesita un subscribe para la respuesta
    this.paisService.buscarCapital(this.termino)
    .subscribe(
      (capital) => {

        this.hayError = false;
        this.paises = capital
    },
      (error) => {

        this.hayError = true;
        this.paises = [];
    })
  }

  sugerencias(termino:string){
    this.hayError = false;

  }
}

