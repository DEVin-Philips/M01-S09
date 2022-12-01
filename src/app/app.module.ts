import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { FormsModule } from '@angular/forms';
import { Slide08Component } from './slide08/slide08.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FeaturesComponent,
    Slide08Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //import para o funcionamento do ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
