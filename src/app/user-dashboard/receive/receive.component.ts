import { Component } from '@angular/core';

@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  styleUrl: './receive.component.scss'
})
export class ReceiveComponent {
 searchText: string = '';
 items = [
  {image: '../../../assets/img/crypto_icon.png', heading: 'option 1', text: 'Description1'},
  {image: '../../../assets/img/crypto_icon.png', heading: 'option 2', text: 'Description2'},
  {image: '../../../assets/img/crypto_icon.png', heading: 'option 3', text: 'Description3'},
 ];
 filteredItems(){
  return this.items.filter(item => 
    item.heading.toLowerCase().includes(this.searchText.toLowerCase()) || 
    item.text.toLowerCase().includes(this.searchText.toLowerCase())
  );
 }

 selectItem(item : any){
  console.log('Selected', item);
 }
}
