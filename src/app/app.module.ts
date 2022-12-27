import { HeaderModule } from './header/header.module';
import { ListaModule } from './lista/lista.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ListaModule, HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
