import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appFieldError]',
})
export class FieldErrorDirective implements OnInit {
  @Input('appFieldError') public control!: AbstractControl;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  public ngOnInit(): void {
    this.control.statusChanges.subscribe(() => {
      this.control.markAsTouched();

      if (
        this.control.invalid &&
        (this.control.touched || this.control.dirty) &&
        this.control.errors
      ) {
        this.renderer.addClass(this.el.nativeElement, 'form-input--error');
      } else {
        this.renderer.removeClass(this.el.nativeElement, 'form-input--error');
      }

      if (this.control.valid && !this.control.errors) {
        this.renderer.addClass(this.el.nativeElement, 'form-input--success');
      } else {
        this.renderer.removeClass(this.el.nativeElement, 'form-input--success');
      }
    });
  }
}
