import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavegacaoComponent } from './components/navegacao/navegacao.component';
import { ComunicacaoComponent } from './pages/comunicacao/comunicacao.component';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { DiretivasComponent } from './pages/diretivas/diretivas.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';
import { InterpolacaoComponent } from './pages/interpolacao/interpolacao.component';
import { LifeCycleComponent } from './pages/life-cycle/life-cycle.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { RequisicoesComponent } from './pages/requisicoes/requisicoes.component';
import { FilhoComponent } from './components/filho/filho.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavegacaoComponent,
    InterpolacaoComponent,
    HomeComponent,
    DataBindingComponent,
    LifeCycleComponent,
    PipesComponent,
    DiretivasComponent,
    ComunicacaoComponent,
    FormularioComponent,
    RequisicoesComponent,
    FilhoComponent
  ],
  imports: [
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
