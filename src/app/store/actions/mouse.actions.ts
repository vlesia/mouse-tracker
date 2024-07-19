import { createAction, props } from '@ngrx/store';

export const toggleTracking = createAction('[Mouse] Toggle Tracking');
export const updatePosition = createAction(
  '[Mouse] Update Position',
  props<{ x: number; y: number }>()
);
