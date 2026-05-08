import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
// Quitar imports de componentes standalone

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapIconsModule.pick(allIcons),
    FormsModule,
    // Solo módulos aquí
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  // Si Welcome y PageNotFound son standalone, no deben ir aquí
})
export class AppModule {}
