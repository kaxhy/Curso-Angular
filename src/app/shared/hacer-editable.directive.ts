import { Directive, ElementRef, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[aubHacerEditable]'
})
export class HacerEditableDirective implements OnInit, OnChanges {

  @Input() aubHacerEditable: boolean;
  constructor(private element: ElementRef) { 
    console.log('aubHacerEditable');
   }

  ngOnInit(): void {
    this.changeEdit();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.changeEdit();
  }

  changeEdit(){
    this.element.nativeElement
    .setAttribute('contenteditable', this.aubHacerEditable);
  }

}
