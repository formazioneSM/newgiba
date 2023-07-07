import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/shared/shared.module';
import { CommessaService } from 'src/services/commessa.service';

@NgModule({
  declarations: [
    HomeComponent
  ],
  providers: [
    CommessaService
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
