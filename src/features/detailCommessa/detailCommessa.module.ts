import { DetailCommessaComponent } from './detailCommessa.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailCommessaRoutingModule } from './detailCommessa.routing.module';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [DetailCommessaComponent],
  imports: [
    CommonModule,
    DetailCommessaRoutingModule,
    SharedModule
  ]
})
export class CommessaModule {

}
