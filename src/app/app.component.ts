import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rxjs-learning';
  numberSubject = new Subject<number>();
  numberbehaviorSubject = new BehaviorSubject<number>(10);
  constructor() {
    // subject
    this.numberSubject.subscribe((response) => console.log(response)); 
    this.numberSubject.next(1);
    this.numberSubject.subscribe((response) =>
      console.log(`new subscription`, response)
    );

    // behaviour subject

    this.numberbehaviorSubject.subscribe((response) => console.log(response));
    this.numberbehaviorSubject.next(11);
    this.numberbehaviorSubject.subscribe((response) =>
      console.log(`new behaviour subscription`, response)
    );
  }
}
