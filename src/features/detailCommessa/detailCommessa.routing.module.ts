import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCommessaComponent } from './detailCommessa.component';

const routes: Routes = [
    { path: '', component: DetailCommessaComponent },
    { path: 'insertCommesse', loadChildren: () => import('../inserimento-commessa/inserimento-commessa.module').then(m => m.InserimentoCommessaModule) }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DetailCommessaRoutingModule { }
