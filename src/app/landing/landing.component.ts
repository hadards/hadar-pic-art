import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCarouselComponent } from '../image-carousel/image-carousel.component';
import { ImageGalleryComponent } from '../image-gallery/image-gallery.component';
import { IImage } from '../models/image.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  showcaseImages: IImage[] = [
    {
      url: 'assets/images/Eitan cartoon 4.jpg',
      alt: 'AI Generated Artwork 1',
      title: 'Abstract Dreams'
    },
    {
      url: 'assets/images/2.png',
      alt: 'AI Generated Artwork 3',
      title: 'Future Visions'
    },
    {
      url: 'assets/images/hadar.jpg',
      alt: 'AI Generated Artwork 2',
      title: 'Digital Landscapes'
    },
    {
      url: 'assets/images/4.jpg',
      alt: 'AI Generated Artwork 2',
      title: 'Digital Landscapes'
    },
    {
      url: 'assets/images/eitan-invite.jpg',
      alt: 'AI Generated Artwork 2',
      title: 'Digital Landscapes'
    },
    {
      url: 'assets/images/1.png',
      alt: 'AI Generated Artwork 3',
      title: 'Future Visions'
    }
  ];
}