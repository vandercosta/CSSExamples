import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlassmorphismMenuComponent } from './components/glassmorphism-menu/glassmorphism-menu.component';

@NgModule({
  declarations: [AppComponent, GlassmorphismMenuComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
