import { map } from 'rxjs/internal/operators/map';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, of, filter, first } from 'rxjs';
import { BanksService } from 'src/app/api/banks/banks.service';


interface Bank{
  isbp: string,
  name: string,
  code: number,
  fullName: string

}

@Component({
  selector: 'app-requisicoes',
  templateUrl: './requisicoes.component.html',
  styleUrls: ['./requisicoes.component.scss']
})
export class RequisicoesComponent implements OnInit,OnDestroy {

  observable$: Observable<number>;
  subscription: Subscription;
  listBanks : Bank[]

  constructor(private bankService: BanksService){
    this.bankService.getBanks().pipe(
      first(),
    )
    .subscribe(response => {
      this.listBanks = response;

    });
  }


  ngOnInit(): void {


    this.observable$ = of(1,2,3);
    this.subscription = this.observable$.subscribe(number => {
      console.log(number);
    })



  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
