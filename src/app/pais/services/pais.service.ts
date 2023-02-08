import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  constructor(private http: HttpClient) {}

  private apiUrl: string = 'https://restcountries.com/v2';

  buscarPais(termino: string): Observable<Country[]>
  {
    //apiUrl dinamica para buscar terminos
    const url = `${this.apiUrl}/name/${termino}`;

    //retorna un Observable
    return this.http.get<Country[]>(url)
  }

  buscarCapital(termino: string): Observable<Country[]>{
    //apiUrl dinamica para buscar terminos
    const url = `${this.apiUrl}/capital/${termino}`;

    //retorna un Observable
    return this.http.get<Country[]>(url)
  }

  getPaisById(id: string): Observable<Country[]>{
    //apiUrl dinamica para buscar terminos
    const url = `${this.apiUrl}/alpha/${id}`;

    //retorna un Observable
    return this.http.get<Country[]>(url)
  }

}
