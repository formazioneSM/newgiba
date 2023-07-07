import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeDesktopRoutingModule } from './home-desktop-routing.module';
import { HomeDesktopComponent } from './home-desktop.component';
import { SharedModule } from 'src/shared/shared.module';
import { CommessaService } from 'src/services/commessa.service';


@NgModule({
  declarations: [
    HomeDesktopComponent
  ],
  providers: [
    CommessaService
  ],
  imports: [
    CommonModule,
    HomeDesktopRoutingModule,
    SharedModule
  ]
})
export class HomeDesktopModule { }
