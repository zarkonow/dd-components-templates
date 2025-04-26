import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
onSubmit(titleElement: HTMLInputElement) {
  console.log(titleElement);
  
}
}
