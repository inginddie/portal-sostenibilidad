import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component'; // Asegúrate de importar el componente de registro

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent  // Agrega tu componente de registro aquí
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule  // Importa ReactiveFormsModule para usar formularios reactivos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
