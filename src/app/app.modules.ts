import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';  // Asegúrate de que AppComponent esté bien importado
import { IndexComponent } from './index/index.component';  // Importa el componente Index (si es el que estás creando)

@NgModule({
  declarations: [
    AppComponent,    
    
  ],
  imports: [
    BrowserModule // Importa BrowserModule para usar Angular en el navegador
    ,
    IndexComponent
],
  providers: [],
  bootstrap: [AppComponent]  // Define el componente raíz que se va a arrancar
})
export class AppModule { }
