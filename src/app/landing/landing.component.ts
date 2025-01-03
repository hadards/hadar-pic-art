import { Component } from '@angular/core';
import { IImage } from '../models/image.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  showcaseImages: IImage[] = [
    {
      url: 'assets/images/2.png',
      alt: 'AI Generated Artwork 1',
      title: 'Abstract Dreams'
    },
    {
      url: 'assets/images/dashmaries.JPEG',
      alt: 'AI Generated Artwork 2',
      title: 'Funny Cartoons'
    },
    {
      url: 'assets/images/hadar.jpg',
      alt: 'AI Generated Artwork 3',
      title: 'Professional Profile'
    },
    {
      url: 'assets/images/4.jpg',
      alt: 'AI Generated Artwork 4',
      title: 'Future Visions'
    },
    {
      url: 'assets/images/eitan-invite.jpg',
      alt: 'AI Generated Artwork 5',
      title: 'Special Cards'
    },
    {
      url: 'assets/images/Eitan cartoon 4.jpg',
      alt: 'AI Generated Artwork 7',
      title: 'Cartoon Figures'
    },
    {
      url: 'assets/images/1.png',
      alt: 'AI Generated Artwork 6',
      title: 'Future Visions'
    }
  ];
}