import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MouseCoordinatesComponent } from '../mouse-coordinates/mouse-coordinates.component';
import { Observable } from 'rxjs';
import { selectPosition } from '../store/selectors/mouse.selectors';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { MouseTrackerService } from '../services/mouse-tracker.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-mouse-tracker',
  standalone: true,
  imports: [MouseCoordinatesComponent, CommonModule],
  templateUrl: './mouse-tracker.component.html',
  styleUrl: './mouse-tracker.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MouseTrackerComponent {
  tracking$: Observable<boolean>;
  position$: Observable<{ x: number; y: number }>;

  constructor(
    private mouseTrackerService: MouseTrackerService,
    private store: Store<AppState>
  ) {
    this.tracking$ = this.mouseTrackerService.tracking$;
    this.position$ = this.store.select(selectPosition);
  };

  toggleTracking() {
    this.mouseTrackerService.toggleTracking();
  };
}

