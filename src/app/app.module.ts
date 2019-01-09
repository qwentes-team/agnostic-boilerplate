import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Feature1Component } from './features/feature1/feature1.component';
import { Feature2Component } from './features/feature2/feature2.component';
import { Feature3Component } from './features/feature3/feature3.component';

@NgModule({
  declarations: [
    AppComponent,
    Feature1Component,
    Feature2Component,
    Feature3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
