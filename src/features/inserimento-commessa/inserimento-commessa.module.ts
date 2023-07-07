import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InserimentoCommessaRoutingModule } from './inserimento-commessa-routing.module';
import { InserimentoCommessaComponent } from './inserimento-commessa.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    InserimentoCommessaComponent
  ],
  imports: [
    CommonModule,
    InserimentoCommessaRoutingModule,
    SharedModule
  ]
})
export class InserimentoCommessaModule { }
