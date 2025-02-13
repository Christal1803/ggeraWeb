import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { CardsComponent } from './pages/cards/cards.component';
import { CardCarousalComponent } from './pages/card-carousal/card-carousal.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SessionComponent } from './pages/session/session.component';
import { PremadeComponent } from './pages/premade/premade.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiAccessService } from './servies/api-access.service';
import { HttpClientModule } from '@angular/common/http';
import { TruncatePipe } from './servies/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    CardsComponent,
    CardCarousalComponent,
    SessionComponent,
    PremadeComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ApiAccessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
