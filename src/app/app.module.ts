import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxGoogleAnalyticsModule.forRoot('G-K0YQP5PW38')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
