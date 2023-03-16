import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Bank{
  isbp: string,
  name: string,
  code: number,
  fullName: string

}


@Injectable({
  providedIn: 'root'
})
export class BanksService {

  constructor(private httpClient: HttpClient) { }


  getBanks(): Observable<Bank[]> {

    return this.httpClient.get<Bank[]>('https://brasilapi.com.br/api/banks/v1');

  }



}
