import { Directive, ElementRef, OnInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[aubDestacar]'
})
export class DestacarDirective implements OnInit {
  @Input() aubDestacar: string;
  constructor(private element: ElementRef) {
    console.log('Destacar');
    console.dir(element);
  }

  ngOnInit(): void {
   this.element.nativeElement.innerHTML += `<div class="destacar colorDestacar">${this.aubDestacar}</div>`;
  }

  // Decorador de metodos
  @HostListener ('click')
  cambiarColor(): void {
    this.element.nativeElement.children[0]
    .classList.toggle('colorDestacar');
  }

}
