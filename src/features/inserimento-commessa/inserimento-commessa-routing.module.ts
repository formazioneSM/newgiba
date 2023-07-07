import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InserimentoCommessaComponent } from './inserimento-commessa.component';

const routes: Routes = [{ path: '', component: InserimentoCommessaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InserimentoCommessaRoutingModule { }
