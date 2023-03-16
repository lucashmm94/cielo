import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss']
})
export class FilhoComponent {

  @Input('nome_do_filho') nome;


  constructor(){
    // console.log(this.nome)
  }

  ngOnChanges(changes: SimpleChanges):void {
    // console.log(changes['nome'].previousValue)
  }

  ngOnInit(): void {
    // console.log(this.nome)
  }

}
