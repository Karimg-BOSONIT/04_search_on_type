import { Component, Input } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];



  constructor(private paisService: PaisService){}

  buscar(termino: string){
    this.termino = termino;
    //buscarPais() al retornar un observable necesita un subscribe para la respuesta
    this.paisService.buscarPais(this.termino)
    .subscribe(
      (pais) => {

        this.hayError = false;
        this.paises = pais
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
