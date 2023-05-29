import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentHolaComponent } from './components/component-hola/component-hola.component';
import { CompCiaoComponent } from './components/comp-ciao/comp-ciao.component';
import { CompCiao2Component } from './components/comp-ciao2/comp-ciao2.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentHolaComponent,
    CompCiaoComponent,
    CompCiao2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
