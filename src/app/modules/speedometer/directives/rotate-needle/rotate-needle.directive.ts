import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRotateNeedle]'
})
export class RotateNeedleDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

    setInterval(() => {
      const speed = Math.ceil(Math.random() * 180);
      this.changeRotate(speed);
      this.changeBgColor(speed);
    }, 4000);
  }

  private changeRotate(rotate: number): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'transform',
      `translate3d(-50%, -10%, 0) rotate(${rotate || 0}deg)`
    );
  }

  private changeBgColor(speed: number): void {
    const color: string = speed <= 60
      ? 'rgba(0, 128, 0, 0.2)'
      : speed > 60 && speed < 121
        ? 'rgba(255, 165, 0, 0.2)'
        : speed > 120
          ? 'rgba(255, 0, 0, 0.2)'
          : 'rgba(0, 128, 0, 0.2)';

    this.renderer.setStyle(
      this.elementRef.nativeElement.parentElement,
      'background-color',
      color);
  }
}
