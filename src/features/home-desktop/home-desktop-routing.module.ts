import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDesktopComponent } from './home-desktop.component';

const routes: Routes = [{ path: '', component: HomeDesktopComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeDesktopRoutingModule { }
