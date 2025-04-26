import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  private interval?: ReturnType<typeof setInterval>;
  constructor() {

  }

  ngOnInit() {
    console.log('ON INIT');
    this.interval = setInterval(() => {
      const random = Math.random()

      if (random < 0.5) {
        this.currentStatus = 'online'
      } else if (random < 0.9) {
        this.currentStatus = 'offline'
      } else {
        this.currentStatus = 'unknown'
      }

    }, 5000)
  }

  ngAfterViewInit(): void {
    console.log('AFFTER VIEW INIT');

    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }

  ngOnDestroy(): void {
    console.log('ON DESTROY');
    clearTimeout(this.interval)
  }
}
