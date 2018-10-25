import { Directive, ElementRef, Renderer, OnInit } from '@angular/core'

interface Salvattore {
  register_grid: any
}

interface DefWindow extends Window {
  salvattore: Salvattore
}

@Directive({
  selector: '[appSalvattore]'
})
export class SalvattoreDirective implements OnInit {

  constructor(private _elRef: ElementRef, private _renderer: Renderer) { }

  ngOnInit() {
    this._renderer.setElementAttribute(this._elRef.nativeElement, 'data-columns', "true");
    var wrapped = window as DefWindow;

    wrapped.salvattore.register_grid(this._elRef.nativeElement);
  }
}
