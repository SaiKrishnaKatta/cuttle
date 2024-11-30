import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, FaqComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FaqComponent, FooterComponent]
})
export class SharedModule { }
