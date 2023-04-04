import { Directive, ElementRef, Renderer2,  Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appBooleanStyled]'
})
export class BooleanStyledDirective implements OnInit {

@Input('appBooleanStyled') isActive!: boolean;

  constructor(
    private element : ElementRef,
    private renderer : Renderer2
  ) { 
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'font-weight', 'bold')
    this.renderer.setStyle(this.element.nativeElement, 'color', this.isActive ? '#008000' : '#ff0000')
  }
}
