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
    console.log(event.key);
    if (event.key === 'Backspace') {
      // Do things
      return;
    }
    this.format();
  }

  @HostListener('paste', ['$event']) onPaste(
    event: ClipboardEvent
  ) {
    this.format();
  }

  format() {
    const input = this.elementRef.nativeElement.value?.replace(/ /g, '');
    if (this.elementRef.nativeElement.value.length > 0) {
      if (input.length % 4 == 0) {
        this.elementRef.nativeElement.value += ' ';
      }
    }
  }
}
