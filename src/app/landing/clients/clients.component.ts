import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
  itemsPerSlide = 7;
   constructor(){
    this.updateItemsPerSlide();
   }
   ngOnInit(){
    this.updateItemsPerSlide();
   }
   @HostListener('window:resize', ['$event'])
   onResize(event: any): void{
    this.updateItemsPerSlide();
   }
   updateItemsPerSlide():void{
    this.itemsPerSlide = window.innerWidth <768 ? 1 : 7;
   }
  singleSlideOffset = true;
  noWrap = true;
  slides = [
    {image: 'assets/img/client_logos/dell.png'},
    {image: 'assets/img/client_logos/zendesk.png'},
    {image: 'assets/img/client_logos/rakuten.png'},
    {image: 'assets/img/client_logos/pacific.png'},
    {image: 'assets/img/client_logos/ncr.png'},
    {image: 'assets/img/client_logos/lattice.png'},
    {image: 'assets/img/client_logos/ted.png'}
  ];
}
