import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddCepComponent } from './components/add-cep/add-cep.component';
import { CepDetailsComponent } from './components/cep-details/cep-details.component';
import { CepListilsComponent } from './components/cep-listils/cep-listils.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCepComponent,
    CepDetailsComponent,
    CepListilsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
