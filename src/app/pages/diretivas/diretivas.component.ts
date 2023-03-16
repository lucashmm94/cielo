import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss'],
})
export class DiretivasComponent implements OnInit {
  isLogged: boolean;

  listTimes;

  constructor() {
    this.listTimes = [
      {
        nome: 'Cruzeiro',
        estado: 'MG',
        quantidadeTitulos: 1,
      },
      {
        nome: 'América',
        estado: 'MG',
        quantidadeTitulos: 2,
      },
      {
        nome: 'Atlético',
        estado: 'MG',
        quantidadeTitulos: 3,
      },
    ];
  }

  ngOnInit(): void {
    this.isLogged = true;
    timer(3000).subscribe((e) => {
      this.isLogged = false;
    });
  }
}
