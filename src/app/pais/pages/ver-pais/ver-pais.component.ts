import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap, tap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) {}

  pais!: Country;

  ngOnInit(): void{

    //acceso al observable donde estan los params
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.paisService.getPaisById(id)),
        tap(console.log) //tap muestra en consola lo de switchmap
      )
      .subscribe(resp => this.pais = resp)


    // this.activatedRoute.params
    // .subscribe( ({id}) =>{
    //   console.log(id)

    //   this.paisService.getPaisById(id)
    //   .subscribe(pais => {
    //     console.log(pais)
    //   })
    // })
  }

}
