import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { estados } from 'src/app/models/estados';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }


  getAdress(number: number){

    return this.http.get(`viacep.com.br/ws/${number}/json/`);
  }

  getCargos(){
    return [
      {nome: 'DEV', nivel: 'Junior', desc: 'Dev Jr'},
      {nome: 'DEV', nivel: 'Pleno', desc: 'Dev PL'},
      {nome: 'DEV', nivel: 'Sênior', desc: 'Dev Sr'},
    ]
  }

  getStates(){
    return this.http.get<estados[]>('../../../assets/estados.json')
    .pipe(
      map((res) => res)
    )
  }
}
