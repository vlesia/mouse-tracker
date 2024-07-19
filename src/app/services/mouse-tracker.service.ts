import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  Observable,
  Subscription,
  switchMap,
  throttleTime,
  of,
} from 'rxjs';
import { AppState } from '../store';
import { selectTracking } from '../store/selectors/mouse.selectors';
import { toggleTracking, updatePosition } from '../store/actions/mouse.actions';

@Injectable({
  providedIn: 'root',
})
export class MouseTrackerService implements OnDestroy {
  tracking$: Observable<boolean>;
  private mouseMoveSubscription: Subscription | null = null;

  constructor(private store: Store<AppState>) {
    this.tracking$ = this.store.select(selectTracking);

    this.mouseMoveSubscription = this.tracking$
      .pipe(
        switchMap((tracking) => {
          if (tracking) {
            return fromEvent<MouseEvent>(document, 'mousemove').pipe(
              throttleTime(300),
              map((event) => ({ x: event.clientX, y: event.clientY })),
              distinctUntilChanged(
                (prev, curr) => prev.x === curr.x && prev.y === curr.y
              )
            );
          } else {
            return of(null);
          }
        }),
        filter((position) => position !== null)
      )
      .subscribe((position) => {
        if (position) {
          this.store.dispatch(updatePosition(position));
        }
      });
  }

  toggleTracking() {
    this.store.dispatch(toggleTracking());
  }

  ngOnDestroy() {
    if (this.mouseMoveSubscription) {
      this.mouseMoveSubscription.unsubscribe();
    }
  }
}
