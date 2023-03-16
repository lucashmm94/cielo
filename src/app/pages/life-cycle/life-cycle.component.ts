import { Observable, of, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, AfterViewChecked, AfterViewInit, ViewChild, ElementRef, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnInit, OnDestroy, AfterViewInit {

  //Static faz com o elemento seja achado em tempo de compilação e nao execução
  // @ViewChild('botao', { static: true }) myInput: ElementRef;

  @ViewChild ('botao') myInput:ElementRef;
  @ViewChild('filho') filho: ElementRef;

  nome: string;


  constructor(){
    this.nome = 'lucas';
    console.log('construtor')
  }

  ngOnChanges():void {
    console.log('onChanges')
  }

  ngOnInit(): void {
    // console.log(this.myInput);
    // this.myInput.nativeElement.focus();
    console.log('onInit')
  }


  ngAfterViewInit(): void {
    console.log('viewInit')
    // console.log(this.myInput)
    // this.myInput.nativeElement.style.backgroundColor  = 'red';
  }

  ngOnDestroy(): void {
   console.log('destroy')
  }


  alterarNome(){
    this.nome == 'lucas'
    ?this.nome = 'renato'
    :this.nome = 'lucas';
  }


}
