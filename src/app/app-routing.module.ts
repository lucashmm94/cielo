import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComunicacaoComponent } from './pages/comunicacao/comunicacao.component';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { DiretivasComponent } from './pages/diretivas/diretivas.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';
import { LifeCycleComponent } from './pages/life-cycle/life-cycle.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { RequisicoesComponent } from './pages/requisicoes/requisicoes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'life-cycle',
    component: LifeCycleComponent
  },
  {
    path: 'data-binding',
    component: DataBindingComponent
  },
  {
    path: 'diretivas',
    component: DiretivasComponent
  },
  {
    path: 'pipe',
    component: PipesComponent
  },
  {
    path: 'comunicacao',
    component: ComunicacaoComponent
  },
  {
    path: 'formulario-reativo',
    component: FormularioComponent
  },
  {
    path: 'requisicoes',
    component: RequisicoesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
