import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  itemsPerSlide = 7;
  singleSlideOffset = true;
  noWrap = true;
  slides = [
    { image: 'assets/img/client_logos/sumsub_logo.png' },
    { image: 'assets/img/client_logos/chainalysis_logo.png' },
    { image: 'assets/img/client_logos/circle-logo.png' },
    { image: 'assets/img/client_logos/fire_blocks.png' },
    { image: 'assets/img/client_logos/sumsub_logo.png' },
    { image: 'assets/img/client_logos/chainalysis_logo.png' },
    { image: 'assets/img/client_logos/circle-logo.png' },
    //  {image: 'assets/img/client_logos/ncr.png'},
    //  {image: 'assets/img/client_logos/lattice.png'},
    //  {image: 'assets/img/client_logos/ted.png'}
  ];
  constructor() {
  }
  @HostListener('window:resize', ['$event'])
  ngOnInit() {
    this.updateItemsPerSlide();
  }


  onResize(event: any): void {
    this.updateItemsPerSlide();
  }
  updateItemsPerSlide(): void {
    this.itemsPerSlide = window.innerWidth < 768 ? 1 : 7;
  }
}
