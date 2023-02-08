import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators'


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  @Input() placeholder: string = "";

  //con ngModel(html) al darle a enter obtenemos el termino y lo guardamos,
  //luego lo emitimos al resto de la aplicacion con el EventEmitter

  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  //output para el debounce al buscar
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  //creamos el Observable Subject
  debouncer: Subject<string> = new Subject();

  //se dispara solo una vez cuando se inicia el comp
  ngOnInit(){
    this.debouncer
    //usamos el .pipe(debouncetime(ms)) para decirle el tiempo que debe esperar
    //antes de emitir el subscribe
    .pipe(debounceTime(300))
    //nos subscribimos al debouncer
    .subscribe(valor => {
      this.onDebounce.emit(valor)
    })
  }

  //cada vez que se presione una tecla, llama el .next que esta suscrito al
  //debouncer y le envia el valor
  teclaPresionada(event: any){
    this.debouncer.next(this.termino)
  }


  termino: string = '';

  buscar(){
    this.onEnter.emit(this.termino);
  }

}
