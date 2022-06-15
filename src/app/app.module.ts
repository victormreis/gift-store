import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { MainComponent } from './main/main.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { OurBestComponent } from './our-best/our-best.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    CarrouselComponent,
    MainComponent,
    GetStartedComponent,
    OurBestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
