import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KebijakanPrivasiTokoQComponent } from './kebijakan-privasi-toko-q/kebijakan-privasi-toko-q.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { 
    path: '', 
    component: PagesComponent,
    children : [
      {
        path : 'kebijakan-privasi-toko-q',
        component : KebijakanPrivasiTokoQComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
