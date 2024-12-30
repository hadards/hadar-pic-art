import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  galleryImages = [
    {
      url: 'assets/images/5.jpg',
      alt: 'AI Portrait',
      title: 'Dreamscape'
    },
    {
      url: 'assets/images/hadar_philips.png',
      alt: 'AI Landscape',
      title: 'Digital Portrait'
    },
    {
      url: 'assets/images/7.jpg',
      alt: 'AI Abstract',
      title: 'Gaming Art'
    }
  ];

}
