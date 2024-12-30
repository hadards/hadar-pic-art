import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { LandingComponent } from './landing/landing.component';
import { SparkleComponent } from './sparkle/sparkle.component';

@NgModule({
  declarations: [				
    AppComponent,
    LandingComponent,
    ImageCarouselComponent,
    ImageGalleryComponent,
      SparkleComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
