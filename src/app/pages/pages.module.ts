import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { KebijakanPrivasiTokoQComponent } from './kebijakan-privasi-toko-q/kebijakan-privasi-toko-q.component';


@NgModule({
  declarations: [
    PagesComponent,
    KebijakanPrivasiTokoQComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
