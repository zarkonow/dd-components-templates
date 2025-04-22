import { Component, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    
  }
})
export class ControlComponent {
  //@HostBinding('class') className = 'control';
  @HostListener('click') onClick() {
    console.log('Control clicked!');
  }
label = input.required<string>()
}
