import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MouseState } from '../../interfaces/MouseState';

const selectMouseState = createFeatureSelector<MouseState>('mouse');

export const selectTracking = createSelector(
  selectMouseState,
  (state: MouseState) => state.tracking
);

export const selectPosition = createSelector(
  selectMouseState,
  (state: MouseState) => ({ x: state.x, y: state.y })
);

