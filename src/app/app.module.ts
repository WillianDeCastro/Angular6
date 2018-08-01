import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { MinhasRotas } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SobreComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MinhasRotas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
