import { createReducer, on } from '@ngrx/store';
import { toggleTracking, updatePosition } from '../actions/mouse.actions';
import { MouseState } from '../../interfaces/MouseState';

export const initialState: MouseState = {
  tracking: false,
  x: 0,
  y: 0,
};

export const mouseReducer = createReducer(
  initialState,
  on(toggleTracking, (state) => ({ ...state, tracking: !state.tracking })),
  on(updatePosition, (state, { x, y }) => ({ ...state, x, y }))
);
