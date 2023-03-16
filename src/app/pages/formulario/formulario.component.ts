import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CepService } from 'src/app/api/cep/cep.service';
import { estados } from 'src/app/models/estados';
import { FormValidations } from 'src/app/validators/form-validations';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  formulario: FormGroup;
  listEstados$: Observable<estados[]>;
  cargos: any[];
  newsLetterOp: any[];


  constructor(
    private formBuilder: FormBuilder,
    private cepService: CepService
    ){
    //forma1
    // this.formulario = new FormGroup ({
      // nome: new FormControl('Lucas'),
      // email: new FormControl('lucas.hermont@hotmail.com')
    // })

    this.listEstados$ = this.cepService.getStates();

    this.cargos = this.cepService.getCargos();

    this.newsLetterOp = [
      {valor: 's', desc: 'Sim'},
      {valor: 'n', desc: 'Não'},

    ]

    this.formulario = this.formBuilder.group({
      nome: ['cleitin', Validators.required],
      cargo: [null, Validators.required],
      newsLetter: [null],
      email: [null, [Validators.required, Validators.email]],
      confirmarEmail: [null, FormValidations.equalsTo('email')],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidations.cepValidator]],
        rua: [null, Validators.required],
        numero: [null, Validators.required],
        bairro:[null, Validators.required],
        estado: [null, Validators.required],
      })
    })
  }


  verificaValidTouched(field?: string){
    return !this.formulario.get(field).valid && this.formulario.get(field)?.touched;
  }

  aplicarCssError(field:string ){
    return this.verificaValidTouched(field)? "has-error": "";
  }


  enviar(){
    if(this.formulario.valid){
      alert('Parabens!');
    } else {
     this.verificaValidaçõesFormulario(this.formulario);
    }
  }


  verificaValidaçõesFormulario(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(campo =>{
      const controle = formGroup.get(campo);
      controle.markAsTouched();
      if(controle instanceof FormGroup){
        this.verificaValidaçõesFormulario(controle);
      }
    })
  }

  setarCargo(){
    const cargo = {nome: 'DEV', nivel: 'Pleno', desc: 'Dev PL'};
    this.formulario.get('cargo').setValue(cargo);
    console.log(this.formulario)
  }

  compararCargos(obj1, obj2){
    return obj1 && obj2? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel): obj1===obj2;
  }
}
