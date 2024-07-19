import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MouseTrackerComponent } from './mouse-tracker/mouse-tracker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MouseTrackerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mouse-tracker';
}
