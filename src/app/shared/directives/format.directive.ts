import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFormat]',
  standalone: true,
})
export class FormatDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('document:keyup', ['$event']) onKeyupHandler(
    event: KeyboardEvent
  ) {
    if (event.key === 'Escape') {
      // Do things
    }
    const input = this.elementRef.nativeElement.value?.replace(/ /g, '');
    if (this.elementRef.nativeElement.value.length > 0) {
      if (input.length % 4 == 0) {
        this.elementRef.nativeElement.value += ' ';
      }
    }
  }
}
