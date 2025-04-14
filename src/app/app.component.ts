import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ServerStatusComponent } from "./dashboaed/server-status/server-status.component";
import { TrafficComponent } from './dashboaed/traffic/traffic.component';
import { TicketsComponent } from "./dashboaed/tickets/tickets.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ServerStatusComponent, TrafficComponent, TicketsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {


}
