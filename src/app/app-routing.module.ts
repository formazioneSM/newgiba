import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', loadChildren: () => import('../features/home/home.module').then(m => m.HomeModule) }];
  { path: '', loadChildren: () => import('../features/home-desktop/home-desktop.module').then(m => m.HomeDesktopModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
